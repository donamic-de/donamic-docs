<#
.SYNOPSIS
    Friert die aktuelle Dokumentation eines Add-ons als Docusaurus-Version ein.

.DESCRIPTION
    Liest die Version aus der package.json des Add-ons (im i-doit-addons-Repo),
    löst über docs-site/addons.json die zugehörige Docusaurus-Plugin-ID auf und
    erzeugt einen Versions-Snapshot (docs:version:<pluginId> <version>).

    Der Snapshot landet in <pluginId>_versioned_docs/version-<x.y.z>/ und wird
    dadurch zur ausgelieferten Version unter /<id>/. Die weiterhin bearbeitbare
    Arbeitsfassung liegt danach unter /<id>/next/.

    Nach dem Lauf müssen die neuen versioned_*-Ordner committet und gepusht
    werden — der Push löst das FTP-Deploy per GitHub Action aus.

.PARAMETER AddonName
    Verzeichnisname des Add-ons, z. B. donamic_dashboard.

.PARAMETER AddonsRepo
    Pfad zum i-doit-addons-Repository. Default: ..\i-doit-addons relativ zum
    donamic-docs-Repo.

.PARAMETER Version
    Optional: Version explizit vorgeben statt aus package.json zu lesen.

.PARAMETER Build
    Optional: Nach dem Snapshot direkt "npm run build" ausführen.

.EXAMPLE
    powershell -File scripts/Release-Docs.ps1 -AddonName donamic_dashboard

.EXAMPLE
    powershell -File scripts/Release-Docs.ps1 -AddonName donamic_dataquality -Version 1.4.0 -Build
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$AddonName,

    [string]$AddonsRepo,

    [string]$Version,

    [switch]$Build
)

$ErrorActionPreference = 'Stop'

# Wurzelverzeichnisse bestimmen (Skript liegt in donamic-docs/scripts/).
$siteDir = Split-Path -Parent $PSScriptRoot
$devRoot = Split-Path -Parent $siteDir

if (-not $AddonsRepo) {
    $AddonsRepo = Join-Path $devRoot 'i-doit-addons'
}

# 1) Version ermitteln (aus package.json, falls nicht explizit übergeben).
if (-not $Version) {
    $pkgPath = Join-Path $AddonsRepo "addons\$AddonName\package.json"
    if (-not (Test-Path $pkgPath)) {
        Write-Error "package.json nicht gefunden: $pkgPath. Ggf. -AddonsRepo angeben."
        exit 1
    }
    $pkg = Get-Content $pkgPath -Raw | ConvertFrom-Json
    $Version = $pkg.version
    if (-not $Version) {
        Write-Error "Feld 'version' fehlt in $pkgPath."
        exit 1
    }
}

# 2) Plugin-ID über die zentrale Registry auflösen.
$registryPath = Join-Path $siteDir 'addons.json'
$registry = Get-Content $registryPath -Raw | ConvertFrom-Json
$entry = $registry | Where-Object { $_.addonDir -eq $AddonName }
if (-not $entry) {
    Write-Error "Kein Doku-Mapping für '$AddonName' in addons.json. Bekannte addonDir-Werte: $($registry.addonDir -join ', ')"
    exit 1
}
$pluginId = $entry.id

# 3) Duplikat-Schutz: existiert die Version bereits?
$versionsFile = Join-Path $siteDir "${pluginId}_versions.json"
if (Test-Path $versionsFile) {
    $existing = Get-Content $versionsFile -Raw | ConvertFrom-Json
    if ($existing -contains $Version) {
        Write-Error "Doku-Version $Version für '$pluginId' existiert bereits ($versionsFile). Abbruch."
        exit 1
    }
}

# 4) Snapshot erzeugen (Multi-Instanz-Syntax: docs:version:<pluginId>).
Write-Host "Erzeuge Doku-Snapshot: $AddonName ($pluginId) -> Version $Version" -ForegroundColor Cyan
Push-Location $siteDir
try {
    npm run docusaurus -- "docs:version:$pluginId" $Version
    if ($LASTEXITCODE -ne 0) {
        Write-Error "docs:version fehlgeschlagen (Exit-Code $LASTEXITCODE)."
        exit 1
    }

    if ($Build) {
        npm run build
        if ($LASTEXITCODE -ne 0) {
            Write-Error "npm run build fehlgeschlagen (Exit-Code $LASTEXITCODE)."
            exit 1
        }
    }
}
finally {
    Pop-Location
}

Write-Host ""
Write-Host "Fertig. Doku-Version $Version für '$pluginId' eingefroren." -ForegroundColor Green
Write-Host "Nächste Schritte:" -ForegroundColor Yellow
Write-Host "  git add ${pluginId}_versioned_docs ${pluginId}_versioned_sidebars ${pluginId}_versions.json"
Write-Host "  git commit -m `"docs($pluginId): Version $Version veroeffentlicht`""
Write-Host "  git push   # loest das FTP-Deploy aus"

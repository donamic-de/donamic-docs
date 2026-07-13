# donamic-docs

Versionierte Web-Dokumentation für die donamic i-doit Add-ons, veröffentlicht unter
[docs.donamic.de](https://docs.donamic.de). Basiert auf
[Docusaurus](https://docusaurus.io/).

## Aufbau

- Pro Add-on eine eigene Docs-Instanz mit eigener Versionierung. Das Mapping
  Add-on ↔ Plugin-ID steht zentral in [`addons.json`](./addons.json).
- Die aktuelle, noch nicht veröffentlichte Fassung liegt in `docs-<id>/` und wird
  unter `/<id>/next/` (Banner „In Arbeit") ausgeliefert.
- Eingefrorene Versionen liegen in `<id>_versioned_docs/`. Die neueste Version wird
  unter `/<id>/` ausgeliefert, ältere unter `/<id>/<x.y.z>/`.

## Lokale Entwicklung

```bash
npm install
npm run start      # Vorschau mit Hot-Reload
npm run build      # Produktions-Build nach build/
npm run serve      # gebautes Ergebnis lokal testen
```

## Täglicher Workflow

1. Markdown in `docs-<id>/` bearbeiten.
2. Commit + Push auf `main` → GitHub Action baut und lädt per FTP nach
   docs.donamic.de.

## Neue Version veröffentlichen (bei einem Add-on-Release)

Das Skript liest die Version aus der `package.json` des Add-ons im
`i-doit-addons`-Repo und friert die aktuelle Doku als Version ein:

```powershell
.\scripts\Release-Docs.ps1 -AddonName donamic_dashboard
```

Danach die neuen `*_versioned_*`-Dateien committen und pushen (der Push deployt
automatisch). Details siehe Skript-Hilfe (`Get-Help .\scripts\Release-Docs.ps1`).

## Deployment

Bei jedem Push auf `main` baut die GitHub Action
[`deploy.yml`](./.github/workflows/deploy.yml) die Site und lädt sie per FTPS auf
den All-Inkl-Server. Benötigte Repository-Secrets:

| Secret | Inhalt |
|---|---|
| `FTP_SERVER` | FTP-Host (All-Inkl) |
| `FTP_USERNAME` | FTP-Benutzer (idealerweise nur für den docs-Ordner) |
| `FTP_PASSWORD` | FTP-Passwort |
| `FTP_SERVER_DIR` | Zielverzeichnis, auf das die Subdomain zeigt, z. B. `/docs/` |

## PDF-Export (optional)

```bash
npx docs-to-pdf docusaurus \
  --initialDocURLs="https://docs.donamic.de/dashboard/" \
  --paginationSelector="a.pagination-nav__link--next" \
  --contentSelector="article"
```

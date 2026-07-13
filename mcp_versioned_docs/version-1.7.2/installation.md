---
title: Installation
sidebar_position: 2
---

# Installation

## Als i-doit Add-on

1. ZIP-Datei erstellen:

   ```bash
   cd /path/to/i-doit-addons
   ./scripts/Build-Addon.ps1 -AddonName donamic_idoit_mcp
   ```

2. ZIP aus `dist/` im i-doit Admin Center hochladen.
3. Add-on für den Mandanten aktivieren.

## Für die Entwicklung

```bash
cd addons/donamic_idoit_mcp
composer install
```

## Lizenz

Das Add-on ist Teil der donamic-Add-on-Familie und verwendet das gemeinsame **donamic
Lizenz-Center** (Verwaltung → Add-ons → donamic Lizenzen). Ohne gültige Lizenz geben
alle MCP-Tools (außer `idoit_version`) eine entsprechende Fehlermeldung zurück. Die
lokale/Container-Entwicklung kann über `DONAMIC_DEV_MODE=1` die Lizenzprüfung umgehen.

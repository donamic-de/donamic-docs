---
title: Konfiguration
sidebar_position: 3
---

# Konfiguration

## Empfohlen: Admin Center (UI)

Nach der Installation findet sich unter **Verwaltung → Add-ons → MCP Konfiguration**
ein Formular für URL, API-Key, Benutzername und Passwort. Die Werte werden in
`isys_settings` abgelegt und vom MCP-Server (HTTP-Endpunkt und CLI) automatisch geladen.

Beim ersten Aufruf der Konfigurations-Seite sind URL und API-Key bereits vorausgefüllt:

- **URL** kommt aus i-doits eigener Systemeinstellung `system.base.uri` (Mandant →
  „i-doit-Adresse"). Das Feld ist **read-only**; nur wenn das MCP-Add-on auf eine andere
  i-doit-Instanz zeigen soll, kann es per „URL manuell überschreiben"-Checkbox aktiviert
  werden.
- **API-Key** kommt aus `isys_mandator.isys_mandator__apikey` des aktuellen Mandanten
  und ist **nicht änderbar**. Grund: n8n adressiert den Mandanten ausschließlich über
  diesen Schlüssel — manuelles Überschreiben würde versehentlich den falschen Mandanten
  ansprechen. Für Multi-Mandanten-Setups die Konfigurationsseite im jeweiligen Mandanten
  aufrufen.

In den meisten Fällen reicht ein Klick auf **Speichern**.

Der Schalter **Auto-Login aktivieren** sollte gesetzt werden, wenn in i-doit der
Login-Zwang aktiv ist — der MCP-Server baut dann transparent eine Session auf und
erneuert sie bei Ablauf.

## Multi-Mandanten-Setup

i-doit Pro speichert API-Keys **pro Mandant** in der Spalte `isys_mandator__apikey` der
`isys_mandator`-Tabelle. Jeder Mandant hat einen eigenen Schlüssel. Der MCP-Server
unterscheidet die Mandanten **automatisch** anhand des verwendeten Keys — kein separater
Tenant-Header nötig.

| Mandant | API-Key (gekürzt) | Verwendung in n8n |
|---|---|---|
| Tenant 1 — Produktion | `a1b2c3…` | `X-API-Key: a1b2c3…` → MCP arbeitet im Produktions-Mandanten |
| Tenant 2 — Test | `d4e5f6…` | `X-API-Key: d4e5f6…` → MCP arbeitet im Test-Mandanten |
| Tenant 3 — Demo | `g7h8i9…` | `X-API-Key: g7h8i9…` → MCP arbeitet im Demo-Mandanten |

Die URL bleibt für alle Mandanten gleich:
`https://<i-doit-host>/src/classes/modules/donamic_idoit_mcp/mcp.php`

Der `X-Tenant-ID`-Header wird aus Rückwärtskompatibilität noch akzeptiert, bei i-doit
Pro aber durch die Key-zugeordnete Mandanten-ID übersteuert.

## Lade-Reihenfolge

1. **Admin-UI** (`isys_settings`, höchste Priorität bei vollständiger Konfiguration)
2. **Umgebungsvariablen** — überschreiben einzelne Felder (z. B. `IDOIT_PASSWORD`)
3. **Automatische API-Key-Suche** aus der i-doit-Datenbank (Fallback für
   Container-Setups)

## Umgebungsvariablen (extern, optional)

```bash
export IDOIT_URL="https://i-doit.example.com/src/jsonrpc.php"
export IDOIT_API_KEY="your-api-key"
export IDOIT_TENANT_ID="1"      # Optional
export IDOIT_USERNAME="admin"   # Optional, für Session-Auth bei Login-Zwang
export IDOIT_PASSWORD="secret"  # Optional, gepaart mit IDOIT_USERNAME
```

## Verwendung mit Claude Code

Ergänzen Sie in `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "i-doit": {
      "command": "php",
      "args": ["/var/www/i-doit/src/addons/donamic_idoit_mcp/bin/mcp-server", "--tenant=1"]
    }
  }
}
```

### CLI-Optionen

```bash
php bin/mcp-server --help
php bin/mcp-server --tenant=1
```

---
slug: /
title: Übersicht
sidebar_position: 1
---

# i-doit MCP Server

MCP-Server (Model Context Protocol) für die KI-Integration mit i-doit. Er ermöglicht
die Nutzung von Claude Code, n8n und anderen KI-Tools mit i-doit als Datenquelle.

## Funktionsumfang

- **MCP-Tools** für CMDB-Operationen:
  - Objekt-Management (create, read, update, delete, archive, purge, recycle)
  - Kategorie-Daten (read, save, delete, archive, purge, recycle, info)
  - Dialog-/Dropdown-Werte (read, create, update, delete)
  - Reports (list, execute)
  - System-Tools (version, search, constants, login, logout)
- **MCP-Ressourcen** für Objekttypen und Kategorien:
  - `idoit://object-types` — Alle Objekttypen
  - `idoit://categories` — Alle Kategorien
  - `idoit://categories/global` — Globale Kategorien
  - `idoit://categories/specific` — Spezifische Kategorien

Eine vollständige Liste der Tools finden Sie unter [Tools & Ressourcen](./tools.md).

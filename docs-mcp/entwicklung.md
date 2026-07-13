---
title: Entwicklung
sidebar_position: 5
---

# Entwicklung

Dieses Kapitel richtet sich an Entwickler, die den MCP-Server erweitern oder testen.

## Tests ausführen

```bash
composer install
./vendor/bin/phpunit --testsuite=Unit    # Unit-Tests (offline)
./vendor/bin/phpunit --testsuite=smoke   # End-to-End gegen Live-i-doit
```

Der Smoke-Test erwartet `IDOIT_URL`, `IDOIT_API_KEY` (und optional `IDOIT_USERNAME` /
`IDOIT_PASSWORD`) als Umgebungsvariablen und legt während des Laufs ein temporäres
Testobjekt an, das beim Abschluss wieder gepurged wird. Ohne diese Variablen werden alle
Smoke-Tests übersprungen.

## Projektstruktur

```
donamic_idoit_mcp/
├── bin/
│   └── mcp-server          # CLI Entry Point
├── src/
│   ├── Client/
│   │   └── IdoitJsonRpcClient.php
│   ├── Config/
│   │   └── ConfigLoader.php
│   └── Mcp/
│       ├── Server.php
│       ├── Tool/
│       │   ├── ToolRegistry.php
│       │   ├── IdoitTools.php
│       │   ├── CmdbObjectTools.php
│       │   ├── CmdbCategoryTools.php
│       │   ├── CmdbDialogTools.php
│       │   └── CmdbReportsTools.php
│       └── Resource/
│           └── ResourceRegistry.php
├── composer.json
├── package.json
└── README.md
```

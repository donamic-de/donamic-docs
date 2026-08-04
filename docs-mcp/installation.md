---
title: Installation
sidebar_position: 2
---

# Installation

## Add-on installieren

Die Installation erfolgt im **Admin-Center** von i-doit — innerhalb der
i-doit-Oberfläche (Verwaltung) lassen sich Add-ons weder hochladen noch
installieren.

1. Rufen Sie das Admin-Center auf: `https://<ihre-i-doit-URL>/admin/`.
2. Melden Sie sich mit Ihren Admin-Center-Zugangsdaten an (eigenes Konto aus
   der `config.inc.php`, unabhängig vom i-doit-Login).
3. Öffnen Sie den Bereich **Add-ons** und klicken Sie auf
   **Install/update Add-on**.
4. Wählen Sie die ausgelieferte ZIP-Datei des MCP-Servers aus, legen Sie unter
   **Activate for tenant** fest, ob das Add-on für einen einzelnen Mandanten
   oder für **All tenants** installiert wird, und klicken Sie auf
   **Upload and install**.

Nach der Installation stehen die Konfigurationsseite und der MCP-Endpunkt zur
Verfügung. Fahren Sie mit der [Konfiguration](./konfiguration.md) fort.

## Lizenz

Das Add-on ist Teil der donamic-Add-on-Familie und verwendet das gemeinsame **donamic
Lizenz-Center** (Verwaltung → Add-ons → donamic Lizenzen). Ohne gültige Lizenz geben
alle MCP-Tools (außer `idoit_version`) eine entsprechende Fehlermeldung zurück.

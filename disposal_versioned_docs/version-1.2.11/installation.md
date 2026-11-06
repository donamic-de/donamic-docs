---
title: Installation
sidebar_position: 2
---

# Installation

Dieses Kapitel richtet sich an **Administratoren**.

## Systemvoraussetzungen

| Voraussetzung | Wert |
|---|---|
| i-doit Edition | **Pro** |
| E-Mail | Konfigurierter SMTP-Versand in i-doit (für Benachrichtigungen) |
| Browser | Aktuelle Version von Firefox, Chrome, Edge oder Safari |
| Lizenz | Gültige Lizenz für `donamic_disposal` (siehe unten) |

## Add-on installieren

Die Installation erfolgt im **Admin-Center** von i-doit — innerhalb der
i-doit-Oberfläche (Verwaltung) lassen sich Add-ons weder hochladen noch
installieren.

1. Rufen Sie das Admin-Center auf: `https://<ihre-i-doit-URL>/admin/`.
2. Melden Sie sich mit Ihren Admin-Center-Zugangsdaten an (eigenes Konto aus
   der `config.inc.php`, unabhängig vom i-doit-Login).
3. Öffnen Sie den Bereich **Add-ons** und klicken Sie auf
   **Install/update Add-on**.
4. Wählen Sie das ausgelieferte ZIP-Paket aus, legen Sie unter **Activate for
   tenant** fest, ob das Add-on für einen einzelnen Mandanten oder für
   **All tenants** installiert wird, und klicken Sie auf **Upload and install**.

Bei der Installation werden automatisch angelegt: der Menüpunkt **Entsorgung**, die
Objekt-Kategorie **Entsorgung** sowie die beiden neuen CMDB-Status **In Entsorgung**
und **Entsorgt**.

## Lizenzierung

donamic Disposal ist lizenzpflichtig. Ohne gültige Lizenz ist nur die
Lizenzverwaltung erreichbar.

- Ist das Add-on über Ihre i-doit-Lizenz abgedeckt, müssen Sie nichts weiter tun.
- Andernfalls hinterlegen Sie Ihren donamic-Lizenzschlüssel unter
  **Verwaltung → Add-ons → donamic Lizenzen**.

Bei Fragen zur Lizenz wenden Sie sich an
[support@donamic.de](mailto:support@donamic.de).

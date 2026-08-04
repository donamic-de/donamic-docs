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
| i-doit Core-Version | **>= 30** |
| PHP | >= 8.0 (analog zu i-doit) |
| Browser | Aktuelle Version von Firefox, Chrome, Edge oder Safari |
| Lizenz | Gültige donamic-Lizenz für Dashboards Pro |

Das Add-on ist vollständig in i-doit integriert und benötigt keine zusätzliche
Software. Alle Oberflächen werden mit dem Paket ausgeliefert.

## Add-on installieren

Die Installation erfolgt im **Admin-Center** von i-doit. Innerhalb der
i-doit-Oberfläche (Verwaltung) lassen sich Add-ons weder hochladen noch
installieren.

1. Rufen Sie das Admin-Center auf: `https://<ihre-i-doit-URL>/admin/`.
2. Melden Sie sich mit Ihren Admin-Center-Zugangsdaten an (eigenes Konto aus
   der `config.inc.php`, unabhängig vom i-doit-Login).
3. Öffnen Sie den Bereich **Add-ons** und klicken Sie auf
   **Install/update Add-on**.
4. Wählen Sie das ausgelieferte ZIP-Paket `donamic_dashboard-<version>.zip`
   aus, legen Sie unter **Activate for tenant** fest, ob das Add-on für einen
   einzelnen Mandanten oder für **All tenants** installiert wird, und klicken
   Sie auf **Upload and install**.

Das Admin-Center entpackt das Paket und installiert das Add-on für die
gewählten Mandanten; danach ist es automatisch aktiviert. Während der
Installation richtet das Add-on selbstständig alles Nötige ein und stellt die
dreizehn mitgelieferten Widget-Typen bereit.

## Smoke-Test

1. Öffnen Sie im Hauptmenü den Eintrag **Meine Dashboards**.
2. Legen Sie ein neues Dashboard an (Button **+ Neues Dashboard**).
3. Fügen Sie ein **Object Count**-Widget hinzu — das ist das einfachste Widget und
   bestätigt, dass die Oberfläche korrekt funktioniert und Daten anzeigt.

<!-- TODO Screenshot: Smoke-Test mit Object Count Widget (docs-dashboard/img/02-smoketest.png) -->

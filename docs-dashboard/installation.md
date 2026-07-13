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
| Lizenz | Gültige donamic-Lizenz für `donamic_dashboard` |

Das Add-on nutzt React (im Frontend mitgeliefert, keine separate Installation nötig),
Symfony Routing und das i-doit Modul-System. Eine laufende MySQL/MariaDB des
i-doit-Mandanten ist zwingend — eigene Datenbankverbindungen werden **nicht** geöffnet.

## ZIP-Paket hochladen

1. Melden Sie sich in i-doit als Administrator an.
2. Öffnen Sie **Verwaltung → Module → Add-on Uploader**.
3. Laden Sie das ausgelieferte ZIP-Paket `donamic_dashboard-<version>.zip` hoch.
4. i-doit entpackt das Add-on nach `src/classes/modules/donamic_dashboard/`.

## Modul aktivieren

1. Öffnen Sie **Verwaltung → Module-Verwaltung**.
2. Suchen Sie den Eintrag **Dashboards Pro** und klicken Sie auf **Installieren**.
3. Nach erfolgreicher Installation wird das Modul automatisch aktiviert.

Während der Installation werden fünf Datenbank-Tabellen angelegt (siehe
[Anhang](./anhang.md#datenbanktabellen)) sowie die dreizehn Widget-Typen aus
`donamic_dashboard_widget_type` befüllt.

## Smoke-Test

1. Öffnen Sie im Hauptmenü den Eintrag **Meine Dashboards**.
2. Legen Sie ein neues Dashboard an (Button **+ Neues Dashboard**).
3. Fügen Sie ein **Object Count**-Widget hinzu — das ist das einfachste Widget und
   bestätigt, dass die React-Oberfläche sowie die API-Endpunkte erreichbar sind.

<!-- TODO Screenshot: Smoke-Test mit Object Count Widget (docs-dashboard/img/02-smoketest.png) -->

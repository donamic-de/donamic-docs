---
title: Anhang
sidebar_position: 8
---

# Anhang

## Datenbanktabellen {#datenbanktabellen}

Alle Tabellen liegen in der Mandanten-Datenbank.

| Tabelle | Zweck |
|---|---|
| `donamic_dashboard` | Dashboard-Haupttabelle (Titel, Beschreibung, Besitzer, Layout, Zeitstempel, Standard-Flag). |
| `donamic_dashboard_widget` | Widget-Instanzen pro Dashboard — Position, Größe und JSON-Konfiguration. |
| `donamic_dashboard_widget_type` | Widget-Katalog — 13 vordefinierte Typen, wird beim Install/Update synchronisiert. |
| `donamic_dashboard_share` | Freigaben mit Ziel (`person` oder `group`), Zielobjekt-ID und Recht (`view` oder `edit`). |
| `donamic_dashboard_public_link` | Token-basierte öffentliche Links mit optionalem Ablaufdatum und Zugriffszähler. |

Beim Deinstallieren werden die Add-on-Tabellen entfernt. Die Lizenzdaten in den
Mandanten-Einstellungen (`donamic.license.data`) bleiben dabei erhalten, damit ein
i-doit-Update (technisch ein Uninstall/Reinstall) keine erneute Aktivierung
erfordert. Sie können bei Bedarf über die Lizenzverwaltung entfernt werden.

## API-Endpunkte (Überblick) {#api-endpunkte}

Die API liegt unter `…/donamic_dashboard/api/` und folgt REST-Konventionen. Sie ist
primär für die React-Oberfläche gedacht, kann aber auch von externen Integrationen
genutzt werden (mit Session-Cookie).

| Endpunkt | Methoden | Zweck |
|---|---|---|
| `/dashboard` | GET, POST | Liste eigener/geteilter Dashboards, Anlegen. |
| `/dashboard/{id}` | GET, PUT, DELETE | Einzelnes Dashboard lesen, aktualisieren, löschen. |
| `/dashboard/{id}/widget` | GET, POST | Widgets eines Dashboards. |
| `/dashboard/{id}/widget/{wid}` | PUT, DELETE | Einzelnes Widget aktualisieren/entfernen. |
| `/dashboard/{id}/share` | GET, POST, DELETE | Freigaben verwalten. |
| `/dashboard/{id}/public-link` | POST, DELETE | Öffentlichen Link erzeugen/widerrufen. |

Jeder Aufruf durchläuft die Rechte-Prüfung aus dem Kapitel
[Berechtigungen](./berechtigungen.md). 403-Antworten bedeuten fehlende Berechtigung.

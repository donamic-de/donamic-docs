---
title: Widgets
sidebar_position: 2
---

# Widgets

## Widget-Typen im Überblick

| Widget | Mindestgröße | Einsatzzweck |
|---|---|---|
| **Object Count** | 1×1 | Zählt Objekte eines bestimmten Typs. Optional mit Balkendiagramm-Darstellung. |
| **Activity Monitor** | 2×1 | Zeigt neu angelegte oder zuletzt geänderte Objekte innerhalb der letzten N Tage. |
| **CMDB Status Chart** | 2×1 | Balken- oder Tortendiagramm über die CMDB-Status (normal, archiviert, gelöscht) eines Objekttyps. |
| **Quick Stats** | 3×1 | Mehrere farbcodierte KPI-Karten nebeneinander — ideal für Management-Views. |
| **Report** | 2×2 | Bettet einen vorhandenen i-doit-Report tabellarisch ein. |
| **Contract Expiry** | 2×1 | Vertragsablauf-Kalender mit einstellbarem Horizont (z. B. nächste 90 Tage). |
| **Date Field Monitor** | 2×1 | Countdown für beliebige Datumsfelder (Wartungsfristen, Garantie, …) mit Warn-/Kritisch-Schwellwerten. |
| **Notes** | 1×1 | Freitextblock für Notizen oder Hinweise — unterstützt Markdown-ähnliche Formatierung. |
| **Bookmarks** | 1×1 | Sammlung von Weblinks (intern oder extern), optional als Kacheln oder Liste. |
| **Data Quality** | 2×1 | Datenqualitäts-Scorecard auf Basis des `donamic_dataquality`-Add-ons (falls installiert). |
| **IP Utilization** | 2×2 | Auslastungsanalyse von Netzwerken inklusive freier IP-Adressen. |
| **Rack View** | 2×4 | 3D-Rack-Visualisierung für ein bestimmtes Rack (Front- oder Rückansicht). |
| **Legacy Wrapper** | 2×1 | Adapter für das klassische i-doit-Dashboard-Widget — ermöglicht die Einbettung älterer Widgets. |

## Widget konfigurieren

Jedes Widget bringt eine eigene Konfigurations-Maske mit. Beispiele:

- **Object Count** benötigt einen Objekttyp und optional einen Anzeigemodus (`total`
  oder mit Chart).
- **Activity Monitor** lässt den Zeitraum (in Tagen), den Modus (`modified` oder
  `created`) und die maximale Zeilenzahl einstellen.
- **Quick Stats** erlaubt das Anlegen beliebig vieler Karten mit eigenem Label,
  Objekttyp, CMDB-Status und Farbcode (green, blue, red, orange, purple).
- **Rack View** benötigt ein ausgewähltes Rack-Objekt und die gewünschte Ansicht
  (Front/Rückseite).

Die Konfiguration wird pro Widget-Instanz in `donamic_dashboard_widget__config` als
JSON gespeichert.

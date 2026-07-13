---
title: Konfiguration
sidebar_position: 5
---

# Konfiguration

Dieses Kapitel richtet sich an **Administratoren**.

## Als Startseite festlegen

Anwender können Dashboards Pro anstelle der klassischen i-doit-Startseite verwenden
lassen. Die Einstellung liegt in den **Benutzer-Einstellungen** (pro Nutzer):

- Key: `gui.donamic-dashboard.use-as-homepage`
- Werte: `'1'` (aktiv) oder `'0'` (Standard-Dashboard)

Ist die Einstellung aktiv und hat der Nutzer ein Standard-Dashboard markiert, wird
beim Öffnen der i-doit-Startseite das donamic-Dashboard in einem iframe eingebettet.
Der linke Seitenbaum bleibt erhalten, lediglich der Dashboard-Bereich wird ersetzt.

## Command Palette (Strg+K)

Die **Command Palette** ist global in allen Modul-Seiten verfügbar und erlaubt
Schnellsuche über Objekte, Dashboards und Menüeinträge. Sie wird automatisch mit dem
Add-on ausgeliefert — keine Konfiguration nötig. Der Shortcut **Strg+K**
(macOS: **Cmd+K**) öffnet das Overlay.

<!-- TODO Screenshot: Command Palette Overlay (docs-dashboard/img/03-command-palette.png) -->

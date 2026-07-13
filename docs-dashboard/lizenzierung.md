---
title: Lizenzierung
sidebar_position: 3
---

# Lizenzierung

Dieses Kapitel richtet sich an **Administratoren**.

## Lizenzverwaltung öffnen

Die Lizenzverwaltung erreichen Sie über den Menüpunkt **donamic Lizenzen**
(URL: `…/donamic/licenses`). Die Seite listet alle installierten donamic-Add-ons
und zeigt deren aktuellen Lizenzstatus an.

## Lizenzschlüssel hinterlegen

1. Öffnen Sie **donamic Lizenzen**.
2. Suchen Sie die Zeile **donamic Dashboards Pro**.
3. Fügen Sie den erhaltenen Lizenzschlüssel ein und speichern Sie.

Der Schlüssel wird in den **Mandanten-Einstellungen** unter dem Key
`donamic.license.data` als JSON-Objekt abgelegt — nicht in den Add-on-Tabellen.
Dadurch überlebt ein Lizenzschlüssel auch ein vollständiges Uninstall/Reinstall
(wie es bei jedem i-doit-Update passiert) und muss nach einem Patch nicht erneut
aktiviert werden.

## Online- und Offline-Validierung

Das Lizenzsystem prüft in dieser Reihenfolge:

1. **Lokale Lizenzdaten** mit `expires_at`-Prüfung (schnellster Pfad).
2. **Offline JWT**: RS256-signiertes Token mit öffentlichem Schlüssel im Add-on,
   funktioniert ohne Internet.
3. **Online-Validierung** gegen `i-doit-trainings.de/api/addon-license-validate`
   (bzw. `donamic.de` als Fallback).

Ohne gültige Lizenz wirft das Add-on beim Öffnen eine `isys_exception_licence`, die
dem Nutzer einen Link zur Lizenzverwaltung anbietet. Alle API-Endpunkte bleiben
gesperrt, die Datenbanktabellen existieren aber weiter — eine Lizenzaktivierung
reicht, um das Add-on wieder voll nutzbar zu machen.

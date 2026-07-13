---
title: Lizenzierung
sidebar_position: 3
---

# Lizenzierung

Dieses Kapitel richtet sich an **Administratoren**.

## Lizenzverwaltung öffnen

Die Lizenzverwaltung erreichen Sie über den Menüpunkt **donamic Lizenzen**. Sie listet
alle installierten donamic-Add-ons und zeigt deren aktuellen Lizenzstatus an.

## Lizenzschlüssel hinterlegen

1. Öffnen Sie **donamic Lizenzen**.
2. Suchen Sie die Zeile **donamic Data Quality**.
3. Fügen Sie den erhaltenen Lizenzschlüssel ein und speichern Sie.

Der Schlüssel wird in den **Mandanten-Einstellungen** unter dem Key
`donamic.license.data` als JSON-Objekt abgelegt — nicht in den Add-on-Tabellen. Er
überlebt damit ein vollständiges Uninstall/Reinstall (wie bei jedem i-doit-Update) und
muss nach einem Patch nicht erneut aktiviert werden.

## Online- und Offline-Validierung

Das Lizenzsystem prüft in dieser Reihenfolge:

1. **Lokale Lizenzdaten** mit `expires_at`-Prüfung.
2. **Offline JWT**: RS256-signiertes Token mit öffentlichem Schlüssel im Add-on —
   funktioniert ohne Internet.
3. **Online-Validierung** gegen `i-doit-trainings.de/api/addon-license-validate`
   (Fallback `donamic.de`).

Ohne gültige Lizenz wirft das Add-on beim Öffnen eine `isys_exception_licence`. Alle
API-Endpunkte bleiben gesperrt; die Datenbank-Tabellen bleiben erhalten, sodass nach
erneuter Aktivierung der Bestand unverändert weiter genutzt werden kann.

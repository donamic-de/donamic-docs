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

Der Schlüssel wird in den **Mandanten-Einstellungen** von i-doit hinterlegt — getrennt
von den Auswertungsdaten des Add-ons. Dadurch überlebt er ein i-doit-Update oder eine
Neuinstallation des Add-ons und muss nach einem Patch nicht erneut aktiviert werden.

## Online- und Offline-Betrieb

Die Lizenzprüfung funktioniert sowohl mit als auch ohne Internetverbindung: Ein im
Add-on hinterlegter Prüfmechanismus erlaubt den Betrieb auch in abgeschotteten Umgebungen
ohne Online-Zugriff. Besteht eine Internetverbindung, wird der Schlüssel zusätzlich
gegen den donamic-Lizenzserver abgeglichen.

Ohne gültige Lizenz zeigt das Add-on beim Öffnen eine Fehlermeldung an und bleibt
gesperrt. Ihre bereits erfassten Regeln und Auswertungsdaten bleiben dabei erhalten und
stehen nach erneuter Aktivierung unverändert zur Verfügung.

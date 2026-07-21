---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Dashboards Pro in verständlicher Form zusammen.

## [1.1.0] — 10.07.2026

### Verbessert
- Öffentlich geteilte Dashboards verwenden jetzt für alle Widget-Typen dieselbe Berechnungslogik wie die interne Ansicht. Damit zeigen geteilte Dashboards durchgängig dieselben Zahlen wie das Dashboard im i-doit — Abweichungen zwischen öffentlicher und interner Ansicht gehören der Vergangenheit an.
- Deutlich schnellerer Aufbau öffentlicher Dashboards: Widgets laden spürbar zügiger.

### Behoben
- Links und Symbole in öffentlich geteilten Dashboards führen jetzt zuverlässig zu den richtigen Zielen in i-doit (zuvor konnten fehlerhafte Adressen entstehen).
- Fehlermeldungen in geteilten Dashboards werden allgemein verständlich angezeigt; technische Details bleiben dem Protokoll vorbehalten.

## [1.0.16] — 08.07.2026

### Behoben
- Datumsfeld-Monitor: Öffentlich geteilte Dashboards zeigen jetzt dieselben Kennzahlen und Zeiträume wie die interne Ansicht. Zuvor konnten Kennzahlen zu niedrig ausfallen und überfällige Einträge unvollständig dargestellt werden. Monats- und Jahreszeiträume werden nun kalendergenau berechnet.
- Report-Widget: In geteilten Dashboards werden jetzt die korrekt aufbereiteten Werte angezeigt (z. B. eine Anzahl) statt technischer Rohwerte.
- Report-Widget: Reports mit Kommentaren in der zugrunde liegenden Abfrage funktionieren jetzt zuverlässig.
- Gemischte Sprachausgaben („6 days overdue" neben „56 Tage") im Datumsfeld-Monitor und im Vertragsablauf-Widget wurden bereinigt; weitere vereinzelte englische Texte wurden übersetzt.

## [1.0.15] — 24.06.2026

### Behoben
- Aktivitätsmonitor: Objekt-Links führen jetzt zum tatsächlich geänderten Objekt statt zur ändernden Person. Einträge ohne Objektbezug (z. B. Anmeldungen) erhalten korrekterweise keinen Link mehr.
- Aktivitätsmonitor: Der Filter nach Objekttyp arbeitet jetzt korrekt und liefert auch in den Diagrammen stimmige Zählungen.

## [1.0.14] — 12.05.2026

### Neu
- Beim Anlegen von Objekten wird jetzt geprüft, ob der Benutzer die nötige Berechtigung für den jeweiligen Objekttyp besitzt.

### Sicherheit
- Zusätzlicher Schutz öffentlich geteilter Dashboards gegen unerwünschte Skript-Einschleusung (Defense-in-Depth).
- Korrekte HTTP-Statusmeldungen bei Fehlern und fehlenden Seiten.

## [1.0.13] — 06.05.2026

### Neu
- Der Zahlenfeld-Monitor steht nun auch in öffentlich geteilten Dashboards zur Verfügung — mit allen drei Anzeigemodi (Kennzahl, Top-Liste, Diagramm).
- Datumsfeld-Monitor: Der flexible Zeithorizont (Tage, Wochen, Monate, Jahre) ist jetzt auch in der öffentlichen Ansicht verfügbar.

### Behoben
- Datumsfelder aus der Kategorie „Status Planung" (z. B. Start- und Enddatum) können jetzt zuverlässig ausgewertet werden.

## Frühere Versionen

- **1.0.5 bis 1.0.12:** Einführung des Zahlenfeld-Monitors (aggregiert numerische Feldwerte als Kennzahl, Top-Liste oder Diagramm), Diagramm-Darstellung für Report-Widgets, erweiterte Trend-Auswertung und Drill-Down im Aktivitätsmonitor sowie zahlreiche Verbesserungen und Fehlerbehebungen rund um öffentlich geteilte Dashboards, Datumsformate und Sprachausgaben.

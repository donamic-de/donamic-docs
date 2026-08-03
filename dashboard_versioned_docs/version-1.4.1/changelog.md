---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Dashboards Pro in verständlicher Form zusammen.

## [1.4.1] — 23.07.2026

### Behoben
- Das Schließen-Kreuz (×) in den Objektlisten- und Logbuch-Fenstern sitzt jetzt sichtbar oben rechts im Fenster (zuvor war es außerhalb des sichtbaren Bereichs positioniert — Schließen war nur per Escape oder Klick daneben möglich).

### Dokumentation
- Neue Handbuch-Seite „Reports auf öffentlichen Dashboards": wann ein Report öffentlich funktioniert, wie Zeilen-Limit und Kürzung wirken, welche Filter- und Drilldown-Möglichkeiten es gibt.

## [1.4.0] — 22.07.2026

### Neu
- **Klickbare Diagramme auch auf öffentlichen Dashboards:** Ein Klick auf ein Segment (z. B. im CMDB-Status- oder Objektzähler-Diagramm) öffnet jetzt auch dort die Liste der dahinterliegenden Objekte mit Typ und Status — inklusive Suche und Blättern.
- **Präziser filtern:** Spalten mit vielen wiederkehrenden Werten (z. B. Objekttyp mit über 100 Typen) erhalten jetzt ein durchsuchbares Auswahl-Dropdown mit Mehrfachauswahl. Im Textfilter findet `=Wert` exakte Treffer — `=Server` ohne „Virtueller Server".

### Behoben
- Das IP-Auslastungs-Widget wird auf öffentlichen Dashboards jetzt vollständig auf Deutsch angezeigt.

## [1.3.0] — 22.07.2026

### Neu
- **Einheitliche Filterzeile auf öffentlichen Dashboards:** Report-Tabellen bieten dort jetzt dieselben intelligenten Filter wie intern — Auswahl-Dropdown für kategoriale Spalten, Von/Bis-Datumsauswahl für Datumsspalten, Textfilter für alle übrigen. Datumsspalten sortieren öffentlich jetzt chronologisch.

## [1.2.0 – 1.2.3] — 22.07.2026

### Neu
- **Diagramm-Drilldown im Report-Widget:** In den Ansichten „Chart + Tabelle" filtert ein Klick auf ein Diagramm-Segment die Tabelle auf die zugehörigen Zeilen; ein erneuter Klick hebt den Filter auf. Funktioniert intern und öffentlich, auch mit „Filter speichern".
- **„Report bearbeiten"-Sprung:** Aus dem Widget-Optionsmenü und der Widget-Konfiguration gelangen Sie jetzt direkt in den Report-Editor (SQL-Editor bzw. Abfrage-Editor wird automatisch gewählt).
- **Kürzungs-Hinweis:** Liefert ein Report mehr Zeilen als das eingestellte Limit, zeigt der Tabellen-Fuß jetzt „⚠ Ergebnis gekürzt" mit Erklärung.

### Behoben
- Öffentliche Dashboards zeigen Widget-Texte jetzt durchgängig auf Deutsch (zuvor konnten einzelne Beschriftungen englisch erscheinen).
- Datumsfeld-Monitor: Die Feldauswahl zeigt jetzt die echten i-doit-Attributnamen („Vertrag > Vertragsende" statt „Vertrag > End") — einheitlich in einer Sprache.
- Erweiterte Abfrage-Editor-Optionen (z. B. „Beziehungsobjekte mit ausgeben") gelten jetzt auch auf öffentlichen Dashboards — zuvor konnten öffentliche Reports dadurch deutlich mehr Zeilen enthalten als intern.
- Reports mit eigenem LIMIT oder Kommentaren am Abfrage-Ende funktionieren jetzt in allen Konstellationen (Widget, Spaltenauswahl, Speichern).

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

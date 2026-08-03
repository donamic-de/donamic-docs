---
title: Reports auf öffentlichen Dashboards
sidebar_position: 4
---

# Reports auf öffentlichen Dashboards

Report-Widgets auf öffentlich geteilten Dashboards verwenden dieselbe i-doit-Report-Engine
wie die interne Ansicht — Werte, Spalten und Übersetzungen sind identisch. Diese Seite
fasst zusammen, unter welchen Bedingungen ein Report öffentlich funktioniert und wo die
Grenzen liegen.

## Wann wird ein Report öffentlich ausgeführt?

- **Nur SELECT-Abfragen.** Schreibende Befehle (INSERT, UPDATE, DELETE, …) und
  Mehrfach-Statements (mehrere durch `;` getrennte Befehle) werden abgelehnt. In diesen
  Fällen erscheint die Meldung *„Nur SELECT-Abfragen sind erlaubt."*
- **SQL-Kommentare sind erlaubt** — führende Kommentarblöcke (`/* … */`),
  Zeilenkommentare (`-- …`, `# …`) und Kommentare mitten in der Abfrage werden vor der
  Ausführung sicher entfernt. Auch Kommentarzeichen innerhalb von Textwerten bleiben
  unangetastet.
- **Ein eigenes LIMIT des Reports wird respektiert** — das Widget hängt dann kein
  zusätzliches Zeilen-Limit an.

## Zeilen-Limit und Kürzung

Das Widget lädt maximal so viele Zeilen, wie in der Widget-Konfiguration unter
**Maximale Zeilen** (`max_rows`) eingestellt ist. Liefert der Report mehr Zeilen,
wird das Ergebnis gekürzt und der Tabellen-Fuß zeigt **„⚠ Ergebnis gekürzt"** —
intern wie öffentlich.

:::warning Filter wirken nur auf geladene Zeilen
Bei einem gekürzten Ergebnis beziehen sich Filter, Sortierung und Diagramm nur auf
das geladene Zeilen-Fenster. Welche Zeilen im Fenster liegen, hängt vom Datenbestand
ab und kann sich verschieben, wenn neue Objekte hinzukommen.
:::

**Empfehlungen:**

- Report per Bedingung eingrenzen (z. B. Beziehungsobjekte ausschließen).
- Dem Report ein `ORDER BY` geben — damit bleibt das Fenster deterministisch.
- **Maximale Zeilen** realistisch wählen; sehr große Werte verlängern die Ladezeit
  des Dashboards spürbar.

## Erweiterte Abfrage-Editor-Optionen

Die erweiterten Optionen des Abfrage-Editors (z. B. **„Beziehungsobjekte mit
ausgeben: Ja/Nein"**) gelten auf dem öffentlichen Dashboard identisch zur internen
Ansicht.

## Filter und Drilldown

- **Gespeicherte Filter** („Aktuellen Filter speichern") wirken auf dem öffentlichen
  Dashboard identisch — auch Mehrfachauswahl- und Datumsbereich-Filter.
- Die **Filterzeile** bietet je Spaltentyp das passende Steuerelement: ein
  durchsuchbares Dropdown mit Mehrfachauswahl für kategoriale Spalten (z. B.
  Objekttyp, CMDB-Status), eine Von/Bis-Datumsauswahl für Datumsspalten und einen
  Textfilter für alle übrigen Spalten.

:::tip Exakt filtern
Im Textfilter filtert `=Wert` exakt statt „enthält" — `=Server` findet also nur
„Server", nicht „Virtueller Server".
:::

- **Diagramm-Drilldown:** Ein Klick auf ein Diagramm-Segment filtert die Tabelle auf
  die zugehörigen Zeilen — verfügbar in den Ansichtsmodi **„Chart + Tabelle"**
  (nebeneinander oder übereinander). Im Modus **„Nur Chart"** ist das Diagramm
  bewusst nicht klickbar, da die Einzelzeilen dort nicht mitgeladen werden.
- **Objektlisten:** Bei Zähler- und Status-Diagrammen (z. B. Objektzähler,
  CMDB-Status-Diagramm) öffnet der Klick auf ein Segment auch öffentlich die
  Objektliste. Objekt-Links führen von dort zur i-doit-Anmeldung.

## Nur intern verfügbar

Der Sprung **„Report bearbeiten"** (im Widget-Optionsmenü und in der
Widget-Konfiguration) erscheint ausschließlich in der internen Ansicht — auf
öffentlichen Dashboards werden diese Informationen serverseitig entfernt.

## Für Administratoren: Diagnose

Öffentliche Report-Widgets laufen standardmäßig über die echte i-doit-Report-Engine.
Nur wenn der Framework-Start auf dem Server fehlschlägt, greift automatisch ein
vereinfachter Ausweich-Modus, damit das Dashboard nie komplett ausfällt — dann mit
Einschränkungen (berechnete Spalten zeigen Rohwerte, erweiterte Editor-Optionen
gelten nicht, Platzhalter werden durch Standardwerte ersetzt).

Welcher Modus aktiv ist, zeigt der HTTP-Response-Header **`X-Donamic-Data-Path`**
jeder Widget-Antwort (sichtbar im Browser-Network-Tab), z. B. `framework; boot=ok`
oder `raw-fallback; boot=failed`. Details stehen im Server-Error-Log unter dem
Präfix `[donamic_dashboard]`.

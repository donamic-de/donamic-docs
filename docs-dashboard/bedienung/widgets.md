---
title: Widgets
sidebar_position: 2
---

# Widgets

## Widget-Typen im Überblick

| Widget | Mindestgröße | Einsatzzweck |
|---|---|---|
| **Objekt-Zähler** | 1×1 | Zählt Objekte — als Gesamtzahl, Aufschlüsselung, Diagramm oder Trend-Verlauf. |
| **Aktivitätsmonitor** | 2×1 | Zeigt neu angelegte/geänderte Objekte oder Logbuch-Einträge als Liste oder Diagramm. |
| **CMDB-Status Diagramm** | 2×1 | Balken-, Säulen- oder Donut-Diagramm über die CMDB-Status eines Objekttyps. |
| **Quick Stats** | 3×1 | 2–4 farbcodierte KPI-Karten nebeneinander — ideal für Management-Views. |
| **Report** | 2×2 | Bettet einen gespeicherten i-doit-Report als Tabelle und/oder Diagramm ein. |
| **Vertrags-/Garantie-Ablauf** | 2×1 | Ablaufende Verträge und Garantien mit Ampelfarben und einstellbarem Horizont. |
| **Datumsfeld-Monitor** | 2×1 | Countdown für beliebige Datumsfelder (Wartung, Garantie, Prüfungen, …) mit Schwellwerten. |
| **Zahlenfeld-Monitor** | 1×1 | Aggregiert Zahlenwerte (Summe, Durchschnitt, Min, Max) — z. B. Gesamt-RAM aller Server. |
| **Notizen** | 1×1 | Freitextblock für Hinweise — mit Formatierung und Links. |
| **Lesezeichen** | 1×1 | Quick-Links zu URLs und i-doit-Objekten, als Liste oder Kacheln. |
| **Datenqualität** | 2×1 | Datenqualitäts-Scorecard (benötigt das Add-on donamic Data Quality). |
| **Entsorgung** | 2×1 | Laufende und abgeschlossene Entsorgungsvorgänge (benötigt das Add-on donamic Disposal). |
| **IP-Auslastung** | 2×2 | Auslastungsanalyse von Netzwerken inklusive freier IP-Adressen. |
| **Rackansicht** | 2×4 | Rack-Visualisierung mit eingebauten Geräten (Front-/Rückansicht). |
| **Standort-Auswertung** | 2×3 | Zählt oder listet Objekte unterhalb eines Standorts (Gebäude, Raum, Rack …) über alle Ebenen. |
| **Lizenz-Übersicht** | 2×2 | Auslastung der i-doit-Lizenz, Add-on-Lizenzen und Wachstumsprognose. |
| **Angemeldete Benutzer** | 2×2 | Aktive Sitzungen und letzte Anmeldungen — optional anonymisiert. |
| **CSV-Datei** | 2×2 | Zeigt eine CSV-Datei als Tabelle oder Diagramm (Datenquelle „CSV"). |
| **Externe Datenbank** | 2×2 | SELECT-Abfrage auf eine externe MySQL/MariaDB- oder PostgreSQL-Datenbank als Tabelle, Diagramm oder KPI. |
| **Legacy Widget** | 2×1 | Adapter für klassische i-doit-Dashboard-Widgets. |

Jedes Widget bringt eine eigene Konfigurations-Maske mit (Optionsmenü → **Konfigurieren**).
Die folgenden Abschnitte beschreiben alle Einstellungen je Widget-Typ. Felder mit dem
Hinweis *„nur bei …"* erscheinen erst, wenn die genannte Einstellung gewählt ist.

**Wiederkehrende Felder:**

- **Objekt-Status**: Mehrfachauswahl der Datensatz-Status (Normal, Archiviert, Gelöscht).
  Standard: nur „Normal".
- **Objekttyp**: Mehrfachauswahl von Objekttypen; keine Auswahl = alle Typen
  (Beziehungsobjekte werden automatisch ausgeschlossen).
- **Attribut-Filter**: Bis zu zehn zusätzliche Bedingungen auf beliebige Kategorie-Attribute
  (Objekt-Zähler, Quick Stats, CMDB-Status Diagramm, Vertrags-/Garantie-Ablauf,
  Standort-Auswertung, Entsorgung) — siehe [Attribut-Filter](#attribut-filter).

---

## Objekt-Zähler

Zeigt die Anzahl von Objekten nach Typ oder Status.

| Feld | Beschreibung | Standard |
|---|---|---|
| Anzeigemodus | Gesamtanzahl, Nach Objekttyp, Nach Typgruppe, Nach CMDB-Status oder Trend-Verlauf | Gesamtanzahl |
| Objekttyp | Einschränkung auf bestimmte Objekttypen — *nur bei Gesamtanzahl, Nach CMDB-Status oder Trend-Verlauf* | alle |
| Trend-Zeitraum | 7/14/30/90/180 Tage oder 1 Jahr — *nur bei Trend-Verlauf* | 30 Tage |
| Als Diagramm anzeigen | Aufschlüsselung grafisch statt als Liste — *nur bei Aufschlüsselungs-Modi* | aus |
| Diagrammtyp | Balken-, Säulen- oder Donut-Diagramm — *nur bei aktiviertem Diagramm* | Balken |
| Balkenstil | Einfarbig oder Gestreift — *nur bei Balken/Säule* | Einfarbig |
| Limit | Maximale Einträge der Aufschlüsselung (0–200) | 10 |
| Leere Status anzeigen | Auch Status ohne Objekte auflisten — *nur bei Nach CMDB-Status* | aus |
| Kartenfarbe | 12 Vorgabefarben oder eigener Hex-Wert — *nur bei Gesamtzahl* | keine |
| Trend anzeigen | Vergleichszeitraum auf der Kachel (7/14/21/28 Tage, Dieser Monat) — *nur bei Gesamtanzahl* | aus |
| Objekt-Status | Siehe oben | Normal |

Ein Klick auf Aufschlüsselungs- und Diagramm-Einträge öffnet die dahinterliegende Objektliste.

## Aktivitätsmonitor

Objekt-Änderungen oder Logbuch-Einträge als Liste oder Diagramm.

| Feld | Beschreibung | Standard |
|---|---|---|
| Datenquelle | Erstellt & Geändert, Erstellte Objekte, Geänderte Objekte oder Logbuch (Detail-Events) | Erstellt & Geändert |
| Anzeigemodus | Liste oder Diagramm | Liste |
| Objekttyp | Einschränkung auf Objekttypen | alle |
| Trend-Zeitraum + Einheit | Länge des Diagramm-Zeitraums (Tage/Wochen/Monate/Jahre) — *nur bei Diagramm* | 30 Tage |
| Aggregation | Automatisch, Pro Tag, Pro Woche oder Pro Monat („Automatisch" wählt passend zur Zeitraumlänge) — *nur bei Diagramm* | Automatisch |
| Balkenstil | Flächen- oder Säulendiagramm — *nur bei Diagramm* | Fläche |
| Tage | Nur Einträge der letzten N Tage (0 = ohne Grenze) — *nur bei Liste* | 7 |
| Limit | Maximale Listeneinträge (0–200) — *nur bei Liste* | 10 |
| Objekttyp/Datum anzeigen | Zusatzspalten je Listeneintrag — *nur bei Liste* | an |
| Alarmstufe / Quelle | Filter auf Logbuch-Alarmstufe bzw. -Quelle — *nur bei Datenquelle Logbuch* | Alle |
| Objekt-Status | Siehe oben — *nur bei Objekt-Datenquellen* | Normal |

## CMDB-Status Diagramm

Visualisiert Objekte nach CMDB-Status.

| Feld | Beschreibung | Standard |
|---|---|---|
| Objekttyp | Einschränkung auf bestimmte Objekttypen | alle |
| Diagrammtyp | Balken-, Säulen- oder Donut-Diagramm | Balken |
| Balkenstil | Einfarbig oder Gestreift — *nur bei Balken/Säule* | Einfarbig |
| Donut-Mitte | Gesamtanzahl oder Prozent des größten Status — *nur bei Donut* | Gesamtanzahl |
| Legende anzeigen | Legende neben dem Donut — *nur bei Donut* | an |
| Limit | Maximale Anzahl dargestellter Status (1–50) | 10 |
| Leere Status anzeigen | Auch Status ohne Objekte darstellen | aus |
| Objekt-Status | Siehe oben | Normal |

Ein Klick auf ein Segment öffnet die Objektliste des Status — auch auf öffentlichen Dashboards.

## Quick Stats

2–4 KPI-Karten in einer Reihe mit farbigem Hintergrund.

| Feld | Beschreibung | Standard |
|---|---|---|
| Karten | 2–4 Karten, per „Nach oben/unten" sortierbar | 2 Karten |
| Objekt-Status | Gilt für alle Karten | Normal |

Je Karte einstellbar:

| Feld | Beschreibung | Standard |
|---|---|---|
| Bezeichnung | Beschriftung der Karte (leer = „Objekte") | leer |
| Objekttyp | Gezählter Objekttyp; erzeugt zugleich den Klick-Link zur Objektliste | alle |
| CMDB-Status | Zusätzlicher Status-Filter | keiner |
| Kartenfarbe | 12 Vorgabefarben oder eigener Hex-Wert | Grün/Blau |
| Trend | Vergleich mit früherem Zeitpunkt (7/14/21/28 Tage, Dieser Monat) | aus |

## Report

Zeigt einen gespeicherten i-doit-Report als Tabelle und/oder Diagramm.

| Feld | Beschreibung | Standard |
|---|---|---|
| Report auswählen | Der gespeicherte Report (Pflichtfeld). Darunter erscheint der Direktlink **„Report bearbeiten"** in den Report-Editor | — |
| Zeilen pro Seite | Blätterung der Tabelle (5–100) | 25 |
| Maximale Zeilen | Obergrenze der geladenen Datensätze (10–1000). Bei Überschreitung erscheint **„⚠ Ergebnis gekürzt"** — Filter, Sortierung und Diagramm wirken nur auf die geladenen Zeilen | 100 |
| Als Diagramm anzeigen | Aktiviert die Diagramm-Darstellung | aus |
| Anzeigemodus | Nur Diagramm, Diagramm + Tabelle (nebeneinander) oder Diagramm über Tabelle — *nur bei Diagramm* | Nur Diagramm |
| Diagrammtyp / Balkenstil | Balken/Säule/Donut, Einfarbig/Gestreift — *nur bei Diagramm* | Balken |
| Label-Spalte | Report-Spalte für die Segment-Beschriftung; gleiche Werte werden gruppiert — *nur bei Diagramm* | — |
| Aggregation | Anzahl (COUNT), Summe (SUM), Durchschnitt (AVG) oder Keine (für bereits aggregierte Reports) — *nur bei Diagramm* | Anzahl |
| Wert-Spalte | Zahlenspalte für Summe/Durchschnitt — *nur bei entsprechender Aggregation* | — |
| Max. Diagramm-Einträge | Einträge im Diagramm (3–50); überzählige werden zu „Andere" zusammengefasst | 10 |

Zusätzlich über die Widget-Oberfläche gespeichert: der **Spaltenfilter** („Aktuellen Filter
speichern") und das **Größenverhältnis** Diagramm/Tabelle (Trennlinie ziehen). In den
Kombi-Ansichten filtert ein **Klick auf ein Diagramm-Segment** die Tabelle auf die
zugehörigen Zeilen (erneuter Klick hebt auf). Die Filterzeile bietet je Spaltentyp
durchsuchbare Dropdowns, Von/Bis-Datumsauswahl oder Textfilter (`=Wert` filtert exakt).

:::info Öffentliche Dashboards
Was für Report-Widgets auf öffentlich geteilten Dashboards gilt, beschreibt
[Reports auf öffentlichen Dashboards](./reports-oeffentliches-dashboard.md).
:::

## Vertrags-/Garantie-Ablauf

Ablaufende Verträge und Garantien mit Ampelfarben (Kritisch/Warnung/In Ordnung).

| Feld | Beschreibung | Standard |
|---|---|---|
| Anzeigemodus | Liste, Zusammenfassung (KPI-Karten) oder Diagramm nach Monat | Liste |
| Datenquelle | Verträge, Garantien oder Beides | Verträge |
| Zeithorizont + Einheit | Wie weit in die Zukunft geschaut wird (Tage/Wochen/Monate/Jahre) | 90 Tage |
| Vertragsstatus | Filter auf den Vertragsstatus — *nur bei Datenquelle Verträge/Beides* | Alle |
| Limit | Maximale Listeneinträge (0–200) — *nur bei Liste* | 10 |
| Objekt-Status | Siehe oben | Normal |

## Datumsfeld-Monitor

Überwacht beliebige Datumsfelder und zeigt fällige Termine mit Ampelfarben.

| Feld | Beschreibung | Standard |
|---|---|---|
| Datumsfeld | Das überwachte Feld — gruppiert nach globalen, spezifischen und benutzerdefinierten Kategorien (Pflichtfeld) | — |
| Datumsmodus | **Countdown** (Tage bis zum Datum) oder **Offset** (Datum + Zeitraum = Fälligkeit, z. B. letzte Prüfung + 2 Jahre) | Countdown |
| Offset-Wert + Einheit | Zeitspanne, die zum Feldwert addiert wird — *nur bei Offset* | 1 Jahr |
| Anzeigemodus | Liste, Zusammenfassung (KPI-Karten) oder Diagramm nach Monat | Liste |
| Zeithorizont + Einheit | Wie weit in die Zukunft geschaut wird | 90 Tage |
| Überfällige Einträge anzeigen | Auch Termine in der Vergangenheit anzeigen | aus |
| Schwellwert Kritisch / Warnung (Tage) | Ab dieser Restlaufzeit wird rot bzw. gelb markiert | 30 / 90 |
| Objekttyp-Filter | Einschränkung auf bestimmte Objekttypen | alle |
| Limit | Maximale Listeneinträge — *nur bei Liste* | 10 |
| Objekt-Status | Siehe oben | Normal |

## Zahlenfeld-Monitor

Aggregiert Zahlenwerte — z. B. Gesamt-RAM aller Server oder Summe der Vertragskosten.

| Feld | Beschreibung | Standard |
|---|---|---|
| Zahlenfeld | Das ausgewertete numerische Feld (Pflichtfeld) | — |
| Aggregation | Summe, Durchschnitt, Minimum, Maximum oder Anzahl Einträge | Summe |
| Anzeigemodus | Einzelwert (KPI-Karte), Top-Liste oder Diagramm | Einzelwert |
| Diagrammtyp / Gruppieren nach | Balken/Säule/Donut, gruppiert nach Objekttyp oder CMDB-Status — *nur bei Diagramm* | Balken / Objekttyp |
| Einheit | Text hinter dem Wert (z. B. GB, €, MHz) | leer |
| Dezimalstellen | Nachkommastellen (0–4) | 0 |
| Schwellwert Warnung / Kritisch | Ampelfarbe ab Schwellwert; leer = keine Prüfung | leer |
| Schwellwert-Richtung | „Höher = schlechter" (Auslastung) oder „Niedriger = schlechter" (freier Speicher) | Höher = schlechter |
| Objekttyp / Objekt-Status | Siehe oben | alle / Normal |
| Limit | Einträge der Top-Liste — *nur bei Top-Liste* | 10 |

## Notizen

| Feld | Beschreibung | Standard |
|---|---|---|
| Inhalt | Freier Text mit Formatierung und Links; wird beim Speichern von unsicherem HTML bereinigt | leer |

## Lesezeichen

| Feld | Beschreibung | Standard |
|---|---|---|
| Lesezeichen | Bis zu 50 Einträge; je Eintrag Typ (**URL** oder **Objekt** mit Objektsuche) und optionale Bezeichnung | leer |
| Anzeigemodus | Liste oder Kacheln | Liste |
| Spalten | Kacheln pro Zeile (1–4) — *nur bei Kacheln* | 3 |

## Datenqualität

Benötigt das Add-on **donamic Data Quality** — andernfalls zeigt das Widget einen Hinweis.

| Feld | Beschreibung | Standard |
|---|---|---|
| Anzeigemodus | Zusammenfassung, Worst-Liste oder Score-Verteilung | Zusammenfassung |
| Objekttyp | Einschränkung auf bestimmte Objekttypen | alle |
| Schwellwert Gut / Warnung (%) | Ab diesem Score gilt „Gut" (grün) bzw. „Warnung" (gelb), darunter „Kritisch" (rot) | 80 / 50 |
| Limit | Einträge der Worst-Liste (5–100) — *nur bei Worst-Liste* | 20 |

## Entsorgung

Benötigt das Add-on **donamic Disposal** — andernfalls erscheint das Widget nicht in der
Widget-Auswahl; ein bereits platziertes Widget zeigt einen Hinweis statt eines Fehlers.

| Feld | Beschreibung | Standard |
|---|---|---|
| Anzeigemodus | Zusammenfassung, In Entsorgung, Entsorgt oder Schritt-Verteilung | Zusammenfassung |
| Objekttyp | Einschränkung auf bestimmte Objekttypen | alle |
| Limit | Einträge der Listen (5–100) — *nur bei den Listen* | 20 |
| Sortierung | Datum (neueste/älteste zuerst) oder nach Zustand (weitere Verwendung) gruppiert — *nur bei „Entsorgt"* | Datum, neueste zuerst |
| Attribut-Filter | Bis zu zehn Bedingungen — siehe [Attribut-Filter](#attribut-filter) | leer |

**Die vier Darstellungen:**

- **Zusammenfassung** — zwei Kacheln „In Entsorgung" und „Entsorgt" (Objektzählung) mit
  der Verteilung der laufenden Vorgänge auf die fünf Prozessschritte. Ein Klick auf eine
  Kachel oder einen Schritt-Zähler öffnet das Objektlisten-Modal mit den dahinterliegenden
  Objekten (inklusive Schritt bzw. Entsorgungsdatum als Spalte und Suchfeld).
- **In Entsorgung** — Objektliste der laufenden Vorgänge mit aktuellem Prozessschritt,
  Fortschrittsbalken und Startdatum; die am weitesten fortgeschrittenen zuerst.
- **Entsorgt** — Objektliste der abgeschlossenen Vorgänge mit „Entsorgt am" und
  „Weitere Verwendung"; „Entsorgt durch" erscheint als Tooltip auf dem Datum.
- **Schritt-Verteilung** — Säulendiagramm der laufenden Vorgänge je Prozessschritt.

**Klick-Navigation in den Listen:** Ein Klick auf die Zeile öffnet den zugehörigen
**Entsorgungsvorgang** im Disposal-Add-on; ein Klick auf den Objekttitel öffnet das
**Objekt** selbst.

Nach Abschluss archivierte Objekte werden mitgezählt und angezeigt. Das Widget steht
auch auf öffentlichen Dashboards zur Verfügung (dort ohne Verlinkung und ohne Drilldown).

## IP-Auslastung

| Feld | Beschreibung | Standard |
|---|---|---|
| Netzwerke | Bis zu 10 anzuzeigende Netze | leer |
| Nächste freie IP anzeigen | Zusätzlich „Nächste freie statische IP" und „Nächste freie DHCP-IP" je Netz | an |

## Rackansicht

| Feld | Beschreibung | Standard |
|---|---|---|
| Rack | Das darzustellende Rack (mit Suchfeld) | — |
| Ansicht | Vorderseite, Rückseite oder Beide Seiten | Vorderseite |

## Standort-Auswertung

Zählt oder listet Objekte unterhalb eines Standorts — über alle Unterebenen (ein Gebäude
zählt auch die Geräte in seinen Räumen und Racks).

| Feld | Beschreibung | Standard |
|---|---|---|
| Standort | Auswahl im aufklappbaren **Standortbaum** (wie im Standort-Browser von i-doit) oder per Suche; der gewählte Standort erscheint als Chip | — |
| Objekttyp | Ein oder mehrere Objekttypen (Pflichtfeld — ohne Auswahl zeigt das Widget einen Hinweis) | — |
| CMDB-Status | Mehrfachauswahl; keine Auswahl = alle | alle |
| Objekt-Status | Siehe oben | Normal |
| Maximale Tiefe | Wie viele Ebenen unterhalb des Standorts berücksichtigt werden; 0 = unbegrenzt | 0 |
| Anzeigemodus | **Gesamtanzahl** (Kachel), **Zählerliste je Objekttyp**, **Nur Diagramm**, **Objektliste**, **Diagramm und Objektliste** (nebeneinander), **Diagramm über Objektliste** | Zählerliste |
| Kartenfarbe | 12 Vorgabefarben oder eigener Hex-Wert — *nur bei Gesamtanzahl* | keine |
| Diagrammtyp / Balkenstil | Balken, Säulen, Donut; Einfarbig/Gestreift — *nur bei Diagramm-Darstellungen* | Balken |
| Objekttypen ohne Treffer anzeigen | Zeigt gewählte Typen auch mit 0 | aus |
| Maximale Zeilen | Obergrenze der Objektliste (bis 5000) — *nur bei Listen-Darstellungen* | 1000 |
| Spalte Objekttyp / CMDB-Status | Spalten der Objektliste ein-/ausblenden | ein |
| Standortanzeige | **Direkter Standort** (z. B. „Raum 101") oder **vollständiger Pfad** (`Berlin > Gebäude A > Raum 101`); lange Pfade werden von vorne gekürzt, der volle Pfad erscheint als Tooltip | Direkter Standort |

Ein Klick auf eine Kachel, eine Zeile der Zählerliste oder ein Diagramm-Segment öffnet die
Objektliste mit der zusätzlichen Spalte **Standort**. In den kombinierten Darstellungen
verhält sich das Widget wie das Report-Widget: Trennlinie verschiebbar, Segment-Klick
filtert die Liste, Tabellenfilter aktualisieren das Diagramm.

:::info Standortdaten
Berücksichtigt werden Objekte mit einem Eintrag in der Kategorie **Standort**. Verwaiste
oder zyklische Zuordnungen aus Altdaten führen nicht zu falschen Zahlen; der Standortbaum
wird aus Container-Objekten (Land, Stadt, Gebäude, Raum, Rack …) gebildet.
:::

## Lizenz-Übersicht

Zeigt die Auslastung der i-doit-Lizenz und rechnet aus dem Wachstum der CMDB hoch, wann das
Objektlimit erreicht wird.

| Feld | Beschreibung | Standard |
|---|---|---|
| Details anzeigen | Lizenzierte Add-ons mit Ablaufdatum, Objektverteilung über Mandanten, letzter Kontakt zum Lizenzserver | ein |
| Prognose anzeigen | Lineare Hochrechnung „Lizenz reicht noch ca. X Monate" aus den Logbuch-Ereignissen (angelegt, archiviert, gelöscht, wiederhergestellt) | ein |
| Datenbasis der Prognose | 30, 90, 180 oder 365 Tage | 90 Tage |
| Trenddiagramm anzeigen | Mini-Verlauf der Objektzahl — *nur bei Prognose* | ein |
| Warnschwelle | Prozent der Lizenz, ab dem der Balken warnt | 80 % |

In i-doit OPEN oder ohne Objektlimit zeigt das Widget die reine Objektzahl.

## Angemeldete Benutzer

Zeigt die aktuell angemeldeten Benutzer aus den aktiven i-doit-Sitzungen.

| Feld | Beschreibung | Standard |
|---|---|---|
| Datenschutz | **Vollständig** (Namen, Zeiten) oder **Anonym** — im anonymen Modus enthält schon die Serverantwort ausschließlich Zählwerte, keine Namen und keine IP-Adressen | Vollständig |
| IP-Adresse anzeigen | Zeigt die IP-Adresse der Sitzung | aus |
| API-Sitzungen anzeigen | API-Sitzungen werden getrennt gezählt und optional gelistet | aus |
| Letzte Anmeldungen anzeigen | Pro Benutzer das letzte Login-Datum (`last_login`); mit Hinweis, falls die Speicherung in den Mandanten-Einstellungen deaktiviert ist | ein |
| Limit | Maximale Listeneinträge | 25 |

Auf öffentlichen Dashboards werden Personen ohne Verlinkung dargestellt.

## CSV-Datei

Zeigt eine CSV-Datei als Tabelle oder Diagramm. Die Datei wird als **Datenquelle** vom
Typ CSV bereitgestellt — siehe [Datenquellen](./datenquellen.md).

| Feld | Beschreibung | Standard |
|---|---|---|
| Datenquelle | Eine CSV-Datenquelle (Direktlink zur Datenquellen-Verwaltung) | — |
| Anzeigemodus | Tabelle oder Diagramm | Tabelle |
| Maximale Zeilen | Obergrenze der geladenen Zeilen | 100 |
| Diagrammtyp | Balken, Säulen, Donut — *nur bei Diagramm* | Balken |
| Label-Spalte | Spalte aus der Kopfzeile für die Segment-Beschriftung — *nur bei Diagramm* | — |
| Berechnung | Anzahl der Zeilen, Summe, Durchschnitt, Minimum oder Maximum einer Wertspalte — *nur bei Diagramm* | Anzahl |
| Wert-Spalte | Zahlenspalte (gekennzeichnet) — *nur bei Summe/Durchschnitt/Min/Max* | — |
| Max. Diagramm-Einträge | Überzählige Einträge werden zu „Andere" zusammengefasst | 10 |

Zellen werden als reiner Text dargestellt — HTML aus fremden Systemen wird nicht
interpretiert.

## Externe Datenbank

Führt eine SELECT-Abfrage auf eine externe MySQL/MariaDB- oder PostgreSQL-Datenbank aus.
Die Verbindung wird als **Datenquelle** von einem Administrator angelegt — siehe
[Datenquellen](./datenquellen.md); die Abfrage formuliert der Dashboard-Editor im Widget.

| Feld | Beschreibung | Standard |
|---|---|---|
| Datenquelle | Eine Datenbank-Datenquelle | — |
| SQL-Abfrage (nur SELECT) | Eine einzelne SELECT-Abfrage. Schreibende Anweisungen, mehrere Statements und blockierende oder dateilesende Funktionen werden serverseitig abgelehnt; Zeilenzahl und Laufzeit (10 Sekunden) sind begrenzt | — |
| Anzeigemodus | Tabelle, Diagramm oder KPI-Karte | Tabelle |
| Maximale Zeilen | Obergrenze der geladenen Zeilen — *nur bei Tabelle/Diagramm* | 100 |
| Aktualisierung | Zwischenspeicher: keine, 30 s, 1 min, 5 min, 15 min, 1 h — Dashboards treffen das Fremdsystem nicht bei jedem Reload | 1 min |
| Diagrammtyp, Label-Spalte, Berechnung, Wert-Spalte, Max. Einträge | Wie beim Widget „CSV-Datei"; die Spalten stammen aus dem Abfrageergebnis — *nur bei Diagramm* | — |
| KPI-Bezeichnung / Einheit | Beschriftung und Einheit der Kennzahl (erster Wert der ersten Zeile) — *nur bei KPI-Karte* | — |

:::tip Nur-Lese-Benutzer
Legen Sie für die externe Datenbank einen Benutzer an, der ausschließlich `SELECT` auf
die benötigten Tabellen darf. Die serverseitige SELECT-Sperre ist eine zweite Schicht,
kein Ersatz für Datenbankrechte.
:::

## Legacy Widget

| Feld | Beschreibung | Standard |
|---|---|---|
| Widget auswählen | Ein klassisches i-doit-Dashboard-Widget (z. B. Notizen, RSS, CMDB-Explorer, Auswertungen) | — |

Die Einstellungen des eingebetteten Widgets werden über dessen eigene Oberfläche gepflegt.
Legacy Widgets sind auf öffentlichen Dashboards nicht darstellbar (sie benötigen eine
aktive i-doit-Sitzung).

## Attribut-Filter

Die Widgets **Objekt-Zähler**, **Quick Stats** (je Karte), **CMDB-Status Diagramm**,
**Vertrags-/Garantie-Ablauf**, **Standort-Auswertung** und **Entsorgung** lassen sich um bis zu zehn
zusätzliche Bedingungen auf beliebige Kategorie-Attribute einschränken — etwa Objekttitel,
Beschreibung, Seriennummer, zugewiesene Person, installierte Software, Dialogwerte wie
Zweck oder CMDB-Status, Datums- und Zahlenfelder, auch aus benutzerdefinierten Kategorien.

**Bedingung anlegen:** Im Konfigurationsdialog **„+ Bedingung"** wählen, dann entweder
im Suchfeld tippen (findet Kategorie und Attribut) oder Kategorie → Attribut auswählen,
anschließend Operator und Wert setzen.

| Feldtyp | Operatoren | Wert |
|---|---|---|
| Text | ist gleich, ist nicht gleich, enthält, enthält nicht, beginnt mit, ist leer, ist nicht leer | Freitext (max. 200 Zeichen) |
| Zahl | ist gleich, ungleich, größer, größer/gleich, kleiner, kleiner/gleich, ist leer, ist nicht leer | Zahl |
| Datum | am, vor, nach, ist leer, ist nicht leer | Datum |
| Dialog (z. B. Zweck, CMDB-Status) | ist einer von, ist keiner von, ist leer, ist nicht leer | Mehrfachauswahl aus den Dialogwerten |
| Objekt (z. B. Kontakt, Software) | ist einer von, ist keiner von, Titel enthält, ist leer, ist nicht leer | Objekt-Auswahl per Suche oder Freitext |

**Regeln:**

- Alle Bedingungen müssen zutreffen (UND-Verknüpfung).
- Bei mehrwertigen Kategorien (Kontakte, Software, IP-Adressen …) zählt ein Objekt, sobald
  ein Eintrag passt; „nicht"-Operatoren gelten objektbezogen (kein Eintrag passt).
- Im Objektlisten-Modal erscheinen die gefilterten Attribute als zusätzliche Spalten und
  die aktiven Bedingungen als Hinweiszeile. Auf öffentlichen Dashboards werden die
  Filterkriterien und die Zusatzspalten nicht ausgegeben.
- Der Feldkatalog zeigt nur Kategorien, die die konfigurierende Person in i-doit sehen
  darf. Geheimnisfelder (Passwörter, Schlüssel, Tokens, PIN/PUK, Zugangsdaten) sind
  grundsätzlich ausgeschlossen. Eine ungültig gewordene Bedingung (z. B. gelöschte
  benutzerdefinierte Kategorie) führt zu einer Fehlermeldung im Widget — nie zu einer
  stillschweigend erweiterten Treffermenge.

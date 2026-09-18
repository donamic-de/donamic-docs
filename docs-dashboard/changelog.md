---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Dashboards Pro in verständlicher Form zusammen.

## [1.5.2] — 04.09.2026

### Neu

- **Widget „Entsorgung".** Zeigt laufende und abgeschlossene Entsorgungsvorgänge aus dem
  Add-on donamic Disposal — als Zusammenfassung mit Schritt-Verteilung, als Listen
  „In Entsorgung" (mit Fortschrittsbalken) und „Entsorgt" (mit Entsorgungsdatum und
  weiterer Verwendung, sortierbar nach Datum oder Zustand) oder als Säulendiagramm.
  Ein Klick auf eine Listenzeile öffnet den Entsorgungsvorgang, ein Klick auf den
  Objekttitel das Objekt; Kacheln und Schritt-Zähler der Zusammenfassung öffnen das
  Objektlisten-Modal. Attribut-Filter werden unterstützt; nach Abschluss archivierte
  Objekte werden mitgezählt. Das Widget erscheint nur in der Auswahl, wenn das
  Disposal-Add-on installiert und aktiv ist, und steht auch auf öffentlichen
  Dashboards zur Verfügung. Näheres unter [Widgets](bedienung/widgets.md#entsorgung).

### Behoben

- Nach dem Verlassen der Dashboard-Startseite blieb die Breadcrumb-Navigation
  ausgeblendet und hinterließ einen leeren Balken — sie wird jetzt automatisch
  wieder eingeblendet.

## [1.5.0] — 28.08.2026

### Neu

- **Widget „Standort-Auswertung".** Standort im aufklappbaren Standortbaum oder per Suche wählen, Objekttypen angeben — das Widget zählt oder listet alle Objekte unterhalb dieses Standorts über alle Ebenen (optional bis zu einer maximalen Tiefe). Sechs Darstellungen von der Kachel bis zur Objektliste mit Diagramm; der Standort jedes Objekts erscheint als direkter Standort oder vollständiger Pfad. Näheres unter [Widgets](bedienung/widgets.md#standort-auswertung).
- **Attribut-Filter.** Objekt-Zähler, Quick Stats (je Karte), CMDB-Status Diagramm, Vertrags-/Garantie-Ablauf und Standort-Auswertung lassen sich um bis zu zehn Bedingungen auf beliebige Kategorie-Attribute einschränken — Objekttitel, zugewiesene Person, installierte Software, Dialogwerte, Datums- und Zahlenfelder, auch aus benutzerdefinierten Kategorien. Die gefilterten Werte erscheinen im Objektlisten-Modal als Spalten. Näheres unter [Attribut-Filter](bedienung/widgets.md#attribut-filter).
- **Externe Datenquellen.** Administratoren legen CSV-Dateien (Upload oder automatisierter Austausch im Mandanten-Verzeichnis) und Verbindungen zu externen MySQL/MariaDB- oder PostgreSQL-Datenbanken an. Die Widgets **„CSV-Datei"** und **„Externe Datenbank"** zeigen sie als Tabelle, Diagramm oder KPI-Karte — mit Berechnung (Anzahl, Summe, Durchschnitt, Minimum, Maximum) und Zwischenspeicher. Näheres unter [Datenquellen](bedienung/datenquellen.md).
- **Widget „Lizenz-Übersicht".** Auslastung der i-doit-Lizenz mit Warnschwelle, Add-on-Lizenzen mit Ablaufdatum, Objektverteilung über Mandanten und eine Wachstumsprognose („Lizenz reicht noch ca. X Monate") aus dem tatsächlichen Wachstum der CMDB.
- **Widget „Angemeldete Benutzer".** Aktive Sitzungen mit Anmeldezeit und letzter Aktivität, getrennt gezählte API-Sitzungen, letzte Anmeldungen — auf Wunsch anonymisiert (dann verlassen keine Namen und IP-Adressen den Server).
- Das Objektlisten-Modal zeigt widget-spezifische Zusatzspalten; in der öffentlichen Ansicht öffnet auch ein Klick auf eine Zeile der Aufschlüsselungs-Liste das Modal.
- Die CMDB-Status-Auswahl blendet die internen Pseudo-Status „i-doit Status" und „Template" aus.

### Sicherheit

- Abfragen an externe Datenbanken werden strenger geprüft: Neben schreibenden Anweisungen sind jetzt auch blockierende und dateilesende Funktionen gesperrt; jede Abfrage hat ein Laufzeitlimit von 10 Sekunden. Zwischengespeicherte Ergebnisse sind je Mandant und Verbindungsziel getrennt.
- Daten aus CSV-Dateien und externen Datenbanken werden als reiner Text dargestellt — HTML aus fremden Systemen wird nicht interpretiert.
- Attribut-Filter: erweiterte Sperrliste für Geheimnisfelder (PIN/PUK, Passphrasen, OTP/2FA, Zugangsdaten); öffentliche Links geben keine gefilterten Attributwerte aus. Attributkatalog, Dialogwerte und Standortbaum sind nur für Dashboard-Editoren und Administratoren abrufbar.

### Verbessert

- **Dashboards laden schneller.** Die Widgets eines Dashboards werden jetzt parallel geladen; bisher wartete jedes Widget auf das vorherige.
- Objekt-Zähler: Die Kachelfarbe bietet dieselben Farbfelder und die freie Farbwahl wie Quick Stats; gespeicherte Farben bleiben gültig.
- Zahlreiche Oberflächentexte (Vollbild, Vorschau, Statusnamen, Notiz-Editor, Hinweis der öffentlichen Ansicht …) sind jetzt in Deutsch und Englisch übersetzt.

### Behoben

- **Ein Add-on-Update entfernte die Lizenz** — sie musste danach neu eingespielt werden. Die Lizenz bleibt jetzt bei Updates erhalten.
- Der Teilen-Dialog zeigte in der Personensuche den Platzhalter der Command Palette.
- Die Deinstallation entfernt jetzt auch die Tabelle der externen Datenquellen.

:::tip Empfehlung
Dieses Update enthält Sicherheitsverbesserungen für externe Datenquellen. Wir empfehlen die zeitnahe Installation, wenn Sie das Widget „Externe Datenbank" einsetzen oder Dashboards über öffentliche Links teilen.
:::

## [1.4.4] — 03.08.2026

### Sicherheit

- **Objektlisten hinter Diagrammen und Kennzahlen bleiben im Umfang des Widgets.** Klickt man ein Diagramm-Segment an oder durchsucht die geöffnete Objektliste, zeigt sie ausschließlich Objekte innerhalb dessen, worauf das Widget eingestellt ist — auch bei Nutzung von Suche und Blättern, und auch auf öffentlich geteilten Dashboards. Zuvor konnte die Klick-Navigation die Einstellung des Widgets überschreiben.
- **Zusätzliche Berechtigungsprüfungen** bei der Widget-Vorschau, der Report-Auswahl, der Personensuche im Freigabe-Dialog und beim Speichern von Layouts.
- **Härtung der Feldauswahl** in Zahlen- und Datumsfeld-Monitoren: auswählbar sind nur noch Felder mit passendem Datentyp.
- **Öffentliche Dashboards geben keine internen Konfigurationsdetails mehr aus.**
- **Zusätzlicher Schutz vor Anfragen von fremden Websites.**
- **Das Installationspaket enthält nur noch die zum Betrieb benötigten Dateien.** Frühere Versionen legten zusätzlich Dokumentations- und Entwicklerdateien in der i-doit-Installation ab; das Update entfernt diese automatisch. Das Handbuch wird seither als eigene Datei neben dem Paket ausgeliefert.

### Behoben

- **Widgets ließen sich in manchen Umgebungen nicht mehr speichern oder löschen** (Meldung „Cross-origin request rejected"). Betroffen waren Installationen hinter einem vorgelagerten Webserver, der die HTTPS-Verschlüsselung übernimmt. Der Schutz vor Anfragen fremder Websites bleibt erhalten.

:::tip Empfehlung
Dieses Update enthält Sicherheitsverbesserungen. Wir empfehlen die zeitnahe Installation, insbesondere wenn Sie Dashboards über öffentliche Links teilen.
:::

:::info Hinweis für Administratoren
Widgets werten **objekttyp-bezogene CMDB-Berechtigungen einzelner Rollen nicht zusätzlich aus** — Näheres unter [Berechtigungen](berechtigungen.md#sichtbarkeit-von-objekten-in-widgets).
:::

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

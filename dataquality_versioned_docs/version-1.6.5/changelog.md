---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Data Quality in verständlicher Form zusammen.

## [1.6.5] — 01.10.2026

### Neu: Mein Arbeitsbereich zeigt die fehlenden Felder

Im **Arbeitsbereich** stand bisher nur die Anzahl der Lücken je Objekt. Jetzt
listet die neue Spalte **„Fehlende Felder"** genau auf, was fehlt — so wie Sie
es aus der Compliance-Analyse kennen: gruppiert nach Kategorie, Kategorie-Regeln
mit Beschreibung, Ausnahmen in einer eigenen Gruppe und jeweils ein Sprunglink
**„↗ Kategorie"**, der die betroffene Kategorie des Objekts direkt zum
Bearbeiten öffnet. Der CSV- und Druck-Export des Arbeitsbereichs enthält die
Spalte ebenfalls.

Bei sehr großen Arbeitsbereichen werden die Details für die Objekte mit den
meisten Lücken angezeigt (bis 1000 Objekte); ein Hinweis macht darauf
aufmerksam.

### Neu: CSV- und Druck-Export für alle Listen

Jede Analyse- und Übersichtsliste hat jetzt die Schaltflächen **„CSV"** und
**„Drucken"**. Der Export enthält immer **alle** Einträge — nicht nur die gerade
sichtbare Seite — und übernimmt den aktuell gesetzten Filter. Die CSV-Datei
öffnet sich direkt in deutschem Excel, Datumswerte stehen im i-doit-Datumsformat.

### Neu: Prüfbericht als PDF und Druckansicht

Auf dem Analyse-Hub erstellt **„Prüfbericht erstellen"** einen Bericht mit
Kundenname, Ersteller und optionalem Einleitungstext. Er enthält die
Zusammenfassung, die Compliance je Objekttyp, die häufigsten Lücken, das
komplette Regelwerk in Klartext mit Nutzen-Erklärung und einen Anhang mit den
Analysen; auf Wunsch zusätzlich je Objekttyp die Liste aller betroffenen Objekte
mit den konkret fehlenden Feldern. Vor dem Bericht wird vollständig neu
ausgewertet. Ist das Add-on **donamic Design** aktiv, übernimmt der Bericht
dessen Farbe und Logo.

### Neu: Regelwerk exportieren und importieren

Im Regelwerk-Editor lässt sich das komplette Regelwerk als Datei
**exportieren** und in einem anderen i-doit-System **importieren** — zum
Beispiel von Test nach Produktion oder als Vorlage für weitere Mandanten.
Beim Import wählen Sie zwischen **„Ersetzen"** und **„Zusammenführen"** (nur
neue Regeln ergänzen); eine **Vorschau** zeigt vorab, was übernommen wird und
welche Regeln übersprungen werden, weil Objekttyp, Kategorie oder Attribut im
Zielsystem fehlen. Der Auswertungs-Filter wird mit übernommen.

### Behoben: Sprung in eine selbstdefinierte Kategorie

Der Link **„↗ Kategorie"** in der Compliance-Analyse endete bei
selbstdefinierten Kategorien (zum Beispiel „Schutzbedarf") im i-doit-Fehler
**„The class for your selected category with ID does not exist"** oder in einer
falschen Kategorie. Der Link öffnet jetzt die richtige Kategorie des Objekts.

### Behoben: Gesetzte Startseite blockierte Übersicht und Analysen

Wer über **„Als Startseite"** zum Beispiel die Compliance-Ansicht festgelegt
hatte, landete anschließend bei jedem Klick auf „Übersicht", den Add-on-Knoten
oder den Ordner „Analysen" wieder auf der Startseite. Die Startseite greift
jetzt nur noch beim Einstieg über das Menü **Add-ons**; die Einträge im
Navigationsbaum öffnen immer die angeklickte Seite.

### Behoben: Dunkles Design

Mit einem dunklen donamic-Design waren einzelne Karten weiß, Schaltflächen und
Texte teils unsichtbar. Alle Ansichten folgen jetzt vollständig dem aktiven
Design.

### Behoben: Logbuch bei Bereinigungen

Die **Dialog-Bereinigung** und das Archivieren oder Löschen **veralteter
Objekte** hinterließen keinen Eintrag im Logbuch. Jetzt entsteht für jedes
betroffene Objekt ein Logbucheintrag, und Archivieren/Löschen verhält sich wie
in der i-doit-Oberfläche (inklusive Beziehungen und Dateien).

## [1.6.4] — 27.08.2026

### Sicherheit: Lizenzverwaltung wieder abgesichert

In 1.6.2 und 1.6.3 war die zentrale Lizenzverwaltung ohne Rechteprüfung
ausgeliefert worden; jeder angemeldete Benutzer hätte Lizenzen ändern können.
Die Absicherung ist wiederhergestellt und wird beim Paketbau künftig geprüft.

### Behoben

- Die Kategorie **„Datenqualität"** erschien im Objekt mehrfach, weil jede
  Installation eine weitere Zuweisung anlegte. Das Update bereinigt bestehende
  Doppelzuweisungen einmalig.
- Der Link **„In Kategorie springen"** in der Kategorie „Datenqualität"
  adressiert selbstdefinierte Kategorien jetzt korrekt.

## [1.6.3] — 26.08.2026

### Behoben: Fehlermeldung statt Auswertung

In 1.6.2 konnte die Oberfläche mit **„Ein Fehler ist aufgetreten — Die Komponente
konnte nicht geladen werden"** abbrechen, sobald die Ansicht mit dem
Verlaufsdiagramm geladen wurde. Betroffen war außerdem die Meldung „Keine
Treffer" im Regelwerk, wenn man nach einem Attribut suchte, das es nicht gibt.

Ursache war ein Namenskonflikt im Programmcode, der mit der neuen
Sprachumschaltung in 1.6.2 hineingeraten war. Behoben; Auswertungen und Daten
waren davon nicht betroffen.

## [1.6.2] — 21.08.2026

Fünf Punkte aus einem Kundensystem, gebündelt.

### Behoben: Felder eigener Kategorien wurden falsch gespeichert

Wenn Sie ein Feld einer **selbstdefinierten Kategorie** direkt aus der Kategorie
„Datenqualität" heraus geändert haben, konnte die Änderung ein **anderes Feld
desselben Objekts** überschreiben — die Oberfläche meldete trotzdem
„Gespeichert". Das ist behoben; es wird jetzt genau das gemeinte Feld
geschrieben. Damit lassen sich auch **Dialog-Plus-Felder** eigener Kategorien
von hier aus setzen.

Mehrwertige Felder werden dabei bewusst abgelehnt, mit Hinweis — sie gehören in
die Kategorie selbst.

Ebenfalls behoben: Bei eigenen Kategorien fehlte in der Objektansicht der Link
„↗ Kategorie", und in der Spalte stand statt des Namens die interne Kennung.

### Neu: Mehrere Regeln für dasselbe Attribut

Bei **mehrwertigen** Kategorien — etwa der Kontaktzuweisung — können Sie jetzt
mehrere Regeln auf dasselbe Attribut legen: „ein Eintrag mit Rolle Benutzer"
**und** „ein Eintrag mit Rolle Administrator". Beide Regeln zählen einzeln, und
100 % bleiben erreichbar, weil zwei verschiedene Einträge sie erfüllen können.

Bei **einwertigen** Attributen bleibt es bei einer Regel pro Attribut: Dort gibt
es nur einen Wert, eine zweite Regel wäre entweder überflüssig oder nie
erfüllbar.

### Neu: Widersprüche werden beim Speichern erkannt

Fordern zwei Regeln Unvereinbares — „muss gepflegt sein" und zugleich „darf
nicht gepflegt sein" —, wird das Regelwerk **nicht gespeichert**; die
betroffenen Regeln werden einzeln benannt. Ein solches Paar wäre nicht bloß
unschön: Das Objekt bliebe dauerhaft unter 100 % und würde nie als konform
gelten.

Überflüssige Kombinationen — etwa ein geforderter Wert neben „muss gepflegt
sein" — werden nur als Hinweis gemeldet; gespeichert wird trotzdem.

### Behoben: Eigene Sprachkonstanten werden übersetzt

Wenn Sie Kategorien oder Felder über eigene Sprachkonstanten benennen, zeigte
Data Quality bisher die rohe Konstante statt des Textes, sofern die Konstante
nicht mit `LC__` begann. Jetzt wird immer übersetzt.

:::note Beide Sprachdateien anlegen
Die Konstanten müssen in `src/lang/de_custom.inc.php` **und**
`src/lang/en_custom.inc.php` stehen. Gibt es nur die deutsche Datei, zeigt die
englische Oberfläche weiterhin die rohe Konstante — das ist Verhalten von
i-doit selbst.
:::

### Behoben: „Als Startseite" jetzt auch auf Englisch

Der Stern-Knopf, die Zurück-Schaltfläche und einige Hinweistexte waren fest
deutsch und folgen nun der eingestellten Sprache.

### Behoben: Regelwerk konnte beim Speichern teilweise verloren gehen

Speichern ersetzt das gesamte Regelwerk. Brach das dabei ab, konnten Regeln
verloren gehen. Jetzt gilt: entweder alles oder nichts — im Fehlerfall bleibt
das bisherige Regelwerk vollständig erhalten.

## [1.6.1] — 12.08.2026

### Neu: Benachrichtigungen einrichten — und ein eigener Cron-Job

Der E-Mail-Bericht war zwar im Add-on vorhanden, ließ sich bisher aber **nicht über die
Oberfläche einstellen**. Das ist jetzt behoben:

- Im **Regelwerk** gibt es den neuen Abschnitt **Benachrichtigungen**: aktivieren,
  Zeitplan (täglich, wöchentlich mit Wochentag, monatlich), Uhrzeit und Empfänger
  (Personen oder Gruppen aus der CMDB, mit Suchfeld).
- Gespeichert wird zusammen mit dem Regelwerk.

**Auswertung und Versand laufen jetzt über einen eigenen Cron-Job.** Ein einziger Eintrag
erledigt beides; die bisherige Behelfslösung über einen angemeldeten Aufruf entfällt. Der
Eintrag darf ruhig stündlich laufen — das Add-on entscheidet selbst, wann eine
Benachrichtigung fällig ist, holt verpasste Läufe nach und verschickt nie doppelt.

Die Einrichtung ist im Kapitel [Konfiguration](konfiguration) beschrieben.

## [1.6.0] — 11.08.2026

### Neu: Regelwerk aus einem Objekt lernen

Data Quality wird meist dort eingeführt, wo schon gepflegte Daten liegen. Statt das
Regelwerk Feld für Feld aufzubauen, wählen Sie im Regelwerk jetzt einfach ein
**exemplarisch gut gepflegtes Objekt** aus. Data Quality schaut nach, welche Felder
dort gefüllt sind, und schlägt daraus Regeln vor — für Objekttypen ohne Regelwerk wird
eines angelegt, bei vorhandenem Regelwerk werden nur die fehlenden Felder ergänzt.

- Objektsuche über den Namen oder direkt über die Objekt-ID (z. B. `#1373`).
- Die Vorschläge sind übersichtlich getrennt in „noch nicht im Regelwerk", „bereits im
  Regelwerk" und „im Regelwerk, aber von diesem Objekt nicht erfüllt".
- Jeder Eintrag ist einzeln an- und abwählbar. Bestehende Regeln lassen sich damit auch
  **gezielt entfernen** — praktisch für Felder, die nur per Import befüllt wurden und
  künftig nicht gepflegt werden sollen.
- Bei Auswahlfeldern können Sie entscheiden, ob das Feld nur gefüllt sein muss oder ob
  genau der Wert des Referenzobjekts gefordert wird.
- Übernommene Vorschläge landen zunächst nur im Editor — gespeichert wird erst mit
  „Speichern", sodass Sie alles vorher prüfen können.

Felder, die auf „Keine Angabe" stehen, gelten dabei bewusst als nicht gepflegt.

### Behoben
- Die Auswertung „Doppelte Bezeichner" brach ab, wenn ein doppelter Wert rein aus
  Ziffern bestand.

## [1.5.0] — 05.08.2026

Wartungs- und Performance-Release. Bedienung und Auswertungsergebnisse bleiben unverändert.

### Schneller
- Die Kategorie-Nutzungsanalyse und das Analyse-Dashboard laden in großen Umgebungen deutlich schneller, da im Hintergrund erheblich weniger Datenbankabfragen nötig sind.
- Sammelaktionen (z. B. Ausnahmen für viele Objekte gleichzeitig setzen oder aufheben) werden spürbar schneller verarbeitet.

### Intern
- Umfangreiche interne Modernisierung des Add-ons für bessere Wartbarkeit und als Vorbereitung für die Auslieferung als i-doit-Standardpaket. Dies hat keine Auswirkungen auf Bedienung oder Ergebnisse.

## [1.4.1] — 21.07.2026

Sicherheitsaktualisierung vor der Auslieferung als Standardpaket. Die Auswertungen selbst bleiben unverändert.

### Sicherheit
- Die zentrale donamic-Lizenzverwaltung erfordert jetzt das entsprechende Verwaltungsrecht in i-doit. Zuvor konnte jeder angemeldete Benutzer Lizenzen aller installierten donamic-Add-ons ändern oder entfernen.
- Zusätzlicher Schutz vor gefälschten Anfragen bei Lizenz- und Datenqualitäts-Aktionen.
- Frei wählbare Bezeichnungen in der Kategorie „Datenqualität" werden jetzt sicher dargestellt (Schutz vor eingeschleustem Schadcode).

## [1.4.0] — 25.06.2026

### Behoben
- Nutzungsanalyse für Mehrfach-Auswahlfelder (z. B. „Suchdomänen" bei Hostadressen): In Benutzung befindliche Werte wurden zuvor teils fälschlich als „nicht in Benutzung" gemeldet. Die Auswertung arbeitet jetzt zuverlässig.
- Beim Bereinigen und Umweisen von Werten wird nun ausschließlich der tatsächlich betroffene Wert verändert.
- Die Seite „donamic Lizenzen" ist jetzt auch dann verfügbar, wenn ausschließlich Data Quality installiert ist (zuvor war zusätzlich das Dashboards-Add-on nötig).
- Installationen in einem Unterordner (z. B. `host/i-doit`): Die Lizenzseite ist jetzt zuverlässig erreichbar; frühere Weiterleitungsschleifen und Sitzungsverluste treten nicht mehr auf.

### Neu
- Neuer Wert-Status „Unbekannt": Lässt sich die Nutzung eines Auswahlwerts nicht eindeutig bestimmen, wird er als „Unbekannt" markiert und nicht mehr zum Löschen angeboten. Das schützt vor dem versehentlichen Entfernen genutzter Werte.

## Frühere Versionen

Ältere Versionen umfassten die Einführung der Datenqualitäts-Auswertungen (Compliance-Score, Regelwerk, Kategorie-Nutzung) sowie fortlaufende Verbesserungen und Fehlerbehebungen.

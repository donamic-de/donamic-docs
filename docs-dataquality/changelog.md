---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Data Quality in verständlicher Form zusammen.

## [1.6.14] — 25.11.2026

### Behoben: Cron-Auswertung ließ Regeln aus

Bei der Auswertung über den Cron-Job wurden Regeln auf einigen Kategorien nicht
ausgewertet, etwa auf Kontaktzuweisung, Hostadresse, Anschlüssen oder Grafikkarte. Es gab
dazu keine Meldung. Erfüllungsgrad und Mail nach einem Cron-Lauf wichen deshalb von der
Oberfläche ab. Jetzt wertet der Cron-Job alle Regeln aus. Kann eine Regel trotzdem nicht
ausgewertet werden, meldet der Cron-Job das mit `regeln_fehlerhaft=…` und nennt die Regel
samt Grund.

### Behoben: Veraltete Objekte und Kategorie-Nutzung

- **Veraltete Objekte** enthielten Beziehungen (zum Beispiel „Etage 1 ist Standort von
  Raum 104“) und geschützte Systemobjekte wie „Root location“. Beides zählt in Liste,
  Kachel und Prüfbericht nicht mehr mit.
- Die **Kategorie-Nutzung** zeigte Ansichtskategorien wie „Rechtevergabe“ und „Alle
  Tickets“, die keine eigenen Daten speichern und deshalb immer bei 0 % standen. Sie
  erscheinen nicht mehr.

### Behoben: Prüfbericht

- Der Erfüllungsgrad je Objekttyp war anders berechnet als der Gesamtwert und zeigte oft
  0,0 %. Jetzt rechnen beide gleich, wie Dashboard und Mail. Die Spalten heißen
  „Objekttyp“, „Objekte“, „Objekte mit Lücken“ und „Erfüllungsgrad“.
- Im Regelwerk blieb die dritte Spalte leer. Sie zeigt jetzt je Regel die betroffenen
  Objekte, zum Beispiel „45 / 46“.
- Unter „Größte Lücken“ stand teils „__category__“, im Regelwerk „mind. 1 Einträge“.

## [1.6.13] — 24.11.2026

### Neu: Mail in der Sprache des Empfängers

Jede Person erhält den Bericht jetzt in ihrer i-doit-Sprache, also in der Sprache aus den
Benutzereinstellungen. Deutsche und englische Empfänger bekommen jeweils eine eigene Mail
mit übersetzten Objekttypen und passendem Zahlenformat. Wer keine eigene Einstellung hat,
erhält die Standardsprache von i-doit. Details unter
[Konfiguration](./konfiguration.md#profil--benachrichtigungen).

### Neu: Entwarnung per Mail

Bisher kam keine Mail, wenn keine Lücken gefunden wurden. Empfänger konnten dann nicht
erkennen, ob der Bericht noch läuft. Bei den Benachrichtigungen gibt es jetzt die Option
**Auch versenden, wenn keine Lücken gefunden wurden**. Ist sie aktiv, kommt der Bericht
mit dem Betreff „keine Lücken gefunden“ und dem Hinweis, dass alle Prüfungen erfüllt sind.
Die Option ist standardmäßig ausgeschaltet.

### Behoben: Feinschliff der Benachrichtigungs-Mail

- Der Erfüllungsgrad zeigte „100 %“, obwohl noch Lücken offen waren (zum Beispiel bei
  2.719 von 2.720 erfüllten Prüfungen). Jetzt steht dort „99,9 %“; 100 % erscheint nur
  bei echter Vollständigkeit.
- Bei genau einem Objekt heißt es jetzt „1 Objekt mit Lücken“ statt „1 Objekte“.
- Große Zahlen bekommen Tausenderpunkte, die englische Mail nutzt das englische
  Zahlenformat.
- Objekttypen ohne Prüfungen zeigen „–“ statt „0 %“.

### Behoben: veraltete Dateien im Add-on-Verzeichnis

Ältere Pakete enthielten Entwicklerdateien (Ordner `tools`), die ohne Anmeldung über den
Webserver abrufbar waren. Sie enthalten keine Daten aus Ihrer CMDB und werden beim Update
automatisch entfernt.

## [1.6.12] — 23.11.2026

### Behoben: Benachrichtigungs-Mail war unvollständig

Die Mail kam an, war aber kaum lesbar: Objektnamen fehlten, in der Spalte der fehlenden
Felder stand nur „%“, der Knopf zum Dashboard führte ins Leere, und in Outlook erschien
CSS-Code als Text. Außerdem nannte der Betreff immer „20 Objekte“, egal wie viele Objekte
Lücken hatten. Jetzt zeigt die Mail die tatsächliche Zahl der Objekte mit Lücken, die
Erfüllungsgrade je Objekttyp und die 20 Objekte mit den meisten Lücken, jeweils mit
„offene Prüfungen: x von y“. Jedes Objekt und der Knopf „Datenqualität in i-doit öffnen“
sind Links in i-doit. Die Mail ist auf Deutsch; mit der Cron-Option `--lang=en` kommt sie
auf Englisch (ab 1.6.13 richtet sich die Sprache nach dem Empfänger).

:::info Links in der Mail
Die Links setzen sich aus der **i-doit Adresse (URL)** zusammen, die in den
Systemeinstellungen unter **URL Einstellungen** hinterlegt ist. Ist sie leer, enthält die
Mail keine Links.
:::

## [1.6.11] — 19.11.2026

### Behoben: Benachrichtigungs-Mail kam nicht an

Der Cron-Job meldete „versendet=ja“, die Mail kam aber nie an. Das Add-on rief die
Mailbibliothek von i-doit falsch auf; im `exception.log` stand „Call to undefined method
isys_library_mail::get_instance()“. Jetzt läuft der Versand über die
**SMTP-Konfiguration** von i-doit (**Verwaltung → Import und Schnittstellen →
SMTP-Konfiguration**). Schlägt der Versand fehl oder ist kein Mailserver eingerichtet,
meldet der Cron-Job „versendet=nein“ samt Grund, zum Beispiel „Versand fehlgeschlagen:
No mail server configured! …“. Der nächste Lauf versucht den Versand dann erneut.

## [1.6.10] — 18.11.2026

### Behoben: Benachrichtigung fand keine E-Mail-Adressen

Der Cron-Job meldete „keine Empfänger mit E-Mail-Adresse“, obwohl die Person eine
Adresse hatte. Das Add-on las die Adresse aus einem veralteten Personenfeld. Jetzt liest
es die primäre Adresse aus der i-doit-Kategorie **E-Mail-Adressen** – für einzelne
Personen ebenso wie für die Mitglieder von Personengruppen. Die Empfängersuche im
Regelwerk findet Personen jetzt auch über ihre E-Mail-Adresse.

## [1.6.9] — 06.11.2026

### Behoben: IP-Konflikte fanden doppelte Adressen nicht

Die Analyse las ein veraltetes Adressfeld, das i-doit bei aktuellen Installationen
nicht mehr füllt. Sie meldete deshalb „keine Konflikte“, obwohl dieselbe Adresse an
mehreren Objekten hing. Jetzt liest sie die Adressen dort, wo i-doit sie speichert.
Als Konflikt gilt dieselbe Adresse im selben Netz an mindestens zwei Objekten; gleiche
Adressen in getrennten Netzen sind kein Konflikt. Jede Konfliktkarte und der Export
zeigen das Netz mit an.

### Behoben: Kachel „Isolierte Objekte“ zählte anders als die Liste

Die Kachel auf dem Analyse-Dashboard berücksichtigte auch archivierte oder gelöschte
Beziehungen und Objekttypen. Sie zählt jetzt nach derselben Logik wie die Liste.

## [1.6.8] — 21.10.2026

### Behoben: Kachel „Doppelte Kennungen“ schnitt einen Wert ab

Gab es gleichzeitig doppelte Objektnamen, Seriennummern, Inventarnummern und
Hostnamen, passte die vierte Kennzahl nicht mehr in die Kachel und wurde
abgeschnitten („HO…“). Die Kennzahlen brechen jetzt in eine zweite Zeile um.

### Behoben: „Logbuch-Aktivität“ durchgehend auf Deutsch

Kachel, Seitentitel und Kennzahlen hießen teilweise noch „Logbook“. Sie
verwenden jetzt durchgehend den i-doit-Begriff „Logbuch“.

### Behoben: Regelwerk-Import mit festem Wert auf Feldern ohne Auswahlwerte

Eine importierte Regel mit festem Wert auf einem Feld ohne Auswahlwerte (zum
Beispiel einem Datumsfeld) wurde mit dem Wert 0 angelegt, den kein Objekt
erfüllt. Die Compliance fiel dadurch auf 0 %. Solche Regeln werden jetzt
übersprungen und im Bericht als „Dialogwert nicht gefunden“ ausgewiesen.


## [1.6.7] — 16.10.2026

### Behoben: Überschrift der Lizenzseite

War Data Quality das einzige installierte donamic-Add-on, stand auf der Seite
**donamic Lizenzen** statt der Überschrift ein technischer Platzhalter
(`LC__DONAMIC_LICENSE__TITLE`). Die Überschrift wird jetzt korrekt angezeigt.


## [1.6.6] — 08.10.2026
Hinweis: Dieses Paket wurde am 08.10.2026 unter derselben Versionsnummer und
demselben Download-Link um den Status-Titel-Fix und die Dialogwert-Auflösung
im Regelwerk-Import ergänzt.

### Neu: Regelwerk-Import findet Dialogwerte wieder

Regeln mit festem Wert (zum Beispiel „Rolle = Administrator") nehmen beim
**Export** jetzt den Werttitel mit. Beim **Import** in ein anderes System wird
der passende Wert darüber gefunden, auch wenn er dort eine andere interne
Nummer hat. Fehlt der Wert im Zielsystem, wird die Regel übersprungen und im
Bericht als „Dialogwert nicht gefunden" ausgewiesen.


### Behoben: CMDB-Status im Auswertungs-Filter ohne Titel

Im Regelwerk-Editor zeigte der **Auswertungs-Filter** die CMDB-Status nur als
leere Kästchen ohne Beschriftung. Die Titel („In Betrieb", „Geplant" …) werden
wieder angezeigt, auch für selbst angelegte Status. Betroffen waren die
Versionen 1.6.2 bis 1.6.5.


### Behoben: Auswahllisten im Regelwerk ließen sich nicht scrollen

Im Regelwerk-Editor ließ sich das Dropdown **„Kategorie hinzufügen"** nicht
scrollen — weder mit dem Mausrad noch mit dem Scrollbalken; die Liste sprang
immer wieder an den Anfang. Dasselbe galt für die Attribut-Auswahl innerhalb
einer Kategorie. Beide Listen scrollen jetzt wie erwartet und behalten ihre
Position auch, wenn Sie die Seite dahinter scrollen.

Zusätzlich prüft ein automatischer Browser-Test vor jeder Auslieferung
solche Bedienfehler, damit sie mit neuen Funktionen nicht erneut hineingeraten.

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

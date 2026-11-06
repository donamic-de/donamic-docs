---
title: Entsorgungsprozess
sidebar_position: 3
---

# Der Entsorgungsprozess

Sie starten einen Vorgang über **Entsorgung → Objekt entsorgen** und wählen dort
ein oder mehrere Objekte aus. Anschließend arbeiten Sie die Schritte nacheinander
ab. Jeder Schritt wird über **Angaben bestätigen und Schritt abschließen**
fixiert — erst dann öffnet sich der nächste. Datum und bearbeitende Person werden
dabei automatisch festgehalten, und der Fortschrittsbalken wächst von Schritt zu
Schritt.

<!-- TODO Screenshot: Entsorgungsformular mit Fortschrittsbalken -->

## Die Schritte

### Schritt 1 – Allgemeine Informationen
Zuständig ist üblicherweise das Team Infrastruktur. Hier werden die Grunddaten des
Objekts erfasst bzw. angezeigt (Modell, Hersteller, Inventar- und Seriennummer sind
schreibgeschützt aus dem Objekt übernommen), dazu die bisherige Nutzung, der Grund
der Einlagerung, ob eine **weitere Nutzung** vorgesehen ist und ob die
**Datenlöschung** erfolgt ist. Mit Abschluss dieses Schritts wechselt das Objekt in
den Status **In Entsorgung**.

#### Weitere Verwendung: eigene Werte anlegen

Das Feld **Weitere Verwendung** ist eine Auswahlliste, die Ihr Unternehmen selbst
pflegt. Sie wird bei der Installation bewusst **leer** ausgeliefert, weil jede
Organisation eigene Kategorien hat (z. B. Weitergabe an Mitarbeitende, Spende,
Verkauf, Rückgabe an den Leasinggeber).

So legen Sie einen neuen Wert an:

1. Klicken Sie neben der Auswahl auf **+ Neu**.
2. Geben Sie die Bezeichnung ein und bestätigen Sie mit **Übernehmen** oder der
   Eingabetaste. Mit **Abbrechen** bzw. Esc verwerfen Sie die Eingabe.
3. Der neue Wert steht sofort in der Liste und ist direkt ausgewählt. Er steht
   ab dann auch bei allen weiteren Entsorgungsvorgängen zur Verfügung.

Gibt es die Bezeichnung bereits (auch in anderer Groß-/Kleinschreibung), wird kein
doppelter Eintrag angelegt, sondern der vorhandene Wert ausgewählt.

:::info Berechtigung
Neue Werte anlegen kann nur, wer Schritt 1 abschließen darf (Recht **Entsorgungsschritt** für
Schritt 1, siehe [Berechtigungen](./berechtigungen.md)).
:::

### Schritt 2 – Sachliche Freigabe
Die Team-Leitung bestätigt, dass die bisherigen Angaben korrekt sind.

### Schritt 3 – Kaufmännische Freigabe
Die kaufmännisch verantwortliche Stelle gibt frei und erfasst u. a. den **aktuellen
Buchwert**.

### Schritt 4 – Ausbuchen der Anlagenbuchhaltung
Die Anlagenbuchhaltung bestätigt, dass das Anlagegut **ausgebucht** wurde.

### Schritt 5 – Entsorgung
Abschließend werden **Entsorgt am**, **Entsorgt durch** und der **Nachweis der
Entsorgung** erfasst. Mit **Entsorgung abschließen!** wird das Objekt endgültig auf
den Status **Entsorgt** gesetzt — je nach Konfiguration zusätzlich archiviert und/
oder in einen anderen Objekttyp umgewandelt.

:::warning Der Abschluss ist endgültig
Das Abschließen von Schritt 5 setzt das Objekt unwiderruflich auf **Entsorgt** und
führt die konfigurierten Folgeaktionen (Archivieren, Objekttyp ändern) aus. Prüfen
Sie die Angaben vor dem Abschluss sorgfältig.
:::

## Sammel-Entsorgung

Sie können mehrere Objekte gemeinsam entsorgen. Achten Sie darauf, dass die
gewählten Objekte demselben Vorgang zugeordnet sind — andernfalls erscheint der
Hinweis, dass die Objekte verschiedenen Entsorgungen zugewiesen sind.

## Vorgänge einsehen und archivieren

Laufende Vorgänge finden Sie unter **Entsorgungsaufträge**, abgeschlossene unter
**Entsorgungsaufträge (Archiv)**. Das Löschen eines Entsorgungsauftrags ist
unwiderruflich und wird vor der Ausführung noch einmal abgefragt.

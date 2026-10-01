---
title: Regelwerk
sidebar_position: 3
---

# Regelwerk

Der **Regel-Editor** erlaubt das Anlegen, Bearbeiten und Löschen von Regeln. Eine Regel
besteht aus:

- **Objekttyp** (z. B. Server, Switch).
- **Kategorie** (z. B. „Modell" oder eine Custom-Kategorie).
- **Attribut** (das konkrete Feld in der Kategorie).
- **Regeltyp** — die zentrale Logik:

| Regeltyp | Bedeutung |
|---|---|
| **Muss ausgefüllt sein** | Das Feld **muss** einen Wert enthalten. |
| **Darf nicht ausgefüllt sein** | Das Feld muss **leer** bleiben. |
| **Bestimmter Wert** | Ein Auswahlfeld muss einen bestimmten Wert haben. |
| **Mindestanzahl Einträge** | Eine mehrwertige Kategorie muss mindestens **N Einträge** enthalten. |
| **Mindestens ein Eintrag gefüllt** | Eine mehrwertige Kategorie: mindestens ein Eintrag hat das Feld gefüllt. |
| **Mindestens ein Eintrag mit Wert** | Eine mehrwertige Kategorie: mindestens ein Eintrag hat das Feld auf einem bestimmten Wert. |
| **Kein Eintrag gefüllt** | Eine mehrwertige Kategorie: **kein** Eintrag hat das Feld gefüllt. |

Über das Speichern-Symbol werden alle Regeln des Objekttyps gemeinsam gespeichert.
Danach kann direkt eine erneute Auswertung angestoßen werden.

## Mehrere Regeln für dasselbe Attribut

Bei **mehrwertigen** Kategorien — der Kontaktzuweisung etwa — dürfen mehrere Regeln
auf demselben Attribut liegen. Typischer Fall: Ein Server soll sowohl einen Kontakt
mit der Rolle **Benutzer** als auch einen mit der Rolle **Administrator** haben. Legen
Sie dafür einfach zwei Regeln vom Typ *Mindestens ein Eintrag mit Wert* an. Beide
zählen als eigene Prüfung, und beide sind erfüllbar, weil zwei verschiedene Einträge
sie abdecken.

Bei **einwertigen** Attributen bleibt es bei einer Regel: Dort gibt es nur einen Wert,
eine zweite Regel wäre entweder überflüssig oder nie erfüllbar. Der Editor bietet ein
bereits belegtes Attribut deshalb nur bei mehrwertigen Kategorien erneut an.

## Widersprüche

Beim Speichern prüft Data Quality, ob sich Regeln widersprechen.

**Abgelehnt** werden Kombinationen, die kein Objekt je erfüllen kann — etwa „muss
gepflegt sein" zusammen mit „darf nicht gepflegt sein" auf demselben Feld. Solche
Paare sind nicht bloß unschön: Das Objekt bliebe dauerhaft unter 100 % und würde nie
als konform gelten. Das Regelwerk wird in diesem Fall **nicht gespeichert**; die
betroffenen Regeln werden einzeln benannt.

**Als Hinweis gemeldet** werden überflüssige Kombinationen, bei denen eine Regel die
andere bereits einschließt — etwa ein geforderter Wert neben „muss gepflegt sein".
Gespeichert wird trotzdem.

## Eigene Sprachkonstanten

Benennen Sie Kategorien oder Felder über eigene Sprachkonstanten, zeigt Data Quality
den übersetzten Text — unabhängig davon, wie die Konstante heißt.

:::note Beide Sprachdateien anlegen
Die Konstanten müssen in `src/lang/de_custom.inc.php` **und**
`src/lang/en_custom.inc.php` stehen. Gibt es nur die deutsche Datei, zeigt die
englische Oberfläche die rohe Konstante. Das ist Verhalten von i-doit selbst und gilt
für die gesamte Oberfläche, nicht nur für Data Quality.
:::


## Regelwerk aus einem Objekt lernen

Wer Data Quality in einer bereits gepflegten Umgebung einführt, muss das Regelwerk
nicht Feld für Feld von Hand aufbauen. Über **„Aus Objekt lernen"** wählen Sie ein
Objekt aus, das exemplarisch gut gepflegt ist — etwa einen Server, bei dem alles
hinterlegt ist, was Sie sich für alle Server wünschen. Data Quality prüft, welche
Felder dort gefüllt sind, und schlägt daraus passende Regeln vor.

**So gehen Sie vor:**

1. Im Regelwerk auf **„Aus Objekt lernen"** klicken.
2. Objekt suchen — über den Namen oder direkt über die Objekt-ID mit vorangestellter
   Raute, z. B. `#1373`. (Beziehungsobjekte werden ausgeblendet, da sie sich nicht als
   Vorlage eignen.)
3. Vorschläge prüfen. Sie sind in drei Abschnitte gegliedert:

| Abschnitt | Bedeutung |
|---|---|
| **Noch nicht im Regelwerk** | Am Objekt gepflegte Felder, für die noch keine Regel existiert. Vorausgewählt. |
| **Bereits im Regelwerk** | Regeln, die es schon gibt und die das Objekt erfüllt. Bleiben erhalten. |
| **Im Regelwerk, aber von diesem Objekt nicht erfüllt** | Bestehende Regeln, die selbst dieses gut gepflegte Objekt nicht erfüllt — ein guter Anlass zu prüfen, ob die Regel wirklich gewollt ist. |

4. Auswahl anpassen. Das Häkchen bedeutet durchgängig: **„soll am Ende im Regelwerk
   stehen"**. Felder, die etwa nur einmalig per Import befüllt wurden und künftig nicht
   gepflegt werden sollen, haken Sie einfach ab. Bei einer **bestehenden** Regel
   bedeutet das Abhaken, dass sie **entfernt** wird — die Zeile wird dann rot und
   durchgestrichen dargestellt.
5. **Übernehmen** klicken. Die Änderungen landen zunächst nur im Editor.
6. Erst **Speichern** schreibt das Regelwerk fest. So können Sie alles vorher in Ruhe
   prüfen und korrigieren.

**Gut zu wissen:**

- Existiert für den Objekttyp noch kein Regelwerk, wird es angelegt. Gibt es bereits
  eines, werden nur die fehlenden Felder ergänzt — es entstehen keine Dubletten.
- Bei **mehrwertigen Kategorien** (z. B. Kontaktzuweisung) wird „mindestens ein
  Eintrag" vorgeschlagen. Regeln für einzelne Felder innerhalb solcher Kategorien
  werden zusätzlich angeboten, sind aber nicht vorausgewählt, da die Kategorie-Regel
  den Normalfall bereits abdeckt.
- Bei **Auswahlfeldern** können Sie wählen, ob das Feld nur gefüllt sein muss oder ob
  genau der Wert des Referenzobjekts gefordert wird (z. B. eine bestimmte Rolle).
- Felder, die auf **„Keine Angabe"** stehen, gelten bewusst als *nicht* gepflegt und
  werden nicht vorgeschlagen.
- Ist eine Kategorie dem Objekttyp gar nicht zugewiesen, wird eine darauf bestehende
  Regel entsprechend markiert. Solche Regeln können nie erfüllt werden und lassen sich
  hier direkt entfernen.

## Analyse (Drill-Down)

Aus jeder Liste lässt sich per Klick auf einen Objekttyp die **Detail-Analyse** öffnen.
Sie zeigt:

- Alle Objekte des Typs mit individuellem Score
- Pro Objekt: welche Regeln verletzt sind
- **Inline-Schnellkorrektur**: fehlende Werte direkt in der Tabelle eintragen.
- Aktionen: einzelne Regel für ein Objekt ausnehmen oder das Objekt komplett ausnehmen.
- **Bulk-Aktionen**: Über die Mehrfachauswahl (Checkboxen pro Zeile) lassen sich mehrere
  Objekte gleichzeitig bearbeiten — z. B. als Sammel-Ausnahme markieren. Details siehe
  [Komfortfunktionen](./komfortfunktionen.md).

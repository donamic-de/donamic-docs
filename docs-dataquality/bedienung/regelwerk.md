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

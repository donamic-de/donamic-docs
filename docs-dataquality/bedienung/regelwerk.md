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
| `filled` / `required` | Feld **muss** ausgefüllt sein. |
| `not_filled` | Feld darf **nicht** ausgefüllt sein. |
| `specific_value` | Dialog-Feld muss einen bestimmten Wert haben. |
| `min_entries` | Mehrwertige Kategorie muss mindestens **N Einträge** enthalten. |
| `entry_filled` | Mehrwertige Kategorie: **mindestens ein Eintrag** mit gefülltem Feld. |
| `entry_with_value` | Mehrwertige Kategorie: mindestens ein Eintrag mit Feld = bestimmter Wert. |
| `entry_not_filled` | Mehrwertige Kategorie: **kein** Eintrag mit gefülltem Feld. |

Über das Speichern-Symbol werden alle Regeln des Objekttyps zusammen persistiert. Im
Hintergrund läuft danach optional eine sofortige Neuauswertung.

## Analyse (Drill-Down)

Aus jeder Liste lässt sich per Klick auf einen Objekttyp die **Detail-Analyse** öffnen.
Sie zeigt:

- Alle Objekte des Typs mit individuellem Score
- Pro Objekt: welche Regeln verletzt sind
- **Inline-Quickfix**: fehlende Werte direkt in der Tabelle eintragen (`quickSave`).
- Aktionen: Regel ausnehmen (`exempt`), Objekt komplett ausnehmen (`exemptObject`).
- **Bulk-Aktionen**: Über die Mehrfachauswahl (Checkboxen pro Zeile) lassen sich mehrere
  Objekte gleichzeitig bearbeiten — z. B. als Sammel-Ausnahme markieren. Details siehe
  [Komfortfunktionen](./komfortfunktionen.md).

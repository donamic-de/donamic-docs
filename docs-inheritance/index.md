---
slug: /
title: Übersicht
sidebar_position: 1
---

# donamic Inheritance

Mit **donamic Inheritance** (Vererbung) pflegen Sie einen Wert nur noch an einer
einzigen Stelle — das Add-on überträgt ihn automatisch auf alle verbundenen
Objekte. So sparen Sie sich die mehrfache Pflege identischer Angaben und halten
Ihre CMDB widerspruchsfrei.

## Wofür ist das gut?

In einer CMDB wiederholen sich viele Angaben: Alle Geräte in einem Rechenzentrum
teilen denselben Standort, alle Server eines Kunden dieselbe Kostenstelle, alle
Komponenten eines Racks dieselbe Etage. Diese Werte an jedem einzelnen Objekt von
Hand einzutragen ist mühsam und fehleranfällig.

Inheritance löst das über **Vererbungsregeln**: Sie legen einmal fest, welcher
Wert von welchem „Quell"-Objekt über welche Beziehung an welche „Ziel"-Objekte
weitergegeben wird. Ab dann geschieht die Übertragung automatisch — immer dann,
wenn Sie ein Quell-Objekt speichern.

## Ein Beispiel

> An einem **Standort**-Objekt tragen Sie die zuständige Abteilung ein. Über die
> Regel „vererbe die Abteilung entlang der Standort-Beziehung an alle Geräte"
> erscheint diese Abteilung anschließend automatisch an jedem Server, Switch und
> Drucker an diesem Standort — ohne dass Sie die Objekte einzeln öffnen müssen.

## Wo finde ich das Add-on?

Nach der Installation erscheint im i-doit-Hauptmenü der Eintrag **Vererbung** mit
zwei Unterpunkten:

- **Konfiguration** – hier legen Sie Ihre Vererbungsregeln an und verwalten sie.
- **Log** – hier sehen Sie, welche Werte wann an welche Objekte vererbt wurden.

Wie Sie das Add-on einrichten, lesen Sie unter [Installation](./installation.md).
Wie Sie Ihre erste Regel anlegen, zeigt das Kapitel
[Vererbungsregeln](./regeln.md).

<!-- TODO Screenshot: Menüeintrag "Vererbung" mit Konfiguration und Log -->

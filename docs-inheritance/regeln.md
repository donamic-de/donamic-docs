---
title: Vererbungsregeln
sidebar_position: 3
---

# Vererbungsregeln anlegen

Eine **Vererbungsregel** beschreibt, welcher Wert von wo nach wo übertragen wird.
Sie verwalten Ihre Regeln unter **Vererbung → Konfiguration**. Die Übersicht
zeigt alle Regeln mit einer Ampel: **grün** = aktiv, **rot** = inaktiv.

Klicken Sie auf **Hinzufügen**, um eine neue Regel anzulegen, oder auf eine
bestehende Regel, um sie zu bearbeiten.

<!-- TODO Screenshot: Regel-Übersicht mit Ampel-Status -->

## Grunddaten

| Feld | Bedeutung |
|---|---|
| **Titel** | Ein sprechender Name für die Regel, z. B. „Standort-Abteilung an Geräte". |
| **Aktiv** | Schaltet die Regel ein oder aus. Inaktive Regeln werden nicht ausgeführt. |

## Bereich „Vererbung"

Hier legen Sie fest, **was** von **wo** nach **wo** vererbt wird.

| Feld | Bedeutung |
|---|---|
| **Wird angewendet beim Speichern von** | Der oder die Objekttypen, deren Speichern die Vererbung auslöst — die **Quelle**. Beispiel: „Standort". |
| **Über Beziehungen vom Typ** | Über welche Art von Beziehung die Zielobjekte gefunden werden. Auch die physische Verortung („Standort") lässt sich hier als Beziehung wählen. |
| **Zu vererbende Attribute** | Die konkreten Felder, deren Werte übertragen werden. Pro Regel sind **maximal fünf** Attribute möglich. |
| **Vererbung gilt für** | Der oder die Objekttypen, auf die die Werte geschrieben werden — die **Ziele**. Beispiel: „Server", „Switch". |

## Bereich „Optionen"

Diese Einstellungen steuern, wie weit und in welche Richtung die Vererbung reicht.

| Option | Bedeutung |
|---|---|
| **Richtung der Beziehungsiteration** | Legt fest, in welche Richtung entlang der Beziehungen gesucht wird: **Master → Slave** (vom übergeordneten zum untergeordneten Objekt) oder **Slave → Master** (umgekehrt). |
| **Ebenen der Vererbung** | Wie viele Beziehungs-Ebenen tief der Wert weitergereicht wird — **1** bis **5** oder **Alle**. Bei „Alle" wird über alle verbundenen Ebenen kaskadiert. |
| **Kategoriedaten erstellen, falls kein Datensatz existiert?** | Legt am Zielobjekt den benötigten Kategorie-Eintrag automatisch an, falls dort noch keiner vorhanden ist. Andernfalls werden nur bereits vorhandene Einträge aktualisiert. |
| **Nur direkte Beziehungen berücksichtigen** | Beschränkt die Vererbung auf unmittelbar verbundene Objekte und ignoriert weiter entfernte. |

Speichern Sie die Regel abschließend. Ab sofort greift sie automatisch, sobald
ein passendes Quell-Objekt gespeichert wird.

:::warning Werte am Zielobjekt werden überschrieben
Die Vererbung schreibt die Werte in die Zielobjekte. Ein dort bereits von Hand
eingetragener Wert kann dadurch überschrieben werden. Testen Sie eine neue Regel
daher zunächst an wenigen Objekten, bevor Sie sie breit aktivieren — insbesondere
bei hoher Ebenen-Zahl oder „Alle", wo eine Regel viele Objekte auf einmal
betreffen kann.
:::

## Wie sehe ich, ob es funktioniert hat?

Jeder Vererbungslauf erzeugt einen Eintrag im [Log](./protokoll.md). Zusätzlich
erscheint am Zielobjekt ein Logbuch-Eintrag der Form „Wert(e) … wurden durch …
vererbt".

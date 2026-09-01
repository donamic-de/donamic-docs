---
title: Designs verwalten
sidebar_position: 1
---

# Designs verwalten

Unter **Design → Konfiguration** sehen Sie zunächst eine Liste aller angelegten
Designs mit ihrem Status (aktiv ja/nein). Von hier aus steuern Sie alles Weitere.

<!-- TODO Screenshot: Design-Liste mit Aktionen -->

## Aktionen in der Übersicht

| Aktion | Wirkung |
|---|---|
| **Neu** / **Bearbeiten** | Öffnet den Design-Editor zum Anlegen oder Ändern eines Designs. |
| **Löschen** | Entfernt ein Design. Ist das gelöschte Design gerade aktiv, wird automatisch auf das Standarddesign zurückgesetzt. |
| **Design anwenden** | Aktiviert das gewählte Design für **alle** i-doit-Benutzer. |
| **Design zurücksetzen** | Stellt das i-doit-Standarddesign wieder her. |
| **Design exportieren** | Speichert das Design als JSON-Datei (zur Sicherung oder Übertragung). |
| **Design importieren** | Lädt ein zuvor exportiertes Design oder eine [mitgelieferte Vorlage](./vorlagen.md) aus einer JSON-Datei. |

## Ein Design anlegen und aktivieren

1. Klicken Sie auf **Neu** und vergeben Sie einen Titel.
2. Stellen Sie im Editor Logo, Farben und Schaltflächen-Stil ein (siehe
   [Gestaltungsoptionen](./gestaltung.md)). Über die Live-Vorschau
   („Änderungen sofort darstellen") sehen Sie Ihre Anpassungen direkt.
3. **Speichern** Sie das Design.
4. Wählen Sie es in der Liste aus und klicken Sie auf **Design anwenden**.

:::warning Erst speichern, dann anwenden
Nur gespeicherte Designs lassen sich aktivieren. Nicht gespeicherte Änderungen im
Editor werden beim Anwenden nicht übernommen.
:::

:::tip Die Seite lädt automatisch neu
Nach **Anwenden** oder **Zurücksetzen** lädt i-doit die Seite automatisch neu —
das neue Aussehen erscheint sofort. Sollte in Ausnahmefällen noch das alte Design
zu sehen sein, erzwingen Sie ein Neuladen mit **Strg + F5** (Windows) bzw.
**⌘ + Umschalt + R** (Mac).
:::

## Löschen ist endgültig

Das Löschen eines Designs ist unwiderruflich und wird vorher noch einmal abgefragt.
Beim Import werden nur kompatible Design-Dateien akzeptiert; andernfalls erscheint
ein entsprechender Hinweis.

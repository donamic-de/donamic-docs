---
title: Anhang
sidebar_position: 7
---

# Anhang

## Welcher Farbwert wirkt wo?

Die wichtigsten Gestaltungsbereiche und ihre Wirkung in der Oberfläche sowie in
der [Druckansicht](./bedienung/druckansicht.md):

| Gestaltungsbereich | Oberfläche | Druckansicht |
|---|---|---|
| **Logo / Logo-Hintergrund** | Logo im Kopfbereich | Logo im Druckkopf |
| **Navigation** | Hauptmenü-Leiste (mit Zweitfarbe als Verlauf) | Trennlinie, Objekt-Titelzeilen, Rahmen |
| **Aktive Navigation** | Aktiver Menüpunkt | Kategorie-Titelzeilen |
| **Schaltflächen** | Alle Buttons inkl. Hover/Aktiv/Deaktiviert | Tabellenköpfe |
| **Überschriften** | Inhalts-Überschriften | — |
| **Formularfelder / Links** | Eingabefelder, Verweise | — |
| **Inhalts-Hintergrund** | Flächen hinter dem Inhalt (hell/dunkel) | — (bleibt weiß) |
| **Farbige Infoboxen** | Hinweis-, Warn-, Fehler- und Erfolgsboxen | — |

## Speicherorte

| Was | Wo |
|---|---|
| Designs (Titel, Farben, Logo, Beschreibung) | Datenbanktabelle `donamic_design` in der Mandanten-Datenbank |
| Generierte Stylesheets | `src/classes/modules/donamic_design/assets/donamic_design_style_<mandant>.css` und `…_print_<mandant>.css` |
| Angewendetes Logo | `src/classes/modules/donamic_design/assets/donamic_design_logo.<endung>` |
| Lizenzschlüssel | Mandanten-Einstellungen (`donamic.license.data`) — übersteht i-doit- und Add-on-Updates |

Die generierten Dateien entstehen beim Klick auf **Design anwenden** und werden
beim Zurücksetzen oder bei einer Deinstallation entfernt. Die Designs selbst und
der Lizenzschlüssel bleiben bei einem Add-on-Update erhalten.

## Technische Rahmendaten

| Punkt | Wert |
|---|---|
| Logo-Upload | max. 2 MB; PNG, JPG/JPEG, GIF, SVG, WebP, ICO |
| Geltungsbereich eines Designs | mandantenweit, für alle Benutzer |
| i-doit Edition | Pro |

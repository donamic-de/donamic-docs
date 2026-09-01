---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

## [1.1.0] — 01.09.2026

### Neu

- **Druckansicht im Design:** Die Druckansicht der Objektlisten übernimmt jetzt
  Ihr Logo und Ihre Designfarben (Objekt-Titelzeilen, Kategorie-Überschriften,
  Tabellenköpfe) — die Grundfläche bleibt druckfreundlich weiß. Details im
  Kapitel [Druckansicht](./bedienung/druckansicht.md).
- **Sechs mitgelieferte Design-Vorlagen** (donamic Carbon, Copper, Indigo,
  Nordic, Rosé, Sage) zum Import als Startpunkt — siehe
  [Mitgelieferte Vorlagen](./bedienung/vorlagen.md).
- **Logo entfernen:** Ein hochgeladenes Logo lässt sich im Design-Editor wieder
  löschen; nach dem Speichern erscheint das i-doit-Standardlogo.

### Verbessert

- Nach **Design anwenden** und **Design zurücksetzen** lädt die Seite automatisch
  neu — das manuelle Leeren des Browser-Caches entfällt.
- Neues Logo, geänderte Farben und die Druckansicht erscheinen ohne veraltete
  zwischengespeicherte Stände (durchgängige Cache-Steuerung).

### Behoben

- Direkt nach dem Anmelden fehlte das Design bis zum ersten Neuladen der Seite.
- Ein gespeichertes Logo konnte beim erneuten Speichern der Konfiguration
  verloren gehen (zu große Logos wurden unbemerkt beschädigt; bei JPG- und
  SVG-Logos ging die Dateiendung verloren; ein zuvor angeklicktes
  „Logo entfernen" wirkte nach einem Neuladen unbeabsichtigt nach).
- Im Dialog „Anpassung der Kategorien" der Datenstruktur wurden Listenzeilen
  großflächig grau hinterlegt und kleine Schaltflächen aufgebläht.
- Fehler beim Anwenden bzw. Zurücksetzen eines Designs über die Liste behoben.
- Ein Update des Add-ons entfernt den hinterlegten donamic-Lizenzschlüssel nicht
  mehr.

### Sicherheit

- Logo-Upload gehärtet: Begrenzung auf 2 MB, Format-Whitelist
  (PNG, JPG/JPEG, GIF, SVG, WebP, ICO), fester Ablage-Dateiname und klare
  Fehlermeldungen statt stillschweigendem Fehlschlag.

## [1.0.1]

- Erste in der Dokumentation erfasste Version.

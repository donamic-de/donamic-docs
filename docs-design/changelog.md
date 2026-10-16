---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

## [1.1.5] — 16.10.2026

Diese Version fasst auch die Änderungen der Versionen 1.1.1 bis 1.1.4 zusammen.

### Neu

- **Zwölf neu gestaltete Design-Vorlagen** in drei Gruppen: hell mit heller
  Navigation (Light, Nordic, Rosé, Sage), hell mit farbiger Kopfleiste
  (Signature, Aurora, Copper, Indigo, Petrol) und durchgehend dunkel (Carbon,
  Ember, Volt). Neu dabei sind **donamic Light** und **donamic Signature** in den
  Farben der donamic-Website sowie Aurora, Ember, Petrol und Volt. Alle
  Vorlagen bringen das donamic-Logo mit, siehe [Mitgelieferte Vorlagen](./bedienung/vorlagen.md).
- **Neue Designs starten im i-doit-Standardlook:** Ein neu angelegtes Design ist
  mit den Farben des i-doit-Standarddesigns vorbelegt, sodass „Speichern und
  Anwenden" zunächst nichts verfremdet.

### Verbessert

- **Ruhigere Flächen und sichtbarer Hover:** Kopfbänder, Tabellen-Zebra und
  Fußleisten nutzen die zweite Farbe des **Inhalts-Hintergrunds**, Zeilen und
  Einträge heben sich beim Überfahren in einem zarten Ton der Link-Farbe ab,
  Rahmen und Trennlinien sind auf hellen wie dunklen Designs sichtbar. Prüfen
  Sie bei eigenen Designs, ob die zweite Hintergrundfarbe passend gesetzt ist.
- Kompatibel mit i-doit 39 und vorbereitet auf i-doit 40.

### Behoben

- **Lizenzseite ohne weitere donamic-Add-ons:** War Design das einzige
  donamic-Add-on, blieb die Seite **donamic Lizenzen** leer, und der
  Lizenzschlüssel ließ sich nicht eintragen. *(1.1.5)*
- Der Link **donamic Lizenzen verwalten** im Lizenzhinweis funktioniert jetzt auch,
  wenn i-doit in einem Unterverzeichnis läuft. *(1.1.5)*
- **Große Logos:** Auf Installationen, die von einer älteren Version
  aktualisiert wurden, wurden große Logos beim Speichern abgeschnitten. Die
  Datenbank wird beim Update jetzt richtig erweitert; lässt sich ein Logo
  trotzdem nicht vollständig speichern, erscheint eine Meldung, statt dass es
  unbemerkt beschädigt wird.
- **Mehrere Mandanten:** „Design anwenden" in einem Mandanten überschrieb das Logo
  der anderen Mandanten. Jeder Mandant behält jetzt sein eigenes Logo.
- In dunklen Designs sind der rote Eintrag in Auswahlmenüs und die Fußleiste
  von Dialogfenstern wieder lesbar.
- Schaltflächen, die nur ein Symbol zeigen, sind wieder mittig ausgerichtet.
- Schlägt ein Design-Import auf dem Server fehl, erscheint eine verständliche
  Fehlermeldung statt keiner Rückmeldung.

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

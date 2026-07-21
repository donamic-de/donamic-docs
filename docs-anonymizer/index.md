---
slug: /
title: Übersicht
sidebar_position: 1
---

# donamic Anonymizer

**donamic Anonymizer** ersetzt sämtliche echten Daten eines Mandanten durch
zufällige, unkenntliche Werte. So können Sie eine Kopie Ihrer i-doit-Installation
gefahrlos für Demos, Schulungen, Tests oder die Weitergabe an Support und
Dienstleister verwenden — ohne echte Kunden-, Personen- oder Netzdaten
preiszugeben.

:::danger Diese Aktion ist unwiderruflich
Der Anonymizer überschreibt echte Daten **endgültig** — es gibt keine
Rückabwicklung und keine Sicherheitsabfrage. Führen Sie ihn **niemals** auf einer
produktiven Installation aus, die Sie weiter benötigen, und legen Sie **immer
vorher ein Backup bzw. eine separate Kopie** an. Details unter
[Anwendung](./anwendung.md).
:::

## Was wird anonymisiert?

Der Anonymizer ersetzt unter anderem:

- Objektnamen sowie Erstell- und Änderungsdaten
- Personen-, Personengruppen- und Organisationsdaten
- E-Mail-Adressen, Benutzernamen und Passwörter
- Anschriften und Adressen
- Seriennummern
- Port-Namen und MAC-Adressen (physisch und logisch)
- Hostnamen und Domains
- IP-Adressen und Netze
- SIM-Karten
- LDAP-Daten (optional erhaltbar)
- Logbuch-Einträge und Systemeinstellungen

Beziehungstitel werden am Ende automatisch neu aufgebaut, damit die anonymisierte
Installation in sich stimmig bleibt.

## Wie wird es bedient?

Der Anonymizer hat **keine Bedienoberfläche** in i-doit. Er wird als
Konsolenbefehl auf dem Server ausgeführt. Die Installation beschreibt
[Installation](./installation.md), den Ablauf und alle Optionen das Kapitel
[Anwendung](./anwendung.md).

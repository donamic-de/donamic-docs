---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Data Quality in verständlicher Form zusammen.

## [1.4.1] — 21.07.2026

Sicherheitsaktualisierung vor der Auslieferung als Standardpaket. Die Auswertungen selbst bleiben unverändert.

### Sicherheit
- Die zentrale donamic-Lizenzverwaltung erfordert jetzt das entsprechende Verwaltungsrecht in i-doit. Zuvor konnte jeder angemeldete Benutzer Lizenzen aller installierten donamic-Add-ons ändern oder entfernen.
- Zusätzlicher Schutz vor gefälschten Anfragen bei Lizenz- und Datenqualitäts-Aktionen.
- Frei wählbare Bezeichnungen in der Kategorie „Datenqualität" werden jetzt sicher dargestellt (Schutz vor eingeschleustem Schadcode).

## [1.4.0] — 25.06.2026

### Behoben
- Nutzungsanalyse für Mehrfach-Auswahlfelder (z. B. „Suchdomänen" bei Hostadressen): In Benutzung befindliche Werte wurden zuvor teils fälschlich als „nicht in Benutzung" gemeldet. Die Auswertung arbeitet jetzt zuverlässig.
- Beim Bereinigen und Umweisen von Werten wird nun ausschließlich der tatsächlich betroffene Wert verändert.
- Die Seite „donamic Lizenzen" ist jetzt auch dann verfügbar, wenn ausschließlich Data Quality installiert ist (zuvor war zusätzlich das Dashboards-Add-on nötig).
- Installationen in einem Unterordner (z. B. `host/i-doit`): Die Lizenzseite ist jetzt zuverlässig erreichbar; frühere Weiterleitungsschleifen und Sitzungsverluste treten nicht mehr auf.

### Neu
- Neuer Wert-Status „Unbekannt": Lässt sich die Nutzung eines Auswahlwerts nicht eindeutig bestimmen, wird er als „Unbekannt" markiert und nicht mehr zum Löschen angeboten. Das schützt vor dem versehentlichen Entfernen genutzter Werte.

## Frühere Versionen

Ältere Versionen umfassten die Einführung der Datenqualitäts-Auswertungen (Compliance-Score, Regelwerk, Kategorie-Nutzung) sowie fortlaufende Verbesserungen und Fehlerbehebungen.

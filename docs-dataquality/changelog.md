---
title: Änderungshistorie
sidebar_position: 90
---

# Änderungshistorie

Diese Seite fasst die wichtigsten Neuerungen und Verbesserungen von Data Quality in verständlicher Form zusammen.

## [1.6.1] — 12.08.2026

### Neu: Benachrichtigungen einrichten — und ein eigener Cron-Job

Der E-Mail-Bericht war zwar im Add-on vorhanden, ließ sich bisher aber **nicht über die
Oberfläche einstellen**. Das ist jetzt behoben:

- Im **Regelwerk** gibt es den neuen Abschnitt **Benachrichtigungen**: aktivieren,
  Zeitplan (täglich, wöchentlich mit Wochentag, monatlich), Uhrzeit und Empfänger
  (Personen oder Gruppen aus der CMDB, mit Suchfeld).
- Gespeichert wird zusammen mit dem Regelwerk.

**Auswertung und Versand laufen jetzt über einen eigenen Cron-Job.** Ein einziger Eintrag
erledigt beides; die bisherige Behelfslösung über einen angemeldeten Aufruf entfällt. Der
Eintrag darf ruhig stündlich laufen — das Add-on entscheidet selbst, wann eine
Benachrichtigung fällig ist, holt verpasste Läufe nach und verschickt nie doppelt.

Die Einrichtung ist im Kapitel [Konfiguration](konfiguration) beschrieben.

## [1.6.0] — 11.08.2026

### Neu: Regelwerk aus einem Objekt lernen

Data Quality wird meist dort eingeführt, wo schon gepflegte Daten liegen. Statt das
Regelwerk Feld für Feld aufzubauen, wählen Sie im Regelwerk jetzt einfach ein
**exemplarisch gut gepflegtes Objekt** aus. Data Quality schaut nach, welche Felder
dort gefüllt sind, und schlägt daraus Regeln vor — für Objekttypen ohne Regelwerk wird
eines angelegt, bei vorhandenem Regelwerk werden nur die fehlenden Felder ergänzt.

- Objektsuche über den Namen oder direkt über die Objekt-ID (z. B. `#1373`).
- Die Vorschläge sind übersichtlich getrennt in „noch nicht im Regelwerk", „bereits im
  Regelwerk" und „im Regelwerk, aber von diesem Objekt nicht erfüllt".
- Jeder Eintrag ist einzeln an- und abwählbar. Bestehende Regeln lassen sich damit auch
  **gezielt entfernen** — praktisch für Felder, die nur per Import befüllt wurden und
  künftig nicht gepflegt werden sollen.
- Bei Auswahlfeldern können Sie entscheiden, ob das Feld nur gefüllt sein muss oder ob
  genau der Wert des Referenzobjekts gefordert wird.
- Übernommene Vorschläge landen zunächst nur im Editor — gespeichert wird erst mit
  „Speichern", sodass Sie alles vorher prüfen können.

Felder, die auf „Keine Angabe" stehen, gelten dabei bewusst als nicht gepflegt.

### Behoben
- Die Auswertung „Doppelte Bezeichner" brach ab, wenn ein doppelter Wert rein aus
  Ziffern bestand.

## [1.5.0] — 05.08.2026

Wartungs- und Performance-Release. Bedienung und Auswertungsergebnisse bleiben unverändert.

### Schneller
- Die Kategorie-Nutzungsanalyse und das Analyse-Dashboard laden in großen Umgebungen deutlich schneller, da im Hintergrund erheblich weniger Datenbankabfragen nötig sind.
- Sammelaktionen (z. B. Ausnahmen für viele Objekte gleichzeitig setzen oder aufheben) werden spürbar schneller verarbeitet.

### Intern
- Umfangreiche interne Modernisierung des Add-ons für bessere Wartbarkeit und als Vorbereitung für die Auslieferung als i-doit-Standardpaket. Dies hat keine Auswirkungen auf Bedienung oder Ergebnisse.

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

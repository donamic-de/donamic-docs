---
title: Datenquellen
sidebar_position: 5
---

# Datenquellen

Datenquellen stellen Daten **außerhalb der CMDB** für Dashboards bereit: CSV-Dateien
und externe Datenbanken. Sie werden zentral verwaltet und in den Widgets
[CSV-Datei](./widgets.md#csv-datei) und [Externe Datenbank](./widgets.md#externe-datenbank)
ausgewählt.

:::info Nur für Administratoren
Datenquellen legt an, ändert und löscht nur, wer das **Admin-Recht** für Dashboards Pro
besitzt. Dashboard-Editoren sehen die freigegebenen Quellen in der Widget-Konfiguration
und wählen sie dort aus. Die Verwaltung erreichen Sie über den Menüpunkt
**Datenquellen** in Dashboards Pro oder den Direktlink in der Widget-Konfiguration.
:::

## CSV-Datei

Eine CSV-Datenquelle liest eine Datei aus dem Mandanten-Verzeichnis
`imports/<Mandanten-ID>/donamic_dashboard/` der i-doit-Installation.

| Feld | Beschreibung |
|---|---|
| Bezeichnung | Name, unter dem die Quelle in Widgets erscheint |
| Datei | Vorhandene Datei aus dem Verzeichnis wählen oder über **Hochladen** ablegen (max. 20 MB) |
| Trennzeichen | Automatisch erkannt (Semikolon, Komma, Tabulator, Pipe) oder fest vorgeben |
| Kopfzeile | Erste Zeile enthält die Spaltennamen |
| Aktiv | Deaktivierte Quellen liefern in Widgets einen Hinweis statt Daten |

**Automatisierter Austausch:** Ein Export aus einem Drittsystem kann die Datei per Skript
oder Dateifreigabe direkt in das Verzeichnis schreiben — beim nächsten Laden zeigt das
Dashboard den neuen Stand. BOM und Encoding (UTF-8, Windows-1252) werden erkannt,
doppelte Spaltennamen in der Kopfzeile automatisch unterschieden.

## Externe Datenbank

Eine Datenbank-Datenquelle speichert die Verbindung zu einer MySQL/MariaDB- oder
PostgreSQL-Datenbank. Das Passwort wird verschlüsselt abgelegt.

| Feld | Beschreibung |
|---|---|
| Bezeichnung | Name, unter dem die Quelle in Widgets erscheint |
| Typ | MySQL/MariaDB oder PostgreSQL |
| Host, Port, Datenbank | Verbindungsziel (Hostname oder IP; Port optional) |
| Benutzer, Passwort | Zugangsdaten — empfohlen: ein Benutzer mit ausschließlich `SELECT`-Rechten |
| Aktiv | Deaktivierte Quellen liefern in Widgets einen Hinweis statt Daten |

**Verbindung testen** prüft die Zugangsdaten sofort; das Ergebnis wird mit Zeitstempel
gespeichert.

### Sicherheitsmodell

1. **Serverseitige SELECT-Sperre:** Widgets dürfen nur eine einzelne SELECT-Abfrage
   ausführen. Schreibende Anweisungen, mehrere Statements, Kommentartricks sowie
   blockierende oder dateilesende Funktionen (`SLEEP`, `BENCHMARK`, `LOAD_FILE`,
   `pg_sleep`, `pg_read_file`, `dblink` …) werden abgelehnt. Jede Abfrage erhält ein
   Zeilenlimit und ein Laufzeitlimit von 10 Sekunden.
2. **Nur-Lese-Datenbankbenutzer:** Vergeben Sie dem hinterlegten Benutzer ausschließlich
   Leserechte auf die benötigten Tabellen. Die Sperre in Dashboards Pro ist eine zweite
   Schicht, kein Ersatz.
3. **Treiberebene:** Mehrfach-Statements sind deaktiviert; Ergebnisse werden je Mandant
   und Verbindungsziel zwischengespeichert (Intervall im Widget einstellbar).

Zellen aus externen Quellen werden im Dashboard als reiner Text dargestellt.

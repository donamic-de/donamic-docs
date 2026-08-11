---
title: Konfiguration
sidebar_position: 5
---

# Konfiguration

Dieses Kapitel richtet sich an **Administratoren**.

## Profil & Benachrichtigungen

Das Add-on installiert ein **Default-Profil** mit folgenden Werten:

- Aktiv: **Ja**
- Benachrichtigungen: **deaktiviert**
- Zeitplan: **täglich**
- Zeit: **08:00 Uhr**

Im **Regelwerk** finden Sie den Abschnitt **Benachrichtigungen**. Dort lassen sich
einstellen:

- **Bericht per E-Mail versenden** — aktiviert den Versand (standardmäßig aus).
- **Zeitplan** — täglich, wöchentlich (mit Wochentag) oder monatlich.
- **Uhrzeit** — frühester Versandzeitpunkt.
- **Empfänger** — Personen oder Gruppen aus der CMDB. Bei Gruppen erhalten alle
  Mitglieder mit hinterlegter E-Mail-Adresse den Bericht.

Gespeichert wird zusammen mit dem Regelwerk über **Speichern**.

:::caution Ohne Cron-Job kein Versand
Die Einstellungen allein genügen nicht — Auswertung und Versand werden durch einen
**Cron-Job auf dem Server** ausgelöst (siehe nächster Abschnitt).
:::

## Auswertungs-Trigger

Die Auswertung lässt sich auf drei Wegen anstoßen:

1. **Manuell** über den Button **Auswertung starten** in der Übersicht (benötigt
   `Bearbeiten`).
2. **Pro Objekt** über die Schaltfläche **Jetzt auswerten** in der globalen Kategorie
   **Datenqualität** am Objekt.
3. **Zeitgesteuert (Cron-Job)** — empfohlen für produktive Umgebungen. Ein Aufruf erledigt
   Auswertung **und** Benachrichtigung:

   ```bash
   php /pfad/zu/i-doit/src/classes/modules/donamic_dataquality/cron/dq-cron.php --tenant=1
   ```

   Beispiel für die Crontab (stündlich, Mandant 1):

   ```
   0 * * * * www-data /usr/bin/php /var/www/html/src/classes/modules/donamic_dataquality/cron/dq-cron.php --tenant=1 >/dev/null 2>&1
   ```

   **Der Eintrag darf ruhig häufig laufen.** Das Add-on entscheidet selbst anhand von
   Zeitplan, Uhrzeit, Wochentag und dem letzten Versand, ob eine Benachrichtigung fällig
   ist. Dadurch wird ein verpasster Lauf (Wartung, Neustart) nachgeholt und nie doppelt
   verschickt. Bei mehreren Mandanten legen Sie je Mandant einen Eintrag an.

   Zusätzliche Optionen: `--dry-run` (nichts versenden oder speichern — gut zum Prüfen),
   `--force` (Fälligkeitsprüfung übergehen), `--no-evaluate` (nur versenden).

   Das Skript ist ausschließlich über die Kommandozeile ausführbar; ein Aufruf über den
   Browser wird abgewiesen.

Bei jeder Auswertung wird ein **Snapshot** des Compliance-Standes festgehalten —
daraus ergibt sich der Trend-Verlauf in der Übersicht.

## Globale Kategorie „Datenqualität"

Die Kategorie **Datenqualität** wird bei der Installation automatisch allen aktiven
Objekttypen zugewiesen. Sie zeigt am einzelnen Objekt:

- aktueller Score in Prozent
- Anzahl bestandener / gesamter Prüfungen
- Zeitpunkt der letzten Auswertung
- Button **Jetzt auswerten**

Soll die Kategorie auf bestimmten Objekttypen unterdrückt werden, ist das über die
i-doit-Bordmittel (Verwaltung → CMDB-Einstellungen → Objekttypen → Kategorien) möglich.

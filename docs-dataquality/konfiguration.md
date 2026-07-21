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

Über die Profilverwaltung (in der Übersicht zugänglich) lassen sich:

- Benachrichtigungen aktivieren (E-Mail-Versand an festgelegte Empfänger).
- Empfänger anlegen — Personen oder Gruppen aus der i-doit-CMDB.
- Zeitplan und Versandzeit anpassen.

## Auswertungs-Trigger

Die Auswertung lässt sich auf drei Wegen anstoßen:

1. **Manuell** über den Button **Auswertung starten** in der Übersicht (benötigt
   `Bearbeiten`).
2. **Pro Objekt** über die Schaltfläche **Jetzt auswerten** in der globalen Kategorie
   **Datenqualität** am Objekt.
3. **Zeitgesteuert (Cron-Job)** — empfohlen für produktive Umgebungen. Die zeitgesteuerte
   Auswertung erfolgt über einen automatisierten, angemeldeten Aufruf des Add-ons einmal
   täglich vor der Versandzeit (08:00 Uhr im Default). Wenden Sie sich für die
   Einrichtung an den donamic-Support; die Zugangsdaten und die genaue Adresse hängen von
   Ihrer Installation ab.

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

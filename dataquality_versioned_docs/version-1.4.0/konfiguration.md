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
- Empfänger anlegen — Personen oder Gruppen aus der i-doit-CMDB (Tabelle
  `donamic_dq_profile_recipient`).
- Zeitplan und Versandzeit anpassen.

## Auswertungs-Trigger

Die Auswertung lässt sich auf drei Wegen anstoßen:

1. **Manuell** über den Button **Auswertung starten** in der Übersicht (benötigt
   `Bearbeiten`).
2. **Pro Objekt** über die Schaltfläche **Jetzt auswerten** in der globalen Kategorie
   **Datenqualität** am Objekt (Funktion `dqEvaluateObject(objectId)` im Frontend).
3. **Per Cron-Job** — empfohlen für produktive Umgebungen. Das Add-on bringt **kein**
   eigenes CLI-Kommando mit; die zeitgesteuerte Auswertung erfolgt durch einen
   HTTP-Aufruf des API-Endpunkts `triggerEvaluation` (siehe
   [Anhang](./anhang.md#api-endpunkte)). Der Cron sollte einmal täglich vor der
   Versandzeit (08:00 Uhr im Default) eine authentifizierte Anfrage absetzen, z. B. per
   `curl` mit gültigem Session-Cookie bzw. API-Key. Beispiel für eine Linux-Crontab:

   ```bash
   0 7 * * * curl -s -b /pfad/zur/idoit-session.txt "https://idoit.example.de/i-doit/donamic_dataquality/api/triggerEvaluation" > /dev/null
   ```

   (URL und Authentifizierung an die eigene Installation anpassen.)

Bei jeder Auswertung wird ein **Snapshot** in `donamic_dq_snapshot` geschrieben —
daraus ergibt sich der Trend-Chart im Dashboard.

## Globale Kategorie „Datenqualität"

Die Kategorie `C__CATG__DONAMIC_DQ_SCORE` (Typ 2 — globale Einzelkategorie) wird beim
Install automatisch allen aktiven Objekttypen zugewiesen. Sie zeigt am einzelnen
Objekt:

- aktueller Score in Prozent
- Anzahl bestandener / gesamter Prüfungen
- Zeitpunkt der letzten Auswertung
- Button **Jetzt auswerten**

Soll die Kategorie auf bestimmten Objekttypen unterdrückt werden, ist das über die
i-doit-Bordmittel (Verwaltung → CMDB-Einstellungen → Objekttypen → Kategorien) möglich.

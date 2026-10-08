---
title: Installation
sidebar_position: 2
---

# Installation

Dieses Kapitel richtet sich an **Administratoren**.

## Systemvoraussetzungen

| Voraussetzung | Wert |
|---|---|
| i-doit Edition | **Pro** |
| i-doit Core-Version | **>= 30** |
| PHP | >= 8.0 (analog zu i-doit) |
| Browser | Aktuelle Version von Firefox, Chrome, Edge oder Safari |
| Lizenz | Gültige donamic-Lizenz für Data Quality |

Das Add-on nutzt ausschließlich die Datenbank Ihres i-doit-Mandanten; es sind keine
zusätzlichen Server oder Dienste erforderlich. Die regelmäßige Auswertung läuft auf
Knopfdruck oder zeitgesteuert (siehe [Konfiguration](./konfiguration.md)).

## Add-on installieren

Die Installation erfolgt im **Admin-Center** von i-doit. Innerhalb der
i-doit-Oberfläche (Verwaltung) lassen sich Add-ons weder hochladen noch
installieren.

1. Rufen Sie das Admin-Center auf: `https://<ihre-i-doit-URL>/admin/`.
2. Melden Sie sich mit Ihren Admin-Center-Zugangsdaten an (eigenes Konto aus
   der `config.inc.php`, unabhängig vom i-doit-Login).
3. Öffnen Sie den Bereich **Add-ons** und klicken Sie auf
   **Install/update Add-on**.
4. Wählen Sie das ausgelieferte ZIP-Paket `donamic_dataquality-v<version>.zip`
   aus, legen Sie unter **Activate for tenant** fest, ob das Add-on für einen
   einzelnen Mandanten oder für **All tenants** installiert wird, und klicken
   Sie auf **Upload and install**.

Das Admin-Center entpackt das Paket und installiert das Add-on für die
gewählten Mandanten; danach ist es automatisch aktiviert.

Während der Installation richtet das Add-on ein Standard-Profil **Default** mit
täglicher Auswertung um 08:00 Uhr (Benachrichtigungen deaktiviert) ein. Zusätzlich
ergänzt es eine globale Kategorie **Datenqualität** und weist sie allen aktiven
Objekttypen zu — diese Kategorie zeigt pro Objekt den aktuellen Score.

## Smoke-Test

1. Öffnen Sie im Hauptmenü den Eintrag **Data Quality**.
2. Wechseln Sie in die Sicht **Regelwerk** und legen Sie eine Test-Regel an (z. B.
   „Server müssen ein Inventarnummer-Feld gefüllt haben").
3. Klicken Sie **Auswertung starten** in der Übersicht.
4. Nach wenigen Sekunden sollte der Compliance-Score erscheinen.

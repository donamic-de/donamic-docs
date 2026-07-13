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
| Lizenz | Gültige donamic-Lizenz für `donamic_dataquality` |

Das Add-on nutzt React (im Frontend mitgeliefert), Symfony Routing und das i-doit
Modul-System. Eine laufende MySQL/MariaDB des i-doit-Mandanten ist zwingend — eigene
Datenbankverbindungen werden **nicht** geöffnet. Die regelmäßige Auswertung läuft auf
Knopfdruck oder über einen Cron-Job (siehe [Konfiguration](./konfiguration.md)).

## ZIP-Paket hochladen

1. Melden Sie sich in i-doit als Administrator an.
2. Öffnen Sie **Verwaltung → Module → Add-on Uploader**.
3. Laden Sie das ausgelieferte ZIP-Paket `donamic_dataquality-v<version>.zip` hoch.
4. i-doit entpackt das Add-on nach `src/classes/modules/donamic_dataquality/`.

## Modul aktivieren

1. Öffnen Sie **Verwaltung → Module-Verwaltung**.
2. Suchen Sie den Eintrag **donamic Data Quality** und klicken Sie auf **Installieren**.
3. Nach der Installation ist das Modul automatisch aktiviert.

Während der Installation werden neun Datenbank-Tabellen angelegt (siehe
[Anhang](./anhang.md#datenbanktabellen)) und ein Standard-Profil **Default** mit
täglicher Auswertung um 08:00 Uhr (Benachrichtigungen deaktiviert) eingerichtet.
Zusätzlich registriert das Add-on eine globale Kategorie **Datenqualität**
(`C__CATG__DONAMIC_DQ_SCORE`) und weist sie allen aktiven Objekttypen zu — diese
Kategorie zeigt pro Objekt den aktuellen DQ-Score.

## Smoke-Test

1. Öffnen Sie im Hauptmenü den Eintrag **Data Quality**.
2. Wechseln Sie in die Sicht **Regelwerk** und legen Sie eine Test-Regel an (z. B.
   „Server müssen ein Inventarnummer-Feld gefüllt haben").
3. Klicken Sie **Auswertung starten** in der Übersicht.
4. Nach wenigen Sekunden sollte der Compliance-Score erscheinen.

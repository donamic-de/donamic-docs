---
title: Installation
sidebar_position: 2
---

# Installation

Dieses Kapitel richtet sich an **Administratoren**.

## Voraussetzungen

| Voraussetzung | Wert |
|---|---|
| i-doit | Laufende Installation mit Zugriff auf die Server-Konsole |
| Server-Zugang | Kommandozeilen-Zugriff (SSH) auf den i-doit-Server |
| Anmeldedaten | Ein i-doit-Benutzer mit Zugriff auf den betreffenden Mandanten |

Der Anonymizer wird ausschließlich über die Konsole ausgeführt und benötigt daher
Zugriff auf den Server, auf dem i-doit läuft.

## Add-on installieren

Die Installation erfolgt im **Admin-Center** von i-doit — innerhalb der
i-doit-Oberfläche (Verwaltung) lassen sich Add-ons weder hochladen noch
installieren.

1. Rufen Sie das Admin-Center auf: `https://<ihre-i-doit-URL>/admin/`.
2. Melden Sie sich mit Ihren Admin-Center-Zugangsdaten an (eigenes Konto aus
   der `config.inc.php`, unabhängig vom i-doit-Login).
3. Öffnen Sie den Bereich **Add-ons** und klicken Sie auf
   **Install/update Add-on**.
4. Wählen Sie das ausgelieferte ZIP-Paket aus, legen Sie unter **Activate for
   tenant** fest, ob das Add-on für einen einzelnen Mandanten oder für
   **All tenants** installiert wird, und klicken Sie auf **Upload and install**.

Das Add-on fügt der i-doit-Konsole den Befehl `donamic:anonymize` hinzu. Eine
eigene Bedienoberfläche gibt es bewusst nicht — so lässt sich die Anonymisierung
nicht versehentlich per Mausklick auslösen. Wie Sie den Befehl ausführen, lesen
Sie unter [Anwendung](./anwendung.md).

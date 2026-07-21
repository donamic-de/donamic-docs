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

1. Melden Sie sich in i-doit als Administrator an.
2. Öffnen Sie **Verwaltung → Module → Add-on Uploader**.
3. Laden Sie das ausgelieferte ZIP-Paket hoch.
4. Öffnen Sie **Verwaltung → Module-Verwaltung**, suchen Sie den Eintrag
   **Anonymisierung** und klicken Sie auf **Installieren**.

Das Add-on fügt der i-doit-Konsole den Befehl `donamic:anonymize` hinzu. Eine
eigene Bedienoberfläche gibt es bewusst nicht — so lässt sich die Anonymisierung
nicht versehentlich per Mausklick auslösen. Wie Sie den Befehl ausführen, lesen
Sie unter [Anwendung](./anwendung.md).

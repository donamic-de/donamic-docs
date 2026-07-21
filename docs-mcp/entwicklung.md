---
title: Erweiterte Nutzung
sidebar_position: 5
---

# Erweiterte Nutzung

Dieses Kapitel richtet sich an Administratoren und Power-User, die den MCP-Server
über die Standardeinbindung hinaus betreiben oder in eigene Automatisierungen
integrieren möchten.

## Verbindung testen

Nach der Konfiguration lässt sich die Verbindung am schnellsten prüfen, indem Sie
in Ihrem KI-Client (z. B. Claude Desktop oder n8n) das Tool `idoit_version`
aufrufen. Es liefert die i-doit-Version und grundlegende System-Informationen
zurück und funktioniert auch ohne aktive Lizenz. Kommt eine Antwort zurück, sind
URL, API-Key und Netzwerkzugriff korrekt eingerichtet.

Schlägt der Aufruf fehl, prüfen Sie in dieser Reihenfolge:

1. Ist der MCP-Endpunkt aus Sicht des KI-Clients erreichbar (Firewall, HTTPS,
   Reverse-Proxy)?
2. Stimmen URL und API-Key mit den Werten der Konfigurationsseite überein?
3. Ist bei aktivem Login-Zwang **Auto-Login** aktiviert bzw. Benutzername und
   Passwort hinterlegt (siehe [Konfiguration](./konfiguration.md))?

## Einsatz in eigenen Workflows

Der MCP-Server stellt eine feste Menge an Tools bereit (siehe
[Tools & Ressourcen](./tools.md)). Diese Tools decken das Lesen und Schreiben von
Objekten, Kategorien, Dialog-Werten und Reports ab und lassen sich in beliebigen
MCP-fähigen KI-Clients und Automatisierungsplattformen kombinieren.

Für wiederkehrende Abfragen empfiehlt es sich, in i-doit einen **Report** zu
hinterlegen und diesen per `cmdb_reports_execute` aufzurufen. So bleibt die
Abfragelogik zentral in i-doit gepflegt und der KI-Workflow bleibt schlank.

## Berechtigungen

Alle Operationen des MCP-Servers laufen im Kontext des über den API-Key
adressierten Mandanten und unterliegen den in i-doit vergebenen Rechten. Legen Sie
für den MCP-Zugriff bei Bedarf einen dedizierten Benutzer mit passend
eingeschränkten Berechtigungen an, um schreibende Zugriffe zu begrenzen.

---
title: Konfiguration
sidebar_position: 4
---

# Konfiguration

Die Einstellungen gelten mandantenweit und werden unter **Entsorgung → Entsorgung
konfigurieren** vorgenommen.

## Allgemeine Einstellungen

| Einstellung | Bedeutung |
|---|---|
| **Objekt nach Entsorgung archivieren?** | Legt fest, ob das Objekt nach Abschluss automatisch archiviert wird. |
| **Objekttyp nach Entsorgung ändern?** | Optional: Das Objekt wird nach Abschluss in einen anderen Objekttyp umgewandelt (z. B. „Ausrangiertes"). |
| **Pflichtfeld: Entsorgt durch** | Erzwingt die Angabe der ausführenden Stelle in Schritt 5. |
| **Pflichtfeld: Nachweis der Entsorgung** | Erzwingt die Angabe eines Nachweises in Schritt 5. |

## E-Mail-Benachrichtigungen je Schritt

Für jeden der fünf Schritte lässt sich getrennt einstellen, ob und an wen beim
Abschluss eine Benachrichtigung verschickt wird:

| Einstellung | Bedeutung |
|---|---|
| **E-Mail-Versand** | Schaltet die Benachrichtigung für diesen Schritt ein. |
| **E-Mail-Empfänger** | Wählt die zu benachrichtigenden Personen/Objekte aus (Mehrfachauswahl). |
| **E-Mail-Betreff** und **E-Mail-Inhalt** | Text der Nachricht. Hier lassen sich Platzhalter verwenden, u. a. `%disposal_link%` für einen direkten Link zum Entsorgungs-Bericht. Die verfügbaren Platzhalter werden auf der Konfigurationsseite angezeigt. |

:::warning Voraussetzungen für den E-Mail-Versand
Ist der Versand für einen Schritt als Pflicht gesetzt, aber kein Empfänger
hinterlegt, lässt sich der Schritt nicht abschließen. Beachten Sie außerdem:

- In i-doit muss der **SMTP-Versand** eingerichtet sein.
- Empfänger müssen ein Objekt mit einer **primären E-Mail-Adresse** besitzen —
  andernfalls werden sie übersprungen.
:::

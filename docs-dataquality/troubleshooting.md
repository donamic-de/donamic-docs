---
title: Troubleshooting
sidebar_position: 7
---

# Troubleshooting

| Symptom | Ursache | Abhilfe |
|---|---|---|
| Menüpunkt **Data Quality** fehlt | Modul ist nicht aktiviert oder Nutzer hat kein `Anzeigen`-Recht. | Im Admin-Center unter **Add-ons** prüfen, ob das Add-on für den Mandanten installiert und aktiviert ist; Berechtigungen in der Rolle nachtragen. |
| Lizenz-Fehlermeldung beim Öffnen | Kein gültiger Lizenzschlüssel hinterlegt oder Schlüssel abgelaufen. | Über **donamic Lizenzen** aktualisieren. |
| Compliance-Score bleibt bei 0 | Es wurde noch keine Auswertung durchgeführt oder es gibt keine Regeln. | **Auswertung starten** klicken; Regelwerk prüfen. |
| Score in einer Objekt-Kategorie ist veraltet | Letzte Massen-Auswertung liegt zurück. | Button **Jetzt auswerten** am Objekt oder Cron-Job neu anstoßen. |
| Inline-Quickfix wirkt nicht | Fehlendes `Bearbeiten`-Recht oder Validierungsfehler im Feld. | Recht prüfen; Browser-Konsole auf Fehlermeldung ansehen. |
| Archivieren scheitert mit 403 | Nutzer hat kein `Administrieren`-Recht. | Rolle anpassen (siehe [Berechtigungen](./berechtigungen.md)). |
| Eine Regel wird scheinbar ignoriert | Mehrfachauswahl-Felder (z. B. Tags) werden bewusst nicht geprüft, da eine einfache Ausgefüllt-Prüfung dort kein aussagekräftiges Ergebnis liefert. | Andere Regelart wählen oder eine Regel auf einem geeigneteren Feld verwenden. |
| Snapshots sehen alle gleich aus | Trigger läuft seltener als gewünscht. | Cron-Frequenz erhöhen oder manuell anstoßen. |
| Cron-Job meldet „keine Empfänger mit E-Mail-Adresse“ | Keiner der Empfänger (bzw. kein Gruppenmitglied) hat eine primäre Adresse in der Kategorie **E-Mail-Adressen**. Bis Version 1.6.9 las das Add-on zudem ein veraltetes Personenfeld. | Ab Version 1.6.10: bei den Personen eine Adresse in **E-Mail-Adressen** eintragen und als primär markieren (siehe [Konfiguration](./konfiguration.md#profil--benachrichtigungen)). |
| Cron-Job meldet „versendet=nein, hinweis=Versand fehlgeschlagen …“ | Die Mail konnte nicht verschickt werden, zum Beispiel weil in i-doit kein Mailserver eingerichtet ist („No mail server configured!“) oder der Mailserver die Mail abweist. | **SMTP-Konfiguration** prüfen (**Verwaltung → Import und Schnittstellen → SMTP-Konfiguration**). Der nächste Cron-Lauf versucht den Versand erneut. |
| Cron-Job meldet „versendet=ja“, aber es kommt keine Mail an (bis Version 1.6.10) | Fehlerhafter Aufruf der i-doit-Mailbibliothek; im `exception.log` steht „Call to undefined method isys_library_mail::get_instance()“. | Auf Version 1.6.11 aktualisieren. |
| Mail ohne Objektnamen, „%“ statt fehlender Felder, CSS-Code im Mailtext, immer „20 Objekte“ (bis Version 1.6.11) | Fehler im Aufbau der Mail. | Auf Version 1.6.12 aktualisieren. |
| Es kommt keine Mail, obwohl der Cron-Job läuft und Empfänger eingetragen sind | Es wurden keine Lücken gefunden. Ohne Lücken verschickt das Add-on standardmäßig keinen Bericht; der Cron-Job meldet „hinweis=keine Objekte mit Lücken“. | Ab Version 1.6.13 die Option **Auch versenden, wenn keine Lücken gefunden wurden** einschalten (siehe [Konfiguration](./konfiguration.md#profil--benachrichtigungen)). |
| Cron-Job meldet „Versand fehlgeschlagen: SMTP Error: Could not connect to SMTP host“ | i-doit erreicht den eingetragenen Mailserver nicht, etwa wegen eines falschen Hostnamens oder einer Firewall. Für Google heißt der Server `smtp.gmail.com` (nicht `smtp.google.com`). | In der **SMTP-Konfiguration** Host und Port prüfen. Details stehen im i-doit-Log `log/smtp_<Datum>.log`. |
| Mail enthält keine Links | In den Systemeinstellungen ist unter **URL Einstellungen** keine **i-doit Adresse (URL)** hinterlegt. | Adresse eintragen, zum Beispiel `https://i-doit.example.de/`. |

## Log-Dateien

Bei tiefergehenden Problemen helfen die Protokolldateien Ihrer i-doit-Installation
weiter. Meldungen des Add-ons sind darin eindeutig als Data-Quality-Einträge
gekennzeichnet. Ihr i-doit-Administrator findet die Protokolle im Log-Verzeichnis der
i-doit-Installation.

## Support-Kontakt

- E-Mail: `creiss@donamic.de`
- Bitte immer die Add-on-Version, i-doit-Version und einen Auszug der Log-Datei
  mitsenden.

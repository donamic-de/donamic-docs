---
title: Troubleshooting
sidebar_position: 7
---

# Troubleshooting

| Symptom | Ursache | Abhilfe |
|---|---|---|
| Menüpunkt **Meine Dashboards** fehlt | Modul ist nicht aktiviert oder Nutzer hat keine Rechte (`dashboard_own`). | Modul-Verwaltung prüfen; Berechtigungen in der Rolle nachtragen. |
| Lizenz-Fehlermeldung beim Öffnen | Kein gültiger Lizenzschlüssel hinterlegt oder Schlüssel abgelaufen. | Über **donamic Lizenzen** aktualisieren. |
| Widget zeigt keine Daten | Falsche Objekttyp-Auswahl oder Nutzer hat keine Leserechte auf den Objekttyp. | Widget-Konfiguration und CMDB-Rechte prüfen. |
| Drag-and-Drop funktioniert nicht | JavaScript-Fehler (Browser-Konsole prüfen); ggf. Browser-Cache leeren. | Cache leeren, Konsolen-Log an Support senden. |
| Startseite wird nicht ersetzt | Option „Dashboards Pro als Startseite" nicht aktiviert oder kein Standard-Dashboard markiert. | Einstellung in den Benutzer-Einstellungen setzen und im Dashboard den Stern-Eintrag aktivieren. |
| Report-Widget zeigt Fehler | Report existiert nicht mehr oder Nutzer hat keinen Zugriff. | Ausgewählten Report in der Widget-Konfiguration prüfen. |

## Log-Dateien

Für die Fehlersuche durch den Support oder Ihre Administratoren stehen die
i-doit-Protokolldateien zur Verfügung. Sie liegen im Ordner `log/` innerhalb der
i-doit-Installation. Meldungen des Add-ons sind dort mit dem Kennzeichen
`[donamic_dashboard]` versehen.

## Support-Kontakt

- E-Mail: `creiss@donamic.de`
- Bitte immer die Add-on-Version, i-doit-Version und einen Auszug der Log-Datei
  mitsenden.

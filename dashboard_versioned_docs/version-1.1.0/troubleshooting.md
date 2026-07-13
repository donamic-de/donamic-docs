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
| Startseite wird nicht ersetzt | Einstellung `gui.donamic-dashboard.use-as-homepage` nicht aktiviert oder kein Standard-Dashboard markiert. | Einstellung setzen und im Dashboard den Stern-Eintrag aktivieren. |
| Report-Widget zeigt Fehler | Report existiert nicht mehr oder Nutzer hat keinen Zugriff. | Report-Id in Widget-Konfiguration prüfen. |

## Log-Dateien

- i-doit-Logs liegen unter `log/` im i-doit-Installationsverzeichnis.
- Add-on-spezifische Fehler werden mit Prefix `[donamic_dashboard]` geloggt.
- PHP-Fehler landen im PHP-Error-Log (konfiguriert in der `php.ini`).

## Support-Kontakt

- E-Mail: `creiss@donamic.de`
- Bitte immer die Add-on-Version, i-doit-Version und einen Auszug der Log-Datei
  mitsenden.

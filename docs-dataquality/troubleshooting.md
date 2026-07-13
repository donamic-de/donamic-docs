---
title: Troubleshooting
sidebar_position: 7
---

# Troubleshooting

| Symptom | Ursache | Abhilfe |
|---|---|---|
| Menüpunkt **Data Quality** fehlt | Modul ist nicht aktiviert oder Nutzer hat kein `Anzeigen`-Recht. | Modul-Verwaltung prüfen; Berechtigungen in der Rolle nachtragen. |
| Lizenz-Fehlermeldung beim Öffnen | Kein gültiger Lizenzschlüssel hinterlegt oder Schlüssel abgelaufen. | Über **donamic Lizenzen** aktualisieren. |
| Compliance-Score bleibt bei 0 | Es wurde noch keine Auswertung durchgeführt oder es gibt keine Regeln. | **Auswertung starten** klicken; Regelwerk prüfen. |
| Score in einer Objekt-Kategorie ist veraltet | Letzte Massen-Auswertung liegt zurück. | Button **Jetzt auswerten** am Objekt oder Cron-Job neu anstoßen. |
| Inline-Quickfix wirkt nicht | Fehlendes `Bearbeiten`-Recht oder Validierungsfehler im Feld. | Recht prüfen; Browser-Konsole auf Fehlermeldung ansehen. |
| Archivieren scheitert mit 403 | Nutzer hat kein `Administrieren`-Recht. | Rolle anpassen (siehe [Berechtigungen](./berechtigungen.md)). |
| Eine Regel wird scheinbar ignoriert | Multiselect-Felder (z. B. Tags) werden absichtlich übersprungen — eine Spaltenprüfung würde immer TRUE liefern. | Andere Regelart wählen oder Custom-Field-Regel verwenden. |
| Snapshots sehen alle gleich aus | Trigger läuft seltener als gewünscht. | Cron-Frequenz erhöhen oder manuell anstoßen. |

## Log-Dateien

- i-doit-Logs liegen unter `log/` im i-doit-Installationsverzeichnis.
- Add-on-spezifische Fehler werden mit Prefix `[donamic_dataquality]` geloggt.
- PHP-Fehler landen im PHP-Error-Log (konfiguriert in der `php.ini`).

## Support-Kontakt

- E-Mail: `creiss@donamic.de`
- Bitte immer die Add-on-Version, i-doit-Version und einen Auszug der Log-Datei
  mitsenden.

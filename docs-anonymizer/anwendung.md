---
title: Anwendung
sidebar_position: 3
---

# Anwendung

:::danger Vor der Ausführung: Backup anlegen
Der Anonymizer überschreibt echte Daten **unwiderruflich**. Es gibt keine
Rückgängig-Funktion. Legen Sie vorher zwingend ein Backup oder eine separate Kopie
des Mandanten an und stellen Sie sicher, dass Sie den richtigen Mandanten treffen.
:::

## Ablauf

Der Anonymizer wird als Konsolenbefehl auf dem i-doit-Server ausgeführt. Er läuft
in einem Durchgang und anonymisiert nacheinander alle Datenbereiche. Der
Grundaufruf lautet:

```
php console.php donamic:anonymize -u<Benutzer> -p<Passwort> --locale de_DE
```

Der Ziel-Mandant ergibt sich aus den Anmeldedaten (`-u`/`-p`), mit denen Sie sich
anmelden. Am Ende gibt der Befehl eine Liste der anonymisierten Bereiche aus.

## Optionen

| Option | Wirkung |
|---|---|
| `--locale de_DE` | Sprachraum der Ersatzwerte (Namen, Adressen, Wörter). Geben Sie die Locale **immer ausdrücklich an**, damit die Ersatzdaten zu Ihrer Umgebung passen — z. B. `de_DE` für deutsche Namen und Adressen. |
| `--keep-ldap` | Behält alle LDAP-Daten, damit LDAP-Anmeldung und -Synchronisation weiter funktionieren. Ohne diese Option werden LDAP-Daten mit anonymisiert. |
| `-v`, `-vv`, `-vvv` | Zunehmend ausführlichere Ausgabe (bis Debug). |
| `-q` | Keine Ausgabe — der schnellste Durchlauf. |
| `-h` | Zeigt die Übersicht aller Optionen. |

## Wichtige Hinweise

:::warning Anmeldung nach der Anonymisierung
Benutzernamen und Passwörter werden mit anonymisiert. Nach dem Lauf ist die
Anmeldung mit den **bisherigen Zugangsdaten nicht mehr möglich**. Notieren Sie
sich vorher, wie Sie sich anschließend Zugang verschaffen (z. B. über ein
Administrator-Konto, dessen neue Daten Sie kennen, oder über die Wiederherstellung
aus dem Backup).
:::

- **LDAP:** Wenn Sie die anonymisierte Installation weiterhin per LDAP nutzen
  möchten, verwenden Sie `--keep-ldap`. Andernfalls funktionieren LDAP-Login und
  -Synchronisation danach nicht mehr.
- **Umfang:** Der Lauf betrifft die **gesamte** Installation des angemeldeten
  Mandanten, nicht einzelne Objekte.
- **Geschwindigkeit:** Eine ausführliche Ausgabe (`-v …`) bremst den Lauf. Für den
  schnellsten Durchlauf nutzen Sie `-q`.
- **Kein Rechte-System:** Das Add-on bringt keine eigenen Berechtigungen mit — wer
  den Konsolenbefehl ausführen darf, kann anonymisieren. Der Schutz liegt allein
  im Server- und Konsolenzugang.

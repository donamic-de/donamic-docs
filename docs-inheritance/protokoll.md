---
title: Protokoll & Massenlauf
sidebar_position: 4
---

# Protokoll & Massenlauf

## Das Log

Unter **Vererbung → Log** sehen Sie, was das Add-on getan hat. Jeder
Vererbungslauf erzeugt einen Eintrag mit Status **Erfolg**, **Warnung** oder
**Fehler** und der Angabe, welche Werte durch welches Objekt an welche Ziele
vererbt wurden.

Nutzen Sie das Log, um nach dem Aktivieren einer neuen Regel zu prüfen, ob sie
wie erwartet greift, und um im Zweifelsfall nachzuvollziehen, woher ein Wert an
einem Objekt stammt.

<!-- TODO Screenshot: Log-Ansicht mit Erfolg/Warnung/Fehler -->

## Bestehende Objekte nachträglich vererben

Die Vererbung greift normalerweise **beim Speichern** eines Quell-Objekts. Wenn
Sie eine Regel neu anlegen, sind bestehende Objekte, die Sie länger nicht
angefasst haben, davon zunächst nicht betroffen.

Um einen vorhandenen Datenbestand nachträglich zu vererben, ohne jedes Objekt
einzeln zu öffnen und zu speichern, gibt es einen Konsolenbefehl. Diesen führt
ein Administrator auf dem Server aus:

```
php console.php inheritance -u<Benutzer> -p<Passwort> -i<Mandant> --id 1,2,3 --force
```

Die wichtigsten Optionen:

| Option | Wirkung |
|---|---|
| `--list` (`-l`) | Listet alle Regeln mit ihrem Aktiv-Status auf. |
| `--id 1,2,3` | Verarbeitet gezielt die Regeln mit diesen IDs. |
| `--force` (`-f`) | Verarbeitet **alle** Objekte des Quelltyps. Ohne `--force` werden nur Objekte berücksichtigt, die in den letzten 24 Stunden geändert wurden. |
| `-v`, `-vv`, `-vvv` | Zunehmend ausführlichere Ausgabe. |

:::tip Erstbestand vererben
Für die erstmalige Vererbung eines bereits bestehenden Datenbestands verwenden Sie
`--force` — sonst werden nur kürzlich geänderte Objekte erfasst.
:::

:::warning Auswirkungen bedenken
Ein Massenlauf kann sehr viele Objekte auf einmal verändern und dabei vorhandene
Zielwerte überschreiben. Führen Sie ihn bewusst und idealerweise zuerst mit einer
einzelnen, geprüften Regel-ID aus.
:::

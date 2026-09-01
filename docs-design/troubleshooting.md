---
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

## Nach einem Add-on-Update wirkt das alte Design (oder gar keins)

Beim Update des Add-ons werden die generierten Design-Dateien entfernt. Öffnen Sie
**Design → Konfiguration**, wählen Sie Ihr Design und klicken Sie einmal auf
**Design anwenden** — damit wird alles neu erzeugt. Das gilt auch, wenn neue
Gestaltungsbereiche (etwa die Druckansicht) nach einem Update noch nicht greifen.

## Das Logo erscheint nicht

Prüfen Sie der Reihe nach:

1. **Format und Größe:** Erlaubt sind PNG, JPG/JPEG, GIF, SVG, WebP und ICO mit
   maximal **2 MB**. Bei ungültigem Format oder zu großer Datei zeigt das Add-on
   beim Speichern eine entsprechende Fehlermeldung — es wird dann nichts am Logo
   geändert.
2. **Server-Limit:** Meldet das Add-on, das Logo habe sich nicht hochladen lassen,
   ist häufig das Upload-Limit des Webservers (`upload_max_filesize` in PHP)
   kleiner als die Datei. Wenden Sie sich an Ihre Administration.
3. **Design angewendet?** Das Logo erscheint im i-doit-Kopf erst, nachdem das
   Design mit **Design anwenden** aktiviert wurde.

## Das Logo verschwindet nach dem Anwenden einer Vorlage

Die mitgelieferten Vorlagen enthalten kein Logo — beim Anwenden einer Vorlage wird
das i-doit-Standardlogo wiederhergestellt. Laden Sie Ihr Logo in der Vorlage hoch,
speichern Sie und wenden Sie das Design erneut an. Siehe
[Mitgelieferte Vorlagen](./bedienung/vorlagen.md).

## Die Druckansicht zeigt keine Designfarben

- In **Firefox** stellt i-doit die Druckansicht grundsätzlich ohne Formatierung
  dar (Warnhinweis beim Öffnen) — verwenden Sie Chrome oder Edge.
- Ansonsten: Design einmal neu **anwenden** (siehe oben) und das Druckfenster neu
  öffnen.

## Das Design erscheint erst nach einem Neuladen

In Versionen vor 1.1.0 konnte das Design direkt nach dem Anmelden fehlen und
erschien erst nach **F5**. Aktualisieren Sie auf die aktuelle Version — dort ist
das behoben. Hilft ein einzelnes beherztes **Strg + F5** nicht weiter, leeren Sie
den Browser-Cache vollständig.

## Weitere Hilfe

Wenn ein Problem bestehen bleibt, wenden Sie sich mit einer kurzen Beschreibung
(i-doit-Version, Add-on-Version, Browser, Screenshot) an
[support@donamic.de](mailto:support@donamic.de).

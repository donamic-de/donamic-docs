---
title: Mitgelieferte Vorlagen
sidebar_position: 3
---

# Mitgelieferte Vorlagen

Das Add-on bringt sechs fertig abgestimmte Design-Vorlagen mit, die als Startpunkt
für Ihr eigenes Design dienen:

| Vorlage | Charakter |
|---|---|
| **donamic Carbon** | Dunkles Anthrazit, zurückhaltend und kontrastreich |
| **donamic Copper** | Warme Kupfertöne |
| **donamic Indigo** | Tiefes Blau |
| **donamic Nordic** | Kühles, skandinavisch inspiriertes Slate mit Cyan-Akzent |
| **donamic Rosé** | Sanfte Rosétöne |
| **donamic Sage** | Gedecktes Salbeigrün |

## Vorlagen importieren

Die Vorlagen liegen als JSON-Dateien im Add-on-Verzeichnis auf Ihrem i-doit-Server:

```
src/classes/modules/donamic_design/designs/design_donamic_<name>.json
```

So übernehmen Sie eine Vorlage:

1. Laden Sie die gewünschte JSON-Datei vom Server herunter (oder lassen Sie sich
   die Dateien von Ihrer Administration geben).
2. Öffnen Sie **Design → Konfiguration** und klicken Sie auf **Design importieren**.
3. Wählen Sie die Datei aus — die Vorlage erscheint als neues Design in der Liste.
4. Passen Sie sie bei Bedarf an (siehe [Gestaltungsoptionen](./gestaltung.md)) und
   klicken Sie auf **Design anwenden**.

:::warning Vorlagen enthalten kein Logo
Die mitgelieferten Vorlagen bringen kein Logo mit. Wenn Sie eine Vorlage
**anwenden**, während zuvor ein Design mit eigenem Logo aktiv war, verschwindet
das Logo aus dem Kopfbereich. Laden Sie Ihr Logo in der importierten Vorlage hoch
(und speichern Sie), bevor Sie sie anwenden — oder ergänzen Sie es danach.
:::

## Eigene Designs übertragen

Der gleiche Mechanismus eignet sich, um ein selbst gestaltetes Design zwischen
Installationen zu übertragen: **Design exportieren** speichert es als JSON-Datei,
**Design importieren** liest sie auf der Zielinstallation wieder ein.

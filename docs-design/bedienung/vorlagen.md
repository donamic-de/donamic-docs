---
title: Mitgelieferte Vorlagen
sidebar_position: 3
---

# Mitgelieferte Vorlagen

Das Add-on bringt zwölf fertig abgestimmte Design-Vorlagen mit, die als Startpunkt
für Ihr eigenes Design dienen. Sie sind in drei Gruppen aufgeteilt.

**Hell mit heller Navigation**

| Vorlage | Charakter |
|---|---|
| **donamic Light** | Hell und reduziert in den donamic-Website-Farben: weiße Navigation mit grüner Akzentlinie |
| **donamic Nordic** | Skandinavisch klar: helle Slate-Navigation, kühle Grautöne, ein Cyan-Akzent |
| **donamic Rosé** | Warm und elegant: weiße Navigation mit zartem Rosé, gedeckter Beerenton für Links |
| **donamic Sage** | Natürlich und ruhig: salbeigrün getönte Navigation und Flächen |

**Hell mit farbiger Kopfleiste**

| Vorlage | Charakter |
|---|---|
| **donamic Signature** | Website-Look: dunkle Kopfleiste mit donamic-Neongrün, heller Arbeitsbereich |
| **donamic Aurora** | Nachtviolette Kopfleiste mit Violett-Akzent über kühl getönten Flächen |
| **donamic Copper** | Holzkohle-Kopfleiste mit Kupfer-Akzent, cremefarbene Flächen |
| **donamic Indigo** | Tiefes Indigo in der Kopfleiste, klare helle Flächen |
| **donamic Petrol** | Tiefes Petrol mit Türkis-Akzent über leicht grün getönten Flächen |

**Durchgehend dunkel**

| Vorlage | Charakter |
|---|---|
| **donamic Carbon** | Dunkles Graphit mit blauem Akzent, für lange Sitzungen |
| **donamic Ember** | Warmes Dunkel mit glühendem Orange-Akzent |
| **donamic Volt** | Der donamic-Website-Look in Dunkel: fast schwarz, Neongrün als Akzent |

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

:::warning Vorlagen enthalten das donamic-Logo
Die mitgelieferten Vorlagen bringen das donamic-Logo mit. Laden Sie Ihr eigenes
Logo in der importierten Vorlage hoch und speichern Sie, bevor Sie sie
anwenden — sonst erscheint das donamic-Logo im Kopfbereich.
:::

## Eigene Designs übertragen

Der gleiche Mechanismus eignet sich, um ein selbst gestaltetes Design zwischen
Installationen zu übertragen: **Design exportieren** speichert es als JSON-Datei,
**Design importieren** liest sie auf der Zielinstallation wieder ein.

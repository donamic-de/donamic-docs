---
title: Tools & Ressourcen
sidebar_position: 4
---

# Tools & Ressourcen

## System (`idoit_*`)

| Tool | Beschreibung |
|---|---|
| `idoit_version` | i-doit-Version und System-Info |
| `idoit_search` | Volltextsuche in der CMDB |
| `idoit_constants` | Objekttypen, Kategorien und Konstanten |
| `idoit_login` | Session erstellen |
| `idoit_logout` | Session beenden |

## Objekte (`cmdb_object_*`)

| Tool | Beschreibung |
|---|---|
| `cmdb_object_create` | Neues Objekt erstellen |
| `cmdb_object_read` | Objekt lesen |
| `cmdb_object_update` | Objekt aktualisieren |
| `cmdb_object_delete` | Objekt archivieren/löschen |
| `cmdb_object_archive` | Objekt archivieren |
| `cmdb_object_purge` | Objekt endgültig löschen |
| `cmdb_object_recycle` | Objekt wiederherstellen |
| `cmdb_objects_read` | Mehrere Objekte lesen (mit Filter, Default-Limit 100) |
| `cmdb_objects_count` | Nur Anzahl zählen (effizient — vermeidet Mass-Dumps) |
| `cmdb_object_relations` | Beziehungen eines Objekts (Kontakte, Standort, Verkabelung, …) |

## Kategorien (`cmdb_category_*`)

| Tool | Beschreibung |
|---|---|
| `cmdb_category_read` | Kategorie-Daten lesen |
| `cmdb_category_save` | Kategorie-Daten speichern |
| `cmdb_category_delete` | Kategorie-Eintrag löschen |
| `cmdb_category_archive` | Kategorie-Eintrag archivieren |
| `cmdb_category_purge` | Kategorie-Eintrag endgültig löschen |
| `cmdb_category_recycle` | Kategorie-Eintrag wiederherstellen |
| `cmdb_category_info` | Kategorie-Schema/Metadaten |

## Dialog (`cmdb_dialog_*`)

| Tool | Beschreibung |
|---|---|
| `cmdb_dialog_read` | Dropdown-Werte lesen |
| `cmdb_dialog_create` | Dropdown-Wert erstellen |
| `cmdb_dialog_update` | Dropdown-Wert aktualisieren |
| `cmdb_dialog_delete` | Dropdown-Wert löschen |

## Reports (`cmdb_reports_*`)

| Tool | Beschreibung |
|---|---|
| `cmdb_reports_list` | Alle Reports auflisten |
| `cmdb_reports_execute` | Report ausführen |

## Ressourcen

| Ressource | Inhalt |
|---|---|
| `idoit://object-types` | Alle Objekttypen |
| `idoit://categories` | Alle Kategorien |
| `idoit://categories/global` | Globale Kategorien |
| `idoit://categories/specific` | Spezifische Kategorien |

---
title: Anhang
sidebar_position: 8
---

# Anhang

## Datenbanktabellen {#datenbanktabellen}

Alle Tabellen liegen in der Mandanten-Datenbank.

| Tabelle | Zweck |
|---|---|
| `donamic_dq_profile` | Profile: Aktivierung, Benachrichtigungs-Schedule und -Zeit. Standardmäßig wird ein Profil **Default** angelegt. |
| `donamic_dq_rule` | Regel-Definitionen pro Objekttyp/Kategorie/Attribut mit Regeltyp und JSON-Konfiguration. |
| `donamic_dq_profile_recipient` | Benachrichtigungs-Empfänger (Personen-Objekte oder Gruppen). |
| `donamic_dq_result` | Cache: pro Objekt + Regel das letzte Auswertungs-Ergebnis (compliant ja/nein). |
| `donamic_dq_snapshot` | Trend-Daten: täglicher Compliance-Prozentsatz für den Verlaufs-Chart. |
| `donamic_dq_exemption` | Ausnahmen auf **Regel-Ebene** pro Objekt (Regel X gilt für Objekt Y nicht). |
| `donamic_dq_object_exemption` | Ausnahmen auf **Objekt-Ebene** (Objekt Y ist komplett von allen Regeln ausgenommen). |
| `donamic_dq_typeconfig` | Per-Objekttyp-Konfiguration (z. B. versteckte Typen, Sonderregeln). |
| `isys_catg_donamic_dq_score_list` | Datenhaltung der globalen Kategorie **Datenqualität** — pro Objekt der aggregierte Score. |

Beim Deinstallieren werden die Add-on-Tabellen sowie die Custom-Kategorie
`C__CATG__DONAMIC_DQ_SCORE` und der zugehörige Benachrichtigungs-Typ entfernt. Die
Lizenzdaten in den Mandanten-Einstellungen (`donamic.license.data`) bleiben erhalten,
damit ein i-doit-Update keine erneute Aktivierung erfordert; sie können bei Bedarf über
die Lizenzverwaltung entfernt werden.

## API-Endpunkte (Überblick) {#api-endpunkte}

Die API liegt unter `…/donamic_dataquality/api/`. Sie ist primär für die
React-Oberfläche gedacht, kann aber auch für externe Integrationen genutzt werden (mit
Session-Cookie). Jeder Aufruf durchläuft die Rechte-Prüfung aus dem Kapitel
[Berechtigungen](./berechtigungen.md).

### Lesen (benötigt: Anzeigen)

| Endpunkt | Zweck |
|---|---|
| `getObjectTypes` | Verfügbare Objekttypen mit Anzahl Regeln. |
| `getCategoriesForType` | Kategorien eines Objekttyps für den Regel-Editor. |
| `getAttributesForCategory` | Attribute einer Kategorie. |
| `getDialogValues` | Mögliche Dialog-Werte (für `specific_value`-Regeln). |
| `getRules` | Regelwerk eines Objekttyps. |
| `getOverview` | KPI-Zahlen der Übersicht. |
| `getAnalysis` | Drill-Down-Daten pro Objekttyp. |
| `getNotificationConfig` / `getRecipients` | Profil- und Empfängerdaten. |
| `getExemptions` | Aktive Ausnahmen. |

### Schreiben (benötigt: Bearbeiten)

| Endpunkt | Zweck |
|---|---|
| `saveRules` | Regelwerk speichern. |
| `saveNotificationConfig` / `saveRecipients` | Profil/Empfänger speichern. |
| `triggerEvaluation` | Massen-Auswertung starten. |
| `evaluateObject/{id}` | Auswertung für ein einzelnes Objekt. |
| `quickSave` | Inline-Quickfix aus dem Drill-Down. |
| `exempt` / `unexempt` | Regel-Ausnahme setzen/entfernen. |
| `exemptObject` / `unexemptObject` | Ganz-Objekt-Ausnahme. |
| `toggleCategoryExclusion` | Kategorie aus Auswertung ausschließen. |

### Administrieren (benötigt: Administrieren)

| Endpunkt | Zweck |
|---|---|
| `hideObjectType` | Objekttyp aus Auswertung verstecken. |
| `archiveStaleObject` | Veraltetes Objekt archivieren. |
| `removeCategoryAssignment` | Kategorie-Zuweisung von einem Objekttyp entfernen. |
| `dialogExecuteDelete` | Dialog-Wert löschen. |
| `dialogReassignValue` | Dialog-Wert umziehen. |

---
title: Berechtigungen
sidebar_position: 4
---

# Berechtigungen

Dieses Kapitel richtet sich an **Administratoren**.

Data Quality definiert **drei Berechtigungs-Methoden**. Sie werden unter
**Verwaltung → Benutzer-Verwaltung → [Rolle/Person] → Berechtigungen → donamic Data
Quality** freigegeben.

## Übersicht

| Berechtigung | Unterrecht | Wirkung |
|---|---|---|
| **Anzeigen** (`dataquality_view`) | Ansehen | Liest alle Auswertungs- und Übersichtsdaten: Compliance-Score, Regelwerk anzeigen, Kategorie-Nutzung, Stale-Objects-Liste etc. **Keine Änderungen.** |
| **Bearbeiten** (`dataquality_edit`) | Bearbeiten | Erlaubt Änderungen am Regelwerk, an Benachrichtigungs-Konfigurationen, Empfängern, Ausnahmen (Exemptions) sowie das Anstoßen von Auswertungen. |
| **Administrieren** (`dataquality_admin`) | Supervisor | Schaltet **destruktive Operationen** frei: Objekte archivieren, Objekttypen verstecken, Dialog-Werte löschen oder umziehen, Kategorie-Zuweisungen entfernen. |

## Welche Aktion verlangt welches Recht?

Die zentrale Zuordnung steht in `ApiAdapter::AUTH_MAP` und entscheidet bei jedem
API-Aufruf, ob er durchgelassen wird:

| Aktion | Benötigtes Recht |
|---|---|
| Übersicht und alle Listen-Sichten öffnen | Anzeigen |
| Regelwerk anzeigen, Drill-Down öffnen | Anzeigen |
| **Regeln speichern** (`saveRules`) | Bearbeiten |
| **Benachrichtigungs-Konfig speichern** (`saveNotificationConfig`) | Bearbeiten |
| **Empfänger speichern** (`saveRecipients`) | Bearbeiten |
| **Auswertung starten** (`triggerEvaluation`) | Bearbeiten |
| **Einzelnes Objekt auswerten** (`evaluateObject`) | Bearbeiten |
| **Inline-Quickfix** (`quickSave` aus Drill-Down) | Bearbeiten |
| **Regel-Ausnahme setzen/entfernen** (`exempt` / `unexempt`) | Bearbeiten |
| **Ganz-Objekt-Ausnahme** (`exemptObject` / `unexemptObject`) | Bearbeiten |
| **Kategorie aus Auswertung ausschließen** (`toggleCategoryExclusion`) | Bearbeiten |
| **Objekttyp aus Auswertung verstecken** (`hideObjectType`) | Administrieren |
| **Veraltetes Objekt archivieren** (`archiveStaleObject`) | Administrieren |
| **Kategorie-Zuweisung entfernen** (`removeCategoryAssignment`) | Administrieren |
| **Dialog-Wert löschen** (`dialogExecuteDelete`) | Administrieren |
| **Dialog-Wert umziehen** (`dialogReassignValue`) | Administrieren |

Eine fehlende Berechtigung führt zu einer 403-Antwort der API; die Oberfläche blendet
die entsprechenden Buttons aus.

## Typische Rollen-Beispiele

| Rolle | Anzeigen | Bearbeiten | Administrieren |
|---|:-:|:-:|:-:|
| **Beobachter** (sieht KPIs, ändert nichts) | ✓ | — | — |
| **DQ-Manager** (pflegt Regelwerk, wertet aus) | ✓ | ✓ | — |
| **DQ-Admin** (bereinigt aktiv den Datenbestand) | ✓ | ✓ | ✓ |

:::warning
Das **Administrieren**-Recht ermöglicht das **Archivieren** und **Löschen** von
Inhalten — ein versehentlicher Klick kann produktive Daten unbrauchbar machen.
Vergeben Sie es nur an erfahrene Anwender und am besten in einem separaten
Wartungs-Tenant.
:::

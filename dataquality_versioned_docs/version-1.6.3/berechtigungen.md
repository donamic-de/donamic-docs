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
| **Anzeigen** | Ansehen | Liest alle Auswertungs- und Übersichtsdaten: Compliance-Score, Regelwerk, Kategorie-Nutzung, veraltete Objekte usw. **Keine Änderungen.** |
| **Bearbeiten** | Bearbeiten | Erlaubt Änderungen am Regelwerk, an Benachrichtigungen, Empfängern und Ausnahmen sowie das Anstoßen von Auswertungen. |
| **Administrieren** | Supervisor | Schaltet **verändernde Bereinigungs-Aktionen** frei: Objekte archivieren, Objekttypen verstecken, Dialog-Werte löschen oder umziehen, Kategorie-Zuweisungen entfernen. |

## Welche Aktion verlangt welches Recht?

| Aktion | Benötigtes Recht |
|---|---|
| Übersicht und alle Listen-Sichten öffnen | Anzeigen |
| Regelwerk anzeigen, Drill-Down öffnen | Anzeigen |
| **Regeln speichern** | Bearbeiten |
| **Benachrichtigungs-Einstellungen speichern** | Bearbeiten |
| **Empfänger speichern** | Bearbeiten |
| **Auswertung starten** | Bearbeiten |
| **Einzelnes Objekt auswerten** | Bearbeiten |
| **Inline-Schnellkorrektur im Drill-Down** | Bearbeiten |
| **Regel-Ausnahme setzen/entfernen** | Bearbeiten |
| **Ganzes Objekt von Regeln ausnehmen** | Bearbeiten |
| **Kategorie aus Auswertung ausschließen** | Bearbeiten |
| **Objekttyp aus Auswertung verstecken** | Administrieren |
| **Veraltetes Objekt archivieren** | Administrieren |
| **Kategorie-Zuweisung entfernen** | Administrieren |
| **Dialog-Wert löschen** | Administrieren |
| **Dialog-Wert umziehen** | Administrieren |

Fehlt einem Nutzer die nötige Berechtigung, blendet die Oberfläche die entsprechenden
Schaltflächen aus und die Aktion wird abgewiesen.

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

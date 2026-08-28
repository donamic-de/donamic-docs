---
title: Berechtigungen
sidebar_position: 4
---

# Berechtigungen

Dieses Kapitel richtet sich an **Administratoren**.

Dashboards Pro definiert **drei Berechtigungs-Methoden**. Sie werden unter
**Verwaltung → Benutzer-Verwaltung → [Rolle/Person] → Berechtigungen → donamic
Dashboards Pro** freigegeben.

## Übersicht

| Berechtigung | Unterrechte | Wirkung |
|---|---|---|
| **Eigene Dashboards** (`dashboard_own`) | Ansehen, Bearbeiten, Löschen | Zugriff auf Dashboards, deren Besitzer der jeweilige Nutzer ist. Das **Löschen**-Recht ist ausschließlich Besitzern und Admins vorbehalten. |
| **Geteilte Dashboards** (`dashboard_shared`) | Ansehen, Bearbeiten | Zugriff auf Dashboards, die direkt oder über eine Gruppe mit dem Nutzer geteilt wurden. Das konkrete Share-Recht (`view` oder `edit`) wird pro Freigabe gesetzt und ist zusätzlich zu diesem Recht erforderlich. |
| **Admin-Zugriff** (`dashboard_admin`) | Supervisor | Vollzugriff auf **alle** Dashboards aller Nutzer, unabhängig von Besitz und Freigabe. |

## Wie die Rechte kombiniert werden

Wenn ein Nutzer ein Dashboard öffnet, prüft das Add-on die Rechte in dieser
Reihenfolge:

1. **Admin?** Hat der Nutzer das Admin-Recht (`dashboard_admin`, SUPERVISOR), ist
   Vollzugriff gegeben — die Prüfung stoppt hier.
2. **Besitzer?** Ist der Nutzer Besitzer des Dashboards, wird `dashboard_own` mit dem
   benötigten Unterrecht (VIEW/EDIT/DELETE) geprüft.
3. **Person-Share?** Gibt es eine direkte Freigabe auf den Nutzer, wird das
   Share-Recht (`view`/`edit`) gegen `dashboard_shared` geprüft.
4. **Gruppen-Share?** Andernfalls wird über alle Gruppen des Nutzers das höchste
   passende Share-Recht gezogen.
5. **Kein Treffer** → kein Zugriff.

Wichtig: Ein **Löschen**-Vorgang ist für geteilte Dashboards technisch ausgeschlossen
— auch Nutzer mit `edit`-Share können ein Dashboard nicht löschen. Nur Besitzer
(mit DELETE in `dashboard_own`) und Admins dürfen das.

## Typische Rollen-Beispiele

| Rolle | Eigene | Geteilte | Admin |
|---|---|---|---|
| **Leser** (darf nur betrachten) | Ansehen | Ansehen | — |
| **Redakteur** (nutzt und erweitert) | Ansehen, Bearbeiten, Löschen | Ansehen, Bearbeiten | — |
| **Dashboard-Admin** (verwaltet unternehmensweit) | — | — | Supervisor |

:::tip
Legen Sie die Rolle **Redakteur** als Standard-Rolle für alle CMDB-Nutzer an. Der
Admin-Zugriff sollte sparsam vergeben werden, da er die Sichtbarkeit privater
Dashboards aushebelt.
:::

## Sonderfall: Öffentliche Links

Öffentliche Links umgehen das gesamte Berechtigungssystem — wer den Link kennt, sieht
das Dashboard auch ohne i-doit-Login. Diese Funktion ist nur für Besitzer/Admins
zugänglich; wer
keinen Link erzeugen darf, kann also auch keine Daten ungewollt öffentlich machen.
Links lassen sich jederzeit deaktivieren oder mit Ablaufdatum versehen.

## Sichtbarkeit von Objekten in Widgets

Die Rechte oben regeln den Zugriff auf das **Dashboard**. Davon zu unterscheiden ist,
welche **Objekte** ein Widget anzeigt.

**Widgets bleiben in ihrem eingestellten Umfang.** Öffnet man aus einem Diagramm oder
einer Kennzahl die dahinterliegende Objektliste, zeigt sie ausschließlich Objekte
innerhalb dessen, worauf das Widget eingestellt ist. Ein auf einen Objekttyp
beschränktes Widget gibt über Klick-Navigation, Suche und Blättern keine anderen
Objekte preis — in der angemeldeten Ansicht ebenso wie über einen öffentlichen Link.

:::warning Objekttyp-Rechte werden nicht zusätzlich geprüft
Widgets werten die objekttyp-bezogenen CMDB-Berechtigungen der betrachtenden Person
**nicht** zusätzlich aus. Ein Widget zeigt die konfigurierten Daten also unabhängig
davon, ob diese Person die betroffenen Objekttypen auch im CMDB einsehen dürfte.

Daraus folgt:

- Geben Sie Dashboards nur an Personen frei, die die enthaltenen Daten sehen dürfen.
- Prüfen Sie vor dem Erzeugen eines öffentlichen Links, welche Daten die enthaltenen
  Widgets anzeigen.

Eine Auswertung der Objekttyp-Rechte in den Widgets ist für eine kommende Version
vorgesehen.
:::

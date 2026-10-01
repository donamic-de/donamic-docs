---
title: Analyse-Sichten
sidebar_position: 4
---

# Analyse-Sichten

Der Ordner **Analysen** im Tree bündelt die listenbasierten Auswertungen.

## Kategorie-Nutzung *(nur mit Recht „Administrieren")*

Übersicht, welche Kategorien auf welchen Objekttypen vorhanden sind und wie oft sie
tatsächlich genutzt werden — hilft, ungenutzte Kategorien zu identifizieren.

## Leere Objekttypen

Listet Objekttypen ohne ein einziges Objekt. Sinnvoll für die Initial-Bereinigung der
CMDB-Struktur.

## Veraltete Objekte (Stale Objects)

Objekte, die seit X Monaten nicht mehr aktualisiert wurden. Pro Eintrag lässt sich das
**Archivieren** ausführen.

:::warning
Archivieren und Löschen erfordern das Recht **Administrieren**. Die Aktion wirkt sofort
auf den produktiven Bestand. Prüfen Sie die Auswahl vor dem Klick.
:::

## Wenig Beziehungen (Low Relationships)

Listet isolierte Objekte mit null oder wenigen Beziehungen — typischer Indikator für
vergessene oder fehlerhaft erfasste Objekte.

## IP-Konflikte

Findet doppelt vergebene IP-Adressen über alle Netzwerke hinweg.

## Vertrags-Ablauf

Übersicht über Verträge mit auslaufendem Gültigkeitszeitraum innerhalb des
konfigurierten Horizonts. Vergleichbar mit dem Dashboard-Widget **Contract Expiry**,
aber in voller Listendarstellung.

## Logbuch-Aktivität

Zeigt, welche Objekte zuletzt geändert wurden — gut, um auffällige Aktivität (massive
Massenänderungen) zu erkennen.

## Ausnahmen (Exemptions)

Listet alle aktiven **Regel-Ausnahmen** und **Objekt-Ausnahmen**. Hier lassen sich
versehentlich gesetzte Ausnahmen entfernen oder bestehende kommentieren.

## Dialog-Cleanup *(nur mit Recht „Administrieren")*

Findet Dialog-Werte (z. B. in Custom-Listen), die:

- ungenutzt sind → zur **Löschung** vorgeschlagen werden,
- doppelt mit anderen Werten existieren → **Umziehen** aller Verweise auf einen
  gemeinsamen Hauptwert.

:::warning
Beide Aktionen erfordern **Administrieren** und ändern den Bestand unwiderruflich.
:::

## Duplikat-IDs

Sucht potenzielle Objekt-Duplikate auf Basis identischer Schlüsselfelder (Hostname,
Seriennummer etc.).

## Lizenz-Allokation

Übersicht, welche Software-Lizenzen wie vielen Objekten zugewiesen sind — hilfreich für
Lizenz-Audits.

## Kabel-Gaps

Zeigt unvollständig dokumentierte Verkabelungen (z. B. Ports ohne Gegenstelle).

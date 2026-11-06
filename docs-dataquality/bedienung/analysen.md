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

Gezählt werden ausschließlich **i-doit-Beziehungen**, also genau die Einträge, die
i-doit im Objekt unter **Beziehungen** anzeigt (nur aktive Beziehungen, nur aktive
Objekttypen). Die Kachel auf dem Analyse-Dashboard zählt nach derselben Logik wie die
Liste.

:::info Warum erscheinen Organisationen als „isoliert“, obwohl sie als Hersteller verwendet werden?
Manche Felder sehen aus wie eine Verknüpfung, erzeugen in i-doit aber keine Beziehung:

- **Hersteller** (z. B. in den Kategorien Modell oder Software) ist ein Auswahlfeld
  (Dialog). Der Hersteller „Dell“ und das Organisations-Objekt „Dell“ teilen sich nur
  den Namen, technisch sind sie nicht verbunden.
- **Lieferant** in der Kategorie Buchhaltung verweist auf einen Kontakt, legt aber
  ebenfalls keine Beziehung an.

Solche Objekte haben aus Sicht von i-doit tatsächlich keine Beziehung; das Objekt
selbst zeigt unter **Beziehungen** ebenfalls 0. Für Stammdaten-Objekttypen wie
Organisationen oder Personen ist das oft gewollt — lesen Sie die Liste für diese Typen
entsprechend, oder verknüpfen Sie die Objekte über Kontaktzuweisungen, wenn sie als
Beziehung erscheinen sollen.
:::

## IP-Konflikte

Findet doppelt vergebene IP-Adressen. Als Konflikt gilt **dieselbe Adresse im selben
Netz an mindestens zwei verschiedenen Objekten**. Grundlage sind die Adressen, die in
der Kategorie **Hostadresse** gepflegt sind.

- Jede Konfliktkarte zeigt die Adresse, das zugehörige **Netz** und die beteiligten
  Objekte mit Typ und Hostname.
- Gleiche Adressen in **getrennten Netzen** (zum Beispiel derselbe private
  Adressbereich an zwei Standorten, als eigene Netz-Objekte gepflegt) sind **kein**
  Konflikt und erscheinen nicht.
- Berücksichtigt werden nur aktive Objekte und Einträge; leere Adressen und
  `0.0.0.0` werden ignoriert. Mehrere Einträge derselben Adresse am selben Objekt
  zählen nicht als Konflikt.
- Der CSV- und Druck-Export enthält die Spalte **Netz**. Liste, Export und
  Dashboard-Kachel zählen gleich.

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

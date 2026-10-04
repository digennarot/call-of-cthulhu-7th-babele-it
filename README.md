# Il Richiamo di Cthulhu 7e per FoundryVTT

## Compatibilità

* Foundry VTT 14
* Call of Cthulhu 7th Edition (Miskatonic Investigative Society) 8.15 o successivo
* Babele 2.9.1 o successivo

## Description - Descrizione

* Italian translation of the compendiums of the Call of Cthulhu 7th Edition game system on Foundry VTT (Miskatonic Investigative Society).
---- 
* Traduzione italiana dei compendi del sistema Call of Cthulhu 7th Edition (Miskatonic Investigative Society) su Foundry VTT.
* L'interfaccia è già tradotta in italiano dal sistema stesso; questo modulo traduce i compendi tramite Babele e personalizza alcuni testi dell'interfaccia.

## Installation - Installazione
* Install/Update _Call of Cthulhu 7th Edition_ by Miskatonic Investigative Society from Foundry's system manager.
[https://foundryvtt.com/packages/CoC7]
* Install/Update _Babele_ module (and its dependency _libWrapper_) from Foundry's module manager.
[https://foundryvtt.com/packages/babele]
* (Optional) Install/Update _Translation: Italian \[Core]_ module from Foundry's module manager.
[https://foundryvtt.com/packages/translation-core-it]
* In Foundry's module manager click _Install Module_ and paste this manifest URL:
`https://github.com/digennarot/call-of-cthulhu-7th-babele-it/releases/latest/download/module.json`
* Inside the Game World, at _Configuration/Manage Modules_, activate Babele and *both* translations.
* At _Configuration/Setup_, change language to Italian.
---- 
* Installa/Aggiorna il sistema _Call of Cthulhu 7th Edition_ di Miskatonic Investigative Society dal system manager di Foundry.
[https://foundryvtt.com/packages/CoC7]
* Installa/Aggiorna il modulo _Babele_ (e la sua dipendenza _libWrapper_) dal gestore moduli di Foundry.
[https://foundryvtt.com/packages/babele]
* (Opzionale) Installa/Aggiorna il modulo _Translation: Italian \[Core]_ dal gestore moduli di Foundry.
[https://foundryvtt.com/packages/translation-core-it]
* Nel gestore moduli di Foundry clicca _Installa Modulo_ e incolla questo URL del manifest:
`https://github.com/digennarot/call-of-cthulhu-7th-babele-it/releases/latest/download/module.json`
* Nel mondo di gioco, nella schermata _Impostazioni di Gioco/Gestisci Moduli_, attiva Babele e _entrambe_ le traduzioni.
* In _Impostazioni di Gioco/Impostazioni_, cambia la lingua in Italiano.

## Suggerimenti, Errori e Feedback
* This translation is fan-made and not official. Any suggestion or feedback is greatly appreciated. Please use the issue system on GitHub.
---- 
* Questa traduzione proviene dalla community e non è ufficiale. Qualunque suggerimento o feedback è enormemente apprezzato. Per favore utilizzare il sistema di notifiche qui su GitHub, “issues”.

## Known Issues - Problemi Noti
* Only the _Skills_, _Items Examples_, _Examples_ and _Roll Requests_ compendiums are translated. _Sanity Roll Table_, _System manuals_, _Phobias and Manias_, _Roll Tables_ and _Weapons_ are still in English.
* Translated skill names apply to documents taken from the compendiums: skills already present in existing actors keep their original names.
---- 
* Sono tradotti solo i compendi _Abilità_, _Esempi Oggetti_, _Esempi_ e _Richieste di Tiri_. _Sanity Roll Table_, _System manuals_, _Phobias and Manias_, _Roll Tables_ e _Weapons_ sono ancora in inglese.
* I nomi tradotti delle abilità valgono per i documenti presi dai compendi: le abilità già presenti negli attori esistenti mantengono il nome originale.

## Riconoscimenti
* Aggiornamento per Foundry VTT 14 e CoC7 8.15 a cura di *digennarot*.
* La traduzione originale è opera di *Antonino Lupo/Anthony L. Wolf* (Mr. Wolf).
* Si ringrazia *José E. Lozano* (Viriato139ac) per l’incredibile supporto su GitHub.
* Come template è stata utilizzata la traduzione di *Dungeon World* di *patoarayas* e la versione spagnola di Call of Cthulhu 7e di _Viriato139ac_.
* *Babele* è un modulo di *Simone Ricciardi*.

## Versioni

version 0.6.0 :

* Prima versione funzionante.
* Tradotta da HavlockV/CoC7-FoundryVTT 0.5.4.

version 0.7.0 :

* Aggiornata la compatibilità a Foundry VTT 14, CoC7 8.15+ (Miskatonic Investigative Society) e Babele 2.9.1+.
* Manifest aggiornato al formato attuale di Foundry (`id`, `authors`, `relationships`).
* Registrazione delle traduzioni tramite l'hook `babele.init`.
* Compendi riallineati ai contenuti di CoC7 8.15: nuove abilità (Combattere, Armi da Fuoco, Scienza, Lingua, ecc.), nuovi esempi e Richieste di Tiri con la nuova sintassi.
* Tradotti anche `skillName` e `specialization` delle abilità, così il sistema ricostruisce i nomi in italiano.
* Rimosse dal file di lingua le chiavi non più usate dal sistema.

version 1.0.0 :

* Prima versione stabile pubblicata da digennarot.
* Build e release automatiche con GitHub Actions a ogni push su `master`.

## Pubblicare una nuova versione

* Aumenta `version` in `module.json` e fai push su `master`: GitHub Actions crea la release `v<versione>` con `module.json` e `module.zip`.
* Ogni push successivo con la stessa versione aggiorna i file della release esistente.

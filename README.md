# Il Richiamo di Cthulhu 7e per Foundry VTT: traduzione italiana

![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-14-orange)
![CoC7](https://img.shields.io/badge/CoC7-8.15%2B-darkgreen)
![Babele](https://img.shields.io/badge/Babele-2.9.1%2B-blue)
![Release](https://img.shields.io/github/v/release/digennarot/call-of-cthulhu-7th-babele-it)

Traduzione italiana non ufficiale dei compendi e dell'interfaccia del sistema
[Call of Cthulhu 7th Edition](https://foundryvtt.com/packages/CoC7) (Miskatonic Investigative Society)
per Foundry VTT, basata su [Babele](https://foundryvtt.com/packages/babele).

*[English summary below](#english).*

## Cosa traduce

**Interfaccia**: il sistema include già una traduzione italiana parziale; questo modulo la completa
con tutte le stringhe di CoC7 8.15 (schede, impostazioni, Chaosium Canvas Interface, costi degli
incantesimi, CoC ID, pacchetti esperienza, messaggi di errore, ecc.).

**Compendi**

| Compendio | Contenuto |
| --- | --- |
| Abilità | Tutte le 103 abilità, con nome, specializzazione e descrizione |
| Armi | 44 armi, con le relative cartelle |
| Fobie e Manie | 20 voci, con le relative cartelle |
| Esempi | Attori di esempio (personaggio, creatura, cattivo, scagnozzo, contenitore), incluse le abilità al loro interno, le biografie e le occupazioni |
| Esempi Oggetti | Setup, archetipo, occupazione, armi, talento e incantesimo di esempio |
| Tabelle Sanità | Tabelle VII–X |
| Tabelle | Attacchi di follia in tempo reale |
| Richieste di Tiri | Macro di richiesta tiri con i nomi italiani delle abilità |
| Manuali del sistema | Il manuale inglese di CoC7 (21 pagine), mostrato come «Il Richiamo di Cthulhu 7a Edizione [it]» |

**Compendio aggiuntivo: Incantesimi (Manuale del Custode)**

Nei compendi di CoC7 c'è un solo incantesimo, ed è di prova. Il modulo aggiunge quindi un compendio
proprio con i 60 incantesimi del capitolo 12 del Manuale del Custode, «Grimorio». Lo vede solo il
Custode.

Ogni voce riporta il nome italiano, i nomi alternativi originali e il numero di pagina. Il tipo
(combattimento, evocazione, portale e così via) è indicato quando l'incantesimo rientra in una delle
otto categorie previste da CoC7. Gli altri quattordici, come Resurrezione o il Segno degli Antichi,
non hanno un tipo. Quarantacinque voci hanno anche una sintesi dell'effetto; le altre quindici
rimandano soltanto al manuale, perché non abbiamo trovato una fonte pubblica che ne confermi gli
effetti. Mancano costi e tempo di lancio. Il testo del manuale è coperto da copyright e i valori
della settima edizione non circolano in fonti libere, così il Custode li inserisce dalla scheda dopo
aver importato l'incantesimo. I nomi italiani sono nostri: l'edizione italiana pubblicata potrebbe
usarne altri.

## Requisiti

| Pacchetto | Versione |
| --- | --- |
| Foundry VTT | 14 |
| Call of Cthulhu 7th Edition (CoC7) | 8.15 o successiva |
| Babele (con libWrapper) | 2.9.1 o successiva |
| Translation: Italian \[Core] | opzionale, consigliato |

## Installazione

1. Dal gestore sistemi di Foundry installa o aggiorna
   [Call of Cthulhu 7th Edition](https://foundryvtt.com/packages/CoC7).
2. Dal gestore moduli installa [Babele](https://foundryvtt.com/packages/babele) (installa anche libWrapper)
   e, se vuoi l'interfaccia di Foundry in italiano,
   [Translation: Italian \[Core]](https://foundryvtt.com/packages/translation-core-it).
3. Nel gestore moduli clicca **Installa Modulo** e incolla l'URL del manifest:

   ```
   https://github.com/digennarot/call-of-cthulhu-7th-babele-it/releases/latest/download/module.json
   ```

4. Nel mondo di gioco, in **Impostazioni di Gioco → Gestisci Moduli**, attiva Babele, questo modulo
   e (se installata) la traduzione del core.
5. In **Impostazioni di Gioco → Configura Impostazioni → Lingua**, scegli *Italiano* e ricarica.

Gli aggiornamenti arrivano dal gestore moduli di Foundry come per qualsiasi altro modulo.

## Problemi noti

* I nomi tradotti delle abilità valgono per i documenti presi dai compendi: le abilità già presenti
  negli attori creati prima di attivare il modulo mantengono il nome originale.
* Le richieste mostrate durante il calcolo del costo degli incantesimi (*Incantesimo di prova*) non
  sono tradotte.
* Viene tradotto solo il manuale inglese: quelli in tedesco, spagnolo, francese, giapponese e ucraino
  restano nella loro lingua.

## Segnalazioni e suggerimenti

La traduzione è fatta dalla community e non è ufficiale. Errori, refusi e proposte sono benvenuti:
apri una [issue](https://github.com/digennarot/call-of-cthulhu-7th-babele-it/issues) indicando il
compendio o la schermata, il testo attuale e quello proposto.

## Per chi contribuisce

### Struttura del repository

| Percorso | Contenuto |
| --- | --- |
| `module.json` | Manifest del modulo |
| `babele-register.js` | Registra le traduzioni su `babele.init` e mappa `skillName`/`specialization` delle abilità e i campi biografici degli attori |
| `compendium/CoC7.<pack>.json` | Un file di traduzione Babele per ogni compendio del sistema |
| `src/packs/<nome>/*.json` | Sorgenti dei compendi propri del modulo (un file per documento) |
| `tools/build-packs.mjs` | Compila `src/packs` in `packs/` (LevelDB) con `@foundryvtt/foundryvtt-cli`; lo esegue il workflow di release |
| `lang/it.json` | Stringhe dell'interfaccia (si sommano a quelle italiane del sistema) |
| `.github/workflows/release.yml` | Build e pubblicazione automatica |

Le abilità vanno tradotte insieme a `skillName` e `specialization`: CoC7 ricostruisce il nome
visualizzato da questi due campi, quindi tradurre solo `name` non basta.

### Pubblicare una nuova versione

1. Aumenta `version` in `module.json` e aggiungi una voce in [Versioni](#versioni).
2. Fai push su `master`: GitHub Actions crea la release `v<versione>` con `module.json` e
   `module.zip`, e imposta `manifest` e `download` sui link corretti.

Ogni push successivo con la stessa versione aggiorna i file della release esistente.

## Riconoscimenti

* Aggiornamento per Foundry VTT 14 e CoC7 8.15 a cura di *digennarot*.
* La traduzione originale è opera di *Antonino Lupo/Anthony L. Wolf* (Mr. Wolf).
* Si ringrazia *José E. Lozano* (Viriato139ac) per l'incredibile supporto su GitHub.
* Come template è stata utilizzata la traduzione di *Dungeon World* di *patoarayas* e la versione
  spagnola di Call of Cthulhu 7e di *Viriato139ac*.
* *Babele* è un modulo di *Simone Ricciardi*.

## Versioni

### 1.4.0

* Nuovo compendio *Incantesimi (Manuale del Custode)* con 60 incantesimi, visibile solo al Custode.
* Tradotte le biografie del personaggio e della creatura di esempio e le occupazioni del cattivo e
  dello scagnozzo.
* Corretto: i titoli delle sezioni biografiche dell'*Esempio Setup Anni Venti* non venivano tradotti (Babele
  ignora le traduzioni di tipo array; ora passano da un convertitore dedicato).

### 1.3.2

* Rimossi file non utilizzati (vecchio `lang/en.json` e un'immagine da 1,5 MB): il pacchetto è più leggero.

### 1.3.1

* Tooltip delle abilità allineati all'inglese: aggiunti il tiro combinato immediato e il collegamento
  al tiro con modificatori, corretto l'HTML del tooltip dei contrassegni.
* Il tooltip di ricarica delle armi ora va a capo correttamente.
* README riscritto.

### 1.3.0

* Interfaccia completata: tradotte le 529 stringhe di CoC7 8.15 che mancavano anche nella traduzione
  italiana del sistema (Chaosium Canvas Interface, costi degli incantesimi, CoC ID, impostazioni,
  pacchetti esperienza, errori, ecc.).
* I nomi delle abilità nelle etichette CoC ID coincidono con quelli del compendio Abilità.
* Manuale aggiornato con le etichette italiane dell'interfaccia.

### 1.2.0

* Tradotti i compendi *Tabelle Sanità* (tabelle VII–X) e *Tabelle* (attacchi di follia in tempo reale).
* Tradotto il manuale del sistema (21 pagine), mantenendo link, immagini e ancore funzionanti.

### 1.1.0

* Abilità allineate alle chiavi di CoC7 8.15, mantenendo nomi e descrizioni curati: ora vengono
  tradotte tutte le 103 abilità, anche dentro gli attori di esempio.
* Nuovi compendi tradotti: *Armi* e *Fobie e Manie*, con le relative cartelle.
* *Esempi Oggetti*: tradotti anche sezioni della biografia, occupazioni e tratti suggeriti,
  descrizione speciale delle armi e tempo di lancio degli incantesimi.
* Richieste di Tiri rigenerate con i nuovi nomi delle abilità.

### 1.0.0

* Prima versione stabile pubblicata da digennarot.
* Build e release automatiche con GitHub Actions a ogni push su `master`.

<details>
<summary>Versioni precedenti</summary>

#### 0.7.0

* Aggiornata la compatibilità a Foundry VTT 14, CoC7 8.15+ e Babele 2.9.1+.
* Manifest aggiornato al formato attuale di Foundry (`id`, `authors`, `relationships`).
* Registrazione delle traduzioni tramite l'hook `babele.init`.
* Compendi riallineati ai contenuti di CoC7 8.15: nuove abilità (Combattere, Armi da Fuoco, Scienza,
  Lingua, ecc.), nuovi esempi e Richieste di Tiri con la nuova sintassi.
* Tradotti anche `skillName` e `specialization` delle abilità, così il sistema ricostruisce i nomi
  in italiano.
* Rimosse dal file di lingua le chiavi non più usate dal sistema.

#### 0.6.0

* Prima versione funzionante, tradotta da HavlockV/CoC7-FoundryVTT 0.5.4.

</details>

---

## English

Unofficial, fan-made Italian translation of the **Call of Cthulhu 7th Edition** system
(Miskatonic Investigative Society) for Foundry VTT. It translates the system compendiums through
Babele (skills, weapons, phobias and manias, examples, sanity and roll tables, roll requests, the
system manual) and completes the system's partial Italian UI translation. It also adds a Keeper-only
compendium listing the 60 Keeper Rulebook spells (Italian names, page references, spell
types where CoC7 has a matching category and summaries for 45 of them; costs are left for the Keeper
to fill in).

**Requires** Foundry VTT 14, CoC7 8.15+, Babele 2.9.1+ (with libWrapper). The
*Translation: Italian \[Core]* module is optional but recommended.

**Install** — in Foundry's module manager click *Install Module* and paste:

```
https://github.com/digennarot/call-of-cthulhu-7th-babele-it/releases/latest/download/module.json
```

Then enable Babele and this module in your world and set the language to *Italiano*.

**Known issues** — skills already embedded in actors created before enabling the module keep their
original names; the spell cost prompts (*Test Spell*) are not translated; the German, Spanish,
French, Japanese and Ukrainian manuals stay in their own language.

Feedback and corrections are welcome through
[GitHub issues](https://github.com/digennarot/call-of-cthulhu-7th-babele-it/issues).

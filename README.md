# Calcolatore Anestesia Pediatrica

Applicazione web a pagina singola (HTML/CSS/JavaScript, nessuna dipendenza esterna) per il calcolo rapido di parametri anestesiologici pediatrici e dosaggi farmacologici a partire da peso, età e altezza del paziente.

Nata come riproduzione digitale del foglio di riferimento affisso in Sala Operatoria, pensata per essere consultata da qualunque dispositivo (smartphone, tablet, computer) e salvabile sulla schermata Home di iPhone/Android come web app.

## Funzionalità

- Calcolo di parametri antropometrici e derivati: superficie corporea (BSA), diametro/lunghezza tubo endotracheale, profondità di inserimento, spazio morto e volumi ventilatori, fabbisogno idrico di mantenimento (regola 4-2-1) e reintegro del deficit da digiuno, volume ematico stimato (EBV) e perdita ematica consentita, trasfusione di emazie concentrate.
- Dosaggi farmacologici calcolati automaticamente dal peso corporeo, organizzati per categoria:
  - **Sedazione procedurale** (Pronto Soccorso pediatrico): midazolam, fentanil, ketamina (effetto analgesico e sedazione dissociativa), dexmedetomidina, propofol — con vie di somministrazione, dosi minime/massime, onset e durata d'azione.
  - Farmaci pre-operatori, induzione, intubazione, miorilassanti e decurarizzazione, oppioidi, farmaci peri-operatori, farmaci d'emergenza, antibiotici, analgesici, profilassi dell'endocardite.
- Ricerca testuale tra i farmaci, categorie a scomparsa, stampa.

## Utilizzo

Apri `Index.html` in un browser, oppure pubblica il repository con **GitHub Pages** per avere un link condivisibile e installabile come app sulla schermata Home dei dispositivi mobili (Aggiungi a Home / Aggiungi alla schermata Home dal menu di condivisione del browser).

Non sono richieste build, server o dipendenze: è un singolo file HTML autosufficiente.

## Fonti dei dati

- Parametri antropometrici, vie aeree, ventilazione, fluidi e la maggior parte dei dosaggi farmacologici: foglio di riferimento di Sala Operatoria dell'autore.
- Schemi di sedazione procedurale: materiale didattico SIMEUP – *"Analgosedazione Procedurale in Pronto Soccorso in età pediatrica"* (corso online); dosaggio di ketamina per via intranasale da Oliveira L., Silva J., *"Intranasal ketamine for acute pain management in children: a systematic review and meta-analysis"*, Am J Emerg Med, 2020.

## Avvertenza clinica

Questo strumento è un supporto al calcolo e **non sostituisce il giudizio clinico**. Verificare sempre il foglietto illustrativo del farmaco, le linee guida e il protocollo in uso presso il proprio reparto/pronto soccorso prima di qualunque prescrizione o somministrazione. La responsabilità della prescrizione e della somministrazione resta interamente in capo al clinico. Segnalare eventuali errori aprendo una Issue su questo repository.

## Licenza

Distribuito con licenza MIT — vedi [LICENSE](LICENSE). La licenza copre il codice, non costituisce validazione clinica dei contenuti.

# JS biglietto treno

## Richiesta

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
> 
> - 100km, 10 anni => prezzo corretto:  €16.80
> - 100km, 70 anni => prezzo corretto: €12.60
> 
> Buon lavoro!

---
## Pseudo codice

### Raccolta dati

- Chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)
- Chiedo all'utente la sua età (via prompt)

### Da fare dopo
- Validare i dati inseriti dall'utente

### Elaborazione
- Calcolo il prezzo base del biglietto in base ai chilometri che l'utente vuole percorrere
- SE (l'utente è minorenne)
    - Applico sconto del 20% sul costo base del biglietto
- ALTRIMENTI SE (l'utente è over 65)
    - Applico sconto del 40% sul costo base del biglietto

### Output
- SE (l'utente è minorenne)
    - Mostro all'utente il nuovo costo del biglietto dopo aver applicato lo sconto del 20%
- ALTRIMENTI SE (l'utente è over 65)
    -  Mostro all'utente il nuovo costo del biglietto dopo aver applicato lo sconto del 40%
- ALTRIMENTI
    - Mostro all'utente il costo del biglietto base per i chilometri che vuole percorrere

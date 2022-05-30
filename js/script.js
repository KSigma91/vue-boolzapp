/*
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/

var app = new Vue({
    el : '.container',
    data : {
        cliccato : 0,
        selectMessage : "",
        listContact : [
            {
                name : "Pinco",
                avatar : "img/kisspng-user-profile-computer-icons-profile-5ac0924526cda6.172054181522569797159.png",
                visible : true,
                messages : [
                    {
                        date : "10/01/2020 15:30:55",
                        message : "Hai portato a spasso il cane?",
                        status : "sent",
                    },
                    {
                        date : "10/01/2020 15:50:00",
                        message : "Ricordati di stendere i panni",
                        status : "sent",
                    },
                    {
                        date : "10/01/2020 16:05:12",
                        message : "Tutto fatto!",
                        status : "received"
                    }
                ],
            },
            {
                name : "Panco",
                avatar : "img/kisspng-user-profile-computer-icons-profile-5ac0924526cda6.172054181522569797159.png",
                visible : true,
                messages : [
                    {
                        date : "20/03/2020 16:30:00",
                        message : "La Marianna va in campagna",
                        status : "received",
                    },
                    {
                        date : "20/03/2020 16:30:55",
                        message : "Sicuro di non aver sbagliato chat?",
                        status : "sent",
                    },
                    {
                        date : "20/03/2020 16:35:47",
                        message : "Ah scusa!",
                        status : "received"
                    }
                ],
            },
            {
                name : "Sempronio",
                avatar : "img/kisspng-user-profile-computer-icons-profile-5ac0924526cda6.172054181522569797159.png",
                visible : true,
                messages : [
                    {
                        date : "28/03/2020 10:10:40",
                        message : "Ciao come stai?",
                        status : "sent",
                    },
                    {
                        date : "28/03/2020 10:20:55",
                        message : "Bene grazie! Stasera ci vediamo?",
                        status : "received",
                    },
                    {
                        date : "28/03/2020 16:15:03",
                        message : "Mi piacerebbe ma devo andare a fare la spesa.",
                        status : "sent"
                    }
                ],
            },
            {
                name : "Antani",
                avatar : "img/kisspng-user-profile-computer-icons-profile-5ac0924526cda6.172054181522569797159.png",
                visible : true,
                messages : [
                    {
                        date : "30/03/2020 17:10:00",
                        message : "Ciao, andiamo a mangiare la pizza stasera?",
                        status : "received",
                    },
                    {
                        date : "30/03/2020 17:15:55",
                        message : "No, l'ho già mangiata ieri, ordiniamo sushi!",
                        status : "sent",
                    },
                    {
                        date : "30/03/2020 16:15:03",
                        message : "OK!",
                        status : "received"
                    }
                ],
            },
            {
                name : "Pippo",
                avatar : "img/kisspng-user-profile-computer-icons-profile-5ac0924526cda6.172054181522569797159.png",
                visible : true,
                messages : [
                    {
                        date : "02/04/2020 09:00:17",
                        message : "Fai gli auguri a Martina che è il suo compleanno!",
                        status : "sent",
                    },
                    {
                        date : "02/04/2020 09:30:00",
                        message : "Grazie per avermelo ricordato, lo scrivo subito!",
                        status : "received"
                    }
                ]
            }   
        ]
    },
    methods : {
        showMessage(posizioneContatto) {
            this.cliccato = posizioneContatto;
        }
    }
});
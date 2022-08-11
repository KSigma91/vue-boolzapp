/*
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/

var app = new Vue({
    el : '.container',
    data : {
        searchContact : "",
        cliccato : 0,
        myMessage : "",
        listContact : [
            {
                name : "Pinco",
                avatar : "https://www.archilibri.it/archi/wp-content/uploads/2018/05/img_avatar2.png",
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
                avatar : "https://www.w3schools.com/w3images/avatar6.png",
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
                avatar : "https://www.archilibri.it/archi/wp-content/uploads/2015/09/img_avatar.png",
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
                avatar : "https://www.w3schools.com/w3images/avatar2.png",
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
        },
        digitMessage() {
            var myMessageSent = {
                message : this.myMessage,
                status : "sent",
            };
            if(myMessageSent !== "") {
                this.listContact[this.cliccato].messages.push(myMessageSent);
                myMessageSent = "";
            };
            this.myMessage = "";
            setTimeout(() => {
                this.listContact[this.cliccato].messages.push({
                    message : "Ok!",
                    status : "received",
                });
            }, 1000);
        },    
        showContact() {
            this.listContact.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.searchContact.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });

            // return this.listContact.forEach((contact) => {
            //     return contact.name.toLowerCase().includes(this.searchContact.toLowerCase());
            // })
        }
    },
});
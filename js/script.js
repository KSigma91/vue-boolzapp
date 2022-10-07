var app = new Vue({
    el : '.container',
    data : {
        searchContact : "",
        cliccato : 0,
        myMessage : "",
        listContact : [
            {
                name : "Sarah",
                avatar : "https://www.archilibri.it/archi/wp-content/uploads/2018/05/img_avatar2.png",
                visible: true,
                messages : [
                    {
                        date : "15:30",
                        message : "Hai portato a spasso il cane?",
                        status : "sent",
                    },
                    {
                        date : "15:50",
                        message : "Ricordati di stendere i panni",
                        status : "sent",
                    },
                    {
                        date : "16:05",
                        message : "Tutto fatto!",
                        status : "received"
                    }
                ],
            },
            {
                name : "Anna",
                avatar : "https://www.w3schools.com/w3images/avatar6.png",
                visible : true,
                messages : [
                    {
                        date : "16:30",
                        message : "La Marianna va in campagna",
                        status : "received",
                    },
                    {
                        date : "16:30",
                        message : "Sicuro di non aver sbagliato chat?",
                        status : "sent",
                    },
                    {
                        date : "16:35",
                        message : "Ah scusa!",
                        status : "received"
                    }
                ],
            },
            {
                name : "Mario",
                avatar : "img/kisspng-user-profile-computer-icons-profile-5ac0924526cda6.172054181522569797159.png",
                visible : true,
                messages : [
                    {
                        date : "10:10",
                        message : "Ciao come stai?",
                        status : "sent",
                    },
                    {
                        date : "10:20",
                        message : "Bene grazie! Stasera ci vediamo?",
                        status : "received",
                    },
                    {
                        date : "16:15",
                        message : "Mi piacerebbe ma devo andare a fare la spesa.",
                        status : "sent"
                    }
                ],
            },
            {
                name : "Andrea",
                avatar : "https://www.archilibri.it/archi/wp-content/uploads/2015/09/img_avatar.png",
                visible : true,
                messages : [
                    {
                        date : "17:10",
                        message : "Ciao, andiamo a mangiare la pizza stasera?",
                        status : "received",
                    },
                    {
                        date : "17:15",
                        message : "No, l'ho già mangiata ieri, ordiniamo sushi!",
                        status : "sent",
                    },
                    {
                        date : "16:15",
                        message : "OK!",
                        status : "received"
                    }
                ],
            },
            {
                name : "Alessio",
                avatar : "https://www.w3schools.com/w3images/avatar2.png",
                visible : true,
                messages : [
                    {
                        date : "09:00",
                        message : "Fai gli auguri a Martina che è il suo compleanno!",
                        status : "sent",
                    },
                    {
                        date : "09:30",
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
        }
    }
});
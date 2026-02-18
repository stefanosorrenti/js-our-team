//TRACCIA

/*

Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.


Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

Buon divertimento e confermate lettura come al solito

 */



//HUMAN CODE

/*

Cosa devo fare?

-Identifico markup da generare
-Seleziono nodi DOM che mi servira
-Creo una variabile d'appoggio
-Creo un ciclo nell'array di oggetti (solita prassi)
-Creo una variabile con all'interno il nostro markup
-Dico al ciclo di che ad ogni iterazione deve inserire il tutto dentro la variabile d'appoggio co le relative proprieta del ciclo
-Unisco il contento della variabile markup a quello della variabile d'appoggio
-InnerHTML sull nodo inseredo il contenuto della variabile d'appoggio
------NEL CICLO------





*/






const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
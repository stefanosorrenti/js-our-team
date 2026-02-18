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

-Identifico markup da generare (X)
-Seleziono nodi DOM che mi servira (X)
-Creo una variabile d'appoggio (X)
-Creo un ciclo nell'array di oggetti (solita prassi) (X)
-Destrutturo CIASCUN SINGOLO oggetto all'interno del mio array.
-Creo una variabile con all'interno il nostro markup
-Dico al ciclo di che ad ogni iterazione deve inserire il tutto dentro la variabile d'appoggio co le relative proprieta del ciclo
-Unisco il contento della variabile markup a quello della variabile d'appoggio
-InnerHTML sull nodo inseredo il contenuto della variabile d'appoggio






*/

//DATA

//indetifico il markup da generare 

/*
<div class="card col-4">
            <!--IMG ROW-->
            <div class="row">
              <!--Card img-->
              <img src="./assets/img/male1.png" class=" col-4 img-fluid rounded-start">
            </div>

            <div class="col-8">
              <!--Card body-->
              <div class="card-body">

                <!--Card title-->
                <h2 class="card-title">MARCO BIANCHI</h2>

                <!--Card text-->
                <p class="card-text">
                  <span class="role ">Designer</span>
                  <span class="email d-block">mailto:marcobianchi@team.com</span>
                </p>
              </div>
            </div>
          </div>
*/

const rowEL = document.querySelector('div.row') //Selezion i nodi della  DOM che mi serviranno
console.log(rowEL);




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

//LOGIC
let cards = '' //Creo una variabile d'appoggio

for (let i = 0; i < teamMembers.length; i++) { //Creo un ciclo nell'array di oggetti (solita prassi)
  const memeber = teamMembers[i];
  console.log(`Sono nel ciclo for`);
  //console.log(memeber);
  const {name, role, email, img} = memeber //Destrutturo CIASCUN SINGOLO oggetto all'interno del mio array.
  console.log(name, role, email, img);
  
  let markup = `Ciao mi chiamo ${name}` //Creo una variabile con all'interno il nostro markup

  cards += markup //Unisco il contento della variabile markup a quello della variabile d'appoggio


  
  
}

console.log(cards);

//InnerHTML sull nodo inseredo il contenuto della variabile d'appoggio
rowEL.innerHTML = cards
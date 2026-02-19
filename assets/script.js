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

//PER AGGIUNGERE UN MEMBRO DEL TEAM COME  POSSO FARE?
-Creo un form in HTML (X)
-Seleziono il nodo del form e dei suoi input (X)
-Aggiungo un evento sul suo submit (X)
-Nell'evento disattivo il suo comportamento naturale (X)
-Raccolgo tutti dati del form (X)
-Seleziono il valore di tutti i dati del form e me li savo (X)
-Creo un oggetto con tutti i valori (X)
-Pusho l'oggetto nel 'array di oggetti (X)
-Ripeto l'operazione stampa del markup





*/

//DATA

//indetifico il markup da generare 

/*
<div class="card mb-3 border-0 bg-black rounded-0 px-0 card-mw">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="./assets/img/male1.png" class="img-fluid " alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body text-white d-flex flex-column justify-content-center align-items-start">
              <h2 class="card-title h5 fw-bold">Marco Bianchi</h2>
              <p class="card-text fw-semibold">Designer</p>
              <a class="email text-decoration-none text-info fw-semibold">mailto:marcobianchi@team.com</a> 
            </div>
        </div>
    </div>
</div>
*/

const rowEL = document.querySelector('div.row') //Selezion i nodi della  DOM che mi serviranno
//console.log(rowEL);

const formEL = document.querySelector('form.form-control') //Seleziono il nodo del form
console.log(formEL);

//const inputsEL = document.querySelectorAll(' .form-control input')

//Seleziono il valore di tutti i dati del form e me li salvo
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputMail = document.getElementById('mail');
const inputPic = document.getElementById('pro-pic');




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

const cardsTemplate = getCardTemplate(teamMembers)




//console.log(cards);

//InnerHTML sull nodo inseredo il contenuto della variabile d'appoggio
rowEL.innerHTML = cardsTemplate


formEL.addEventListener('submit', function (event) { //Aggiungo un evento sul suo submit
  event.preventDefault() //Nell'evento disattivo il suo comportamento naturale 
  console.log('Hai cliccato');

  const inputObj = {  //Creo un oggetto con tutti i valori (X)
    name: inputName.value,
    role: inputRole.value,
    email: inputMail.value,
    img: inputPic.value
  }
  console.log(inputObj);

  teamMembers.push(inputObj) //Pusho l'oggetto nel 'array di oggetti

  let lastMemberTeam = ''
  for (let i = 0; i < teamMembers.length; i++) {
    const lastMember = teamMembers.at(-1)
    console.log(lastMember);
    const{name, role, email, img} = lastMember

    let lastMarkup = `
  <div class="card mb-3 border-0 bg-black rounded-0 px-0 card-mw">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="./assets/${img}" class="img-fluid " alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body text-white d-flex flex-column justify-content-center align-items-start">
              <h2 class="card-title h5 fw-bold">${name.toUpperCase()}</h2>
              <p class="card-text fw-semibold">${role}</p>
              <a class="email text-decoration-none text-info fw-semibold">${email}</a> 
            </div>
        </div>
    </div>
</div>
  `

  lastMemberTeam = lastMarkup
    
  }
  


  rowEL.innerHTML = cardsTemplate + lastMemberTeam
  
  
})


//FUNCTIONS

function getCardTemplate(obj) {

  let cards = '' //Creo una variabile d'appoggio

  for (let i = 0; i < obj.length; i++) { //Creo un ciclo nell'array di oggetti (solita prassi)
    const memeber = obj[i];

    //console.log(`Sono nel ciclo for`);
    //console.log(memeber);
    const { name, role, email, img } = memeber //Destrutturo CIASCUN SINGOLO oggetto all'interno del mio array.

    //console.log(name, role, email, img);

    //Creo una variabile con all'interno il nostro markup e vado ad interpolare le variabili con le porprietà
    let markup = `
  <div class="card mb-3 border-0 bg-black rounded-0 px-0 card-mw">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="./assets/${img}" class="img-fluid " alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body text-white d-flex flex-column justify-content-center align-items-start">
              <h2 class="card-title h5 fw-bold">${name.toUpperCase()}</h2>
              <p class="card-text fw-semibold">${role}</p>
              <a class="email text-decoration-none text-info fw-semibold">${email}</a> 
            </div>
        </div>
    </div>
</div>
  `

    cards += markup //Unisco il contento della variabile markup a quello della variabile d'appoggio




  }

return cards



}
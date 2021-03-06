
let nameUser = document.querySelector('.input-name');
let kmViaggio = document.querySelector('.input-km');
let ageSelect = document.querySelector('#age-select');

let namePassenger = document.querySelector('#name-passenger');
let tipoTicket = document.querySelector('#tipo-ticket');
let costoTicket = document.querySelector('#costo-ticket');
let numCarrozza = document.querySelector('#num-carrozza');
let codiceCp = document.querySelector('#codice-cp');

let btnGenera = document.querySelector('#btn-genera');
let btnAnnulla = document.querySelector('#btn-annulla');

let displayNone = document.querySelector('#display-div');

//prezzo km

const prezzoKm = 0.21;

// calcolare costo euro per km da percorrere

let costoViaggio = (kmViaggio.value * prezzoKm).toFixed(2);


//sconto del 20% per Under 18


let scontoU18 = costoViaggio - ((costoViaggio * 20) / 100);


//sconto del 40% per Over 65

let scontoOver65 = costoViaggio - ((costoViaggio * 40) / 100);


/* CLICK BUTTON GENERA */

btnGenera.addEventListener("click",
  
  function() {

      const prezzoKm = 0.21;

      // calcolare costo euro per km da percorrere
      let costoViaggio = (kmViaggio.value * prezzoKm).toFixed(2);


      //sconto del 20% per Under 18
      let scontoU18 = costoViaggio - ((costoViaggio * 20) / 100);


      //sconto del 40% per Over 65
      let scontoOver65 = costoViaggio - ((costoViaggio * 40) / 100);

      //nome cliente
      namePassenger.innerHTML = nameUser.value;

      /* COSTO BIGLIETTO */
      if (ageSelect.value == "minorenne") {

          tipoTicket.innerHTML = 'Sconto 20%';
          costoTicket.innerHTML = scontoU18.toFixed(2) + " €";

      } else if (ageSelect.value == "maggiorenne") {

          tipoTicket.innerHTML = 'Biglietto Standard';
          costoTicket.innerHTML = costoViaggio + " €";

      } else if (ageSelect.value == "over65") {

          tipoTicket.innerHTML = 'Sconto 40%';
          costoTicket.innerHTML = scontoOver65.toFixed(2) + " €";
      }

      /* numeri randomici CARROZZA e CODICE CP */
      if (nameUser.value != "" && kmViaggio.value != ""  && ageSelect.value != "") {
      
      //numero randomico da 1 a 9 nella sezione "Carrozza"
      numCarrozza.innerHTML = Math.floor(Math.random() * 9) + 1;

      //numero randomico da 90.000 a 99.999
      codiceCp.innerHTML = Math.floor(Math.random() * 10000) + 90000;
      }

      displayNone.classList.remove('display-none');

  }

);

/* BUTTON ANNULLA */
btnAnnulla.addEventListener("click", 

  function () {

   displayNone.classList.add('display-none');

    nameUser.value = "";
    kmViaggio.value = "";
    ageSelect.value = "";
  
  }

);
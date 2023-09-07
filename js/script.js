const kilometres = parseInt(prompt("Scrivi i chilometro da percorrere"));
const age = parseInt(prompt("Scrivi la tua età"));
let valid = true;
let message;

if((isNaN(age || kilometres)) || age==null || kilometres==null){
  message = "Errore! Non hai inserito un numero";
  valid = false;
}

if(valid){
  let price = kilometres * 0.21;
  if(age < 18){
    message = "Il prezzo da pagare è " + Math.round((price - (price * 20 / 100)) * 100 ) / 100 + " €"
  }
  else if(age > 65){
    message = "Il prezzo da pagare è " + Math.round((price - (price * 40 / 100)) * 100 ) / 100 + " €"
  }
  else{
    message = "Il prezzo da pagare è " + price.toFixed(2) + " €"
  }
}


document.getElementById("output").innerHTML = message;
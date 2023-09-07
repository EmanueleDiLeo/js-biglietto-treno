const kilometres = parseFloat(prompt("Scrivi i chilometro da percorrere"));
const age = parseInt(prompt("Scrivi la tua età"));
let valid = true;
let message;

if((isNaN(age || kilometres)) || age==null || kilometres==null || age < 0 || kilometres < 0){
  message = "Errore! Non hai inserito un valore corretto";
  valid = false;
}

if(valid){
  let price = kilometres * 0.21;
  if(age < 18){
    message = "Il prezzo da pagare è " + (price - (price * 20 / 100)).toFixed(2) + " €"
  }
  else if(age > 65){
    message = "Il prezzo da pagare è " + (price - (price * 40 / 100)).toFixed(2) + " €"
  }
  else{
    message = "Il prezzo da pagare è " + price.toFixed(2) + " €"
  }
}

document.getElementById("output").innerHTML = message;

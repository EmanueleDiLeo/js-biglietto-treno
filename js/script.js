const kilometres = parseInt(prompt("Scrivi i chilometro da percorrere"));
const age = parseInt(prompt("Scrivi la tua età"));
let valid = true;
let message;

if(isNaN(age || kilometres)){
  message = "Errore! Non hai inserito un numero";
  valid = false;
}

if(valid){
  console.log(valid);
}




document.getElementById("output").innerHTML = message;
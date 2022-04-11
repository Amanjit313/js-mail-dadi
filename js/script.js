/* 

1) Mail
- Chiedi all’utente la sua email.
- Controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati).
- Stampa un messaggio appropriato sull’esito del controllo.

2) Gioco dei dadi
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

/* 1) Mail */
/* const email = prompt("Digita la tua email");

const emailautorizzate = ["amanjitsingh313@gmail.com", "amanjitsingh2002@gmail.com", "capitanamericacarletto@gmail.com"]

let emailValido = false;

for (let i = 0; i < emailautorizzate.length; i++){

  if (emailautorizzate[i] === email) {
    emailValido = true;
  }

} 

if (emailValido == true){
  document.getElementById("emailtesto").innerText = "Accesso garantito!"
}

if (emailValido == false){
  document.getElementById("emailtesto").innerText = "Accesso negato!"
} */

/* 2) Gioco dei dadi */
let dadigamesuser = Math.floor((Math.random() * 6) + 1);
console.log(dadigamesuser);
document.getElementById("dadigamesuser").innerHTML = dadigamesuser;

let dadigamescomputer = Math.floor((Math.random() *6) + 1);
console.log(dadigamescomputer);
document.getElementById("dadigamescomputer").innerHTML = dadigamescomputer;

if (dadigamesuser > dadigamescomputer){
  document.querySelector("#risultati").innerHTML = "Hai vinto tu!";
} else if (dadigamesuser < dadigamescomputer){
  document.querySelector("#risultati").innerHTML = "Ha vinto il computer!";
} else{
  document.querySelector("#risultati").innerHTML = "Hai pareggiato!"
}

console.log(risultati);
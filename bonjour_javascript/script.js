let nom = prompt("entres ton prenom") 

//EXERCICE 1
// let message = "Bonjour"
// console.log (message)


//EXERCICE 2
let firstname = "Beyonce"
let message = `Bonjour ${nom} !`
//console.log(message)
document.querySelector('h1').innerText = message;

// //EXERCICE 3
// function sayHello(firstname){

// //let firstname = "Beyonce"
// let message = `Bonjour ${firstname} !`
// return(message)
// }

// console.log(sayHello("Beyonce"))


//EXERCICE 4
// function sayHello(firstname,hour){

// if (hour>=18){return`Bonsoir ${firstname}`}
// else if (hour<18){return`Bonjour ${firstname}`};
// return hour

// }

// console.log(sayHello(`Beyonce`, 11));
// console.log(sayHello(`Beyonce`, 18));
// console.log(sayHello(`Beyonce`, 17));
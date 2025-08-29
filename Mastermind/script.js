// // ETAPE 01 

// let colors = ["red", "blue", "green", "yellow"];
// let secretCode = ["red", "blue"];


// // ETAPE 02

// let colors = ["red", "blue", "green", "yellow", "black", "white", "purple","orange"];
// let secretCode = ["blue", "red", "yellow", "green"];


function validateProposition(proposition) {
    for (let i = 0; i < proposition.length; i++) {
        if (!colors.includes(proposition[i])) {
            return false; // une couleur n'est pas autorisée
        }
    }
    return true; // tout est bon
}
// console.log (validateProposition(["green", "blue", "purple", "yellow"]))
// console.log (validateProposition(["green", "blue", "red", "yellow"]))

//ETAPE 02
console.log (validateProposition(["green", "blue", "pink", "yellow"]))
console.log (validateProposition(["green", "blue", "orange", "yellow"]))




function verification(proposition) {
    if (proposition.length !== secretCode.length) {
        return false;
    }
    for (let i = 0; i < proposition.length; i++) {
        if (proposition[i] !== secretCode[i]) {
            return false; // une couleur ne correspond pas
        }
    }
    return true; // tout correspond
}

// console.log (verification(["green", "blue", "red", "yellow", "blue"]))
// console.log (verification(["blue", "red"]))
// console.log (verification(["red", "blue"]))

//ETAPE 02
console.log (verification(["green", "blue", "red", "yellow", "blue"]))
console.log (verification(["blue", "blue", "yellow", "green"]))
console.log (verification(["blue","yellow", "blue", "green"]))



function playGame() {
    let essais = 0;
    let found = false;

    while (essais < 12 && !found) {
        // let proposition = ["red", "green"]; // ----> ETAPE 01
        let proposition = ["blue", "red","green","yellow"]; //   ----> ETAPE 02

        if (!validateProposition(proposition)) {
            console.log("Proposition invalide !");
            return;
        }

        if (verification(proposition)) {
            console.log("Bravo, trouvé !");
            found = true;
        } else {
            console.log("Raté, essaye encore !");
        }

        essais++;
    }

    if (!found) {
        console.log("Perdu ! Le code secret était : " + secretCode);
    }
}

playGame()




// Utilisation de l'IA comme outils sur les étapes 01 et 02.

// ETAPE 03 & 04 
// je ne vois pas l'interêt de mettre les 3 & 4,
// j'aurais été incapable de faire la gestion des couleurs bien/mal placées, ni la génération aléatoire du code secret.... Mais j'ai essayé de les comprendre avec chatGPT



// ETAPE 01 = Triangle d'étoiles


// function afficherEtoiles() {

//     let n_rows = 5;

//     // // Affiche le premier '+'
//     // console.log("+");

//     // Affiche le premier '\'
//     console.log("\\");

//     // boucle externe
//     for (let i = 1; i < n_rows; i++) {

//         // initialiser une ligne vide
//         let line = "";

//         // boucle interne
//         for (let j = 0; j < i; j++) {
//             line += "*";  // ajouter une étoile
//         }

//         if (i > 0) {
//             line += "\\"
//         };

//         // afficher la ligne complète
//         console.log(line);
//     }
// }

// afficherEtoiles()



// // ETAPE 1.4 Seconde moitié et espaces

// function afficherTriangleGauche() {
//     let n_rows = 5;

//     // Boucle externe pour les lignes (de 1 à 5)
//     for (let i = 1; i <= n_rows; i++) {
//         let line = "";

//         // Boucle interne pour ajouter les espaces
//         // Le nombre d'espaces diminue à chaque nouvelle ligne
//         for (let j = 0; j < n_rows - i; j++) {
//             line += " ";
//             // line += ".";
//         }

//         // Ajoutez le caractère de départ '/'
//         line += "/";

//         // Boucle interne pour ajouter les étoiles
//         // Le nombre d'étoiles augmente à chaque nouvelle ligne
//         for (let k = 0; k < i - 1; k++) {
//             line += "*";
//         }

//         // Afficher la ligne complète
//         console.log(line);
//     }
// }

// afficherTriangleGauche();



// ETAPE 1/5 - Assemblage et décorations

function afficherPointeSapin() {
    let n_rows = 5;

    // Afficher le sommet du sapin
    console.log("     +");

    // Boucle pour chaque ligne du sapin (de 1 à 5)
    for (let i = 1; i <= n_rows; i++) {
        let line = "";

        // Ajouter les espaces pour aligner la partie gauche
        // Le nombre d'espaces diminue à chaque ligne
        for (let j = 0; j < n_rows - i; j++) {
            line += " ";
        }

        // Ajouter la partie gauche
        line += "/";
        for (let k = 0; k < i - 1; k++) {
            line += "*";
        }
        
        // Ajouter la partie centrale (le tronc)
        line += "|";
        
        // Ajouter la partie droite
        for (let l = 0; l < i - 1; l++) {
            line += "*";
        }
        line += "\\";

        // Afficher la ligne complète
        console.log(line);
    }
}

afficherPointeSapin();



// // ETAPE 2: Sapin à étages

// function afficherSapin(hauteur_etage, etages) {
//     let etages = 3;
//     let hauteur_etage = afficherPointeSapin();

//     console.log("   +");

//     for (let i = 1; i <= etages; i++) {
//     }

// }

// afficherSapin(hauteur_etage, etages);



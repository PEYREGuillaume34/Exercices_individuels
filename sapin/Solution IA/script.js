// Fonction pour ajouter des décorations aléatoires
function ajouterDecorations(chaineEtoiles) {
    let newLine = "";
    for (let i = 0; i < chaineEtoiles.length; i++) {
        // 1 chance sur 10 d'avoir une décoration
        if (Math.random() < 0.1) {
            // 1 chance sur 2 d'avoir un '+' ou un 'o'
            if (Math.random() > 0.5) {
                newLine += "+";
            } else {
                newLine += "o";
            }
        } else {
            newLine += chaineEtoiles[i];
        }
    }
    return newLine;
}

// ETAPE 1 : La pointe du sapin
function afficherPointeSapin(hauteur) {
    // Le sommet
    console.log(" ".repeat(hauteur + 2) + "+");

    // Les lignes de la pointe
    for (let i = 1; i <= hauteur; i++) {
        let line = "";
        line += " ".repeat(hauteur - i + 2);
        line += "/";
        line += "*".repeat(i - 1);
        line += "|";
        line += "*".repeat(i - 1);
        line += "\\";
        console.log(line);
    }
}

// ETAPE 2 : Un étage du sapin
function afficherEtage(hauteur, pointe_offset) {
    const etagesMax = 3; // On peut ajuster cela si on veut un sapin plus large
    const espacementBase = (hauteur + etagesMax) - (hauteur + pointe_offset);

    for (let i = 1; i <= hauteur; i++) {
        let line = "";
        line += " ".repeat(espacementBase + hauteur - i);
        
        let etoilesGauche = "*".repeat(i - 1 + pointe_offset);
        etoilesGauche = ajouterDecorations(etoilesGauche);

        let etoilesDroite = "*".repeat(i - 1 + pointe_offset);
        etoilesDroite = ajouterDecorations(etoilesDroite);

        line += "/";
        line += etoilesGauche;
        line += "|";
        line += etoilesDroite;
        line += "\\";
        
        console.log(line);
    }
}

// ETAPE 3 : Le tronc du sapin
function afficherTronc(hauteur_etage, etages) {
    const troncHauteur = 3;
    const troncLargeur = 3; 

    // Calcul de la largeur de la base du sapin pour centrer le tronc
    const largeurMaxSapin = (hauteur_etage + etages -1) * 2 + 1;
    const espacementTronc = Math.floor(largeurMaxSapin / 2) + 1;

    for (let i = 0; i < troncHauteur; i++) {
        console.log(" ".repeat(espacementTronc) + "###");
    }
}

// Fonction principale pour afficher le sapin entier
function afficherSapin(etages, hauteur_etage) {
    afficherPointeSapin(hauteur_etage);

    for (let i = 1; i < etages; i++) {
        afficherEtage(hauteur_etage, i);
    }

    afficherTronc(hauteur_etage, etages);
}

// Appel de la fonction pour afficher le sapin
afficherSapin(3, 3);
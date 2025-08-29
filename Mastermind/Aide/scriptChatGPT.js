// ========================
// Mastermind en JS (console)
// Étapes 1 → 4
// ========================

// Liste des couleurs possibles
let colors = ["red", "blue", "green", "yellow", "black", "white", "purple", "orange"];

// ========================
// Étape 4 : Générer le code secret aléatoirement
// longueur = 2 (étape 1), 4 (étape 2+)
// ========================
function genererCodeSecret(longueur) {
    let code = [];
    for (let i = 0; i < longueur; i++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        code.push(colors[randomIndex]);
    }
    return code;
}

// Ici, on choisit 4 couleurs car on est déjà à l’étape 3-4
let secretCode = genererCodeSecret(4);
console.log("👉 Code secret (debug, normalement caché) :", secretCode);

// ========================
// Étape 1 : Vérifier que la proposition est valide
// ========================
function validateProposition(proposition) {
    for (let i = 0; i < proposition.length; i++) {
        if (!colors.includes(proposition[i])) {
            return false; // une couleur n'est pas autorisée
        }
    }
    return true; // tout est bon
}

// ========================
// Étape 3 : Compter bien placées / mal placées
// ========================
function feedback(proposition, secretCode) {
    let bienPlacees = 0;
    let malPlacees = 0;

    // Copies pour marquer les couleurs déjà comptées
    let secretCopy = [...secretCode];
    let propositionCopy = [...proposition];

    // Étape 1 : compter les bien placées
    for (let i = 0; i < proposition.length; i++) {
        if (proposition[i] === secretCode[i]) {
            bienPlacees++;
            secretCopy[i] = null;
            propositionCopy[i] = null;
        }
    }

    // Étape 2 : compter les mal placées
    for (let i = 0; i < propositionCopy.length; i++) {
        if (propositionCopy[i] !== null) {
            let index = secretCopy.indexOf(propositionCopy[i]);
            if (index !== -1) {
                malPlacees++;
                secretCopy[index] = null; // éviter double comptage
            }
        }
    }

    return [bienPlacees, malPlacees];
}

// ========================
// Étape 2 & 3 : Vérification complète
// ========================
function verification(proposition, secretCode) {
    if (proposition.length !== secretCode.length) {
        return false;
    }
    let [bien, mal] = feedback(proposition, secretCode);
    return bien === secretCode.length; // vrai si tout est bien placé
}

// ========================
// Étape 1-4 : Boucle de jeu
// ========================
function playGame() {
    let essais = 0;
    let found = false;

    while (essais < 12 && !found) {
        // ⚠️ Pour l’instant, la proposition est en dur
        // Tu pourras remplacer par une saisie utilisateur
        let proposition = ["blue", "yellow", "red", "green"];

        if (!validateProposition(proposition)) {
            console.log("❌ Proposition invalide !");
            return;
        }

        let [bienPlacees, malPlacees] = feedback(proposition, secretCode);

        if (bienPlacees === secretCode.length) {
            console.log("🎉 Bravo, tu as trouvé !");
            found = true;
        } else {
            console.log(`Essai ${essais + 1}: 🔎 Bien placées: ${bienPlacees}, Mal placées: ${malPlacees}`);
        }

        essais++;
    }

    if (!found) {
        console.log("😢 Perdu ! Le code secret était :", secretCode);
    }
}

// Lancer le jeu
playGame();

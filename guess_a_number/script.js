// ETAPE01
// Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur.
// (Attention tous les compilateurs en ligne ne permettent pas la prise d’input, prendre celui dans l’énoncé si besoin).
//Stocker sa réponse dans une variable de type adéquat nommée givenNumber.



// Étape 2
// Pour le moment nous allons considérer que le nombre à deviner est 22.

// Si le nombre est plus petit que 22, on affichera à l’utilisateur “Plus grand”.
// Si le nombre est plus quand que 22 on affichera à l’utilisateur “Plus petit”.
// Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”.


// Étape 3
// Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
// Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.


// Étape 4
// Maintenant on va considérer que l’on a pas un seul joueur mais 2 🧑‍🤝‍🧑.

// Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
// La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
// Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.



// Fonction pour que le joueur 1 choisisse un nombre entre 0 et 50

function chooseNumber() {
  // Déclaration d'une variable pour stocker le nombre saisi par le joueur
  let number;

  // Boucle qui demande un nombre tant que l'entrée est invalide
  do {
    // Demande au joueur 1 de saisir un nombre via une boîte de dialogue
    // La fonction prompt retourne une chaîne de caractères
    // On utilise Number() pour convertir cette chaîne en nombre
    number = Number(prompt("Joueur 1 : Choisissez un nombre entre 0 et 50"));

    // La boucle continue si :
    // - isNaN(number) : le joueur n'a pas entré un nombre valide
    // - number < 0 : le nombre est trop petit
    // - number > 50 : le nombre est trop grand
  } while (isNaN(number) || number < 0 || number > 50);

  // Une fois que le joueur a entré un nombre valide, on le retourne
  return number;
}




// Fonction qui vérifie si le joueur 2 a deviné le bon nombre

function didIWin(nombreADeviner) {
  
  // let givenNumber = Number(prompt("donnes moi un nombre")) //Etape01 placée dans la fonction
  let givenNumber = Number(prompt("Joueur 2 : Devinez le nombre"));

  if (givenNumber > nombreADeviner) {
    alert("Plus petit");
    return false;
  } else if (givenNumber < nombreADeviner) {
    alert("Plus grand");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}


// Fonction principale de jeu

function gamePlay() {
  const nombreADeviner = chooseNumber();      // joueur 1 choisit le nombre
  let hasWon = false;

  while (!hasWon) {
    hasWon = didIWin(nombreADeviner);         // joueur 2 essaie de deviner
  }
}

gamePlay();                                   // Lancement du jeu



// function gamePlay() {
//   // On garde en mémoire si le joueur a gagné ou non
//   let hasWon = false;

//   // Tant que la fonction 'didIWin()' retourne false (donc le joueur n’a pas trouvé), on continue
//   while (!hasWon) {
//     hasWon = didIWin(); // Appelle didIWin() et met à jour hasWon selon son retour (true ou false)
//   }
// }

// gamePlay();



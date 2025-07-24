//1

function getLatinCharacterList(text) {
	return text.toUpperCase().split("")
}
console.log(getLatinCharacterList("Hello, world"))


//2
const latinToMorse = {
	'A': '.-',
	'B': '-...',
	'C': '-.-.',
	'D': '-..',
	'E': '.',
	'F': '..-.',
	'G': '--.',
	'H': '....',
	'I': '..',
	'J': '.---',
	'K': '-.-',
	'L': '.-..',
	'M': '--',
	'N': '-.',
	'O': '---',
	'P': '.--.',
	'Q': '--.-',
	'R': '.-.',
	'S': '...',
	'T': '-',
	'U': '..-',
	'V': '...-',
	'W': '.--',
	'X': '-..-',
	'Y': '-.--',
	'Z': '--..'
}

function translateLatinCharacter(caractere) {
	return latinToMorse[caractere];
}
console.log(translateLatinCharacter('F'));


//3

function encode(text) {
	let tableau1 = getLatinCharacterList(text);
	let resultat = []
	for (let element of tableau1){
	let morse = translateLatinCharacter(element)
	resultat.push(morse)

	}
	return resultat.join(" ")

}
console.log(encode("Hello"));

//4
const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

function getMorseCharacterList(text){
	return text.split(" ");
}
console.log(getMorseCharacterList('F'));


function translateMorseCharacter(caractere){
return morseToLatin[caractere];
}
console.log(translateMorseCharacter('-..'));



function decode(text){
	let motsMorse = text.split(" / ");
	let resultat = []
	for (let mot of motsMorse) {
    let lettres = mot.split(" ");
    // traduire chaque lettre ici...

	let motLatin = [];
	for (let lettreMorse of lettres) {
    let lettre = translateMorseCharacter(lettreMorse);
    motLatin.push(lettre);
}
	resultat.push(motLatin.join(""));
	}
	return resultat.join(" ");
}	
console.log(decode('... .- ...-'));


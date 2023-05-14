//4)Напишіть програму, яка визначає, чи є задана літера голосною чи
//приголосною, використовуючи оператор switch case.

let letter = prompt("Enter a letter of the Latin alphabet, please.").toLowerCase();

switch (letter) {
	case 'a': 		
	case 'e': 		
	case 'i': 		
	case 'o': 		
	case 'u': console.log("A vowel letter.");
		break;
	case 'y': console.log("Sometimes 'y' is a vowel when it is at the beginning of a word or before a cluster of vowel sounds.")
		break;
	default: console.log("A consonant letter.")
}





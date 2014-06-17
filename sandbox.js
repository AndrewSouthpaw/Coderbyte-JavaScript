


/********************************************************************
	REGEXP PATTERNS
********************************************************************/



// /[A-z]/g - all individual matches of letters A-z
// /\b\w/g - all word characters at the beginning of a word
// /\w\S/g - all matches of a word char followed by a non-whitespace char
// /\w\S*/g - all matches of a word char followed by 0 or more non-whitespace chars
// /[^\w^\s]/g - all matches of punctuation
// /\w*\S/g - all words excluding spaces
// /([A-z])\1*/g - all matches of same letter in a row
// /\D/g - all non-digit characters
// /a...b/ - a separated from b by 3














/********************************************************************
	EASY CHALLENGES
********************************************************************/



/* 	#4 - LetterChanges
======================
*/
function LetterChanges(str) {
	return str.replace( /[A-z]/g, function(letter) {
		if (letter === 'Z') return 'A';
		else if (letter === 'z') return 'a';
		else return String.fromCharCode(letter.charCodeAt(0) + 1);
	} )
	   .replace( /[aeiou]/g, function(letter) {
			 return letter.toUpperCase();
		 });
}




/*	#6 - LetterCapitalize
==========================
*/

function LetterCapitalize(str) {
	return str.replace( /\b\w/g, function(ch) {return ch.toUpperCase();});
}



// function LetterCapitalize(str) {
// 	var words = str.split(" ");
// 	for (i = 0; i < words.length; i++) {
// 		words[i] = words[i][0].toUpperCase() + words[i].substr(1, words[i].length);
// 	}
// 	return words.join(" ");
// }
// 
// function LetterCapitalize3(str) {
// 	return str.replace(/\w\S*/g, function(txt) { return txt[0].toUpperCase() + txt.substr(1); });
// }
// 
// 
// function LetterCapitalize2(str) { 
// //var str = str.replace(/\s/,toUpperCase);
//   // code goes here  
//   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//          
// }




/*	#7 - SimpleSymbols
======================
Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 
*/


function SimpleSymbols(str) {
	for (i = 0; i < str.length; i++) {
		if (/[A-z]/.test(str[i]))
			if (i === 0 || str[i-1] !== '+' || str[i+1] !== '+' ) return false;
	}
	return true;
}





/*  #17 - ArrayAdditionI
=========================
*/



function ArrayAdditionI(arr) { 

	var sortedArr = arr.sort(function(a,b) {return a - b;});
	var largest = arr.pop();
	return ArrayAdditionIRecur(arr, largest);
         
}

function ArrayAdditionIRecur(arr, n) {
	if (n === 0) return true;
	if (arr.length === 0)	return false;
	var next = arr[0];
	return (ArrayAdditionIRecur(arr.slice(1), (n - next)) || ArrayAdditionIRecur(arr.slice(1), n));
}






/*  #18 - LetterCount
=====================
*/


function LetterCountI(str) {
	var sortedWords = str
		.toLowerCase()
		.replace(/[^\w^\s]/g, "")
		.match(/[\w]*\S/g)
		.sort(function(a,b) {return numRepeats(b) - numRepeats(a);});
	return (numRepeats(sortedWords[0]) > 1 ? sortedWords[0] : -1);
}

function numRepeats(str) {
	return Math.max.apply(null, str.split('')
																.sort()
																.join('')
																.match(/([A-z])\1*/g)
																.map(function(x) {return x.length;}));
}

// or... .map(function(ch) {return str.match(new RegExp(ch, 'g')).length;})



// function LetterCountI(str) {
// 
//   var sortedWords = str
//     .replace(/([^\w ])/g, "")
//     .split(" ")
//     .sort(function(a, b) { return numRepeats(b) - numRepeats(a); });
// 
//   return (numRepeats(sortedWords[0]) > 1) ? sortedWords[0] : -1;
//          
// }
// 
// function numRepeats(str) {
//   var charCounts = str
//     .split("")
//     .map(function(char){
//       return str.match(new RegExp(char,'g')).length;
//     });
// 
//   return Math.max.apply(null, charCounts);
// }


























function longestWord(sen) { 
	return sen.match(/\w+/g)
						.sort(function(a, b) { 
							return b.length - a.length; 
						})[0];
}






function NumberAddition(str) { 

  return str.split(/\D/g)
            .reduce(function(total, cur) {
              return total += (+cur);
            }, 0);
         
}



/**
ABCheck
=====================
have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 
*/

function ABCheck(str) { 

  return /a...b/i.test(str);
         
}



/**
RunLength
=====================
*/

function RunLength(str) { 

  var result = "";
  for (i = 0; i < str.length; ) {
    result += str.slice(i).match(new RegExp(str[i] + '*'))[0].length + str[i];
     i += (+result[result.length - 2]);
  }
  return result;
         
}


function RunLength2(str) {
	return str.replace(/([a-z])\1*/g, function(elem) {
		return elem.length + elem[0];
	});
}




/*
ArithGeoII
=======================
*/

function seqRecur(compare, arr, diff) {
  if (arr.length < 2) return true;
  if (compare(arr[0],arr[1]) === diff) 
    return seqRecur(compare, arr.slice(1), diff);
  else return false;
}

function ArithGeoII(arr) {
  if (arr.length < 3) return -1;
  if (seqRecur(function (a,b) { return b - a; }, arr, (arr[1] - arr[0]))) return "Arithmetic";
  if (seqRecur(function (a,b) { return b / a; }, arr, (arr[1] / arr[0]))) return "Geometric";
  return -1;
}

// compare this with...

// function ArrayAdditionI(arr) { 
// 
//   // code goes here  
//   var nArr = arr.sort(function(a,b){return a-b}).slice(0);
//   var m = nArr[nArr.length-1];
//   nArr = nArr.slice(0,nArr.length-1);
//   var cArr = combinations(nArr);
//   for (var x=0;x<cArr.length;x++) {
//     if (eval(cArr[x].join('+'))==m) {
//       return true;
//     }
//   }
//   return false;
// }
// 
// function combinations(set) {
// 	var k, i, combs, k_combs;
// 	combs = [];
// 	
// 	// Calculate all non-empty k-combinations
// 	for (k = 1; k <= set.length; k++) {
// 		k_combs = k_combinations(set, k);
// 		for (i = 0; i < k_combs.length; i++) {
// 			combs.push(k_combs[i]);
// 		}
// 	}
// 	return combs;
// }
// 
// function k_combinations(set, k) {
// 	var i, j, combs, head, tailcombs;
// 	
// 	if (k > set.length || k <= 0) {
// 		return [];
// 	}
// 	
// 	if (k == set.length) {
// 		return [set];
// 	}
// 	
// 	if (k == 1) {
// 		combs = [];
// 		for (i = 0; i < set.length; i++) {
// 			combs.push([set[i]]);
// 		}
// 		return combs;
// 	}
// 	
// 	// Assert {1 < k < set.length}
// 	
// 	combs = [];
// 	for (i = 0; i < set.length - k + 1; i++) {
// 		head = set.slice(i, i+1);
// 		tailcombs = k_combinations(set.slice(i + 1), k - 1);
// 		for (j = 0; j < tailcombs.length; j++) {
// 			combs.push(head.concat(tailcombs[j]));
// 		}
// 	}
// 	return combs;
// }
// // keep this function call here 
// // to see how to enter arguments in JavaScript scroll down
// ArrayAdditionI(readline());           



/****







***/


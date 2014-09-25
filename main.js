$(document).on('ready', function() {
  
});

var firstReverse = function(str){
	var finalArray =[];
	var arr = str.split('');

	for( var i = str.length; i >= 0; i--) {
		finalArray.push(arr[i]);
	}
	finalArray = finalArray.join('');
	console.log(finalArray)
	return finalArray;
}

////////////////////////////////////
var swapCase = function (str) {
	var arr = str.split('');
	var finalWord = [];

	for(var i = 0; i < arr.length; i ++) {
		if (arr[i] === arr[i].toUpperCase()) {
			finalWord.push(arr[i].toLowerCase());
		}else{
			finalWord.push(arr[i].toUpperCase());
		}	
	}
	finalWord = finalWord.join('');
	return finalWord;
}
//////////////////////////////////////
var letterCount = function(str) {
	var splitToWords = str.split(' ');
	// console.log(splitToWords);

	for(var i = 0; i < splitToWords.length; i++) {

		var currentPalabra = splitToWords[i];
		// console.log(currentPalabra);
		var letterPool = [];
		var multipleLetWrdPool = [];
		var mostLetrWord = '';

		for(var j = 0; j < currentPalabra.length; j++) {
			
			var currentLetra = currentPalabra[j];
			// console.log(currentLetra);
			if (letterPool.indexOf(currentLetra) === -1) {
				letterPool.push(currentLetra);
				// console.log(letterPool);
			}else{
				// console.log(currentPalabra);
				multipleLetWrdPool.push(currentPalabra);
				console.log(multipleLetWrdPool);

			}
		};
		// for(var k = 0; k < multipleLetWrdPool.length; k++) {
		// 	var mostLetters = 0;
		// 	// var mostLetrWord = '';
		// 	if (multipleLetWrdPool[k].length > mostLetters){
		// 		console.log(multipleLetWrdPool[k]);
		// 		mostLetters = multipleLetWrdPool[k].length;
		// 		mostLetrWord = multipleLetWrdPool[k];
		// 	}
		// }
		// console.log(mostLetters);
		

	};

};
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
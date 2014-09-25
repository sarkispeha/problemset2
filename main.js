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
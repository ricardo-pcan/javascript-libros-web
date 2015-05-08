(function(){
	var words;

	var init = function(){
		askWords();
		calculate();
	};

	var askWords = function(){
		words = prompt("Give me the words!");
	};

	var determinate = function(sentence){
		console.log("hola");
		var CAPITALIZE = 2;
		var UPPER = 1;
		var LOWER = 0;
		if (sentence == sentence.toUpperCase())
		{
			console.log("hola como ripper");
			return UPPER;
		}
		else if (sentence == sentence.toLowerCase())
		{
			console.log("hola como");
			return LOWER;
		}
		else
		{
			console.log("hola como estas");
			return CAPITALIZE;
		}

	};
	var calculate = function(){
		var result = determinate(words);
		if (result == 0)
		{
			alert("The words are lower case!");
		}
		else if ( result == 1)
		{
			alert("The words are upper case!");
		}
		else
		{
			alert("The words are capitalize!");
		}
	};
	init();

})();
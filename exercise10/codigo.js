(function(){

	var words;
	var init = function()
	{
		askWords();
		calculate();
	};
	var askWords = function()
	{
		words = prompt("Give the words for check!");
	};
	var checkWords = function(words)
	{
		var flag = false;
		var words_lower = words.toLowerCase();
		var array_words = words.split(" ");
		array_words = array_words.join("");
		var array_reverse = array_words.reverse();
		var words_reverse = array_reverse.join(" ");

		if ( words == words_reverse )
		{
			flag = true;
		}
		return flag;
	}

	var calculate = function()
	{
		if (checkWords(words))
		{
			alert("This sentence is a palindrome");
		}
		else
		{
			alert("i'm sorry but it is not palindrome!");
		}
	}
	init();
})();
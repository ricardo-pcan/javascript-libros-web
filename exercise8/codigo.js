(function(){

	var ask_number;

	var init = function(){
		askNumber();
		calculate();
	};

	var askNumber = function(){
		ask_number = prompt("Give me a number!");
	};

	var determinate = function (number){
		var PAIR = 0;
		var NONE = 1;
		if (number % 2 == 0)
		{
			return PAIR;
		}
		else
		{
			return NONE;
		}
	};
	var calculate = function(){
		var result = determinate(ask_number);

		if (result == 0)
		{
			alert("The number is pair!");
		}
		else
		{
			alert("The number is none!");
		}
	};
	init();
})();
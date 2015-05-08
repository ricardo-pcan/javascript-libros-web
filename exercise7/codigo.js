(function(){
	var result = 1;
	var ask_number;

	var init = function(){
		askNumber();
		calculateFactorial();
		showResult();
	};
	var askNumber = function(){
		ask_number = prompt("whats is the number to calculate?");
	};

	var calculateFactorial = function(){
		for(var i = 1; i<=ask_number; i++)
		{
			result*= i;
		}
	};
	var showResult = function(){
		alert("The factorial of "+ask_number+" number is "+result);
	};

	init();
})();
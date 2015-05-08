(function(){
	var dni_number;
	var dni_letter;
	var array_letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var init = function(){
		askNumber();
		askLetter();
		checkNumber();
	}
	var askNumber = function(){
		dni_number = prompt("What is your dni number");
	}
	var askLetter = function(){
		dni_letter = prompt("whats is your dni letter");
	}
	var checkNumber = function(){
		if (dni_number < 0 || dni_number > 999999)
		{
			alert("your dni number is not valid!!")
		}
		else
		{
			calculateNumber();
		}
		
	}
	var calculateNumber = function(){
		var result_calculate = dni_number % 23;
		console.log(result_calculate);
		if (array_letters[result_calculate] == dni_letter)
		{
			alert("thatś right!");
		}
		else
		{
			alert("i'm sorry but your letter is wrong!");
		}
	}
	init();
})();
(function(){
	var arreglo = [true, 5, false, "hola", "adios", 2];

	if (arreglo[3] > arreglo[4])
	{
		console.log(arreglo[3]+" es mayor");
	}
	else
	{
		console.log(arreglo[4]+" es mayor");
	}

	console.log(arreglo[0] || arreglo[2]);
	console.log(arreglo[0] && arreglo[2]);

	console.log(arreglo[1] + arreglo[5]);
	console.log(arreglo[1] - arreglo[5]);
	console.log(arreglo[1] / arreglo[5]);
	console.log(arreglo[1] * arreglo[5]);
	console.log(arreglo[1] % arreglo[5]);
})();
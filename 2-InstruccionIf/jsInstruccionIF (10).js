function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var notaRandom;

	notaRandom=Math.floor(Math.random() * 10) + 1;
	console.log(notaRandom);



	if(notaRandom>8)
	{

		alert("Excelente");

	}else
	{
		if (notaRandom>3) 
		{

			alert("Aprobo");


		}else
		{
			alert("Vamos, la proxima se puede");
		}


	}

}//FIN DE LA FUNCIÓN


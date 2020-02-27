function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadNegativos=0;
	var cantidadPositivos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var difPosYNeg;
	var respuesta=true;

	while(respuesta==true)
	{
		contador=contador+1;

		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Ingrese un valor valido");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		if (numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos=cantidadNegativos+1;
		}
		if (numeroIngresado>0) 
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos=cantidadPositivos+1;
		}
		if (numeroIngresado==0)
		{
		 	cantidadCeros=cantidadCeros+1;
		}
		if (numeroIngresado%2==0) 
		{
			cantidadPares=cantidadPares+1;
		}

		respuesta=confirm("Presione aceptar para continuar");
	}

	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	difPosYNeg=sumaPositivos-sumaNegativos

	console.log("Promedio negativos "+promedioNegativos);
	console.log("Promedio positivos "+promedioPositivos);
	console.log("Diferencia positivos y negativos "+difPosYNeg);
	console.log("Suma negativos "+sumaNegativos);
	console.log("Suma positivos "+sumaPositivos);
	console.log("Cantidad negativos "+cantidadNegativos);
	console.log("Cantidad positivos "+cantidadPositivos);
	console.log("Cantidad pares "+cantidadPares);
	console.log("Cantidad ceros "+cantidadCeros);





}//FIN DE LA FUNCIÓN
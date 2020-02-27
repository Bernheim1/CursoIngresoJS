function mostrar()
{

	var contador=0;
	var minimo;
	var maximo;
	var numeroIngresado;
	var respuesta=true;

	while(respuesta==true)
	{
		contador=contador+1;
		numeroIngresado=prompt("Por favor ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Debe ingresar un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		if (contador==1)
		 {
				 	maximo=numeroIngresado;
				 	minimo=numeroIngresado;
		 }
		 else
		 {
		 	if (numeroIngresado>maximo)
 			{
 					maximo=numeroIngresado;
			}
		 	if (numeroIngresado<minimo) 
			{
		 			minimo=numeroIngresado;
		 	} 
		 }	


		respuesta=confirm("Presione OK para continuar");
		

		
	}
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;
}


//FIN DE LA FUNCIÓN
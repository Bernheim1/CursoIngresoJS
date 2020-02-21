function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese otro numero por favor");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Ingrese si para continuar");
	}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
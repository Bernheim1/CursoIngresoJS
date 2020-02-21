function mostrar()
{

	var contador=0;
	var acumulador=0;
	acumulador=prompt("Ingrese un numero por favor");
	acumulador=parseInt(acumulador);

	while(contador<6)
	{
		contador=contador+1;
		acumulador=prompt("Ingrese otro numero por favor");
		acumulador=parseInt(acumulador);
		console.log(contador);
	}
	





	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var bandera;

	bandera=0;

	numeroIngresado=prompt("Ingrese numero");

	for(numeroAnterior=2;numeroAnterior<numeroIngresado;numeroAnterior++)
	{
		if (numeroIngresado%numeroAnterior==0)
		 {
		 	bandera=1;
		 	break;
		 }

	}
	if (bandera!=1)
	 {
	 	alert("Es primo el "+numeroIngresado);
	 }


}

	//Estructura do-while

	/*var contador; 
	contador=0;
	var edad;

	do
	{
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);

	}while(edad<1||edad>110);/*

	





/*var contador;

	for(contador=0;contador<11;contador++)
	{
		console.log(contador);
	}*/
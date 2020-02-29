/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var temperatura;
	var nombre;
	var sexo;
	var edad;
	var respuesta=true;
	var contador=0;
	var temperaturaMasAlta;
	var nombreTempMasAlta;
	var sexoTempMasAlta;
	var masJoven;
	var masViejo;
	var temperaturaMasJoven;
	var	temperaturaMasViejo;
	var promedioTotal=0;
	var promedioMujeres=0;
	var cantidadMujeres=0;

	while(respuesta==true)
	{
		contador=contador+1;


		do
		{
			nombre=prompt("Ingrese el nombre");
		}while(!isNaN(nombre));

		do
		{
			temperatura=prompt("Ingrese la temperatura");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura)||temperatura>45||temperatura<15);

		do
		{
			sexo=prompt("Ingrese el sexo");
		}while(sexo!="m"&&sexo!="f");

		do
		{
			edad=prompt("Ingrese la edad");
			edad=parseInt(edad);
		}while(isNaN(edad)||edad>110||edad<0);

		if (contador==1)
		{
		 	temperaturaMasAlta=temperatura;
		 	nombreTempMasAlta=nombre;
			sexoTempMasAlta=temperatura;
			temperaturaMasViejo=temperatura;
			temperaturaMasJoven=temperatura;
			masJoven=edad;
			masViejo=edad;
		}
		else
		{
			if (temperatura>temperaturaMasAlta)
			{
				temperaturaMasAlta=temperatura;
				nombreTempMasAlta=nombre;
				sexoTempMasAlta=sexo;
			}
			if (temperatura>37||edad<59||edad>13)
			{
				alert("Riesgo:"+nombre);
			}
			if (edad<masJoven)
			{
			 	masJoven=edad;
			 	temperaturaMasJoven=temperatura;
			}
			if (edad>masViejo)
			{
				masViejo=edad;
				temperaturaMasViejo=temperatura;
			}
			if (sexo=="f")
			{
			 	cantidadMujeres=cantidadMujeres+1;
			 	promedioMujeres=promedioMujeres+edad;
			}


		}	

		promedioTotal=promedioTotal+edad;


		respuesta=confirm("Presione aceptar para continuar");

	}

	document.write("El nombre de la persona con temperatura mas alta es: "+nombreTempMasAlta+" y su sexo es: "+sexoTempMasAlta+"<br>");
	document.write("La temperatura del paciente mas joven es: "+temperaturaMasJoven+"<br>");
	document.write("La temperatura del paciente mas viejo es: "+temperaturaMasViejo+"<br>");
	document.write("El promedio de la edad total es: "+promedioTotal/contador+"<br>");
	document.write("El promedio de la edad de las mujeres es: "+promedioMujeres/cantidadMujeres+"<br>");

}




/* 

	El prompt sirve para pedirle 
	datos al usuario
	Console log muestra los datos 
	que haya pedido en la consola
	del chrome
*/
function mostrar()
{
	var edad;
	var sexo;
	var notaIngresada;
	var respuesta=true;
	var varonesAprobados=0;
	var notaMenores=0;
	var cantidadMenores=0;
	var notaAdolescentes=0;
	var cantidadAdolescentes=0;
	var notaMayores=0;
	var cantidadMayores=0;
	var notaVarones=0;
	var cantidadVarones=0;
	var notaMujeres=0;
	var cantidadMujeres=0;

	while(respuesta==true)
	{
		
		do
		{
			edad=prompt("Ingrese la edad");
			edad=parseInt(edad);

		}while(isNaN(edad));

		do
		{
			sexo=prompt("Ingrese el sexo");
		}while(!(sexo=='f'||sexo=='m'));

		do
		{
			notaIngresada=prompt("Ingrese la nota");
			notaIngresada=parseInt(notaIngresada);
		}while(notaIngresada>0&&notaIngresada<10);

		if (notaIngresada>5&&sexo=='m')
		{
		 	varonesAprobados=varonesAprobados+1;
		}
		if (edad<18) 
		{
			notaMenores=notaMenores+notaIngresada;
			cantidadMenores=cantidadMenores+1;
		}
		if (edad>12&&edad<18) 
		{
			notaAdolescentes=notaAdolescentes+notaIngresada;
			cantidadAdolescentes=cantidadAdolescentes+1;
		}
		if (edad>18)
		{
			notaMayores=notaMayores+notaIngresada;
			cantidadMayores=cantidadMayores+1;
		}
		if (sexo=='m')
		{
			notaVarones=notaVarones+notaIngresada;
			cantidadVarones=cantidadVarones+1;
		}
		if (sexo=='f')
		{
			notaMujeres=notaMujeres+notaIngresada;
			cantidadMujeres=cantidadMujeres+1;
		}


		 respuesta=confirm("Presione aceptar para seguir");
	}

	
	document.write("Cantidad de varones aprobados: "+varonesAprobados+"<br>");
	document.write("Promedio de notas menores de edad: "+notaMenores/cantidadMenores+"<br>");
	document.write("Promedio de notas adolescentes: "+notaAdolescentes/cantidadAdolescentes+"<br>");
	document.write("Promedio de notas mayores: "+notaMayores/cantidadMayores+"<br>");
	document.write("Promedio de notas varones: "+notaVarones/cantidadVarones+"<br>");
	document.write("Promedio de notas mujeres: "+notaMujeres/cantidadMujeres+"<br>");
}

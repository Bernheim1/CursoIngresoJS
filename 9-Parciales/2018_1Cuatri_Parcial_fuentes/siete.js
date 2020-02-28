function mostrar()
{
	var notaIngresada;
	var contador=0;
	var sexo;
	var notaMinima;
	var varonesAprobados=0;
	var acumuladorNotas=0;
	var sexoNotaMasBaja;

	while(contador<5)
	{
		contador=contador+1;

		do
		{
			notaIngresada=prompt("Ingrese la nota");
			notaIngresada=parseInt(notaIngresada);
		}while(isNaN(notaIngresada)||notaIngresada>10||notaIngresada<0);

		do
		{
			sexo=prompt("Ingrese el sexo");
		}while(sexo!='f'||sexo!='m');

		acumuladorNotas=acumuladorNotas+notaIngresada;

		if (contador==1)
		{
		 	notaMinima=notaIngresada;
		 	sexoNotaMasBaja=sexo;
		}else
		{
			if (notaIngresada<notaMinima)
			{
			notaMinima=notaIngresada;
			sexoNotaMasBaja=sexo;
			}
		}
		
		if (sexo=='m'&&notaIngresada>5) 
		{
			varonesAprobados=varonesAprobados+1
		}
	}

	alert("Promedio de notas totales: "+acumuladorNotas/5);
	alert("La nota mas baja es: "+notaMinima+" y el sexo es: "+sexoNotaMasBaja);
	alert("La cantidad de varones aprobados: "+varonesAprobados);
}

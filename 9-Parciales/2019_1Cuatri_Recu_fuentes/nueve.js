function mostrar()
{
	var edad;
	var sexo;
	var nota;
	var respuesta;
	var contador;
	var varonesAprobados;
	var NotasMenores;
	var NotasAdolescentes;
	var NotasMayores;
	var promedioMasculino;
	var promedioFemenino;
	var cantidadMenores;




	contador=0;

	respuesta=true;

	while(respuesta==true)
	{
		contador=contador+1;
	
		do
		{
			edad=prompt("Ingrese la edad");
			edad=parseInt(edad);
		}while(isNaN(edad<1||edad>110))


		do
		{
			sexo=prompt("Ingrese el sexo (f o m)");
		}while(sexo!='f'||sexo!='m')

		do
		{
			nota=prompt("Ingrese la nota");
			nota=parseInt(nota);
		}while(isNaN(nota<10||nota>0))

		if (sexo=='m'&&nota>5)
		{
			varonesAprobados=varonesAprobados+1;
		}
		if (edad<18)
		{
			NotasMenores=NotasMenores+nota;
			cantidadMenores=cantidadMenores+1;
		}
		if (edad>12) {}


			

	}

	
	








	

	





}

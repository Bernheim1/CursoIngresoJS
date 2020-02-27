function mostrar()
{
	var contador=0;
	var marca;
	var peso;
	var temperatura=0;
	var temperaturaPar=0;
	var marcaMasPesado;
	var productosMenosCero=0;
	var	promedioPeso;
	var pesoMaximo;
	var pesoMinimo;
	var respuesta=true;

	while(respuesta=true)
	{
		marca=prompt("Ingrese la marca");
		
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);

		while(isNaN(peso))
		{
			peso=prompt("Ingrese un valor valido");
			peso=parseInt(peso);
		}
		
		temperatura=prompt("Ingrese la temperatura (Entre -30 y 30 grados");
		


	}




}

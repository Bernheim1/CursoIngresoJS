//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var nombreHuesped;
	var cantidadPersonasIngresadas;
	var cantidadDiasIngresados;
	var formaDePago;
	var contador=0;
	var respuesta=true;
	var nombreHuespedMasPersonas;
	var mayorCantidadPersonas;
	var personasMasDias;
	var mayorCantidadDias;
	var contadorEfectivo=0;
	var contadorTarjeta=0;
	var contadorQR=0;
	var formaDePagoMasUtilizada;
	var promedioCantidadDias=0;

	while(respuesta==true)
	{
		contador=contador+1;

		do
		{
			nombreHuesped=prompt("Ingrese el nombre");
		}while(!isNaN(nombreHuesped));

		do
		{
			cantidadPersonasIngresadas=prompt("Ingrese el la cantidad de personas");
			cantidadPersonasIngresadas=parseInt(cantidadPersonasIngresadas)
		}while(isNaN(cantidadPersonasIngresadas));

		do
		{
			cantidadDiasIngresados=prompt("Ingrese el la cantidad de dias");
			cantidadDiasIngresados=parseInt(cantidadDiasIngresados)
		}while(isNaN(cantidadDiasIngresados));

		do
		{
			formaDePago=prompt("Ingrese la forma de pago (efectivo,tarjeta o QR)");
		}while(formaDePago!="efectivo"&&formaDePago!="tarjeta"&&formaDePago!="QR");


		if (contador==1)
		{
			mayorCantidadPersonas=cantidadPersonasIngresadas;
			mayorCantidadDias=cantidadDiasIngresados;
			nombreHuespedMasPersonas=nombreHuesped;
			personasMasDias=cantidadPersonasIngresadas;
		}
		if (cantidadPersonasIngresadas>mayorCantidadPersonas)
		{
			nombreHuespedMasPersonas=nombreHuesped;
			mayorCantidadPersonas=cantidadPersonasIngresadas;
		}
		if (cantidadDiasIngresados>mayorCantidadDias) 
		{
			personasMasDias=cantidadPersonasIngresadas;
			mayorCantidadDias=cantidadDiasIngresados;
		}

		switch(formaDePago)
		{
			case "efectivo":
				contadorEfectivo=contadorEfectivo+1;
				break;
			case "tarjeta":
				contadorTarjeta=contadorTarjeta+1;
				break;
			case "QR":
				contadorQR=contadorQR+1;
				break;
		}

		promedioCantidadDias=promedioCantidadDias+cantidadDiasIngresados;

		respuesta=confirm("Presione aceptar para continuar");
	}

		if (contadorEfectivo>contadorTarjeta&&contadorEfectivo>contadorQR)
		 {
		 	formaDePagoMasUtilizada="Efectivo";
		 }
		else
		{
			if (contadorTarjeta>contadorEfectivo&&contadorTarjeta>contadorQR)
			 {
			 	formaDePagoMasUtilizada="Tarjeta";
			 }
			 else
			 {
			 	formaDePagoMasUtilizada="QR";
			 }
		}

		document.write("El huesped que trajo mas personas en una reserva fue: "+nombreHuespedMasPersonas+"<br>");
		document.write("La cantidad de personas que se quedo mas dias fue: "+personasMasDias+"<br>");
		document.write("La forma de pago mas utilizada fue: "+formaDePagoMasUtilizada+"<br>");
		document.write("El promedio de cantidad de dias por reserva: "+promedioCantidadDias/contador);

	
}



// Si esta entre dobles comillas es un valor literal
	//alert("Tal cual"); 
	//alert(apellido); = no va entre comillas porque es una variable
	//alert = sale vacio 
	//alert(preciopri) = no anda el boton porque no existe

/* 	
	Alert recibe un texto y lo muestra
	Puede ser literal o una variable
*/

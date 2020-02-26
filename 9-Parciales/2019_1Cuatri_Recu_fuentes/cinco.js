function mostrar()
{
	var destino;
	var cantidadDias;
	var descuento;
	var descuentoExtra;
	var formaPago;
	var recargo;
	var precioDia;
	var precioBase;
	var precioFinal;

	destino=document.getElementById('selecContinente').value;
	formaPago=document.getElementById('selecPago').value;
	cantidadDias=prompt("Por favor ingrese la cantidad de dias");
	cantidadDias=parseInt(cantidadDias);
	descuento=0;
	descuentoExtra=0;
	recargo=0;
	precioDia=100;


	switch(destino&&formaPago)
	{
		case "America":
		case "Débito":
			descuentoExtra=10;
			descuento=15;
			break;
		case "África":
		case "Oceania":
		case "MercadoPago":
		case "Efectivo":
			descuentoExtra=15;
			descuento=30;
			break;
		case "Europa":
		case "Débito":
			descuentoExtra=15;
			descuento=20;
			break;
		case "Europa":
		case "MercadoPago":
			descuentoExtra=10;
			descuento=20;
			break;
		case "Europa":
			descuentoExtra=5;
			descuento=20;
			break;
		case "Asia":
			recargo=20;
			break;
		default:
			case "Cheque": 
			recargo=15;
			break;

	}

	descuento=descuento+descuentoExtra;

	precioBase=precioDia*cantidadDias;

	precioFinal=(precioBase-precioBase*descuento/100)+precioBase*recargo/100;

	alert("El precio final del viaje es: "+precioFinal);


}

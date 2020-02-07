
function mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo=prompt("Por favor ingrese el largo del rectangulo");
	largo=parseInt(largo);

	ancho=prompt("Por favor ingrese el ancho del rectangulo");
	ancho=parseInt(ancho);

	resultado=(largo*2)+(ancho*2);
	alert(resultado);

}

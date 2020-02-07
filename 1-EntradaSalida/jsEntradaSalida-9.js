/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var aumento;
	var resultado;

	importe = document.getElementById('sueldo').value;
	importe = parseInt(importe);

	porcentaje = 10;

	aumento = importe*porcentaje/100;

	resultado = importe + aumento;

	document.getElementById('resultado').value = resultado;

	console.log(resultado);



	
}

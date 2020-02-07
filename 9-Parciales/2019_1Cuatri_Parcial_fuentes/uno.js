
function mostrar()
{
	var lado;
	var resultado;

	lado=prompt("Por favor ingrese el largo que van a tener los tres lados");
	lado=parseInt(lado);

	resultado=lado*3;
	
	alert("El perimetro de su triangulo equilatero es: "+resultado);

}

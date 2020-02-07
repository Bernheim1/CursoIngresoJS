/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var temperaturaC;
	var resultado;

	temperaturaF=document.getElementById('Temperatura').value;
	temperaturaC=(temperaturaF-32)*5/9;
	resultado=temperaturaC;
	console.log(resultado);

}

function CentigradosFahrenheit () 
{
	var temperaturaF;
	var temperaturaC;
	var resultado;

	temperaturaC=document.getElementById('Temperatura').value;
	temperaturaF= (temperaturaC*9/5)+32; 
	resultado=temperaturaF;
	console.log(resultado);

}

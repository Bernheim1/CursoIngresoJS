/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaSuma;


	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);
	console.log("Primer valor " + primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;	
	segundoNumero = parseInt(segundoNumero);
	console.log("Segundo valor " + segundoNumero);

	resultadoDeLaSuma= (primerNumero + segundoNumero);
	
	console.log("ResDeLaSuma " + resultadoDeLaSuma);




}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaResta;


	primerNumero = document.getElementById('numeroUno').value;
	console.log("Primer valor " + primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;	
	console.log("Segundo valor " + segundoNumero);

	resultadoDeLaResta= (primerNumero - segundoNumero);
	
	console.log("ResDeLaResta " + resultadoDeLaResta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaMultiplicacion;


	primerNumero = document.getElementById('numeroUno').value;
	console.log("Primer valor " + primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;	
	console.log("Segundo valor " + segundoNumero);

	resultadoDeLaMultiplicacion= (primerNumero * segundoNumero);
	
	console.log("ResDeLaMultiplicacion " + resultadoDeLaMultiplicacion);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultadoDeLaDivision;


	primerNumero = document.getElementById('numeroUno').value;

	console.log("Primer valor " + primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;	

	console.log("Segundo valor " + segundoNumero);

	resultadoDeLaDivision= (primerNumero / segundoNumero);
	
	console.log("ResDeLaDivision " + resultadoDeLaDivision);
}


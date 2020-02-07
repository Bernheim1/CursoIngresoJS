/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = document.getElementById('numeroUno').value;
	console.log("Primer valor " + primerNumero);

	primerNumero= parseInt(primerNumero);

	segundoNumero = document.getElementById('numeroDos').value;
	console.log("Segundo valor " + segundoNumero);

	segundoNumero= parseInt(segundoNumero);

	suma= (primerNumero + segundoNumero);
	alert(suma);
	/* parseInt siempre va con la I mayuscula
	Sirve para agarrar un dato y transformarlo
	Sin parseInt pone un numero detras del otro
	*/
}


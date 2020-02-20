function mostrar()
{

	var numero;
	
	numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero>10||numero<0)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		numero=parseInt(numero);
	}
	document.getElementById('Numero').value=numero; 



}//FIN DE LA FUNCIÓN
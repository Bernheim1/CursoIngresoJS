function mostrar()
{

	var sexo;
	sexo = prompt("ingrese f ó m .");

		//(!(sexo=="f"||sexo=="m"))
	while(sexo!="f"||sexo!="m")
	{
		sexo = prompt("ingrese ingrese un valor valido");
	}
	document.getElementById('Sexo').value=sexo;
	alert("fin");
}
function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		//con 30 dias
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		//con 28 dias
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		default:
			alert("Tiene 31 dias");
			break;
	}	
	



}//FIN DE LA FUNCIÓN
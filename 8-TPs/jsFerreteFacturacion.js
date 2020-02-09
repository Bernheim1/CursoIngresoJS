/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	var resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);

	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);

	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	suma=PrecioUno+PrecioDos+PrecioTres;

	resultado=suma;

	alert("El resultado de la suma es: "+resultado);




}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	var CantidadImportes;
	var division;
	var resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);

	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);

	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	suma=PrecioUno+PrecioDos+PrecioTres;

	CantidadImportes=3

	division=suma/CantidadImportes;

	resultado=division;

	alert("El resultado de la divison es: "+resultado);

}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	var IVA;
	var sumaIVA;
	var resultado;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioUno=parseInt(PrecioUno);

	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioDos=parseInt(PrecioDos);

	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioTres=parseInt(PrecioTres);

	suma=PrecioUno+PrecioDos+PrecioTres;

	IVA=21;

	sumaIVA=suma*IVA/100;

	resultado=suma+sumaIVA;
	

	alert("El resultado del precio final es: "+resultado);







}
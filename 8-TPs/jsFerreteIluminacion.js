/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10%
 de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lampara;
    var marca;
    var preciofinal;
    var preciofinal2;

    lampara = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;

    lampara = parseInt (lampara);

    switch (true)
    {

        case lampara >= 6 :
         
             preciofinal = (lampara * 35) - (lampara * 35) * 0.5; 

           break;

        case ( lampara == 5 && marca == "ArgentinaLuz"):
         
            preciofinal = (lampara * 35) - (lampara * 35) * 0.4;

            break;
           
         case ( lampara ==5 && marca !== "ArgentinaLuz"):
        

            preciofinal = (lampara * 35) - (lampara * 35) * 0.3;
            break;
    // C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
    //se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        case  ( lampara ==4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas") ):
           
       preciofinal = (lampara * 35) - (lampara * 35) * 0.25;

       break;
        
         case( lampara ==4 && (marca !== "ArgentinaLuz" || marca !== "FelipeLamparas") ):
        
           preciofinal = (lampara * 35) - (lampara * 35) * 0.2;

           break;
           
       // D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    //si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%

         case ( lampara == 3 && marca == "ArgentinaLuz"):
         

         preciofinal = (lampara * 35) - (lampara * 35) * 0.15;    

         break;
           

         case ( lampara == 3 && marca == "FelipeLamparas"):
        
         preciofinal = (lampara * 35) - (lampara * 35) * 0.1;

         break;
           

        case ( lampara ==3 && (marca !== "ArgentinaLuz" || marca !== "FelipeLamparas") ):
         
             preciofinal = (lampara * 35) - (lampara * 35) * 0.05;
 
             break;
             
         
    }
         //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10%
         //   de ingresos brutos en informar del impuesto con el siguiente mensaje:
         //   ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
         
         
      if (preciofinal >120 )
         {

            preciofinal2 = preciofinal + preciofinal * 0.1;

            alert ("Usted pago " + preciofinal2 + " de IIBB");
            
            document.getElementById("precioDescuento").value = preciofinal2;

         }
         else
         {
            document.getElementById("precioDescuento").value = preciofinal2;

         }








}

'use strict' //las comillas sencillas salen después del 0, con la tecla de a lado 
//FOR 
var numero = 100;
for(var i=0;i<=numero; i++){ //es lo más común ponerle la i como contador y que inicie por ejemplo con cero. En lugar de var puede ser ley
    console.log(i)
    
}  

//WHILE (mientras )
var year=2018;
while(year<=2030){ //mientras se cumpla ejecuto
      console.log("Estás en el año: "+year); //si solo dejo year, se me va a ciclar 
      
      if(year==2025){  //este if me interrumpe el ciclo 
          console.log("parar en el 2025");
          break;
      }
      year++; //para que nos vaya cambiando el año. este estaba arriba del if y llegaba al 2024
    
}

//DOWHILE forzamos a que entre una vez
var edad=18;
do{ //entra y realza al menos una vez
    console.log("Aun no eres legal en el Mundo, tienes: "+edad);
    edad++; //no habiamos puesto estoy se ciclo
} while(edad<21); //ciclo mientras se cumple esto, este while lleva PUNTO Y COMA
    console.log("Ahora sí a divertirte!, tienes: "+edad+" años");



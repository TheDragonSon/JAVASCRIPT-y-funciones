'use strict'
// utilizando un ciclo mostrar la suma y el promedio de los numeros introducidos hasta 
// introducir un numero negativo 
var suma=0;
var contador=0;
do{
    var numero= parseFloat(prompt("Introduce un número y sí pones un número negativo me detenderé: "));
    if(isNaN(numero)){
        numero=0;
    } else if(numero>=0){
        suma +=numero;
        contador++;
    }
    
} while(numero>=0);
alert("La suma total es: "+suma+" y el promedio es: "+(suma/contador));
document.write("La suma total es: "+suma+"</br>"); //le concatenmos un cambio de linea 
document.write("El promedio es: "+(suma/contador));
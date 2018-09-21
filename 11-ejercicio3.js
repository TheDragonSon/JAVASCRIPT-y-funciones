//dar los numeros en el rango de dos numeros enteros introducidos 
'use strict'
var numero1= parseInt(prompt("Introduce el primer número entero: "));
var numero2= parseInt(prompt("Introduce el segundo número entero: "));
var rango= Math.abs(numero2-numero1); // para valor absoluto
if(numero2>numero1){
    var rangomin=numero1;
    console.log(" "+numero1);
} else if(numero1>numero2){
    var rangomin=numero2;
    console.log(" "+numero2);
} else if(numero1==numero2){
    console.log(" tus números son iguales");
    var rangomin=0;
}


for(var i=0;i<rango; i++){
    rangomin++;
   console.log(" "+rangomin);
    
}
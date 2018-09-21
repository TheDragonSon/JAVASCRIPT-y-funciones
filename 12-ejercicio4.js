//pedir 2 numeros e imprimir los impares


/*if(numero1%2!=0){ //numero 1 es impar 
    
} */
    
'use strict'
var numero1= parseInt(prompt("Introduce el primer número entero: "));
var numero2= parseInt(prompt("Introduce el segundo número entero: "));
var rango= Math.abs(numero2-numero1); // para valor absoluto
if(numero2>numero1){
    var rangomin=numero1;
    if(numero1%2!=0){
        console.log(" "+numero1);
    }
    
} else if(numero1>numero2){
    var rangomin=numero2;
    if(numero2%2!=0){
         console.log(" "+numero2);
    }
    
} else if(numero1==numero2){
    console.log(" tus números son iguales");
    var rangomin=0;
    if(numero1%2!=0){
        console.log("tus numeros son impares");
    } else{
        console.log("tus numeros son par");
    }
}


for(var i=0;i<rango; i++){
    rangomin++;
    if(rangomin%2!=0){
        console.log(" "+rangomin);
    }
   
    
}
//una función es una agrupación de instrucciones reutilizables
'use strict'
function imprimirMetodo(){ //un metodo tiene funciones, son distintos
    console.log("Hola soy un método");
}

//Parametros
function suma(num1,num2){
    console.log(num1+num2);
}
suma(5,9) //o puede ser en consola

function calculadora(num1,num2){  //funciones dentro de funciones
    suma(num1,num2);
    resta(num1,num2);
   
}

function resta(num1,num2){
    console.log(num1-num2);
}
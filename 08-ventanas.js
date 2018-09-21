'use strict'
alert("hola soy una alerta, cuidado!!");

var opcionContinuar=confirm("¿Estas seguro de continuar?"); //esto nos va a regresar un true o un false
console.log(opcionContinuar);
if(opcionContinuar){ //si fue true, ya es booleano
    console.log("CONTINUASTE!!");
} else{  //SI PUSO CANCELAR
    console.log("TE DETUVISTE");
}

//obtener un valor de una ventana
prompt("Introduce tu nombre: ", "Nombre"); //Nombre es el default
// los prompt SIEMPRE retornan en cadena 
//si quieremos hacer una operacion matemátic
var numero= parseInt(prompt("Introduce un numero","0")); //puede ser parseInt o parseFloat
console.log("tu numero mas 10 es: "+(10+numero));

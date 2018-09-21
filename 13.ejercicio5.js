'use stric'
//mostrar todos los numeros divisores de un numero dado 
var numero= parseInt(prompt("Introduce un entero: "));
var divisor=1;
for(var i=1; i<=numero;i++){
    if(numero%i==0){
        console.log(" "+i);
    }
}
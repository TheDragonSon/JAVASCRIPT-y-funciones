var numero1=10;
var numero2=22;
alert("la suma de los dos valores es: " +(numero1+numero2));
alert("la suma de los dos valores es: " +numero1+numero2); //aqui no se concatena como operación matemática
//variables tipo de dato 
var texto= "Hola soy un texto";
var numero=5;
var numeroFlotante=6.154; 
var boleano= true; //puede ser true o false 
//************
var numeroFalso="3"; //es un texto, no puedo hacer opreaciones matematicas
console.log(numero+numeroFalso); //en cosola me aparece 53 ¿como hago el parseo?
console.log(numero+parseInt(numeroFalso)); //para pasar de string a int
console.log(numero+Number(numeroFalso)); //Number es lo mismo que parseInt
var cadenaConNumeros="abc 123";
console.log(numero+Number(cadenaConNumeros)); //NaN not a number
var cadenaConNumeros2="123";
console.log(numero+Number(cadenaConNumeros2)); //aqui sí vale, esto se puede usar en un if para valirdar si entran numeros

var textoFlotante="5.14546453";
console.log(numero+parseFloat(textoFlotante));
console.log(numero+parseInt(textoFlotante)); //me toma solo el 5

//para cambiar un numero a un strig
console.log("El numero flotante es: "+numeroFlotante); 
console.log("El numero flotante es: "+String(numeroFlotante)); 
console.log("El valor de tu booleano es: "+String(boleano));
console.log("El valor de tu booleano es: "+Number(boleano));


console.log(typeof numero);
console.log(typeof numeroFlotante);
console.log(typeof texto);
console.log(typeof boleano);
//un programa que pida 2 numeros y compararlos, mayores o menores o iguales
var numero1= parseFloat(prompt("Ingresa el primer número: ","0"));
var numero2= parseFloat(prompt("Ingresa el segundo número: ","0"));
if(numero1==numero2){
    alert("Tus numeros son iguales");
} else if(numero1>numero2){
    alert("El numero: "+numero1+ " es mayor que: " +numero2);
} else if(numero1<numero2){
    alert("El numero: "+numero2+" es mayor que: "+numero1);
} else{
    alert("INTRODUCE NUMEROS CORRECTOS");
}

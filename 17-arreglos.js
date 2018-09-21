var nombre = "Carlos"; //una variable guarda solo un valor
var nombres = ["Gabriel","Felipe","Atlai"]; //debilmente tipado, yo puedo poner ,45, true y no pasa nada, los guarda todos.
console.log(nombres[1]); //si quiero imprimir todos con un for //accesar por indice 

//agregar un valor a nuestra lista de nombres
nombres.push("Batman"); //agregamos registro
nombres.push(prompt("introduce un nuevo nombre","")); //le pido nombre al usuario, y agrego registro
nombres.pop(); //retira el último valor 
nombres.indexOf("Atlai"); //saber en que posición está 
console.log(nombres.indexOf("Atlai")); //imprime la posición en consola
var arregloACadena = nombres.join(); //join es una funcion de concatenacion
console.log(arregloACadena); //convierte el arreglo a cadena el join y lo imprimes
console.log("Original");
console.log(nombres); //imprimir en orden original
console.log("Ordeado");
console.log(nombres.sort()); //ordena de mayor a menos o de orden alfabetico
console.log("Al revés");
console.log(nombres.reverse()); //se invierte el arreglo 
var oracion= "Hola que tal, mi nombre es Erza";
var arrOracion=oracion.split(","); //le inidco el token por el qu quiero que me separe los valores
console.log(arrOracion); //lo puedo separar por espacios por ejemplo
var arrOracion2=oracion.split(" "); //espacio
console.log(arrOracion2);
console.log("Mi arreglo es de tamaño: "+nombres.length);

//ESCRIBO MIS ELEMENTOS
 document.write("<ul>");
nombres.forEach((elemento,indice)=>{ //para accesar_ elemento contador: indice
    document.write("<li>"+indice+ " = "+elemento+ "</li>"); //lista //lo de lista esta entre comillas porque es html
    
} //se cierra el metodo 
               ); //se cierra el parentesis de forEach

    document.write("</ul>"); 

console.log(nombres);

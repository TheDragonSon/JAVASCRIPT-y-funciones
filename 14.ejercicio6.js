'use strict'
// Mostrar la pagina las 10 tablas de multplicar (usado ciclos) *tip: for dentro de un for 

for(var i=1;i<=10;i++){
    document.write("<h3></br> TABLA DEL "+i+"</h3>");
    for(var j=1;j<=10;j++){
        console.log(i+" x "+j+" = "+(i*j));
        document.write(i+" x "+j+" = "+(i*j)+"</br>");
    }
}
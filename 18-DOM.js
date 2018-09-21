// Document Object model
'use strict'
var caja = document.getElementById('micaja'); //comillas simples. puede ser un div una imagen un h1 o lo que sea
caja.innerHTML="Hola ya no eres un contenedor :("; //vamos a escribir dentro de las etiquetas de html, o sea en el div
caja.style.background="blue";
caja.style.color="red";
caja.style.border="3px dashed black";

console.log(caja);

var divisores = document.getElementsByClassName('divTitulo'); //me crea un arreglo
divisores[0].style.fontSize="90px";
divisores[1].style.fontSize="10px";

console.log(divisores);
'use strict'
//Browser object model
function getBOMw(){ //la vimos en consola
    console.log("Tu ventana es de: " +window.innerHeight+ " de alto y "+window.innerWidth+" esto de ancho");
}

function getBOMs(){ //la vimos en consola
    console.log("Tu pantalla es de: " +screen.height+ " de alto y "+screen.width+" esto de ancho");
}

function redireccioname(url){ 
    window.location.href=url;  //en consola pusimos redireccioname("https://google.com")
}

function abrirVentana(url){ //creamos un pop up! publicidad 
    window.open(url,"","width=400,height=300"); //no le pusimos nada entre comillas abre en nueva pestaña
}

function ad(){ //creamos un pop up! publicidad 
    window.open("https://www.caliente.mx","","width=400,height=300"); //no le pusimos nada entre comillas abre en nueva pestaña
}
ad();
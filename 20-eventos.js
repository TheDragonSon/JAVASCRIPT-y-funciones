'use strict'
var boton = document.querySelector("#miboton"); //con el # busca un id, para una clase es con un punto
var boton2 = document.querySelector("#miboton2");
var entrada = document.querySelector("#entradatxt");
var caja = document.querySelector("#micaja");

function cambiarcolor(){
    console.log("Me haz dado clic");
    var bg= boton.style.background;
    if(bg=="green"){
        boton.style.background="red";
    } else {
        boton.style.background="green";
    }
}

boton.addEventListener("click",function(){
    cambiarcolor();
});

boton2.addEventListener("mouseover",function(){
   boton2.style.background="#ccc414"; 
    
});

boton2.addEventListener("mouseout",function(){
    boton2.style.background="#cc27c8"; 
});

entrada.addEventListener("keydown",function(event){
    console.log("Tecla presionada ",String.fromCharCode(event.keyCode));
})

caja.addEventListener("copy", function(){
    caja.innerHTML="Me has copiado!, ahora eres un pirata";
})

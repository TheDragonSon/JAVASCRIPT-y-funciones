'use strict'
//Almacenamiento local 
//Comprobar sí el navegador puede almacenar caché
if(typeof(Storage) !== 'undefined'){
   console.log("LocalStorage Disponible :) ");
   } else {
       console.log("Incompatible con localstorage :( ")
       
   }
/*
localStorage.setItem("titulo","Almacenamiento con JS");
localStorage.setItem("year",2018);  */

/* var usuario = {
    
    nombre:"Carlos",
    email:"carlosgabriel@generation.org",
    web: "buscappsmx.firebaseapp.com"
}; 

localStorage.setItem("Usuario", JSON.stringify(usuario));

*/  //lo pusimos en comentario pero como ya está en cache, sale en el navegador de todos modos porque está en cache



/*
var usuariosJS= JSON.parse(localStorage.getItem("Usuario"));

document.write("<br> Hola el nombre guardado es: " +usuariosJS.nombre);
document.write("<br> Hola el email guardado es: " +usuariosJS.email);
document.write("<br> Hola la web guardado es: " +usuariosJS.web); */

var formulario = document.querySelector("#addPeliculas"); //y este el formulario

formulario.addEventListener('submit', function(){
    var titulo=document.querySelector("#addPelicula").value; //este es el input
    
    if(titulo.length>=1){
    localStorage.setItem(titulo,titulo);    
    }
    
});

var contenedorLista=document.querySelector("#peliculas-list");
for (var i in localStorage){ //por cada elemtno de local storage va a hacer esto
    if(typeof localStorage[i]=='string'){
        var li=document.createElement('li');
        li.append(localStorage[i]);
        contenedorLista.append(li);
        
    }
    
}  

var formularioBorrar = document.querySelector("#delPeliculas");
formularioBorrar.addEventListener('submit',function () {
   var tituloABorrar = document.querySelector("#delPelicula").value;

   if (tituloABorrar.length>=1){
       localStorage.removeItem(tituloABorrar);
   }

});

/*var formularioBorrar = document.querySelector("#delPeliculas");

formularioBorrar.addEventListener('submit', function(){
    var tituloABorrar = document.querySelector("#delPelicula");

    if(tituloABorrar >=1){    ME FALTABA EL LENGTH
        localStorage.removeItem(tituloABorrar);
    }
                            
                            
}); */
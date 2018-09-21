'use strict'
var usuarios=[]; //arreglo de usuarios, inicializado vacio 
var miDiv= document.querySelector("#usuarios");
var todos=[];

for(var i = 1; i<=4; i++){
  fetch("https://reqres.in/api/users?page="+i)  //con el fetch tu pides 
    .then(data => data.json())                //entonces.. (promesas)  //usamos operacion de flechita que es lo mismo que function data (){
    .then(users => {                           // return info.json();
        usuarios=users.data;                    // });
        todos.push(users.data);
        console.log(usuarios);
        //obtuvimos los datos
    usuarios.map((elemento, posicion) => {
        let nombre = document.createElement('h3'); //cree una linea, h3 es de html como un titulo, tamaño de letra <h3> </h3>
        nombre.innerHTML=posicion+" "+elemento.first_name+" "+elemento.last_name+" ID: "+elemento.id;
        miDiv.appendChild(nombre);    //le agregue dentro de el mismo, un hijo. nos va a estar escribiendo un h3 
        document.querySelector(".loading").style.display="none";     //buscamos clases con el punto
        let imagen=document.createElement('img')   //<img>
        imagen.src = elemento.avatar;
        imagen.width="100";
        miDiv.appendChild(imagen);
                
    });         
}); 
  
    
    
}

console.log("****************************");
console.log(todos);

/*
ESTO HICIMOS PRIMERO 
'use strict'
var usuarios=[]; //arreglo de usuarios, inicializado vacio 
var miDiv= document.querySelector("#usuarios");


fetch("https://reqres.in/api/users?page=1")  //con el fetch tu pides 
    .then(data => data.json())                //entonces.. (promesas)  //usamos operacion de flechita que es lo mismo que function data (){
    .then(users => {                           // return info.json();
        usuarios=users.data;                    // });
        console.log(usuarios);
        //obtuvimos los datos
    usuarios.map((elemento, posicion) => {
        let nombre = document.createElement('h3'); //cree una linea, h3 es de html como un titulo, tamaño de letra <h3> </h3>
        nombre.innerHTML=posicion+" "+elemento.first_name+" "+elemento.last_name+" ID: "+elemento.id;
        miDiv.appendChild(nombre);    //le agregue dentro de el mismo, un hijo. nos va a estar escribiendo un h3 
        document.querySelector(".loading").style.display="none";     //buscamos clases con el punto
        let imagen=document.createElement('img')   //<img>
        imagen.src = elemento.avatar;
        imagen.width="100";
        miDiv.appendChild(imagen);
                
    });         
}); 

*/
                                              
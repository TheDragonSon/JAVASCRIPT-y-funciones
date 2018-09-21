var nombre="Grecia Lupita";
console.log(nombre);
if(true){
    nombre="Erza Scarlet";
    console.log(nombre);
}
console.log(nombre); //cambiamos el valor de nuestra variable nombre

//let solamente cambia por bloques 

var apellido="Sepúlveda Z";
console.log(apellido);
if(true){
    let apellido="Titania"; //cambia el valor de apellido mientras se lleva a cabo el if
    console.log(apellido);
}
console.log(apellido);
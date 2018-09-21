//REST & SPREAD obtener datos de manera dinámica para obtener datos que no sabemos su tamaño 
/*function listadoDeFrutas(fruta1,fruta2){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    DE ESTA FORMA DABA DOS FRUTAS, DOS VAKIRES
} */

function listadoDeFrutas(fruta1,fruta2,...frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(frutas);
    
}
listadoDeFrutas("Melon","Manzana","Sandia","Guayaba","Mango","Papaya","Fresa","Naranja","Limon");
//spread
var frutas2=["Naranja","Manzana"];
listadoDeFrutas(...frutas2,"Fresa", "Kiwi");
var lunComida = 100;
var lunTransporte = 5;
var marComida = 45;
var marTransporte = 10;

var gastos = [ 100, 5, 45, 10 ]; //Una lista en la cual guardamos más de un valor

var hobbies = [
    "Hacer ejercicio",  //0
    "Leer",             //1
    "Ver series",       //2
    "Comer"             //3
];

var animales = [
    "Perro",
    "Gato",
    "Pájaro"
];

console.log("El primer hobbie de la lista es: "+ hobbies[0]);
console.log("El segundo hobbie de la lista es: "+ hobbies[1]);
console.log("El último hobbie de la lista es: "+hobbies[hobbies.length-1]); //Obteniendo el último elemento de mi lista
console.log("Tengo "+animales.length+ " animalitos");

animales.push("Pez"); //Agregando un elemento más a mi lista
console.log("Tengo "+animales.length+ " animalitos");

animales.pop(); //Elimina el último elemento de la lista
console.log("Tengo "+animales.length+ " animalitos");

//quiero saber la cantidad total de gastos
//var total_gastos = gastos[0] + gastos[1] + gastos[2];
var total_gastos = 0;
/*
gastos = [ 100, 5, 45, 10 ];
i = 0
0 < 4
total_gastos = 0 + 100 = 100

i = 1
1 < 4
total_gastos = 100 + 5 = 105

i = 2
2 < 4
total_gastos = 105 + 45 = 150

i = 3
3 < 4
total_gastos = 150 + 10 = 160

i = 4
4 < 4 -------
*/
for(var i=0; i<gastos.length; i++){ //0-3
    total_gastos += gastos[i];
}
console.log("Total de Gastos: "+total_gastos);

//Imprimir todos mis hobbies
for(var i=0; i<hobbies.length; i++){
    console.log(hobbies[i]);
}

//Imprimir mis animales al revés
for(var i=animales.length-1; i > -1; i--){ //i = ultima posición, 
    console.log(animales[i]);
}


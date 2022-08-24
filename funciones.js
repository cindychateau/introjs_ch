function hello_world() {
    console.log("Hello World");
    console.log("¿Cómo estás?");
}

hello_world();

function agregaLista() {
    lista.push("a");
}

var lista = ["a"];
agregaLista();
agregaLista();
agregaLista();
agregaLista();
console.log(lista);

function hola_mundo(nombre){ //nombre = "Elena"; PARÁMETRO
    console.log("Hola "+nombre);
}

hola_mundo("Elena");
hola_mundo("Juana");

function hola(nombre, apellido) { //nombre = "Elena", apellido = "De Troya"
    console.log("Hola "+nombre+" "+apellido);
}

hola("Elena", "De Troya");

function multiplicar(num1, num2) { //num1 = 4, num2 = 5
    var total = num1 * num2; //total = 20
    return total; //Regresa el 20
}

var total_multiplicacion = multiplicar(4, 5); //total_multiplicacion = 20
console.log(total_multiplicacion);
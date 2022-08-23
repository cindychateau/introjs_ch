var num = 1; //Número - entero o flotante/con punto decimal, negativos o positivos
var text = "Variable cadena"; //Texto - Cadena o String
var bool = true; //Boolean - true o false

console.log(text); //Imprimir

var num1 = 1;
var num2 = 2;
var suma = num1 + num2; //+ - * / -> 1 + 2
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "Mi nombre es:";
console.log(mensaje+nombre); //Símbolo "+" está concatenando los dos textos

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1); //ABC1
console.log(combinamosTexto + num1 + num2); //ABC12
console.log(num1 + num2 + combinamosTexto); //3ABC
console.log(combinamosTexto + (num1 + num2)); //ABC3

var orden = 10 + 20 / 6; // * /        + -
console.log(orden);

var orden2 = (10 + 20) / 6;
console.log(orden2);

var nombre_completo = "Juana";
nombre_completo += " De Arco"; // nombre_completo = nombre_completo + " De Arco";
console.log(nombre_completo);

var n = 13;
n += 4; //n = n + 4; -> * / - +
console.log(n);

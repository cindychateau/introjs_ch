//Condicionales - Siempre y cuando se compla con la condición que yo voy a colocar, vamos a ejecutar el código

var bool = false;
if(bool) { //Estamos buscando que la condición que tenemos entre paréntesis sea verdera
    console.log("Variable verdadera");
    // var n= 1;
    // console.log("otra impresion");
    // n+=1;
} else {
    console.log("Variable Falsa");
}

var n = 3;

if(n > 15) { //a === b; a !== b; a < b; a <= b; a > b; a >= b
    console.log("Número mayor a 15");
} else {
    console.log("Número menor o igual a 15");
}

//n = 10
if(n > 15) {
    console.log("Numero mayor a 15");

    // if(n > 30) {
    //     console.log("Numero mayor a 30");
    // }    

} else if(n < 5){
    console.log("Numero menor a 5");
} else {
    console.log("Numero entre 5 y 15");
}

var temperatura = 20;
var estaLloviendo = false; //NO está lloviendo

if(temperatura >= 18) {
    if(!estaLloviendo) { //La condición se cumple cuando NO está lloviendo
        console.log("¡Este es un buen día para dar un paseo!");
    }
}

if(temperatura >= 18 && !estaLloviendo) { //Queremos que ambas condiciones se cumplan
    console.log("¡Este es un GRAN día para dar un paseo!");
}

if(temperatura >= 18 || !estaLloviendo) { //Queremos que al menos 1 condición se cumpla
    console.log("Podemos dar un paseo pero con paraguas");
}

//Ciclos - Repetición constante de código SIEMPRE y cuando se cumpla con una condición
/*
i = 0;
0 < 3 ? SI
IMPRIMIR 0

i = 1;
1 < 3 ? SI
IMPRIMIR 1

i = 2;
2 < 3 ? SI
IMPRIMIR 2

i = 3
3 < 3 ? NO
 */
for(var i=0; i<5; i++){ //i++ = aumentando 1 a tu i
    console.log("Hola "+i);
}

/*
x = 0;
0 < 3 ? SI
IMPRIMIR 0
x = 1

1 < 3 ? SI
IMPRMIR 1
x = 2

2 < 3 ? SI
IMPRIMIR 2
x = 3

3 < 3 ? NO
*/
var x = 0;
while(x < 3){
    console.log(x);
    x++;
}
/*
inicio = 0
final = 10
0 < 10 ? SI
->Inicio 0; Final 10
inicio = 1
final = 9

1 < 9 ? SI
->Inicio: 1; Final 9
inicio = 2
final = 8

2 < 8 ? SI
->Inicio: 2; Final: 8
inicio = 3
final = 7

3 < 7 ? SI
->Inicio: 3; Final: 7
inicio = 4
final = 6

4 < 6 ? SI
->Inicio: 4; Final: 6
inicio = 5
final = 5

5 < 5 ?  ----------
*/
var inicio = 0;
var final = 10;
while(inicio < final) { //0 < 10; 1 < 9; 2 < 8
    console.log("Inicio:" +inicio+ "; Final:" +final);
    inicio++;
    final--; //menos 1
}

/*
texto = "a"
"a" !== "aaaa"
->a
texto = "aa"

aa !== aaaa
->aa
texto = aaa

aaa !== aaaa
->aaa
texto = aaaa

aaaa != aaaa ----- se detiene
*/
var texto = "a";
while(texto !== "aaaa") {
    console.log(texto);
    texto += "a";
}
var estudiante1 = {
    nombre: "Elena",
    apellido: "De Troya",
    id: 1234,
    cursos: ["Fundamentos de la Web", "Python"],
    graduado: false,
    foto: "ruta/img.png"
};

var auto1 = {
    marca: "Nissan",
    modelo: "Versa",
    color: "blanco",
    placas: "ABC1234"
};

console.log(auto1.modelo);
console.log(estudiante1.cursos);

auto1.modelo = "Todo terreno"; //Modificando una propiedad de mi objeto
console.log(auto1.modelo);

auto1.anio = 1999; //Agregando una nueva propiedad a mi objeto
console.log(auto1.anio);

var listaEstudiantes = [
    {nombre: "Elena", apellido: "De Troya", id: 1234},  //0
    {nombre: "Juana", apellido: "De Arc", id: 2345},    //1
    {nombre: "Pablo", apellido: "Picasso", id: 3456}    //2
];
//Cómo modificaríamos el apellido de Juana?
listaEstudiantes[1].apellido = "De Arco";
//objetos
//OOP, POO: programación orientada a objetos (paradigma)
//pilares: polimorfismo, herencia, encapsulamiento, abstracción
// let persona = {
//     nombre: "Emanuel",
//     apellido: "Maza",
//     datos: function () {
//         return `<p>blabla yo soy ${this.nombre}</p>`;
//     }
// }

// class Auto {
//     //atributos
//     marca;
//     color;
//     precio;
//     //métodos
//     constructor(m, c, p) {
//         this.marca = m;
//         this.color = c;
//         this.precio = p;
//     }
//     informar() {
//         return `El auto de marca ${this.marca}, color ${this.color} tiene un precio de ${this.precio} `;
//     }
//     acelerar() {
//         return `Acelerando en 3,2,1...`;
//     }
// }

// let obj1 = new Auto("Ford", "azul", 300);
// console.log(obj1.color);
// console.log(obj1.informar());
// let obj2 = new Auto("Audi","negro",550)
// console.log(obj2.marca);
// console.log(obj2.informar());

//función constructora
// function Auto(m, c, p) {
//     this.marca = m;
//     this.color = c;
//     this.precio = p;
//     this.mostrar = function () {
//         return `Mostrando a ${this.marca}`;
//     }
//     this.acelerar = () => {
//         return "Acelerando...";
//     }
// }
// let a = new Auto("Audi", "negro", 550);
// console.log(a.mostrar());
// console.log(a.acelerar());
// a.marca = "Ford";
// console.log(a.mostrar());

//modificador de acceso
// class Cafe {
//     #tipo = "cortado";
//     informar() {
//         return this.#tipo;
//     }
//     setTipo(dato) {
//         this.#tipo = dato;
//     }
// }
// let cafecito = new Cafe();
// console.log(cafecito.informar());
// cafecito.tipo = "lágrima";
// console.log(cafecito.informar());
// cafecito.setTipo("capuchino");
// console.log(cafecito.informar());

// class Juego {
//     nombre;
//     constructor(nombre) {
//         this._nombre = nombre;
//     }
//     getNombre() {
//         return this._nombre;
//     }
// }
// let j1 = new Juego("monopolio");
// console.log(j1.getNombre());

//herencia
//superclase o clase padre
// class Animal {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.velocidad = 0;

//     }
//     correr(dato) {
//         this.velocidad = dato;
//         alert(`${this.nombre} corre a una velocidad de ${this.velocidad}`);
//     }
//     getNombre() {
//        console.log(this.nombre);
//     }
// }

// const a1 = new Animal("coco");
// //subclases o clases hijas
// class Conejo extends Animal {
//     constructor(nombre, comida) {
//         super(nombre);
//         this.comida = comida;
//     }
//     algoDiferente() {
//         return "soy diferente";
//     }
//     getNombre() {
//         super.getNombre();
//         console.log("blabla");
//     }
// }

// const c1 = new Conejo("link","zanahoria");
// class Tortuga extends Animal {

// }
// const t1 = new Tortuga("miti");

//prototipado
// let prototipo = {
//     datos: function () {
//         return this.nombre + this.apellido;
//     }
// }
// let p1 = Object.create(prototipo);
// p1.nombre = "Ana";
// p1.apellido = " Hernández";
// console.log(p1.datos());

// function Persona(nombre, apellido, edad) {
//     this.Nombre = nombre;
//     this.Apellido = apellido;
//     this.Edad = edad;
// }
// Persona.prototype.comer = function () {
//     console.log("comiendo");
// }

// var p1 = new Persona("Fulano", "Perez", 100);

// function Empleado(nombre, apellido, edad, sueldo) {
//     Persona.call(this, nombre, apellido, edad);
//     this.Sueldo = sueldo;
// }
// Empleado.prototype = new Persona();
// var e1 = new Empleado("Juan", "Lang", 40, 6500);

// function Cliente(nombre, apellido, edad, tipo) {
//     Persona.call(this, nombre, apellido, edad);
//     this.Tipo = tipo;
// }
// Cliente.prototype.mostrarTipo = function () {
//     console.log("prueba");
// }
// Cliente.prototype = new Persona();
// var c1 = new Cliente("Mary", "Molina", 20, "VP");

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}
Persona.prototype.comer = function () {
    console.log("comiendo");
}
Persona.prototype.bailar = function () {
    console.log("bailando salsa");
}
var p1 = new Persona("Fulano", "Perez", 100);

function Empleado(nombre, apellido, edad, sueldo) {
    Persona.call(this, nombre, apellido, edad);
    this.sueldo = sueldo;
}

Empleado.prototype = new Persona();
var e1 = new Empleado("Juan", "Lang", 40, 6500);

function Cliente(nombre, apellido, edad, tipo) {
    Persona.call(this, nombre, apellido, edad);
    this.tipo = tipo;
}

Cliente.prototype.mostrarTipo = function () {
    console.log(this.tipo);
}

Cliente.prototype = new Persona();
var c1 = new Cliente("Mary", "Molina", 20, "VP");

// // // //objetos: clave valor
// // // var auto = {
// // //     marca: 'ford',
// // //     color: 'azul',
// // //     precio: 200
// // // };
// // // console.log(auto);
// // // console.log(auto.marca);
// // // let autos = [
// // //     {
// // //         marca: 'ford',
// // //         color: 'azul',
// // //         precio: 200
// // //     },
// // //     {
// // //         marca: 'audi',
// // //         color: 'rojo',
// // //         precio: 308
// // //     },
// // //     {
// // //         marca: 'chevrolet',
// // //         color: 'verde',
// // //         precio: 80
// // //     }
// // // ];
// // // console.log(autos[1]);
// // // console.log(autos[1].marca);
// // // for (const key in autos) {
// // //    console.log(key);
// // //    console.log(autos[key]);
// // //    console.log(autos[key].color);
// // // }

// // //funciones
// // function saludar() {
// //     let mensaje = "retornando";
// //     return mensaje;
// // }
// // function saludarNombre(nombre) {
// //     let mensaje = "retornando el nombre " + nombre;
// //     return mensaje;
// // }
// // function saludarNombreDefecto(nombre = "Maximiliano") {
// //     let mensaje = "retornando el nombre " + nombre;
// //     return mensaje;
// // }
// // console.log(saludar());
// // console.log(saludarNombre("Fulanito"));
// // const x = "Cleopatra";
// // console.log(saludarNombre(x));
// // console.log(saludarNombreDefecto("Juan"));
// // //función anónima
// // var fun = function () {
// //     console.log("soy anónima");
// // }
// // fun();
// // //función flecha
// // var fun2 = () => {
// //     console.log("soy una lambda o flecha");
// // }
// // fun2();
// // var fun3 = edad => console.log("soy flecha edad " + edad);
// // fun3(19);

// //MANEJO DEL DOM
// // let h1 = document.querySelector("h1");
// // let h1 = document.querySelector("#titulo");
// // let h1 = document.getElementById("titulo");
// // let h1 = document.querySelector(".titu");
// let h1 = document.getElementsByClassName("titu")[0];
// // alert(h1.innerHTML);
// console.log(h1);
// document.write(h1.innerHTML);
// h1.innerText = "Hola Javascript";
// console.log(h1.title);
// h1.style.color = "red";
// h1.style.backgroundColor = "lightpink";
// h1.style.border = "2px solid blue";
// h1.style.padding = "40px";
// //crear un párrafo
// let p = document.createElement("p");//crear etiqueta
// p.innerHTML = "Esto es un <b>párrafo</b> creado desde Js";//agregar contenido
// // document.body.appendChild(p);//confirmar donde va lo creado
// let div = document.querySelector("div");
// div.appendChild(p);

// //crear una lista de elementos (min 3)
// const ol = document.createElement("ol");
// // let li = document.createElement("li");
// // li.innerText = "inicio";
// // ol.appendChild(li);
// // li = document.createElement("li");
// // li.innerText = "servicios";
// // ol.appendChild(li);
// // li = document.createElement("li");
// // li.innerText = "contacto";
// // ol.appendChild(li);
// // li = document.createElement("li");
// // li.innerText = "sobre nosotros";
// // ol.appendChild(li);
// var datos = ["inicio", "servicios", "contacto", "sobre nosotros", "blog"];
// for (var i = 0; i < datos.length; i++) {
//     let li = document.createElement("li");
//     li.innerText = datos[i];
//     ol.appendChild(li);
// }
// document.body.appendChild(ol);

// //botón que activa una función
// function mostrarLink() {
//     let link = document.createElement("a");
//     link.innerText = "Hacé click";
//     let parrafo1 = document.getElementById("parrafo1");
//     link.href = "https://www.google.com";
//     link.target = "_blank";
//     parrafo1.appendChild(link);
// }

// const btnOyente = document.getElementById("btnOyente");
// //1- el evento 2 - acción 3 - método de propagación
// btnOyente.addEventListener("click", function () {
//     console.log("El oyente escuchó el evento");
// });
// //crear un oyente que se ejecute una sola vez
// const linkActivar = document.getElementById("linkActivar");
// const activar = function () {
//     console.log("activaste la función");
//     linkActivar.removeEventListener("click", activar);
// }

// linkActivar.addEventListener("click", activar);

//probando propagación de eventos
//false: primero el más específico (bubbling)
//true: primero el menos espacífico (capturing) 
let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");
let nieto = document.getElementById("nieto");
nieto.addEventListener("click", (e) => {
    console.log("soy el nieto");
    console.log(e);
    e.stopPropagation();//detiene la propagación
}, false);
padre.addEventListener("click", () => {
    console.log("soy el padre");
}, false);

let google = document.querySelector("#google");
google.addEventListener("click", (e) => {
    e.preventDefault();//previene el comportamiento por defecto
    console.log("Tocaste el link de google");
}, true);
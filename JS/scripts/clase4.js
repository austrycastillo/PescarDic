//fechas
let x = new Date();
// // console.log(x.getFullYear());
// // console.log(x.getDay());//día de la semana
// // console.log(x.getDate());//fecha día 
// let reloj = document.getElementById("reloj");
// reloj.innerHTML = `Hoy es<br> 0${x.getDate()} - 0${x.getMonth()} - ${x.getFullYear()} <br> ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`;
// reloj.innerHTML = ('0' + (x.getDate())).slice(-2);  //para el tema del cero (0)
// function rangoRandom(min, max) {
//     return Math.floor(Math.random() * (max - min - 1)) + min;

// }

// let f = rangoRandom (8, 13);
// let g = rangoRandom (8, 13);
// let h = rangoRandom (8, 13);
// let j = rangoRandom (8, 13);

// console.log(f, g, h, j);

// console.log(('0' + f).slice(-2));
// console.log(('0' + g).slice(-2));
// console.log(('0' + h).slice(-2));
// console.log(('0' + j).slice(-2));


// ASINCRONIA
// setTimeout(() => {
//     console.log("esto debería aparecer primero");
// }, 3000);
// console.log("sorpresa!");
// setInterval(() => {
//     console.log("Hola");
// }, 2000);

/*REST: transferencia de representación de estado
        -arquitectura de software
        -tecnologia
        -restricciones que usamos para aplicaciones web
        -interfaz que conecta sistemas
        -generar datos y operaciones
        -basados en distintos formatos (JSON)
RESTFUL: web services, programas basados en REST
API: interfaz de programación de aplicaciones
        -conjunto de métodos, definiciones
        -utilizamos para desarrollar
        -integrar aplicaciones
        -reutilizar servicios ya creados por terceros
API REST: interfaz de aplicaciones para transferir datos
AJAX: Js asincrono y XML, una implementación de Js
        -se trabaja con el objeto XHR
        -se utiliza para realizar peticiones HTTP
*/

//PRACTICA 1 AJAX
// const p = document.querySelector("#contenido");
// p.innerText = "Cargando...";
// setTimeout(() => {
//     //paso 1: crear el objeto
//     const ajax = new XMLHttpRequest();//XHR
//     //paso 2:abrir al recurso
//     ajax.open("get", "archivo.txt");
//     //paso 3: cargar
//     ajax.onload = cargar;
//     //paso 4: ejecutar, dar orden de avanzar con la petición
//     ajax.send();
//     function cargar() {
//         //paso opcional status(200 satisfactoria) readystate(4)
//         if (ajax.status == 200) {
//             console.log(ajax.responseText)
//             p.innerText = ajax.responseText;
//         } else {
//             p.innerText = "Contenido no disponible 😥";
//         }
//     }
// }, 3000);

//PRACTICA 2 XHR
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();//paso 1
    xhr.open("get", "plantilla.html");//paso 2
    xhr.addEventListener("load", () => {//paso 3
        if (xhr.status == 200) {
            let div = document.createElement("div");
            div.innerHTML = xhr.response;
            document.body.appendChild(div);
        }
    });
    xhr.send();
});
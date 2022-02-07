//PRACTICA 1 AJAX CON JSON
// var ajax = new XMLHttpRequest();
// ajax.open("get", "archivo.json");
// ajax.onload = cargar;
// ajax.send();
// function cargar() {
//     if (ajax.status == 200) {
//         console.log("****ANTES****");
//         console.log(ajax.response);
//         console.log("****DESPUES****");
//         console.log(JSON.parse(ajax.response));
//         var datos = JSON.parse(ajax.response);
//         console.log(datos[1]);
//         console.log(datos[1].nombre);
//         console.log(datos[1].edad);
//         for (var i = 0; i < datos.length; i++) {
//             var lista = document.createElement("ul");
//             var items = "<li>" + datos[i].nombre + "</li><li>" + datos[i].apellido + "</li><li>" + datos[i].edad + "</li>";
//             lista.innerHTML = items;
//             document.body.appendChild(lista);
//         }
//     } else {
//         console.log("error");
//     }
// }

//PRACTICA 2 CONSUMIR SERVICIOS WEB Y OPTIMISTIC UI
// var boton = document.querySelector("#boton");
// boton.addEventListener("click", (e) => {
//     e.preventDefault();
//     boton.classList.remove("btn-danger");
//     boton.classList.add("btn-success");
//     activar("https://jsonplaceholder.typicode.com/users");
// });
// function activar(url) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("get", url, true);
//     xhr.addEventListener("load", () => {
//         if (xhr.status == 200) {
//             // console.log(xhr.response);
//             actualizar(xhr.response)
//         }
//     });
//     xhr.send();
// }
// function actualizar(json) {
//     // console.log(JSON.parse(json));
//     let content = JSON.parse(json);
//     // console.log(content[1]);
//     // console.log(content[1].name);
//     for (const x of content) {
//         console.log(x.name);
//         let body = document.createElement("div");
//         body.classList.add("card-body");
//         let card = document.createElement("div");
//         card.classList.add("card");
//         let h5 = document.createElement("h5");
//         h5.classList.add("card-title");
//         h5.innerHTML = x.name;
//         body.appendChild(h5);
//         let p = document.createElement("p");
//         p.classList.add("card-text");
//         p.innerHTML = x.email;
//         body.appendChild(p);
//         card.appendChild(body);
//         let container = document.getElementById("container");
//         container.appendChild(card);
//     }
// }

//PRACTICA 3 JSON CON IMÁGENES
// let boton = document.getElementById("boton");
// let container = document.querySelector(".container");
// boton.addEventListener("click", () => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("get", "https://picsum.photos/v2/list");
//     xhr.addEventListener("load", () => {
//         if (xhr.status == 200) {
//             let respuesta = JSON.parse(xhr.responseText);
//             // console.log(respuesta);
//             // console.log(respuesta[0]);
//             // console.log(respuesta[0].author);
//             // console.log(respuesta[0].url);
//             // console.log(respuesta[0].download_url);
//             for (const item of respuesta) {
//                 // console.log(item.url);
//                 var div = document.createElement("div");
//                 div.innerHTML = `${item.id} <br><b>${item.author}</b><br>${item.width}px X ${item.height}px`;
//                 var img = document.createElement("img");
//                 img.src = item.download_url;
//                 div.appendChild(img);
//                 container.appendChild(div);
//             }
//         }
//     });
//     xhr.send();
// });

//PRACTICA 4 SPA: SIMPLE PAGE APPLICATION

let main = document.querySelector("main");
let links = document.querySelectorAll("a");
links.forEach((link) => {
    // console.log(link);
    link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
        var archivo = e.target.href;
        cargar(archivo);
    });
});
function cargar(archivo) {
    var ajax = new XMLHttpRequest();
    ajax.open("get", archivo);
    ajax.addEventListener("load", () => {
        if (ajax.status == 200) {
            // console.log(ajax.responseText);
            main.innerHTML = ajax.responseText;
            history.pushState(ajax.response, "", archivo);
        }
    });
    ajax.send();
}
window.addEventListener("popstate", (e) => {
    // console.log(e);
    console.log(e.state);
    main.innerHTML = e.state;
});
//PRACTICA 1
// const caja = document.getElementById("caja");
// caja.addEventListener("dragenter", e => {
//     e.preventDefault();
//     console.log("estoy entrando");
// });
// caja.addEventListener("dragleave", e => {
//     e.preventDefault();
//     console.log("estoy saliendo");
// });
// caja.addEventListener("dragover", e => {
//     e.preventDefault();
//     console.log("estoy dentro");
// });
// caja.addEventListener("drop", e => {
//     e.preventDefault();
//     console.log("solté");
//     console.log(e.target);
//     console.log(e.dataTransfer.files[0]);
//     const fr = new FileReader();
//     fr.addEventListener("load", e => {
//         console.log("estoy en el load del FileReader");
//         console.log(e.target);
//         console.log(e.target.result);
//         caja.style.backgroundImage = "url('" + e.target.result + "')"
//     });
//     fr.readAsDataURL(e.dataTransfer.files[0]);
// });

//PRACTICA 2
// const xhrArrancar = document.querySelector(".xhr-arrancar");
// const xhrError = document.querySelector(".xhr-error");
// const xhrAbortar = document.querySelector(".xhr-abortar");
// const log = document.querySelector("#log-evento");
// function manejarEvento(e) {
//     console.log(e.type);
//     log.textContent = log.textContent + `${e.type}: ${e.loaded} transferidos \n`;
// }
// function addListener(xhr) {
//     xhr.addEventListener("loadstart", manejarEvento);
//     xhr.addEventListener("progress", manejarEvento);
//     xhr.addEventListener("load", manejarEvento);
//     xhr.addEventListener("loadend", manejarEvento);
// }
// function armarXHR(url) {
//     log.textContent = "";
//     const xhr = new XMLHttpRequest();
//     addListener(xhr);
//     xhr.open("get", url);
//     xhr.send();
//     return xhr;
// }
// xhrArrancar.addEventListener("click", () => {
//     armarXHR("car.jpg");
// });
// xhrError.addEventListener("click", () => {
//     armarXHR("https://cualquiercosaquenoexista.com/nada/niidea");
// });
// xhrAbortar.addEventListener("click", () => {
//     armarXHR("car.jpg").abort();
// });


//PRACTICA 3
//EJEMPLO DE CALLBACK HELL
// const x = document.querySelector("#x");
// x.addEventListener("click", () => {
//     console.log("hiciste click")
//     //armarmos un XHR
//     x.addEventListener("load", () => {
//         //segundo evento
//         x.addEventListener("load", () => {
//             //tercer evento
//         });
//     });
// });

//PRACTICA 4 PROMESAS: PENDING -  RESOLVE(fulfilled) -REJECT
// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random() * 10)
//     setTimeout(() => {
//         // console.log(number);
//         number > 5
//             ? resolve(number)
//             : reject(new Error(`El número ${number} es menor a 5`))
//     }, 3000);
// });

// promise
//     .then(number => console.log(number))
//     .catch(error => console.log(error))

//PRACTICA 5 PROMESA CON AJAX Y TXT
// let promesa = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("get", "archivo.txt");
//     xhr.addEventListener("load", () => {
//         if (xhr.status = 200) {
//             resolve(xhr.response);
//         }
//     });
//     xhr.send();
// });
// promesa.then(valor => console.log("promesa resuelta: ", valor));

//PRACTICA 6 PROMESA CON JSON

// function leerJson() {
//     return new Promise((resolve, reject) => {
//         var ajax = new XMLHttpRequest();
//         ajax.open("GET", "https://jsonplaceholder.typicode.com/posts");
//         ajax.onload = function () {
//             if (ajax.status == 200) {
//                 resolve(JSON.parse(ajax.response));
//             } else {
//                 reject();
//             }
//         }
//         ajax.send();
//     });
// }
// leerJson()
//     .then(r => console.log(r))
//     .catch(() => {
//         console.log("Algo salió mal");
//     })
//     .finally(()=>{
//         console.log("FINAL")
//     })

//PRACTICA 7 ENCADENAMIENTO
let promesa = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "archivo.txt");
    xhr.addEventListener("load", () => {
        if (xhr.status = 200) {
            resolve(xhr.response);
        }
    });
    xhr.send();
});

promesa.then(valor => {
    console.log("***promesa 1 resuelta ", valor);
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("get", "archivo.txt");
        xhr.addEventListener("load", () => {
            if (xhr.status = 200) {
                resolve(xhr.response + valor);
            }
        });
        xhr.send();
    })
}).then(valor => {
    console.log("***promesa 2 resuelta ", valor)
}).catch(() => {
    console.log("Error!")
}).finally(() => {
    console.log("finalizando")
})
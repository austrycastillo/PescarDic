//PRACTICA 1
// let a = document.querySelectorAll("a");
// let p = document.querySelectorAll("p");
// a.forEach(link => {
//     // console.log(link);
//     console.log(link.classList[0]);
//     var clase = link.classList[0];
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         history.pushState({
//             tabForClass: clase
//         }, null, "aX25@-" + clase);

//         p.forEach(parr => {
//             // console.log(parr);
//             // console.log(parr.id);
//             var idem = parr.id;
//             if (idem == clase) {
//                 parr.classList.remove("hide");
//                 parr.classList.add("active");
//             } else {
//                 parr.classList.remove("active");
//                 parr.classList.add("hide");
//             }
//         });
//     });
// });
// window.addEventListener("popstate", (e) => {
//     // console.log(e.state);
//     // console.log(e.state.tabForClass);
//     var i = e.state.tabForClass;
//     p.forEach(parr => {
//         console.log(parr);
//         var idem = parr.id;
//         if (idem == i) {
//             parr.classList.remove("hide");
//             parr.classList.add("active");
//         } else {
//             parr.classList.remove("active");
//             parr.classList.add("hide");
//         }
//     });
// });

//PRACTICA 2 -> FORMDATA
// let form = document.forms.namedItem("formulario");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // console.log(form);
//     // console.log(form.nombre);
//     // console.log(form.nombre.value);
//     // console.log(form.archivo.files[0].name);
//     let campos = new FormData();
//     campos.append("nombre", form.nombre.value);
//     campos.append("edad", form.edad.value);
//     campos.append("archivo", form.archivo.files[0].name);
//     for (const X of campos.entries()) {
//         console.log(X[0] + ": " + X[1]);

//     }
// });

//PRACTICA 3 VISTA PREVIA
// let input = document.querySelector("input[type=file]");
// let vp = document.querySelector("#vistaPrevia");
// input.addEventListener("change", (e) => {
//     // console.log(e.target.value);
//     console.log(e.target.files[0]);
//     var url = URL.createObjectURL(e.target.files[0]);
//     // vp.src = url;
//     vp.setAttribute("src", url);
// });

//PRACTICA 4 DRAG DROP
// let caja = document.getElementById("caja");
// caja.addEventListener("dragover", ejecutar);
// caja.addEventListener("drop", drop);
// function ejecutar(e) {
//     e.preventDefault();
// }
// function drop(e) {
//     e.preventDefault();
//     var x = new FileReader();//instanciamos la clase para leer el contenido de los archivos
//     x.addEventListener("load", leer);
//     x.readAsDataURL(e.dataTransfer.files[0]);
//     console.log(e.dataTransfer.files[0]);
// }
// function leer(e) {
//     console.log(e.target.result);
//     caja.style.backgroundImage = "url('" + e.target.result + "')";
// }

//PRACTICA 5
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function over(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data))
}
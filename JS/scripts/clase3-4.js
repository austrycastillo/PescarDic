// // //validación de formularios
// // //practica 1**********************
// // let a = document.querySelectorAll("a");
// // for (var i = 0; i < a.length; i++) {
// //     a[i].onclick = (e) => {
// //         e.preventDefault();//prevenir comportamiento por defecto
// //         console.log(e.target.href);
// //         if (confirm(`¿seguro que quieres ir a ? ${e.target.href}`)) {
// //             window.location = e.target.href;
// //         }
// //     }
// // }
// // document.form.onsubmit = (e) => {
// //     e.preventDefault();
// //     // console.log("estoy");
// //     let form = document.querySelectorAll("input");
// //     // console.log(form[0]);
// //     for (var i = 0; i < form.length - 1; i++) {
// //         // console.log(form[i].value);
// //         if (form[i].value == "") {
// //             console.log("vacío!");

// //             // form[i].classList.add("inputMal");
// //             // form[i].classList.remove("inputBien");
// //             form[i].setAttribute('id', 'inputMal');
// //             form[i].removeAttribute('id', 'inputBien');
// //         } else {
// //             console.log("relleno");
// //             // console.log(form[i].value.trim());
// //             let x = encodeURIComponent(form[i].value);//evitar ataques XSS
// //             // console.log(encodeURIComponent(x));
// //             // console.log(decodeURIComponent(x));
// //             // console.log(x.charCodeAt());
// //             // console.log(x.length);
// //             // console.log(x[2]);
// //             for (var i = 0; i < x.length; i++) {
// //                 let letra = x[i];
// //                 console.log(letra);
// //                 if (letra.charCodeAt() >= 65 && letra.charCodeAt() <= 90) {
// //                     console.log("perfecto letras mayúsculas");
// //                 }else{
// //                     console.log("malo!");
// //                     document.querySelector("span").innerText="no tiene el formato";
// //                     document.querySelector("span").style.color = "red";
// //                 }
// //             }
// //             // form[i].classList.add("inputBien");
// //             // form[i].classList.remove("inputMal");
// //             form[i].setAttribute('id', 'inputBien');
// //             form[i].removeAttribute('id', 'inputMal');
// //         }
// //     }
// // }

// //practica 2*********************
// //expresiones regulares
// let exp = /amor/   //literal
// // console.log(exp.test("155"));
// // console.log(exp.test("amor"));
// exp = /[Aa]mor/
// exp = /[Aa][Mm][Oo][Rr]/
// // console.log(exp.test("AMOR"));
// exp = /[0-9]/ //solo números
// // console.log(exp.test("A"));
// exp = /[A-Z]/ //solo letras mayúsculas
// // console.log(exp.test(2));
// exp = /[A-Z,a-z]/ //solo letras 
// // console.log(exp.test(2));
// exp = /^[a-z0-9]{2,5}$/  //^comienzo $final (letras minúsculas y números mínimo de 2 y máximo de 5 caracxteres) 
// // console.log(exp.test("2a-"));
// exp = /^.{4,10}$/  //cualquier caracter, min 4, máx 10
// exp = /^\d{3,}$/ //\d digitos 
// console.log(exp.test(123424444564456));

var form = document.getElementById("form");
var inputs = document.querySelectorAll("input");
var exp = {
    nombre: /^[a-zA-Z\s]{3,10}$/,
    correo: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
var campos = {
    nombre: false,
    correo: false
}
var nombre = document.querySelector("#nombre");
var correo = document.querySelector("#correo");
var s_nombre = document.querySelector("#s-nombre");
var s_correo = document.querySelector("#s-correo");
var s_submit = document.querySelector("#s-submit");
function validar(e) {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(e.target.name);
    switch (e.target.name) {
        case "nombre":
            // console.log(e.target.value);
            // console.log(exp.nombre);
            if (exp.nombre.test(e.target.value)) {
                // console.log("correcto");
                nombre.classList.add("input_correcto");
                nombre.classList.remove("input_incorrecto");
                s_nombre.classList.add("s-nombre");
                s_nombre.classList.remove("s-nombre-error");
                // console.log(campos.nombre);
                campos.nombre = true;

            } else {
                // console.log("incorrecto");
                nombre.classList.add("input_incorrecto");
                nombre.classList.remove("input_correcto");
                s_nombre.classList.add("s-nombre-error");
                s_nombre.classList.remove("s-nombre");
                campos.nombre = false;
            }
            break;
        case "correo":
            // console.log(e.target.value);
            // console.log(exp.nombre);
            if (exp.correo.test(e.target.value)) {
                // console.log("correcto");
                correo.classList.add("input_correcto");
                correo.classList.remove("input_incorrecto");
                s_correo.classList.add("s-correo");
                s_correo.classList.remove("s-correo-error");
                // console.log(campos.correo);
                campos.correo = true;

            } else {
                // console.log("incorrecto");
                correo.classList.add("input_incorrecto");
                correo.classList.remove("input_correcto");
                s_correo.classList.add("s-correo-error");
                s_correo.classList.remove("s-correo");
                campos.correo = false;
            }
            break;
    }
}
inputs.forEach((item) => {
    //console.log(item);
    item.addEventListener('keyup', validar);
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(campos.nombre);
    // console.log(campos.correo);
    if(campos.nombre && campos.correo){
        // console.log("enviado");
        s_submit.classList.add("s-submit-enviado");
        s_submit.classList.remove("s-submit-error");
        s_submit.innerHTML = "Enviado correctamente 😀";
        // console.log(e.target.submit());
    }else{
        // console.log("no enviado, errores");
        s_submit.classList.add("s-submit-error");
        s_submit.classList.remove("s-submit-enviado");
        s_submit.innerHTML = "No enviado, errores 🤐";
    }
});
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
    correo: /^[-\w.%+]{6,64}@(?:[A-Z0-9-]{6,63}\.){6,125}[A-Z]{2,63}$/i
}
var campos = {
    nombre: false,
    correo: false
}
function validar(){
    //aqui quedamos
}
inputs.forEach((item) => {
    // console.log(item);
    item.addEventListener('keyup', validar);
})
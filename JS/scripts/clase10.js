//JQuery: librería
//sintaxis: $("selector").accion()  --> desde la web buscamos diferentes métodos, ej: html, click, text, mouseover, animate, remove, show
// document.querySelector("h1").innerHTML = "Hola con javascript";
// var titulo = $("h1").text();
//alert(titulo)
// var titulo = $("h1").text("Hola <i>con</i> JQuery");
// var titulo = $("h1").html("Hola con <i>JQuery</i> con el otro método html");
// var titulo = $("#hola").html("Hola con id");
// var titulo = $(".hola").html("Hola con class");

//PRACTICA 2
// $("#eli").click(eliminar);
// function eliminar() {
//     // $("#capa").hide();
//     $("#capa").fadeOut("slow");

// }
// $("#mue").click(
//     function aparecer() {
//         // $("#capa").show();
//         $("#capa").fadeIn("slow");
//     })

//PRACTICA 3
// $("#boton").click(function () {
//     $("#info").slideToggle("slow");
// })
// $("#boton").html("botón con texto nuevo");
// $("#boton").css("color","blue");
// $("#boton").css({
//     "color":"orange",
//     "background-color":"gray",
//     "font-size":"10px"
// });
// $("#boton").addClass("titulo");
// $("#boton").removeClass("titulo");
// $("#boton").attr("title","holaaaa");

//PRACTICA 4
// $("button").click(() => {
//     $(".anime").animate({
//         left: "250px",
//         top: "50px",
//         opacity: "toggle"
//     });
// })

//PRACTICA 5 PERSISTIR DATOS: COOKIE
// let btnGuardar = document.getElementById("btnGuardar");
// btnGuardar.addEventListener("click", (e) => {
//     // console.log(e.target);
//     let input = document.getElementById("miCookie2");
//     let miCookie = input.name;
//     input = input.value
//     console.log(input);
//     console.log(miCookie);
//     document.cookie = miCookie + "=" + input + "max-age=0";

//     document.querySelector("p").innerHTML = "Cookie guardada";
//     console.log(document.cookie);
// });
// let btnLeer = document.getElementById("btnLeer");
// btnLeer.addEventListener("click", () => {
//     document.querySelector("p").innerText = document.cookie;
// });
//para elimiar usar expires o max-age
// document.cookie = "pruebaDeCookie=;max-age=0";
//expires=Fri, 31 Dec 9999 23:59:59 GMT 

//PRACTICA 6 API STORAGE: local(no tiene fecha de expiración), session(los datos son eliminados cuando finaliza la sesión)
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    const nombre = e.target[0].value;
    const apellido = e.target[1].value;
    localStorage.setItem("datoA", nombre);
    localStorage.setItem("datoB", apellido);
})
const a = document.querySelector("a");
a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target)
    console.log(localStorage.getItem("datoA") + " - " + localStorage.getItem("datoB"));
});
localStorage.removeItem("datoA");//eliminar un dato
localStorage.clear()//eliminar todo
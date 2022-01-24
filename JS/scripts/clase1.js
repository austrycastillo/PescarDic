// //alert("Hola Js externo");
// //--->DOM: document object model
// // document.write("Hola Js con write") ;
// // console.log('Hola Js desde consola');
// // let y = window.prompt("Escribe algo");
// // //VARIABLES: var, let, const
// // var x;//undefined
// // var nombre = "Fulano";//string
// // var edad = 20;//number: int, float, double
// // var resultado = true;//false--- boolean
// // var arreglo = [];//array
// // var obj = {};//objeto
// // alert(nombre);
// // alert(y);
// //operaciones artimeticas: + - * / %
// // var num1 = 2;
// // var num2 = 5;
// // var total = num1 + num2;
// // total = total % 2;//resto de /
// // total++;//total = total + 1;  --
// // total += 100; // total = total + 100
// // console.log(total);
// // //operadores relacionales < > <= >= == === !=
// // console.log(num1 < num2);
// // console.log(num1 == num2);
// //operadores lógicos &&(and) ||(or) tabla de la verdad
// /*
// &&
// TRUE && TRUE    = TRUE
// TRUE && FALSE   = FALSE
// FALSE && TRUE   = FALSE
// FALSE && FALSE  = FALSE
// ||
// FALSE || FALSE  = FALSE
// TRUE || FALSE   = TRUE
// FALSE || TRUE   = TRUE
// TRUE || TRUE    = TRUE

// */
// /*
// var-->redeclarable - redefinible - scope global
// let--> no redeclarable - redefinible - scope local
// const-->no redeclarable - no redefinible - scope local
// */
// // var x = 2;
// // console.log(x);
// //             if(true){
// //                 console.log(x);
// //                 var x = 4;
// //                 console.log(x);
// //             }
// // console.log(x);
// // var x = 6;
// // console.log(x);
// // let x = 2;
// // console.log(x);
// // if (true) {
// //     console.log(x);
// //     // let x = 4;
// //     // console.log(x);
// //     let y = 10;
// //     console.log(y)
// // }
// // // let x = 4; //error
// // // console.log(x);
// // x = 4;
// // console.log(x);
// // console.log(y);error

// // const x = 2;
// // console.log(x);
// // if(true){
// //     console.log(x);
// //     const y = 10;
// //     console.log(y);
// // }
// // // const x = 4; //error
// // //x = 4;//error
// // console.log(x);
// //console.log(y); error

// /*
// vamos al boliche -> se puede entrar si tienes entre 18 y 25
//                     si tenemos 21 ganamos una bebida gratis
//                     el programa debe preguntar la edad, decir si podemos pasar o no, en caso de no pasar decir la razón
// */
// // var edad = parseInt(window.prompt("Escribe tu edad"));
// // if (edad >= 18 && edad <= 25) {
// //     alert("Bienvenido");
// //     if (edad == 21)
// //         document.write("Bebida gratis!!! 😎");
// // } else {
// //     alert("Ups no puedes pasar! ");
// //     if (edad <= 18)
// //         document.write("por bebito 😉");
// //     else
// //         document.write("por viejito 😉");
// // }

// //IF 
// /*
// if(condición){
//     ...instrucciones
// }

// - SWITCH 
// switch(variable){
//     case VALOR1:
//         INSTRUCCIONES 1
//         break;
//     case VALOR2:
//         INSTRUCCIONES 2
//         break;
//     default:
//         INSTRUCCIONES
//         break;
// }
// - WHILE 
// while(condición){
//     instrucciones
//     ajuste
// }

// - DO WHILE 
// do{
//     instrucciones
//     ajuste
// }while(condición)

// - FOR
// for(inicio;condición;ajuste){
//     ..instrucciones
// }
// */
// /*
// DESARROLLAR UN CAJERO AUTOMÁTICO
//     - SOLICITAR LA CLAVE
//     - SI ES CORRECTA MOSTRAR MENU
//     - CONSULTA(1), DEPÓSITO(2), RETIRO(3)
// */
// var chance = 1;
// var claveC = 123;
// var saldo = 800;
// var monto = 0;
// do {
//     var clave = parseInt(window.prompt("ingresa tu clave"));
//     if (clave == claveC) {
//         var opcion = parseInt(window.prompt("ingresa la opción a realizar:\n1- consulta\n2- depósito\n3- retiro\n4- salir"));
//         switch (opcion) {
//             case 1:
//                 document.write("Tu saldo es " + saldo);
//                 chance = 5;
//                 break;
//             case 2:
//                 monto = parseInt(window.prompt("Introduce el monto a depositar"));
//                 saldo += monto;
//                 document.write(`Depósito realizado correctamente, su nuevo saldo es ${saldo}`);
//                 chance = 5;
//                 break;
//             case 3:
//                 monto = parseInt(window.prompt("Introduce el monto a retirar"));
//                 if (monto > saldo) {
//                     alert("saldo insuficiente!");
//                 } else {
//                     saldo -= monto;
//                     document.write(`Retiro realizado correctamente, su nuevo saldo es ${saldo}`);
//                 }
//                 chance = 5;
//                 break;
//             case 4:
//                 alert("Regresa pronto, bay");
//                 chance = 5;
//                 break;
//             default:
//                 alert("opción incorrecta");
//                 break;
//                 chance++;
//         }
//     } else {
//         alert("Datos incorrectos!");
//         chance++;
//     }
// } while (chance <= 3);


//arreglos
var edades = [20, 50, 24, 18, 60, 5, 99];
var nombres = new Array('Gino', 'Zeth', 'Enmanuel', 'Miguel', 'María Victoria');
var datos = ["Juan", 10, 80.2, true];
// console.log(nombres[2]);
// nombres[2] = "Eustaquio";
// console.log(nombres[2]);
console.table(nombres);
console.log("***for");
for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
console.log("***foreach");
nombres.forEach(elemento => {
    console.log(elemento);
});
console.log("***map");
nombres.map(elemento => {
    console.log(elemento);
});
console.log("***for of");
for (const elemento of nombres) {
    console.log(elemento);
}
nombres.push('Austry');//agrega al final, pop eliminar al final
console.log(nombres);
nombres.unshift("Austry");//agregar al inicio, shift elimina al inicio
console.log(nombres);
nombres.splice(1,0,"Fulano");
console.log(nombres);
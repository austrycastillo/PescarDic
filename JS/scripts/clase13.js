//PATRONES DE DISEÑO: 
//CREACIONAL - ESTRUCTURA - COMPARTAMIENTO
//BUILDER (CONSTRUCTOR) - CREACIONAL
// class Casa {
//     constructor() {
//         this.habitacion = 0;
//         this.cocina = 0;
//         this.banio = 0;
//         this.cochera = 0;
//         this.patio = 0;
//     }
//     setHabitacion(valor) {
//         this.habitacion = valor;
//     }
//     setCocina(valor) {
//         this.cocina = valor;
//     }
//     setBanio(valor) {
//         this.banio = valor;
//     }
//     setCochera(valor) {
//         this.cochera = valor;
//     }
//     setPatio(valor) {
//         this.patio = valor;
//     }
//     mostrar() {
//         return {
//             habitación: this.habitacion,
//             cocina: this.cocina,
//             baño: this.banio,
//             cochera: this.cochera,
//             patio: this.patio
//         }
//     }
// }

// //instanciar a Casa
// const casaEmanuel = new Casa();
// casaEmanuel.setCocina(3);
// casaEmanuel.setPatio(1);
// casaEmanuel.setBanio(1);
// casaEmanuel.setHabitacion(1);
// console.log(casaEmanuel.mostrar());
// const casaMVictoria = new Casa();
// casaMVictoria.setHabitacion(10);
// casaMVictoria.setBanio(10);
// casaMVictoria.setCochera(3);
// casaMVictoria.setCocina(1);
// console.log(casaMVictoria.mostrar());

//*******************************
//PATRÓN ESTRUCTURAL
//FACADE (FACHADA)
// class Pelicula {
//     getTerror() {
//         return [
//             {
//                 id: 'T-01',
//                 nombre: 'IT',
//                 reparto: [
//                     'Stephen King', 'Jack Dylan Grazer'
//                 ]
//             },
//             {
//                 id: 'T-02',
//                 nombre: 'El exorcista',
//                 reparto: [
//                     'Linda Blair', 'Ellen Burstyn'
//                 ]
//             },
//             {
//                 id: 'T-03',
//                 nombre: 'La Niebla',
//                 reparto: [
//                     'David Drayton', 'Billy'
//                 ]
//             }
//         ]
//     }
//     getAccion() {
//         return [
//             {
//                 id: 'A-01',
//                 nombre: 'Rápidos y Furiosos 9',
//                 reparto: [
//                     'Vin Diesel', 'Michelle Rodríguez'
//                 ]
//             },
//             {
//                 id: 'A-02',
//                 nombre: 'Rápidos y Furiosos 9',
//                 reparto: [
//                     'Vin Diesel', 'Michelle Rodríguez'
//                 ]
//             }
//         ]
//     }
//     getAmor() {
//         return [
//             {
//                 id: 'M-01',
//                 nombre: 'Titanic',
//                 reparto: [
//                     'Leonardo DiCaprio'
//                 ]
//             }

//         ]
//     }
// }

// const film = () => {
//     const p = new Pelicula();
//     const terror = p.getTerror();
//     const accion = p.getAccion();
//     const amor = p.getAmor();
//     const gral = [...terror, ...accion, ...amor];
//     return gral;
// }
// // console.log(film());
// // console.log(film()[2].nombre);
// const div = document.querySelector(".peli");
// film().forEach((datos) => {
//     console.log(datos);
//     const h1 = document.createElement("h1");
//     h1.innerText = datos.nombre;
//     const p = document.createElement("p");
//     p.innerHTML = `Id: ${datos.id}<br>Reparto: ${datos.reparto}`;
//     const hr = document.createElement("hr");
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(hr);

// })

//modulos
const modulo = {
    nombre: "no declarado",
    apellido: "no declarado",
    setNombre: (valor) => {
        modulo.nombre = valor;
    },
    getNombre: () => {
        return modulo.nombre;
    },
    setApellido: (valor) => {
        modulo.apellido = valor;
    },
    getApellido: () => {
        return modulo.apellido;
    }
};

modulo.nombre = "Fabian";
modulo.setApellido("Unquen");
console.log(`Nombre: ${modulo.getNombre()}, Apellido: ${modulo.getApellido()}`);
modulo.setNombre("Eber");
console.log(`Nombre: ${modulo.getNombre()}, Apellido: ${modulo.getApellido()}`);

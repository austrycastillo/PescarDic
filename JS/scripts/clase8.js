//FETCH PRACTICA 1
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         // console.log(response);
//         // console.log(response.json());
//         return response.json();
//     }).then((usuarios) => {
//         // console.log(usuarios);
//         // console.log(usuarios[1]);
//         // console.log(usuarios[1].name);
//         // console.log(usuarios[1].id);
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuarios[1].id}`)
//             .then((response) => {
//                 // console.log(response);
//                 return response.json();
//             }).then((posts) => {
//                 console.log(posts);
//                 console.log(posts[2]);
//                 console.log(posts[2].title);
//             })
//     })

//PRACTICA 2 ASYNC AWAIT
// let productos = [
//     {
//         nombre: "monitor",
//         precio: 300,
//         marca: "dell"
//     },
//     {
//         nombre: "teclado",
//         precio: 125,
//         marca: "logitech"
//     }
// ]
// function verInfo() {
//     return new Promise((resolve, reject) => {
//         console.log("Cargando...");
//         setTimeout(() => {
//             resolve(productos)
//         }, 3000)
//     })
// }
// // verInfo()
// async function getProductos() {
//     let datos = await verInfo()
//     console.log(datos);
//     console.log(datos[0]);
//     console.log(datos[0].nombre);
// }
// getProductos()

//PRACTICA 3
// const btnAnterior = document.getElementById("btnAnterior");
// const btnSiguiente = document.getElementById("btnSiguiente");
// const contenedor = document.getElementById("contenedor");
// let pagina = 1;
// btnSiguiente.addEventListener("click", () => {
//     if (pagina < 1000) {
//         pagina++;
//         contenedor.innerHTML = "";
//         cargarPelis();
//     }

// });
// btnAnterior.addEventListener("click", () => {
//     if (pagina > 1) {
//         pagina--;
//         contenedor.innerHTML = "";
//         cargarPelis();
//     }

// });
// const cargarPelis = async () => {
//     try {
//         const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es&page=${pagina}`)
//         // console.log(respuesta)
//         // console.log(respuesta.status)
//         if (respuesta.status == 200) {
//             const datos = await respuesta.json();
//             // console.log(datos);
//             // console.log(datos.results);
//             // console.log(datos.results[1].original_title);
//             datos.results.forEach(valor => {
//                 console.log(valor);
//                 console.log(valor.original_title);
//                 contenedor.innerHTML += 
//                 `<h2> ${valor.original_title} </h2><br>
//                 <img src=https://image.tmdb.org/t/p/w500/${valor.poster_path} width=30%><br><hr>`;
//             });
//         } else if (respuesta.status == 401) {
//             console.log("pusiste mal una llave");
//         } else if (respuesta.status == 404) {
//             console.log("no existe la peli que buscas")
//         } else {
//             console.log("Ups hubo un error y no sabemos que paso");
//         }
//     } catch (error) {
//         console.log("Errorrrrr");
//     }
// }
// cargarPelis();

//PRACTICA 4 GEOLOCALIZACIÓN
let btn = document.querySelector("#btn");
let texto = document.querySelector("#texto");
let mapLink = document.querySelector("#mapLink");

btn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        texto.innerHTML = "La geolocalización no está disponible en su navegador";
    } else {
        texto.innerHTML = "Localizando...";
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(success, error);
        }, 2000);
    }
    function success(position) {
        // console.log(position);
        let lati = position.coords.latitude;
        let long = position.coords.longitude;
        texto.innerHTML = `Localizado en:<br>- Latitud: ${lati}º<br>- Longitud: ${long}º<hr>`;
        mapLink.innerHTML = `<a href=https://www.openstreetmap.org/#map=16/${lati}/${long} target=blank>Mostrar mapa de localización</a>`;
        // console.log(lati, long);
    }
    function error() {
        texto.innerHTML = "No se puede obtener tu ubicación";
    }
});
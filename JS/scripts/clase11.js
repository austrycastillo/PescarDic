const boton_agregar = document.getElementById("boton-agregar");
const lista = document.querySelector(".lista");
const boton_reiniciar = document.querySelector(".boton-reiniciar");
// console.log(boton_agregar)
// console.log(lista)
// console.log(boton_reiniciar)
boton_agregar.addEventListener("click", () => {
    agregarTarea("");
});
boton_reiniciar.addEventListener("click", () => {
    reiniciarTodo();
});
var arregloTareas = [];
var contador = 0;
const agregarTarea = (producto) => {
    contador++;
    let objTarea = {
        id: contador,
        producto: producto
    }
    arregloTareas.push(objTarea);
    setArregloTareas();
}
//seteo al storage los datos de la lista ul
const setArregloTareas = () => {
    // console.log(arregloTareas)
    // console.log(JSON.stringify(arregloTareas))
    // console.log(contador)
    localStorage.setItem("arregloTareas", JSON.stringify(arregloTareas));
    listarTareas();
}
//retorno del storage los datos de la lista ul
const getArregloTareas = () => {
    const arreglo = JSON.parse(localStorage.getItem("arregloTareas"));
    // console.log(arreglo);
    return arreglo;
}
const listarTareas = () => {
    lista.innerHTML = "";
    let datos = getArregloTareas();
    if (datos != null) {
        //console.log(datos);
        for (const item of datos) {
            // console.log(item.id)
            // console.log(item.value)
            lista.innerHTML += `
            <li id="${item.id}"><input type="text" class="input" value="${item.value}"><button class="boton-eliminar">X</button></li>`
        }
    }
}
const reiniciarTodo = () => {
    // console.log(arregloTareas);
    // console.log(contador);
    arregloTareas = [];
    contador = 0;
    // console.log(arregloTareas);
    // console.log(contador);
    setArregloTareas();

}
lista.addEventListener("keypress", (e) => {
    // console.log(e);
    //console.log(e.keyCode);
    // console.log(e.path);
    // console.log(e.path[0]);
    // console.log(e.path[1].id);
    // console.log(e.path[0].value);
    editar(e.path[1].id,e.path[0].value);
});
const editar = (idTarea,producto)=>{
    let newTarea ={
        id:idTarea,
        producto:producto
    }
    let datos = getArregloTareas();
    let newArreglo = [];
    if(datos!=null){
        for(const item of datos){
          console.log(idTarea)
        }
    }
}
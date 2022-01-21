<?php
if(isset($_POST['nombre']) && isset($_POST['precio'])){
    //guardo el nuevo producto
    require_once("models/Producto.php");
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];
    $objeto = new Producto($nombre,$precio);
    $objeto->guardar();
    //header("location:nuevo.php?rta=insert");
}else{
    //muestro el formulario
    require_once("views/nuevoViews.php");
}

<?php
include_once("models/Producto.php");
if (isset($_POST['nombre'])) {
    //editamos el producto
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];
    $objeto = new Producto($nombre, $precio, $id);
    $objeto->editar();
    header("location:listado.php");
} else {
    //mostrar el form para poder editar ese producto
    $id = $_GET['id'];
    $objeto = new Producto();
    $objeto->setId($id);
    $rows = $objeto->mostrarUnProducto();
    include_once("views/editarViews.php");
}

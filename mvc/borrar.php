<?php
include_once("models/Producto.php");
$id = $_GET['id'];
$objeto = new Producto();
$objeto->setId($id);
$objeto->eliminar();
header("location:listado.php");
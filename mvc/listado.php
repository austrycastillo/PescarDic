<?php
require_once("models/Producto.php");
$rows = Producto::listar();
require_once("views/listadoViews.php");
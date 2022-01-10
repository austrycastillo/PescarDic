<?php
include("Producto.php");
include("Cliente.php");
class Tienda
{
    use Producto, Cliente; //si son varios traits se separan por coma
    public function otraCosa(){
        echo "<br>Otra cosa";
    }
}

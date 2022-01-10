<?php
include("Tienda.php");
$x = new Tienda();
$x->iniciar("mouse", 250);
echo $x->mostrar();
echo "<hr>";
$x->agregar("Adrian Alaimo");
echo $x->informar();
$x->otraCosa();

<?php
include("Calcular.php");
include("Proyectar.php");
$obj = new Calcular();
echo $obj->sumar(5, 6);
echo "<br>";
echo $obj->decir("holaaaa");
echo "<br>";
$obj2 = new Proyectar();
echo $obj2->sumar(10, 20);

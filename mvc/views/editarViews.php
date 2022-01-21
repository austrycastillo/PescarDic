<?php
include_once("header.php");
?>
<br><br>
<h1>Editar producto</h1>
<p>
<form action="./editar.php" method="post">
    Nombre:<br> <input type="text" name="nombre" value="<?= $rows['nombre']?>"><br>
    Precio:<br> <input type="number" name="precio" value="<?= $rows['precio']?>"><br><br>
    <input type="hidden" name="id" value="<?= $rows['id']?>">
    <input type="submit" value="Modificar producto">
</form>
</p>
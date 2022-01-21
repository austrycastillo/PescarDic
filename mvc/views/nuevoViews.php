<?php
include_once("header.php");
?>
<br><br>
<h1>Registro de nuevo producto:</h1>
<p>
<form action="./nuevo.php" method="post">
    Nombre:<br> <input type="text" name="nombre"><br>
    Precio:<br> <input type="number" name="precio"><br><br>
    <input type="submit" value="Guardar producto">
</form>
</p>
<?php
include_once("header.php");
?>
<br><br>
<h1>Listado de productos:</h1>
<p>
<table border="1" cellspacing="0" cellpadding="30">
    <tr>
        <th>#id</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th></th>
    </tr>
    <?php
    foreach ($rows as $valor) {
    ?>
        <tr>
            <td><?= $valor['id']; ?></td>
            <td><?= $valor['nombre']; ?></td>
            <td><?= $valor['precio']; ?></td>
            <td><a href="./editar.php?id=<?= $valor['id']; ?>">editar</a> - 
            <a href="./borrar.php?id=<?= $valor['id']; ?>">borrar</a></td>
        </tr>
    <?php } ?>
</table>
</p>
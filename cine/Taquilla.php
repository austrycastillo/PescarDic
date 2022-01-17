<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taquilla</title>
</head>

<body>
    <?php
    include "Cine.php";
    if (!empty($_GET['reserva'])) {
        $x = new Cine($_GET['reserva']);
        if ($x->reservar() == false)
            echo "<b>No se puede reservar, no existe disponibilidad";
    }
    else if (!empty($_GET['devuelve'])) {
        $x = new Cine($_GET['devuelve']);
        if ($x->devolver() == false)
            echo "<b>No se puede devolver, supera el límite";
    }
    ?>
    <table width=60% border="2">
        <tr>
            <th>Código</th>
            <th>Película</th>
            <th>Género</th>
            <th>Sinopsis</th>
            <th>Butacas</th>
            <th>Disponibles</th>
            <th>Reservar</th>
            <th>Devolver</th>
        </tr>
        <?php
        //me conecto a la base
        $hostname = 'localhost';
        $username = 'root';
        $password = '';
        $dbname = 'cine';
        try {
            $conexion = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
            echo "me conecto";
        } catch (Exception $e) {
            echo "error no me conecto " . $e->getMessage();
        }
        //selecciono el código
        $sql = "SELECT codigo FROM cine";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();
        //var_dump($rows);
        foreach ($rows as $campos) {
            //var_dump($campos);
            // echo $campos['codigo'];
            $cine = new Cine($campos['codigo']);
            //echo $cine->peli;

        ?>
            <tr>
                <td><?= $cine->codigo ?></td>
                <td><?= $cine->peli ?></td>
                <td><?= $cine->genero ?></td>
                <td><?= $cine->sinopsis ?></td>
                <td><?= $cine->butacas ?></td>
                <td><?= $cine->disponibles ?></td>
                <td><a href="Taquilla.php?reserva=<?= $cine->codigo ?>">➖</a></td>
                <td><a href="Taquilla.php?devuelve=<?= $cine->codigo ?>">➕</a></td>
            </tr>
        <?php } ?>
    </table>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veteriana Blajamblajam...</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
        .lindo{
            color: tomato;
            background-color: lightskyblue;
        }
    </style>
</head>

<body>
    <div class="container-fluid">
        <h1>Veterinaria </h1>

        <form class="row g-3" method="post">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">MicroChips</label>
                <input type="text" class="form-control" id="inputEmail4" name="microChips">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Nombre animalito</label>
                <input type="text" class="form-control" id="inputPassword4" name="nombre">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Edad</label>
                <input type="text" class="form-control" id="inputAddress" name="edad">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Historia Clínica</label>
                <input type="text" class="form-control" id="inputAddress2" name="historiaClinica">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Tipo de animalito</label>
                <select id="inputState" class="form-select" name="tipo">
                    <option selected>Perro</option>
                    <option>Gato</option>
                    <option>Ave</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Tiempo de Paseo</label>
                <input type="number" class="form-control" id="inputZip" name="tiempoPaseo">
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Dato Especial</label>
                <input type="text" class="form-control" id="inputZip" name="datoEspecial">
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Registrar animalito</button>
            </div>
        </form>
        <hr>
        <div class="lindo">
            <?php
            if (isset($_POST['nombre'])) {
                include_once("Animal.php");
                include_once("Perro.php");
                include_once("Gato.php");
                include_once("Ave.php");
                include_once("Caniche.php");
                include_once("Golden.php");
                switch ($_POST['tipo']) {
                    case "Perro":
                        $a1 = new Caniche($_POST['microChips'], $_POST['nombre'], $_POST['edad'], $_POST['historiaClinica'], $_POST['tiempoPaseo'], $_POST['datoEspecial']);
                        echo $a1->informarDatos();
                        $a1->informarHistoria();
                        echo $a1->hablar();
                        $a1->comer();
                }
            }
            ?>
        </div>
    </div>
</body>

</html>
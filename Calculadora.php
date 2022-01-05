<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        form {
            width: 30%;
            background-color: lightsalmon;
            padding: 20px;
            margin: auto;
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <label for="num1">Número 1:</label>
        <input type="number" name="num1"><br>
        <label for="num2">Número 2:</label>
        <input type="number" name="num2"><br>
        <label for="operacion">Operación a realizar:</label>
        <select name="operacion">
            <option value="s">Sumar</option>
            <option value="r">Restar</option>
            <option value="m">Multiplicar</option>
            <option value="d">Dividir</option>
        </select><br>
        <input type="submit" value="Calcular" name="enviar">
    </form>
    <?php
    //superclase
    class Operacion
    {
        public $num1;
        public $num2;
        public $resultado;
        public function __construct($num1 = null, $num2 = null, $resultado = null)
        {
            $this->num1 = $num1;
            $this->num2 = $num2;
            $this->resultado = $resultado;
        }
        public function calcular()
        {
            echo $this->resultado;
        }
    }
    //subclases
    class Sumar extends Operacion
    {
        public function calcular()
        {
            $this->resultado = $this->num1 + $this->num2;
            parent::calcular();
        }
    }
    class Restar extends Operacion
    {
        public function calcular()
        {
            $this->resultado = $this->num1 - $this->num2;
            parent::calcular();
        }
    }
    class Multiplicar extends Operacion
    {
        public function calcular()
        {
            $this->resultado = $this->num1 * $this->num2;
            parent::calcular();
        }
    }
    class Dividir extends Operacion
    {
        public function calcular()
        {
            $this->resultado = $this->num1 / $this->num2;
            parent::calcular();
        }
    }
    // $obj = new Sumar(10,2);
    // $obj->calcular();
    if (isset($_POST['enviar'])) {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $oper = $_POST['operacion'];
        try{
           echo "<p>iniciando....</p>";
           switch($oper){
            case 's':
                $obj = new Sumar($num1,$num2);
                break;
            case 'r':
                $obj = new Restar($num1,$num2);
                break;
            case 'm':
                $obj = new Multiplicar($num1,$num2);
                break;
            case 'd':
                    $obj = new Dividir($num1,$num2);
                    break;
           }
           $obj->calcular();
        }catch(Exception $e){
            echo "<p>Se produjo un error ☹</p>";
            echo "<p>{$e->getMessage()}</p>";
        }finally{
            echo "<p>Finaliza el programa 😀</p>";
        }
    }
    ?>
</body>

</html>
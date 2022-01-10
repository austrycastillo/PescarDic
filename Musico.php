<form action="" method="post">
    <input type="text" name="nombre" placeholder="Nombre"><br>
    <input type="text" name="apellido" placeholder="Apellido"><br>
    <input type="text" name="dni" placeholder="dni"><br>
    <input type="email" name="correo" placeholder="correo electrónico"><br>
    <input type="number" name="edad" placeholder="edad"><br>
    <input type="number" name="telefono" placeholder="telefono"><br>
    <input type="submit" value="Enviar">
</form>
<?php
class Musico
{
    public $nombre = null;
    public $apellido = null;
    public $dni = null;
    public $correo = null;
    public $edad = null;
    public $telefono = null;
    public function __construct(array $datos)

    {
        $this->nombre = isset($datos['nombre']) ? $datos['nombre'] : '';
        $this->apellido = isset($datos['apellido']) ? $datos['apellido'] : '';
        $this->dni = isset($datos['dni']) ? $datos['dni'] : '';
        $this->correo = isset($datos['correo']) ? $datos['correo'] : '';
        $this->edad = isset($datos['edad']) ? $datos['edad'] : '';
        $this->telefono = isset($datos['telefono']) ? $datos['telefono'] : '';
    }
    public function guardar()
    {
        if (empty($this->nombre)) {
            throw new Exception("El nombre no puede estar vacío");
        }
        if (empty($this->apellido)) {
            throw new Exception("El apellido no puede estar vacío");
        }
        if (empty($this->dni)) {
            throw new Exception("El dni no puede estar vacío");
        }
        if (empty($this->correo)) {
            throw new Exception("El correo no puede estar vacío");
        }
        if (empty($this->edad)) {
            throw new Exception("El edad no puede estar vacío");
        }
        if (empty($this->telefono)) {
            throw new Exception("El telefono no puede estar vacío");
        }
        echo "aquí haría el proceso de guardar";
    }
}


if (isset($_POST['nombre'])) {
    try {
        echo "<p>Iniciando...</p>";
        $m = new Musico($_POST);
        $m->guardar();
        echo "<p>Guardado correctamente</p>";
    } catch (Exception $e) {
        echo "<p>Se produjo un error</p>";
        echo "<p>{$e->getMessage()}</p>";
    } finally {
        echo "<p>Finalizando el programa</p>";
    }
}

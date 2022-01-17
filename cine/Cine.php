<?php
class Cine
{
    public $codigo;
    public $peli;
    public $genero;
    public $sinopsis;
    public $butacas;
    public $disponibles;
    protected $conexion;
    public function __construct($cod)
    {
        $hostname = 'localhost';
        $username = 'root';
        $password = '';
        $dbname = 'cine';
        $this->conexion = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
        $stmt = $this->conexion->prepare("SELECT *FROM cine WHERE codigo = ?");
        $stmt->bindParam(1, $cod);
        $stmt->execute();
        $result = $stmt->fetch();
        $this->codigo =  $result['codigo'];
        $this->peli = $result['peli'];
        $this->genero = $result['genero'];
        $this->sinopsis = $result['sinopsis'];
        $this->butacas = $result['butacas'];
        $this->disponibles = $result['disponibles'];
    }
    function __destruct()
    {
        $this->conexion = null;
    }
    public function reservar()
    {
        if ($this->disponibles > 0) {
            $this->disponibles--;
            $this->actualizar();
            return true;
        } else {
            return false;
        }
    }
    public function devolver()
    {
        if ($this->disponibles < $this->butacas) {
            $this->disponibles++;
            $this->actualizar();
            return true;
        } else {
            return false;
        }
    }
    public function actualizar()
    {
        $stmt = $this->conexion->prepare("UPDATE cine SET disponibles= $this->disponibles WHERE codigo = $this->codigo");
        $stmt->execute();
    }
}

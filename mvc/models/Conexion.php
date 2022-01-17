<?php
class Conexion
{
    private $host = 'localhost';
    private $dbname = 'tienda';
    private $user = 'root';
    private $pass = '';
    protected $conexion;
    public function Conexion()
    {
        try {
            $this->conexion = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);
            $this->conexion->beginTransaction(); //iniciar
            echo "ME CONECTO 😀";
            $this->conexion->commit(); //confirmar
            return $this->conexion;
        } catch (PDOException $e) {
            if ($this->conexion) {
                $this->conexion->rollBack();
            }
            echo "Error de conexión " . $e->getMessage();
        }
    }
}

// $c = new Conexion();
// $c->Conexion();
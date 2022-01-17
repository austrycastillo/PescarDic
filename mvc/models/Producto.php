<?php
require_once 'Conexion.php';
class Producto
{
    private $id;
    private $nombre;
    private $precio;
    public function __construct($id = null, $nombre = null, $precio = null)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->precio = $precio;
    }


    public function getPrecio()
    {
        return $this->precio;
    }


    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }


    public function getNombre()
    {
        return $this->nombre;
    }


    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }


    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }
    public function guardar()
    {
        $c = new Conexion();
        $conexion = $c->Conexion();
        $stmt = $conexion->prepare("INSERT INTO productos(nombre,precio) VALUES(?,?)");
        $stmt->bindParam(1,$this->nombre,PDO::PARAM_STR);
        $stmt->bindParam(2,$this->PRECIO,PDO::PARAM_INT);
        $stmt->execute();
        $conexion=null;
    }
}

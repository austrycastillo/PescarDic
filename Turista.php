<?php
class Turista
{
    //atributos
    private $nombre;
    private $edad;
    private $status;
    //metodos
    public function __construct($nombre = null, $edad = null, $status = null)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->status = $status;
    }
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }
    public function getNombre()
    {
        return $this->nombre;
    }
    public function setEdad($edad)
    {
        $this->edad = $edad;
    }
    public function getEdad()
    {
        return $this->edad;
    }
    public function setStatus($status)
    {
        $this->status = $status;
    }
    public function getStatus()
    {
        return $this->status;
    }
    public function mostrarDatos()
    {
        echo "Nombre: $this->nombre, Edad: $this->edad, Estatus: $this->status";
    }
}

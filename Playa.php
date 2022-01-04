<?php
class Playa
{
    private $nombre;
    private $ubicacion;
    public function __construct($nombre = null, $ubicacion = null)
    {
        $this->nombre = $nombre;
        $this->ubicacion = $ubicacion;
    }
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }
    public function setUbicacion($ubicacion)
    {
        $this->ubicacion = $ubicacion;
    }
    public function getNombre()
    {
        return $this->nombre;
    }
    public function getUbicacion()
    {
        return $this->ubicacion;
    }
    public function informar()
    {
        echo "Nombre: $this->nombre, Ubicación: $this->ubicacion<br>";
    }
}

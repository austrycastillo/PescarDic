<?php
//superclase
abstract class Animal
{
    //atributos
    protected $microChip;
    protected $nombre;
    protected $edad;
    protected $historiaClinica;
    //métodos
    public function __construct($microChip = null, $nombre = null, $edad = null, $historiaClinica = null)
    {
        $this->microChip = $microChip;
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->historiaClinica = $historiaClinica;
    }
    public function setMicroChip($microChip)
    {
        $this->microChip = $microChip;
    }
    public function getMicroChip()
    {
        return $this->microChip;
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
        $this->edad;
    }
    public function setHistoriaClinica($historiaClinica)
    {
        $this->historiaClinica = $historiaClinica;
    }
    public function getHistoriaClinica()
    {
        return $this->historiaClinica;
    }
    public function informarDatos()
    {
        $datos = "MicroChips: $this->microChip, Nombre: $this->nombre, Edad: $this->edad, Historia clínica: $this->historiaClinica";
        echo $datos;
    }
    public function informarHistoria()
    {
        echo "<br>- La historia clínica resumida: ";
    }
    public function hablar()
    {
        echo "<br>- Hablando lo hace de la siguiente manera: ";
    }
    public function comer()
    {
        echo "<br>- La alimentación del animal: ";
    }
}

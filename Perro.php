<?php
abstract class Perro extends Animal
{
    //atributo
    private $tiempoPaseo;
    //métodos
    public function setTiempoPaseo($tiempoPaseo)
    {
        $this->tiempoPaseo = $tiempoPaseo;
    }
    public function getTiempoPaseo()
    {
        return $this->tiempoPaseo;
    }
    public function __construct($microChip = null, $nombre = null, $edad = null, $historiaClinica = null, $tiempoPaseo = null)
    {
        parent::__construct($microChip, $nombre, $edad, $historiaClinica);
        $this->tiempoPaseo = $tiempoPaseo;
    }
    public function hablar()
    {
        parent::hablar();
        echo "el perro, guagua";
    }
    public function comer()
    {
        parent::comer();
        echo "perro es a base de carne con arroz, perrarina, etc";
    }
    public function informarDatos()
    {
        parent::informarDatos();
        return "<br>- Tiempo de paseo: $this->tiempoPaseo horas";
    }
}

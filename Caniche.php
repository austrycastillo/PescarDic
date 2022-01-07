<?php
class Caniche extends Perro
{
    private $datoEspecial;
    public function __construct($microChip = null, $nombre = null, $edad = null, $historiaClinica = null, $tiempoPaseo = null, $datoEspecial = null)
    {
        parent::__construct($microChip, $nombre, $edad, $historiaClinica, $tiempoPaseo);
        $this->datoEspecial = $datoEspecial;
    }
    public function setDatoEspecial($datoEspecial)
    {
        $this->datoEspecial = $datoEspecial;
    }
    public function mostrarDatoEspecial()
    {
        return $this->datoEspecial;
    }
    public function comer()
    {
        parent::comer();
        echo " El Caniche especialmente consume zanahoria para que su pelaje tenga un brillo excepcional 😁";
    }
}

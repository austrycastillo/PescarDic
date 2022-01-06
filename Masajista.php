<?php
class Masajista extends SeleccionFutbol
{
    //atributos
    private $titulacion;
    private $aniosExperiencia;
    //métodos
    //constructor, polimorfismo
    public function __construct($id = null, $nombre = null, $apellidos = null, $edad = null, $titulacion = null, $aniosExperiencia = null)
    {
        parent::__construct($id, $nombre, $apellidos, $edad);
        $this->titulacion = $titulacion;
        $this->aniosExperiencia = $aniosExperiencia;
    }
    public function darMasajes()
    {
        echo "Con la titulación oficial de $this->titulacion y con los $this->aniosExperiencia años de experiencia se inicia un masaje profesional blabla";
    }
    public function  informar()
    {
        parent::informar();
        echo ",<b>Titulación: </b>$this->titulacion, <b>Años de experiencia: </b>$this->aniosExperiencia";
    }
    //setter y getters
    public function setTitulacion($titulacion)
    {
        $this->titulacion = $titulacion;
    }
    public function getTitulacion()
    {
        return $this->titulacion;
    }
    public function setAniosExperiencia($aniosExperiencia)
    {
        $this->aniosExperiencia = $aniosExperiencia;
    }
    public function getAniosExperiencia()
    {
        return $this->aniosExperiencia;
    }
}

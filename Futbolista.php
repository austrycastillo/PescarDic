<?php
class Futbolista extends SeleccionFutbol
{
    //atributos
    private $dorsal;
    private $demarcacion;
    //métodos
    public function __construct($id = null, $nombre = null, $apellidos = null, $edad = null, $dorsal = null, $demarcacion = null)
    {
        parent::__construct($id, $nombre, $apellidos, $edad);
        $this->dorsal = $dorsal;
        $this->demarcacion = $demarcacion;
    }
    public function jugarPartido()
    {
        echo "$this->nombre está jugando un partido";
    }
    public function entrenar()
    {
        echo "entrenado el dorsal $this->dorsal! desde $this->demarcacion";
    }
    public function setDorsal($dorsal)
    {
        $this->dorsal = $dorsal;
    }
    public function getDorsal()
    {
        return $this->dorsal;
    }
    public function setDemarcacion($demarcacion)
    {
        $this->demarcacion = $demarcacion;
    }
    public function getDemarcacion()
    {
        return $this->demarcacion;
    }
    public function informar(){
        parent::informar();
        echo ",<b>Dorsal: </b>$this->dorsal, <b>Demarcación: </b>$this->demarcacion";
    }
}

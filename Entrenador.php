<?php
class Entrenador extends SeleccionFutbol
{
    //atributos
    private $idFederacion;
    //métodos
    public function planificarEntrenamiento()
    {
        echo "planificando en 1,2,3...";
    }
    //constructor utilizando polimorfismo
    public function __construct($id = null, $nombre = null, $apellidos = null, $edad = null, $idFederacion = null)
    {
        parent::__construct($id, $nombre, $apellidos, $edad);
        $this->idFederacion = $idFederacion;
    }
    //setters y getters
    public function setIdFederacion($idFederacion)
    {
        $this->idFederacion = $idFederacion;
    }
    public function getIdFederacion()
    {
        return $this->idFederacion;
    }
    //sobreescribimos al método informar de la superclase 
    public function informar()
    {
        parent::informar();
        echo ", <b>Id de Federación actual: </b>$this->idFederacion";
    }
}

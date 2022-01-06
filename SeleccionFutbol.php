<?php
abstract class SeleccionFutbol{
    //atributos
    protected $id;
    protected $nombre;
    protected $apellidos; 
    protected $edad; 
    //métodos
    public function __construct($id=null,$nombre=null,$apellidos=null,$edad=null)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->edad = $edad;
    }
    public function setId($id){
        $this->id = $id;
    }
    public function getId(){
        return $this->id;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function setApellidos($apellidos){
        $this->apellidos = $apellidos;
    }
    public function getApellidos(){
        return $this->apellidos;
    }
    public function setEdad($edad){
        $this->edad = $edad;
    }
    public function getEdad(){
        return $this->edad;
    }
    public function concentrarse(){
        echo "concentrarse en 3,2,1...😎";
    } 
    public function viajar(){
        echo "preparando todo para viajar ✈";
    } 
    public function informar(){
        echo "<b>Id: </b>$this->id, <b>Nombre: </b>$this->nombre, <b>Apellido: </b>$this->apellidos,<b>Edad: </b>$this->edad";
    }
}
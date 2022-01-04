<?php
//CREAR UNA CLASE Y VARIOS OBJETOS
// class Auto
// {
//     //atributos: características
//     //private $marca; en este caso no podría acceder a modificar directamente
//     public $marca;
//     public $color;
//     public $precio;
//     //métodos: operaciones
//     public function verDatos()
//     {
//         echo "Los datos son: $this->marca, <b>$this->color,</b> $this->precio";
//     }
// }

// //creando objetos
// $objeto1 = new Auto(); //instanciando la clase
// $objeto2 = new Auto();
// $objeto3 = new Auto();
// //ingresando a las propiedades de la clase
// $objeto1->marca = "Audi";
// $objeto1->color = "rojo";
// $objeto1->precio = 120;
// //invocando al método de la clase
// $objeto1->verDatos();
// echo "<br>";
// $objeto2->marca = "ford";
// $objeto2->color = "amarillo";
// $objeto2->precio = 50;
// $objeto2->verDatos();
// echo "<br>";
// $objeto3->marca = "fiat";
// $objeto3->color = "negro";
// $objeto3->precio = 40;
// $objeto3->verDatos();

//encapsulando una clase
// class Persona
// {
//     //atributos privados y métodos públicos
//     private $nombre;
//     private $apellido;
//     //constructor con un tipo de polimorfismo
//     public function __construct($nombre = null, $apellido = null)
//     {
//         $this->nombre = $nombre;
//         $this->apellido = $apellido;
//     }
//     //setters para asignar valores
//     public function setNombre($nombre)
//     {
//         //hacer referencia a la variable dentro de esta clase
//         $this->nombre = $nombre;
//     }
//     public function setApellido($apellido)
//     {
//         $this->apellido = $apellido;
//     }
//     //getters retornar el valor
//     public function getNombre()
//     {
//         return $this->nombre;
//     }
//     public function getApellido()
//     {
//         return $this->apellido;
//     }
// }
//creando un objeto
// $a = new Persona(); //instanciamos la clase Persona
// $a->setNombre("Juan");
// $a->setApellido("Perez");
// echo $a->getNombre() . " " . $a->getApellido();
// echo "<br>";
// $b = new Persona("Ana", "Pagano"); //utilizando el constructor
// echo $b->getNombre();

//PRACTICA PLAYA
include_once("Playa.php");
include_once("Turista.php");
$playa1 = new Playa("Ipanema","Brasil");
$playa1->informar();
echo "<hr>";
$playa2 = new Playa();
$playa2->setNombre("Patilla");
echo $playa2->getNombre();
echo "<hr>";
$playa3 = new Playa("Copacabana","Brasil");
$playa3->informar();
echo "<hr>";
echo "<hr>";
$turista1 = new Turista("Ana",80,"Premium");
$turista1->mostrarDatos();
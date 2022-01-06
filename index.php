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
// include_once("Playa.php");
// include_once("Turista.php");
// $playa1 = new Playa("Ipanema","Brasil");
// $playa1->informar();
// echo "<hr>";
// $playa2 = new Playa();
// $playa2->setNombre("Patilla");
// echo $playa2->getNombre();
// echo "<hr>";
// $playa3 = new Playa("Copacabana","Brasil");
// $playa3->informar();
// echo "<hr>";
// echo "<hr>";
// $turista1 = new Turista("Ana",80,"Premium");
// $turista1->mostrarDatos();

//STATIC
// class Dinero{
//     //atributos
//     public static $plata = 100;
//     //métodos
//     public function mostrarDinero(){
//         echo self::$plata;
//     }
//     public static function saludar(){
//         echo "<br>Hola estoy saludando 😜";
//     }
// }
// $obj = new Dinero();
// // $obj->plata = 500;
// $obj->mostrarDinero();
// // $obj->saludar();

//relaciones
// class Dinosaurio
// {
//     private $fuerza;
//     public function __construct($inicio)
//     {
//         $this->fuerza = $inicio;
//     }
//     public function decirFuerza()
//     {
//         return $this->fuerza;
//     }
// }
// class Pelea{
//     public function calcular($a,$b){
//         $dino1 = new Dinosaurio($a);
//         $dino2 = new Dinosaurio($b);
//         $fuerza_dino1 = $dino1->decirFuerza();
//         $fuerza_dino2 = $dino2->decirFuerza();
//         if($fuerza_dino1 > $fuerza_dino2){
//             return "Ha ganado el dinosaurio 1";
//         }else{
//             return "Ha ganado el segundo dinosaurio";
//         }

//     }
// }

// $rand1= new Pelea();
// echo $rand1->calcular(10,5);


//HERENCIA
//SUPERCLASE, CLASE PADRE
// class Padre
// {
//     private $nombre;
//     public function __construct($nombre = null)
//     {
//         $this->nombre = $nombre;
//     }
//     public function setNombre($nombre)
//     {
//         $this->nombre = $nombre;
//     }
//     public function mostrar(){
//         echo "Hola $this->nombre<br>";
//     }
// }

//subclase, clase hija
// class Hijo extends Padre{
//     private $deporteFavorito;
//     public function setDeporteFavorito($deporteFavorito){
//         $this->deporteFavorito = $deporteFavorito;
//     }
//     public function getDeporteFavorito(){
//         return $this->deporteFavorito;
//     }
//     public function mostrar(){
//         parent::mostrar();
//         echo "<br> soy mostrar del hijo";
//     }
// }

// class Nieta extends Hijo{

// }
// $p1 = new Padre();
// $p1->setNombre("Juan");
// $p1->mostrar();
// echo "<hr>";
// $h1 = new Hijo();
// $h1->setNombre("Fulano");
// $h1->setDeporteFavorito("futbol");
// $h1->mostrar();
// echo " - ".$h1->getDeporteFavorito();
// echo "<hr>";
// $n1 = new Nieta();
// $n1->setNombre("Ana");
// $n1->setDeporteFavorito("basquet");
// $n1->mostrar();
// echo " - ".$n1->getDeporteFavorito();
//INCLUIR CLASES
include_once("SeleccionFutbol.php");
include_once("Futbolista.php");
include_once("Entrenador.php");
include_once("Masajista.php");
//PRACTICA SELECCION DE FUTBOL
//INSTANCIANDO LA SUPERCLASE

//las clases abstractas no pueden ser instanciadas
// $sf1 = new SeleccionFutbol();
// $sf1->setNombre("Fulano");
// echo $sf1->getNombre();

// echo "<br>";
// $sf2 =new SeleccionFutbol(2,"Juana","Perez",20);
// $sf2->informar();
//INSTANCIANDO LA SUBCLASE FUTBOLISTA
// $f1 = new Futbolista(2,"Juana","Perez",20);
// $f1->informar();
// $f2 = new Futbolista();
// $f2->setNombre("Juan");
// echo $f2->getNombre();
// $f3 = new Futbolista();
// $f3->setNombre("Emanuel");
// $f3->jugarPartido();
// $f3->setDorsal(18);
// $f3->setDemarcacion("Patio central");
// $f3->entrenar();

// $f4 = new Futbolista(4,"Maximiliano","Hernandez",70,25,"lateral izquierdo");
// $f4->informar();

//INSTANCIAR LA CLASE ENTRENADOR
// $e1 = new Entrenador();
// $e1->setIdFederacion(999);
// $e1->planificarEntrenamiento();
// echo "<br>Id de federación: " . $e1->getIdFederacion();
// echo "<hr>";
// $e2 = new Entrenador(2, "María Victoria", "Sanchez", 12, 512);
// $e2->informar();

//INSTANCIAR A LA CLASE MASAJISTA
$m1 = new Masajista();
$m1->setTitulacion("Masajista deportivo");
$m1->setAniosExperiencia(8);
$m1->darMasajes();
echo "<hr>";
$m2 = new Masajista(2, "Miguel", "Paredes", 50, "Masajista Tailandés", 2);
$m2->informar();
$m2->darMasajes();

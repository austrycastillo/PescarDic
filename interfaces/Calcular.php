<?php
include("Operaciones.php");
include("Describir.php");
class Calcular implements Operaciones, Describir
{
    public function sumar($a, $b)
    {
        return $a + $b;
    }
    public function restar($a, $b)
    {
        return $a - $b;
    }
    public function multiplicar($a, $b)
    {
        return $a * $b;
    }
    public function dividir($a, $b)
    {
        return $a / $b;
    }
    public function decir($algo)
    {
        return $algo;
    }
}

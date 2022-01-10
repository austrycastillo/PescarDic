<?php
class Proyectar extends Calcular{
    public function sumar($a, $b)
    {
        echo parent::sumar($a,$b);
        echo " soy el hijo, esto es herencia";
    }
}
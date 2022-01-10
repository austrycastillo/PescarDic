<?php
trait Producto
{
    public $nombre;
    public $precio;
    public function iniciar($nombre, $precio)
    {
        $this->nombre = $nombre;
        $this->precio = $precio;
    }
    public function mostrar()
    {
        return "Nombre: {$this->nombre}, Precio: {$this->precio}";
    }
}

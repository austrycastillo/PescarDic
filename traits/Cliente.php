<?php
trait Cliente
{
    public $id;
    public function agregar($id)
    {
        $this->id = $id;
    }
    public function informar()
    {
        return $this->id;
    }
}

<?php
require_once 'Conexion.php';
class Producto
{
    private $id;
    private $nombre;
    private $precio;
    public function __construct($nombre = null, $precio = null, $id = null)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->precio = $precio;
    }


    public function getPrecio()
    {
        return $this->precio;
    }


    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }


    public function getNombre()
    {
        return $this->nombre;
    }


    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }


    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }
    public function guardar()
    {
        try {
            $c = new Conexion();
            $conexion = $c->Conexion();
            $conexion->beginTransaction(); //inicio
            $stmt = $conexion->prepare("INSERT INTO productos(nombre,precio) VALUES(?,?)");
            $stmt->bindParam(1, $this->nombre, PDO::PARAM_STR);
            $stmt->bindParam(2, $this->precio, PDO::PARAM_INT);
            $stmt->execute();
            $conexion->commit();
        } catch (Exception $e) {
            if ($conexion) {
                $conexion->rollBack();
                echo "Error no puedo guardar" . $e->getMessage();
            }
        } finally {
            $conexion = null;
        }
    }


    public static function listar()
    {
        try {
            $c = new Conexion();
            $conexion = $c->Conexion();
            //$conexion->beginTransaction(); //inicio
            $sql = "SELECT *FROM productos";
            $stmt = $conexion->prepare($sql);
            $stmt->execute();
            $row = $stmt->fetchAll();
            return $row;
        } catch (Exception $e) {
            echo "Error no puedo guardar " . $e->getMessage();
        } finally {
            $conexion = null;
        }
    }

    public function mostrarUnProducto()
    {
        try {
            $c = new Conexion();
            $conexion = $c->Conexion();
            $sql = "SELECT *FROM productos WHERE id=?";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(1, $this->id, PDO::PARAM_INT);
            $stmt->execute();
            $rows = $stmt->fetch();
            return $rows;
        } catch (Exception $e) {
            echo "Error no puedo mostrar " . $e->getMessage();
        } finally {
            $conexion = null;
        }
    }

    public function editar()
    {
        try {
            $c = new Conexion();
            $conexion = $c->Conexion();
            $sql = "UPDATE productos SET nombre = ?, precio=? WHERE id=?";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(1, $this->nombre);
            $stmt->bindParam(2, $this->precio);
            $stmt->bindParam(3, $this->id);
            $stmt->execute();
        } catch (Exception $e) {
            echo "Error no puedo editar " . $e->getMessage();
        } finally {
            $conexion = null;
        }
    }

    public function eliminar()
    {
        try {
            $c = new Conexion();
            $conexion = $c->Conexion();
            $sql = "DELETE FROM productos WHERE id=?";
            $stmt = $conexion->prepare($sql);
            $stmt->bindParam(1, $this->id, PDO::PARAM_INT);
            $stmt->execute();
        } catch (Exception $e) {
            echo "Error no puedo borrar " . $e->getMessage();
        } finally {
            $conexion = null;
        }
    }
}

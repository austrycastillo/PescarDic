<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <form action="" method="post">
        <input type="text" name="usuario" placeholder="Escribe tu usuario">
        <input type="password" name="clave" placeholder="Escribe tu contraseña">
        <input type="submit" name="enviar" value="Acceder al sistema">
    </form>
</body>
<?php
class Login
{
    private $user;
    private $pass;
    public function __construct($user = null, $pass = null)
    {
        $this->user = $user;
        $this->pass = $pass;
    }
    public function setUser($user)
    {
        $this->user = $user;
    }
    public function setPass($pass)
    {
        $this->pass = $pass;
    }
    public function getUser()
    {
        return $this->user;
    }
    public function getPass()
    {
        return $this->pass;
    }
    public function acceder($userC, $passC)
    {
        if ($this->user == $userC && $this->pass == $passC) {
            echo "Bienvenid@ 😀";
        } else {
            echo "Datos incorrectos!! no puedes acceder 😥";
        }
    }
}
if (isset($_POST['enviar'])) {
    //del form
    $user = $_POST['usuario'];
    $pass = $_POST['clave'];
    //los correctos de bd
    $userC = "admin";
    $passC = "abc123";
    //instanciar la clase
    $obj = new Login($user, $pass);
    $obj->acceder($userC, $passC);
}
?>

</html>
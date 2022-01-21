<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto MVC</title>
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        header{
            height: 70px;
            background-color: lightcoral;
            
        }
        .logo{
            width: 20%;
            float: left;
            color: red;
        }
        .menu{
            width: 80%;
            float: right;
            text-decoration: none;
            color: black;
            text-align: right;
            padding-top: 20px;
           
        }
    </style>
</head>

<body>
    <header>
        <div class="logo">
            <h1>LOGO</h1>
        </div>
        <div class="menu">
            <nav>
                <a href="index.php">inicio</a>
                <a href="nuevo.php">nuevo producto</a>
                <a href="listado.php">listado de productos</a>
            </nav>
        </div>
    </header>
    <main>
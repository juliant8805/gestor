<html>
    <head>
        <title>PHPMailer - SMTP (Gmail) advanced test</title>
    </head>
    <body>

        <?php
        //if (isset($_GET['c']) and isset($_GET['p']) and isset($_GET['u'])) {
        //echo $_GET['c'];
            $correo = $_GET['c'];
            $contrasena = $_GET['p'];
            $usuario = $_GET['u'];
        //}
        $send=mail($correo, 'Usuario Gesstor', 'Bienvenido a Gesstor, su nombre de usuario es: '.$usuario.' y su contraseña: '.$contrasena.' link de acceso: http://35.184.3.4/gesstor/barranquilla.html','From:soportegesstor@gmail.com');
        if($send) :
            echo 'yes';
        else:
            echo 'no';
        endif;
        ?>

    </body>
</html>

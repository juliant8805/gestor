<?php
//comprobamos que sea una petición ajax
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    //comprobamos si existe un directorio para subir el archivo
    //si no es así, lo creamos
    if (!is_dir("files/"))
        mkdir("files/", 0777);
    $name = [];
    foreach ($_FILES as $key => $error) {
        $tmp_name = $_FILES[$key]['tmp_name'];
        //print_r($tmp_name);
        // basename() may prevent filesystem traversal attacks;
        // further validation/sanitation of the filename may be appropriate
        $name[$key] = basename($_FILES[$key]['name']);
        move_uploaded_file($tmp_name, "files/$name[$key]");
    }
    $arr = implode(",", $name);
    echo $arr;
} else {
    throw new Exception("Error Processing Request", 1);
}
?>
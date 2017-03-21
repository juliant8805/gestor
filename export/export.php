<?php
    $path = 'C:/xampp/htdocs/gesstor/export/Reporte.xls';
    $array_data = json_decode($_POST['arreglo']);
    $fp = fopen($path, 'w');
    $array_headers = json_decode($_POST['titulos']);
    fputs($fp, '<table><tr bgcolor="#f0f0f0">');
    array_walk_recursive($array_headers, 'ExportExcelHeaders', $fp);
    fputs($fp, "</tr>");
    foreach ($array_data as $indice => $elemento) {
        fputs($fp, '<tr>');
        foreach ($elemento as $clave => $valor) {
            $cadena = ereg_replace('[[:space:]]+', ' ', utf8_decode($array_data[$indice][$clave]));
            //fputs($fp, '<td style="mso-number-format:"0.00";"><font face="Arial,Helvetica,sans-serif">' . "8001011000000130" . '</font></td>');
            //fputs($fp, '<td>'."&nbsp;".'8001011000000130</td>');  funciona
            fputs($fp, '<td style="mso-number-format:' . 0 . ';"><font face="Arial,Helvetica,sans-serif">' . $cadena . '</font></td>');
        }
        fputs($fp, '</tr>');
    }
    fputs($fp, '</table>');
    fclose($fp);
    function ExportExcelHeaders($elemento, $clave, $fp) {
        $cadena = '<td><font face="Arial,Helvetica,sans-serif" color="#0000CC">' . $elemento . '</font></td>';
        fputs($fp, $cadena);
    }
?>

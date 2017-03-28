$(document).ready(function () {
    $(".messages").hide();
    //función que observa los cambios del campo file y obtiene información
    $(':file').change(function ()
    {
        //obtenemos un array con los datos del archivo
        var file = $("#files")[0].files;
        var html = "<span class='info'>Archivos a subir</br>";
        for (i = 0; i < file.length; i++) {
            var fileName = file[i].name;
            var fileSize = file[i].size;
            html += i + 1 + ") Nombre: " + fileName + ", peso total: " + fileSize + " bytes.</span></br>";
        }
        $(':button').removeAttr("disabled");
        //$(':button').attr("disabled","true");
        showMessage(html);
    });
    //al enviar el formulario
    $(':button').click(function () {
        var message = "";
        var archivos = document.getElementById("files");//Creamos un objeto con el elemento que contiene los archivos: el campo input file
        var archivo = archivos.files; //Obtenemos los archivos seleccionados en el imput
        //Creamos una instancia del Objeto FormDara.
        var archivos = new FormData();
        /* Como son multiples archivos creamos un ciclo for que recorra la el arreglo de los archivos seleccionados en el input
         Este y añadimos cada elemento al formulario FormData en forma de arreglo, utilizando la variable i (autoincremental) como 
         indice para cada archivo, si no hacemos esto, los valores del arreglo se sobre escriben*/
        for (i = 0; i < archivo.length; i++) {
            archivos.append('archivo' + i, archivo[i]); //Añadimos cada archivo a el arreglo con un indice direfente
        }
        //hacemos la petición ajax  
        $.ajax({
            url: 'import/upload.php',
            type: 'POST',
            // Form data
            //datos del formulario
            data: archivos,
            //necesario para subir archivos via ajax
            cache: false,
            contentType: false,
            processData: false,
            //mientras enviamos el archivo
            beforeSend: function () {
                //window.open('upload.php');
                message = $("<span class='before'>Subiendo los archivos, por favor espere...</span>");
                showMessage(message);
            },
            //una vez finalizado correctamente
            success: function (data) {
                //console.log(data);
                var res = data.split(",");
                res.sort();
                res.reverse();
                var dbf = 0;
                var prj = 0;
                var shp = 0;
                var shx = 0;
                for (i = 0; i < res.length; i++) {
                    //console.log(res[i]);
                    var ar = res[i].split(".");
                    if (ar[ar.length - 1] === "dbf") {
                        dbf = dbf + 1;
                    } else if (ar[ar.length - 1] === "prj") {
                        prj = prj + 1;
                    } else if (ar[ar.length - 1] === "shp") {
                        shp = shp + 1;
                    } else if (ar[ar.length - 1] === "shx") {
                        shx = shx + 1;
                    }
                }
                if (dbf < prj || dbf < shp || dbf < shx) {
                    message = $("<span class='error'>No se puede realizar la carga por falta de archivo *.dbf</span>");
                    showMessage(message);
                    return;
                } else if (prj < dbf || prj < shp || prj < shx) {
                    message = $("<span class='error'>No se puede realizar la carga por falta de archivo *.prj</span>");
                    showMessage(message);
                    return;
                } else if (shp < dbf || shp < prj || shp < shx) {
                    message = $("<span class='error'>No se puede realizar la carga por falta de archivo *.shp</span>");
                    showMessage(message);
                    return;
                } else if (shx < dbf || shx < prj || shx < shp) {
                    message = $("<span class='error'>No se puede realizar la carga por falta de archivo *.shx</span>");
                    showMessage(message);
                    return;
                }
                for (i = 0; i < res.length; i++) {
                    var ar = res[i].split(".");
                    if (ar[ar.length - 1] === "shp") {
                        upload_query(ar[0]);
                    } else if (ar[ar.length - 1] === "prj") {
                        for (j = 0; j < archivo.length; j++) {
                            if (res[i] === archivo[j].name) {
                                readFile(archivo[j], function (e) {
                                    var shape = e.srcElement.onprogress.name.split(".")[0];
                                    var select = select_query("SELECT ST_GeometryType(geom) FROM temp_" + shape + " LIMIT 1");
                                    var sel = select[0][0].split("_");
                                    select_query("ALTER TABLE temp_" + shape + " ALTER COLUMN geom TYPE geometry;UPDATE temp_" + shape + " SET geom = ST_Transform(geom, 4326);ALTER TABLE temp_" + shape + " ALTER COLUMN geom TYPE geometry('" + sel[1] + "', 4326);");
                                });
                            }
                        }
                    }
                }
                delfile("files");
                document.getElementById("valid").style.display = "block";
                var message = $("<span class='success'>Archivos subidos correctamente.</span>");
                showMessage(message);
            },
            //si ha ocurrido un error
            error: function () {
                var message = $("<span class='error'>Ha ocurrido un error.</span>");
                showMessage(message);
            }
        });
    });
    $(".modal fade").change(function () {
        alert("d.");
    });
});
$(".modal fade").change(function () {
    alert("Handler for .change() called.");
});
//como la utilizamos demasiadas veces, creamos una función para 
//evitar repetición de código
function showMessage(message) {
    $(".messages").html("").show();
    $(".messages").html(message);
}
function readFile(file, onLoadCallback) {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.onprogress = file;
    reader.readAsText(file);
}
function validate() {
    var table = document.getElementById("table");
    table.innerHTML = "";
    //$("table").children().remove()
    var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%' ORDER BY table_name");
    //var sel = [];
    //console.log(select);
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = " SHAPE ";
    cell2.innerHTML = " VALIDAR ";
    //filas=table.getRowCount();
    for (i = 1; i <= select.length; i++) {
        //sel[i - 1] = select[i - 1][0];
        row = table.insertRow(i);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.target = "marco";
        cell1.innerHTML = select[i - 1][0].split('temp_')[1].link("http://35.184.3.4:8080/geoserver/preproduccion/wms?service=WMS&version=1.1.0&request=GetMap&layers=preproduccion:" + select[i - 1][0] + "&styles=&bbox=-74.878721,10.9183800000001,-74.7586219999999,11.0510640000001&width=695&height=768&srs=EPSG:4326&format=application/openlayers");
        cell1.getElementsByTagName("a")["0"].target = "_blank";
        //console.log(cell1.getElementsByTagName("a"));
        //console.log(cell1);
        var element1 = document.createElement("input");
        element1.type = "checkbox";
        element1.id = select[i - 1][0];
        //element1.setAttribute("onchange", "toggleSelect(" + select[i - 1][0] + ")");
        //element1.setAttribute("onchange", "toggleSelect()");
        cell2.appendChild(element1);
    }
    /*
     var row = table.insertRow(0);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = "Quiero insertar input text aaqui";
     cell2.innerHTML = "Aqui tambien";
     */
}
//function toggleSelect(){

/*console.log(sel.checked);
 console.log(sel.id);
 console.log(document.getElementById(sel[0]));
 for (i = 0; i <= sel.length; i++) {
 
 }*/
//}
function valshp() {
    var html = "<span class='info'>Archivos validados con exito</br>";
    var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%' ORDER BY table_name");
    for (i = 0; i < select.length; i++) {
        //console.log(document.getElementById(select[i][0]));
        if (document.getElementById(select[i][0]).checked === true) {
            //console.log(select[i][0].split('temp_')[1]);
            update_query("DROP TABLE post_" + select[i][0].split('temp_')[1] + ";");
            //var up = update_query("ALTER TABLE " + select[i][0].split('temp_')[1] + " RENAME TO post_" + select[i][0].split('temp_')[1] + ";");
            var up = update_query("CREATE TABLE post_" + select[i][0].split('temp_')[1] + " AS SELECT * FROM " + select[i][0].split('temp_')[1] + ";");
            //console.log(select[i][0]);
            //console.log(up);
            if (up) {
                //var lo = update_query("CREATE TABLE " + select[i][0].split('temp_')[1] + " .FROM temp_" + select[i][0].split('temp_')[1] + ";");
                update_query("DROP TABLE " + select[i][0].split('temp_')[1] + ";");
                var lo = update_query("CREATE TABLE " + select[i][0].split('temp_')[1] + " AS SELECT * FROM temp_" + select[i][0].split('temp_')[1] + ";");
                if (lo) {
                    update_query("DROP TABLE temp_" + select[i][0].split('temp_')[1] + ";");
                    //mensaj.innerHTML += "<br>" + select[i][0].split('temp_')[1];  // Agrego nueva linea antes
                    //message += $("<span class='success'>El archivo " + select[i][0].split('temp_')[1] + "fue validado con exito</span>");
                    html += " ...  " + select[i][0].split('temp_')[1] + "  ...</span></br>";
                    mns(html);
                    //console.log(a);
                    //var mns = document.getElementById("mns");
                } else {
                    var message = $("</br></br><span class='error'>Error al validar " + select[i][0].split('temp_')[1] + "</span>");
                    mn(message);
                }
            } else {
                var message = $("</br></br><span class='error'>Ha ocurrido un error con el archivo " + select[i][0].split('temp_')[1] + "</span>");
                mn(message);
            }
        }
    }
    validate();
}
function mns(message) {
    $(".message").html("").show();
    $(".message").html(message);
}
function mn(message) {
    $(".messag").html("").show();
    $(".messag").html(message);
}
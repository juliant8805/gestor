var exportar = async function (x) {
    await putgif();
    await file(x);
    await quitgif();
};
function file() {
    var req = new ajaxRequest();
    if (queryexport.substring(0, 18) === "Rango Area Terreno"){
        var titulo = JSON.stringify(["Codigo Predial","Localidad","Barrio","Area Terreno M2","# Predios"]);
        if (queryexport === 'Rango Area Terreno G') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else {
            var select = search("preproduccion:ReportRangoArea", values);
        }   
    }
    
    else if (queryexport.substring(0, 17) === "Tipo Construccion"){
         var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Condicion Propiedad", "# Predios"]);
        if (queryexport === 'Tipo Construccion G') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else {
            var select = search("preproduccion:Reportph", values);
        }
    }
     
    else if (queryexport.substring(0, 27) === "Distrito vs Prestadores AAA"){ 
        if (queryexport === 'Distrito vs Prestadores AAA G') {
            var titulo = JSON.stringify(["Codigo Predial", "Direccion"]);
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios de la base de prestadores AAA que no tienen código catastral");
            var select = search("preproduccion:ReportPrediosSinCodigo");
            quitgif();
        } else {
            var titulo = JSON.stringify(["Codigo Predial", "Localidad", "Barrio", "Presente en AAA", "# Predios"]);
            var select = search("preproduccion:ReportDistritoPrestadores", values);
        }
    }

    else if (queryexport.substring(0, 19) === "predios_construidos"){
        var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Area Construida M2", "# Predios"]);
        if (queryexport === 'predios_construidos G') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else {
            var select = search("preproduccion:ReportAreaConstruida", values);
        }
    }
    
    else if (queryexport.substring(0, 21) === "predios_actualizacion"){
            alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumérico para esta consulta");
            quitgif(); 
    }
    
    else if (queryexport.substring(0, 9) === "plusvalia"){
        alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
        quitgif(); 
    }
    
    else if (queryexport.substring(0, 23) === "Rango Area Construccion"){
         var titulo = JSON.stringify(["Codigo Predial","Localidad","Barrio","Area Construida M2","# Predios"]);
        if (queryexport === 'Rango Area Construccion G') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else {
            var select = search("preproduccion:ReportRangoAreaConstruccion", values);
        }      
    }
    
    else if (queryexport.substring(0, 22) === "Calidad Construcciones"){       
        var titulo = JSON.stringify(["Codigo Predial","Localidad","Barrio","Puntaje Construccion"]);
        if (queryexport === 'Calidad Construcciones G') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else {
            var select = search("preproduccion:ReportCalidadConstruccion", values);
        }   
    }
    
    else if (queryexport.substring(0, 26) === "Tipo de Amenaza INUNDACION"){
         var titulo = JSON.stringify(["Codigo Predial","Localidad","Barrio","Amenaza Inundacion","# de Predios"]);
         if (queryexport === 'Tipo de Amenaza INUNDACIONG') {
         var select = search("preproduccion:ReportInundacion");
         quitgif();
         }
         else if(queryexport === 'Tipo de Amenaza INUNDACIONF'){
         var select = search("preproduccion:ReportInundacionFiltro", values); 
         }
    }
    
    else if (queryexport.substring(0, 24) === "Tipo de Amenaza REMOCION"){
         var titulo = JSON.stringify(["Codigo Predial","Localidad","Barrio","Amenaza Remocion","# de Predios"]);
         if (queryexport === 'Tipo de Amenaza REMOCIONG') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else if (queryexport === 'Tipo de Amenaza REMOCIONF') {
            var select = search("preproduccion:ReportRemosion", values); 
        } 
    }
     
    else if (queryexport.substring(0, 23) === "estratificacion_oficial"){
         var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Estrato", "# Predios"]);
        if (queryexport === 'estratificacion_oficial G') {
            alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande y al exportarla completa puede tardar demasiado tiempo, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else {
            var select = search("preproduccion:ReportEstratificacion", values);
        }
    }
    
    else if (queryexport.substring(0, 15) === "espacio_publico"){
        alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
        quitgif(); 
    }
    
     else if (queryexport.substring(0, 17) === "Clasificacion_Uso"){
         alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios urbanos que se encuentran en zona de expansión urbana");
         quitgif(); 
         var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Uso", "# Predios"]);
         var select = search("preproduccion:ReportClasificacionUso");
    }
    
     else if (queryexport.substring(0, 30) === "Estructura Ecologica Principal"){
         alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
         quitgif(); 
    }
    
    else if (queryexport.substring(0, 27) === "Area Proteccion Urbanistica"){
         alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
         quitgif(); 
    }
     
    else if (queryexport.substring(0, 16) === "Avaluo Catastral"){
        var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Avaluo Catastral", "Direccion"]);
        if (queryexport === 'Avaluo Catastral G') {
             alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
             quitgif(); 
        } 
        else {
        var select = search("preproduccion:ReportAvaluoCatastral", values);
        } 
    }
    
    else if (queryexport.substring(0, 21) === "Tipo de Contribuyente"){
		var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Tipo de Contribuyente", "# Predios"]);
        if (queryexport == 'Tipo de Contribuyente G'){
        var select = search("preproduccion:ReportTipoContribuyente");
        }
        else{
        var select = search("preproduccion:ReportTipoContribuyenteFiltro", values);
     }
    }
    
    else if (queryexport.substring(0, 16) === "Tipo Propietario"){
        alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
        quitgif(); 
    }
    
    else if (queryexport.substring(0, 15) === "Impuesto Camara"){
        alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
        quitgif(); 
    }
    
    else if (queryexport.substring(0, 17) === "Incremento Avaluo"){
        alert("GESSTOR INFORMA:</br></br>No se encuentran datos alfanuméricos para generar el reporte");
        quitgif(); 
    }
    
    else if (queryexport.substring(0, 14) === "oficial_vs_AAA"){
        var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Estrato Oficial", "Estrato Prestador", "# Predios"]);
        if (queryexport == "oficial_vs_AAA G"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();    
        } else if (queryexport == "oficial_vs_AAA AcueductoF"){
            var select = search("preproduccion:ReportDiferenciaEstratoAcueducto", values);
        } else if (queryexport == "oficial_vs_AAA AlcantarilladoF"){
            var select = search("preproduccion:ReportDiferenciaEstratoAlcantarillado", values);
        } else if (queryexport == "oficial_vs_AAA AseoF"){
            var select = search("preproduccion:ReportDiferenciaEstratoAseo", values);
        } 
        
    }
    
    else if (queryexport.substring(0, 18) === "disponibilidad_AAA"){
        var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Prestador", "# Predios"]);
        if (queryexport == "disponibilidad_AAA G"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();    
        } else if (queryexport == "disponibilidad_AAA AcueductoF"){
          var select = search("preproduccion:ReportDisponibilidadAcueducto", values);
        } else if (queryexport == "disponibilidad_AAA AlcantarilladoF"){
          var select = search("preproduccion:ReportDisponibilidadAlcantarillado", values);
        } else if (queryexport == "disponibilidad_AAA AseoF"){
          var select = search("preproduccion:ReportDisponibilidadAseo", values);
        }       
    }

    else if (queryexport.substring(0, 25) ==="Nomenclatura Domiciliaria"){
        var titulo = JSON.stringify(["Codigo Predial", "Localidad","Barrio", "Nomenclatura Estandarizada", "# Predios"]);
        if (queryexport == 'Nomenclatura Domiciliaria G'){
        var select = search("preproduccion:ReportNomenclaturaDomiciliaria");
        }
        else{
        var select = search("preproduccion:ReportNomenclaturaDomiciliariaFiltro", values);
      }   
    }
    
    
   

    var arr = JSON.stringify(select);
    arr = arr.replace(/\./g, ",");
    var url = "./export/export.php";
    var params = "arreglo=" + arr + "&titulos=" + titulo;
    req.open("POST", url, false);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(params);
    document.location = './export/Reporte.xls';
}
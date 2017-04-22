var exportar = async function (x) {
    await putgif();
    await file(x);
    await quitgif();
};
function file() {
    var req = new ajaxRequest();
    try{
        var valor = "'" + values + "'";
    }catch(err){}
    if (queryexport.substring(0, 18) === "Rango Area Terreno"){
        var titulo = JSON.stringify(["Codigo Predial", "Area Terreno"]);
        if (queryexport === 'Rango Area Terreno G') {
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else if (queryexport === 'Rango Area Terreno B') {
            var select = select_query("select codigo, area_terreno_hacienda from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'Rango Area Terreno L') {
            var select = select_query("select codigo, area_terreno_hacienda from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'Rango Area Terreno M') {
            var select = select_query("select codigo, area_terreno_hacienda from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    
    else if (queryexport.substring(0, 17) === "Tipo Construccion"){
        var titulo = JSON.stringify(["Codigo Predial", "Condicion Propiedad"]);
        if (queryexport === 'Tipo Construccion G') {
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else if (queryexport === 'Tipo Construccion B') {
            var select = select_query("select codigo, ph from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'Tipo Construccion L') {
            var select = select_query("select codigo, ph from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'Tipo Construccion M') {
            var select = select_query("select codigo, ph from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    
    
    else if (queryexport.substring(0, 19) === "predios_construidos"){
        var titulo = JSON.stringify(["Codigo Predial", "Area Construida"]);
        if (queryexport === 'predios_construidos G') {
             alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else if (queryexport === 'predios_construidos B') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'predios_construidos L') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'predios_construidos M') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
       
    else if (queryexport.substring(0, 22) === "Calidad Construcciones"){
        var titulo = JSON.stringify(["Codigo Predial", "Puntaje"]);
        if (queryexport === 'Calidad Construcciones G') {
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif();
        } else if (queryexport === 'Calidad Construcciones B') {
            var select = select_query("select codigo, puntaje from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'Calidad Construcciones L') {
            var select = select_query("select codigo, puntaje from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'Calidad Construcciones M') {
            var select = select_query("select codigo, puntaje from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
     
    
    else if (queryexport.substring(0, 19) === "predios_construidos"){
        var titulo = JSON.stringify(["Codigo Predial", "Area Construida"]);
        if (queryexport === 'predios_construidos G') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno;");
        } else if (queryexport === 'predios_construidos B') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'predios_construidos L') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'predios_construidos M') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    
    else if (queryexport.substring(0, 16) === "Avaluo Catastral"){
        var titulo = JSON.stringify(["Codigo Predial", "Avaluo Catastral"]);
        if (queryexport === 'Avaluo Catastral G') {
             alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
             quitgif(); 
        } else if (queryexport === 'Avaluo Catastral B') {
            var select = select_query("select cod_anteri, avaluo_int from preliquidacion_2017 WHERE barrio=" + valor + ";");
        } else if (queryexport === 'Avaluo Catastral L') {
            var select = select_query("select cod_anteri, avaluo_int from preliquidacion_2017 WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'Avaluo Catastral M') {
             alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumerico para el nivel manzana en esta consulta");
             quitgif();
        }
    }
    
   
    else if (queryexport.substring(0, 21) === "predios_actualizacion"){
            alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumerico para esta consulta");
            quitgif(); 
    }
    else if (queryexport.substring(0, 23) === "Rango Area Construccion"){
        var titulo = JSON.stringify(["Codigo Predial", "Area Construida"]);
        if (queryexport === 'Rango Area Construccion G') {
             alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif(); 
        } else if (queryexport === 'Rango Area Construccion B') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'Rango Area Construccion L') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'Rango Area Construccion M') {
            var select = select_query("select codigo, area_construida_hacienda from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 17) === "Tipo Construccion"){
        var titulo = JSON.stringify(["Localidad", "Barrio", "Codigo Predial", "Condicion de Propiedad"]);
        if (queryexport == "Tipo Construccion G"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif(); 
            //var select = select_query("select codigo_ant, ph from u_terreno;");
        }else if (queryexport === 'Tipo Construccion B') {
            var select = select_query("select nombre_loc, cod_barrio, codigo_ant, ph from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Tipo Construccion L') {
            var select = select_query("select nombre_loc, cod_barrio, codigo_ant, ph from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Tipo Construccion M') {
            var select = select_query("select nombre_loc, cod_barrio, codigo_ant, ph from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    /*else if (queryexport.substring(0, 19) === "Estratificacion SUI"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Estratificacion SUI"]);
        if (queryexport == "Estratificacion SUI G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_municipio from u_terreno;");
        }else if (queryexport === 'Estratificacion SUI B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_municipio from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Estratificacion SUI L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_municipio from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Estratificacion SUI M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_municipio from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }/*
    else if (queryexport.substring(0, 8) === "metrotel"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Estratificacion Metrotel"]);
        if (queryexport == "metrotel G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_metrotel from u_terreno;");
        }else if (queryexport === 'metrotel B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_metrotel from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'metrotel L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_metrotel from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'metrotel M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estratificacion_metrotel from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }*/
    
   
    else if (queryexport.substring(0, 14) === "oficial_vs_AAA"){
        var titulo = JSON.stringify(["Localidad", "Barrio", "Codigo Predial", "Estratificacion Prestador", "Estratificacion Municipio", "Comparacion"]);
        if (queryexport == "oficial_vs_AAA AcueductoG"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif(); 
            /*var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno;");*/
        }else if (queryexport === 'oficial_vs_AAA AcueductoB') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AcueductoL') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AcueductoM') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno WHERE manzana_co=" + valor + ";");
        }
        else if (queryexport == "oficial_vs_AAA AlcantarilladoG"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif(); 
            /*var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno;");*/
        }else if (queryexport === 'oficial_vs_AAA AlcantarilladoB') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_alcantarillado, estratific, dif_est_alc from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AlcantarilladoL') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_alcantarillado, estratific, dif_est_alc from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AlcantarilladoM') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_alcantarillado, estratific, dif_est_alc from u_terreno WHERE manzana_co=" + valor + ";");
        }
        else if (queryexport == "oficial_vs_AAA AseoG"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            quitgif(); 
            /*var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno;");*/
        }else if (queryexport === 'oficial_vs_AAA AseoB') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_aseo, estratific, dif_est_aseo from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AseoL') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_aseo, estratific, dif_est_aseo from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AseoM') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_aseo, estratific, dif_est_aseo from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    
    
    
    else if (queryexport.substring(0, 18) === "disponibilidad_AAA"){
        var titulo = JSON.stringify(["Codigo", "Prestador"]);
        if (queryexport == "disponibilidad_AAA AcueductoG"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
			quitgif(); 
        }else if (queryexport === 'disponibilidad_AAA AcueductoB') {
            var select = select_query("select codigo, disponibilidad_acueducto from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'disponibilidad_AAA AcueductoL') {
            var select = select_query("select codigo, disponibilidad_acueducto from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'disponibilidad_AAA AcueductoM') {
            var select = select_query("select codigo, disponibilidad_acueducto from u_terreno WHERE manzana_co=" + valor + ";");
        }
        else if (queryexport == "disponibilidad_AAA AlcantarilladoG"){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
			quitgif(); 
        }else if (queryexport === 'disponibilidad_AAA AlcantarilladoB') {
            var select = select_query("select codigo, disponibilidad_alcantarillado from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'disponibilidad_AAA AlcantarilladoL') {
            var select = select_query("select codigo, disponibilidad_alcantarillado from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'disponibilidad_AAA AlcantarilladoM') {
            var select = select_query("select codigo, disponibilidad_alcantarillado from u_terreno WHERE manzana_co=" + valor + ";");
        }
        else if (queryexport == "disponibilidad_AAA AseoG"){
             alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
			quitgif(); 
        }else if (queryexport === 'disponibilidad_AAA AseoB') {
            var select = select_query("select codigo, disponibilidad_aseo from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'disponibilidad_AAA AseoL') {
            var select = select_query("select codigo, disponibilidad_aseo from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'disponibilidad_AAA AseoM') {
            var select = select_query("select codigo, disponibilidad_aseo from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    
    
    else if (queryexport.substring(0, 23) === "estratificacion_oficial"){
        var titulo = JSON.stringify(["Codigo Localidad", "Nombre Barrio", "Codigo Manzana", "Codigo Predial", "Estratificacion Oficial", "Numero de Predios"]);
        if (queryexport == 'estratificacion_oficial G'){
			alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
			quitgif(); 
			
            //var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, estratific, numeropredios from u_terreno;");
        }else if (queryexport === 'estratificacion_oficial B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, estratific, numeropredios from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'estratificacion_oficial L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, estratific, numeropredios from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'estratificacion_oficial M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, estratific, numeropredios from u_terreno WHERE manzana_co=" + valor + ";");
            
        }
    }
	
	else if (queryexport.substring(0, 26) === "Tipo de Amenaza INUNDACION"){
        var titulo = JSON.stringify(["Codigo Localidad", "Nombre Barrio", "Codigo Manzana", "Codigo Predial", "Riesgo de Inundacion", "Numero de Predios"]);
        if (queryexport == 'Tipo de Amenaza INUNDACIONG'){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, inundacion, numeropredios from u_terreno where inundacion<>'Sin Riesgo';");
        }else if (queryexport === 'Tipo de Amenaza INUNDACIONB') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, inundacion, numeropredios from u_terreno where inundacion<>'Sin Riesgo' AND cod_barrio=" + valor + ";");
        }else if (queryexport === 'Tipo de Amenaza INUNDACIONL') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, inundacion, numeropredios from u_terreno where inundacion<>'Sin Riesgo' AND cod_loc=" + valor + ";");
        }else if (queryexport === 'Tipo de Amenaza INUNDACIONM') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, inundacion, numeropredios from u_terreno where inundacion<>'Sin Riesgo' AND manzana_co=" + valor + ";");     
        }
    }
	
    
    else if (queryexport.substring(0, 17) === "Clasificacion_Uso"){
         alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios urbanos que se encuentran en zona de expansión urbana");
         quitgif(); 
         var titulo = JSON.stringify(["Codigo Predial", "Clasificacion"]);
         var select = select_query("select codigo, clasificacion_uso_suelo from u_terreno where clasificacion_uso_suelo = 'Suelo de Expansion' or clasificacion_uso_suelo = 'Suelo Rural';");  
    }
    
 
	else if (queryexport.substring(0, 15) === "espacio_publico"){
        alert("GESSTOR INFORMA:</br></br>No existe reporte alfanúmerico para esta consulta");
        quitgif(); 
    }
    
	else if (queryexport.substring(0, 24) === "Tipo de Amenaza REMOCION"){
		var titulo = JSON.stringify(["Codigo Localidad", "Nombre Barrio", "Codigo Manzana", "Codigo Predial", "Riesgo de Remocion en Masa", "Numero de Predios"]);
        if (queryexport == 'Tipo de Amenaza REMOCIONG'){
            alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
			quitgif(); 
        }else if (queryexport === 'Tipo de Amenaza REMOCIONB') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, remosion, numeropredios from u_terreno where cod_barrio=" + valor + ";");
        }else if (queryexport === 'Tipo de Amenaza REMOCIONL') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, remosion, numeropredios from u_terreno where cod_loc=" + valor + ";");
        }else if (queryexport === 'Tipo de Amenaza REMOCIONM') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, remosion, numeropredios from u_terreno where manzana_co=" + valor + ";");     
        }
    }
    
    else if (queryexport.substring(0, 27) === "Distrito vs Prestadores AAA"){
		var titulo = JSON.stringify(["Codigo", "Direccion"]);
        if (queryexport == 'Distrito vs Prestadores AAA G'){
        alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios de la base de prestadores AAA que no tienen código catastral");
			quitgif(); 
         var select = select_query("select cod_catast, drireccion from sin_cod_catastral;");
        }else if (queryexport === 'Distrito vs Prestadores AAA B') {
        alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios de la base de prestadores AAA que no tienen código catastral");
			quitgif(); 
           var select = select_query("select cod_catast, drireccion from sin_cod_catastral;");
        }else if (queryexport === 'Distrito vs Prestadores AAA L') {
        alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios de la base de prestadores AAA que no tienen código catastral");
			quitgif(); 
            var select = select_query("select cod_catast, drireccion from sin_cod_catastral;");
        }else if (queryexport === 'Distrito vs Prestadores AAA M') {
        alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios de la base de prestadores AAA que no tienen código catastral");
			quitgif(); 
            var select = select_query("select cod_catast, drireccion from sin_cod_catastral;");
        }
    }
    
    else if (queryexport.substring(0, 25) === "Nomenclatura Domiciliaria"){
		var titulo = JSON.stringify(["Codigo", "Direccion"]);
        if (queryexport == 'Nomenclatura Domiciliaria G'){
        alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumerico para esta consulta");
			quitgif();
        }else if (queryexport === 'Nomenclatura Domiciliaria B') {
        alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumerico para esta consulta");
			quitgif();
        }else if (queryexport === 'Nomenclatura Domiciliaria L') {
        alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumerico para esta consulta");
			quitgif();
        }else if (queryexport === 'Nomenclatura Domiciliaria M') {
       alert("GESSTOR INFORMA:</br></br>No existe reporte alfanumerico para esta consulta");
			quitgif();
        }
    }
    
    else if (queryexport.substring(0, 9) === "plusvalia"){
        alert("GESSTOR INFORMA:</br></br>No existe reporte alfanúmerico para esta consulta");
        quitgif(); 
    }
    
     else if (queryexport.substring(0, 16) === "Tipo Propietario"){
        alert("GESSTOR INFORMA:</br></br>No existe reporte alfanúmerico para esta consulta");
        quitgif(); 
    }
      
    
     else if (queryexport.substring(0, 21) === "Tipo de Contribuyente"){
		var titulo = JSON.stringify(["Codigo", "Tipo de Contribuyente"]);
        if (queryexport == 'Tipo de Contribuyente G'){
        var select = select_query("select codigo, tipo_de_contribuyente from u_terreno;"); 
        }
         else if (queryexport === 'Tipo de Contribuyente B') {
            var select = select_query("select codigo, tipo_de_contribuyente from u_terreno where cod_barrio=" + valor + ";");
         }
         else if (queryexport === 'Tipo de Contribuyente L') {
            var select = select_query("select codigo, tipo_de_contribuyente from u_terreno where cod_loc=" + valor + ";");
         }
         else if (queryexport === 'Tipo de Contribuyente M') {
            var select = select_query("select codigo, tipo_de_contribuyente from u_terreno where manzana_co=" + valor + ";");
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
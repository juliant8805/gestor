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
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Area"]);
        if (queryexport === 'Rango Area Terreno G') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area from u_terreno;");
        } else if (queryexport === 'Rango Area Terreno B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area from u_terreno WHERE cod_barrio=" + valor + ";");
        } else if (queryexport === 'Rango Area Terreno L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area from u_terreno WHERE cod_loc=" + valor + ";");
        } else if (queryexport === 'Rango Area Terreno M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 21) === "Avaluo Catastral 2016"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Avaluo 2016"]);
        if (queryexport == "Avaluo Catastral 2016G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2016 from u_terreno;");
        }else if (queryexport === 'Avaluo Catastral 2016B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2016 from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Avaluo Catastral 2016L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2016 from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Avaluo Catastral 2016M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2016 from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 21) === "Avaluo Catastral 2015"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Avaluo 2015"]);
        if (queryexport == "Avaluo Catastral 2015G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2015 from u_terreno;");
        }else if (queryexport === 'Avaluo Catastral 2015B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2015 from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Avaluo Catastral 2015L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2015 from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Avaluo Catastral 2015M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2015 from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 21) === "Avaluo Catastral 2014"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Avaluo 2014"]);
        if (queryexport == "Avaluo Catastral 2014G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2014 from u_terreno;");
        }else if (queryexport === 'Avaluo Catastral 2014B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2014 from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Avaluo Catastral 2014L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2014 from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Avaluo Catastral 2014M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, avaluo_2014 from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 21) === "predios_actualizacion"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Estado"]);
        if (queryexport == "predios_actualizacion G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estado from u_terreno;");
        }else if (queryexport === 'predios_actualizacion B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estado from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'predios_actualizacion L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estado from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'predios_actualizacion M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, estado from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 23) === "Rango Area Construccion"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Area Construida"]);
        if (queryexport == "Rango Area Construccion G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area_construccion from u_terreno;");
        }else if (queryexport === 'Rango Area Construccion B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area_construccion from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Rango Area Construccion L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area_construccion from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Rango Area Construccion M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, area_construccion from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    else if (queryexport.substring(0, 17) === "Tipo Construccion"){
        var titulo = JSON.stringify(["Codigo Localidad", "Codigo Barrio", "Codigo Manzana", "Codigo Predial", "Direccion", "Matricula", "Tipo de Construccion"]);
        if (queryexport == "Tipo Construccion G"){
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, tipo_construccion from u_terreno;");
        }else if (queryexport === 'Tipo Construccion B') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, tipo_construccion from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'Tipo Construccion L') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, tipo_construccion from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'Tipo Construccion M') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, direccion, matricula, tipo_construccion from u_terreno WHERE manzana_co=" + valor + ";");
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
            alert("La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            /*var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno;");*/
        }else if (queryexport === 'oficial_vs_AAA AcueductoB') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AcueductoL') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AcueductoM') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno WHERE manzana_co=" + valor + ";");
        }
        else if (queryexport == "oficial_vs_AAA AlcantarilladoG"){
            alert("La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            /*var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno;");*/
        }else if (queryexport === 'oficial_vs_AAA AlcantarilladoB') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_alcantarillado, estratific, dif_est_alc from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AlcantarilladoL') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_alcantarillado, estratific, dif_est_alc from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AlcantarilladoM') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_alcantarillado, estratific, dif_est_alc from u_terreno WHERE manzana_co=" + valor + ";");
        }
        else if (queryexport == "oficial_vs_AAA AseoG"){
            alert("La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana");
            /*var select = select_query("select cod_loc, cod_barrio, codigo, estrato_acueducto, estratific, dif_est_acued from u_terreno;");*/
        }else if (queryexport === 'oficial_vs_AAA AseoB') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_aseo, estratific, dif_est_aseo from u_terreno WHERE cod_barrio=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AseoL') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_aseo, estratific, dif_est_aseo from u_terreno WHERE cod_loc=" + valor + ";");
        }else if (queryexport === 'oficial_vs_AAA AseoM') {
            var select = select_query("select cod_loc, cod_barrio, codigo, estrato_aseo, estratific, dif_est_aseo from u_terreno WHERE manzana_co=" + valor + ";");
        }
    }
    
    else if (queryexport.substring(0, 23) === "estratificacion_oficial"){
        var titulo = JSON.stringify(["Codigo Localidad", "Nombre Barrio", "Codigo Manzana", "Codigo Predial", "Estratificacion Oficial", "Numero de Predios"]);
        if (queryexport == 'estratificacion_oficial G'){
			alert("No es recomendable descargar la base de datos de toda la Ciudad, por favor filtre por Localidad, Barrio o Manzana y luego descargue el reporte");
			document.getElementById('carga2').style.display = 'none';
			
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
	
	
	else if (queryexport.substring(0, 24) === "Tipo de Amenaza REMOCION"){
		var titulo = JSON.stringify(["Codigo Localidad", "Nombre Barrio", "Codigo Manzana", "Codigo Predial", "Riesgo de Remocion en Masa", "Numero de Predios"]);
        if (queryexport == 'Tipo de Amenaza REMOCIONG'){
            alert("No es recomendable descargar la base de datos de toda la Ciudad, por favor filtre por Localidad, Barrio o Manzana y luego descargue el reporte");
			document.getElementById('carga2').style.display = 'none';
        }else if (queryexport === 'Tipo de Amenaza REMOCIONB') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, remosion, numeropredios from u_terreno where cod_barrio=" + valor + ";");
        }else if (queryexport === 'Tipo de Amenaza REMOCIONL') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, remosion, numeropredios from u_terreno where cod_loc=" + valor + ";");
        }else if (queryexport === 'Tipo de Amenaza REMOCIONM') {
            var select = select_query("select cod_loc, cod_barrio, manzana_co, codigo, remosion, numeropredios from u_terreno where manzana_co=" + valor + ";");     
        }
    }
    
    else if (queryexport.substring(0, 27) === "Distrito vs Prestadores AAA"){
		var titulo = JSON.stringify(["Direccion o Codigo","Estado"]);
        if (queryexport == 'Distrito vs Prestadores AAA G'){
            alert("El Reporte corresponde a los registros de la base AAA que no se encuentran en la Base catastral");
			var select = select_query("select drireccion from prestadoresaaa where presenteencatastro = 'No';");
        }else if (queryexport === 'Distrito vs Prestadores AAA B') {
            var select = select_query("select codigo, presenteenaaa from u_terreno where cod_barrio=" + valor + ";");
        }else if (queryexport === 'Distrito vs Prestadores AAA L') {
            var select = select_query("select codigo, presenteenaaa from u_terreno where cod_loc=" + valor + ";");
        }else if (queryexport === 'Distrito vs Prestadores AAA M') {
            var select = select_query("select codigo, presenteenaaa from u_terreno where manzana_co=" + valor + ";");
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
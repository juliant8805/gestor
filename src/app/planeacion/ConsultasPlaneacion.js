globalstyle = "sinconsulta";
function putgif() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0);
        document.getElementById('carga2').style.display = "block";
    });
}
function quitgif() {
    document.getElementById('carga2').style.display = "none";
}
var rangoarea = async function (x) { // async function expression assigned to a variable
    await putgif();
    await rango(x);
    await quitgif();
};
function rango(style) {
    globalstyle = style;
    puntos_aaa.setVisible(false);
    document.getElementById('leyenda_transmetro').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
    if (document.getElementById("Tipo de Amenaza").value === "Inundacion") {
        viastransmasivo.setVisible(false);
        estacionestransmetro.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPrediosInundacion");
            var param = [['Riesgo de Inund. Bajo'], ['Riesgo de Inund. Medio'], ['Riego de Inund. Alto']];
            var total1 = search("preproduccion:RiesgoInundacion", 'Baja');
            var total2 = search("preproduccion:RiesgoInundacion", 'Media');
            var total3 = search("preproduccion:RiesgoInundacion", 'Alta');
            var totales = total1.concat(total2, total3);
            predio.getSource().updateParams({'STYLES': 'Inundacion'});
            var titulo ="Predios en Zona de Inundación";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' INUNDACIONG';
        } 
        else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Riesgo de Inund. Bajo'], ['Riesgo de Inund. Medio'], ['Riego de Inund. Alto']];
            var total1 = search("preproduccion:RiesgoInundacionFiltro", values, 'Baja');
            var total2 = search("preproduccion:RiesgoInundacionFiltro", values, 'Media');
            var total3 = search("preproduccion:RiesgoInundacionFiltro", values, 'Alta');
            var totales = total1.concat(total2, total3);
            var titulo ="Predios en Zona de Inundación";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';
               
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': 'Inundacion', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' INUNDACIONF' ;
        }
    }
    
     else if (document.getElementById("Tipo de Amenaza").value === "Remosion") { 
        viastransmasivo.setVisible(false);
        estacionestransmetro.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Amenaza Baja'], ['Amenaza Media'], ['Amenaza Alta'], ['Amenaza Muy Alta'], ['Licuefacción'], ['Revisar']];
            var total1 = search("preproduccion:RemosionEnMasa", 'Baja');
            var total2 = search("preproduccion:RemosionEnMasa", 'Media');
            var total3 = search("preproduccion:RemosionEnMasa", 'Alta');
            var total4 = search("preproduccion:RemosionEnMasa", 'Muy Alta');
            var total5 = search("preproduccion:RemosionEnMasa", 'Licuefaccion');
            var total6 = search("preproduccion:RemosionEnMasa", 'Revisar');
            var totales = total1.concat(total2, total3, total4, total5, total6);
            predio.getSource().updateParams({'STYLES': 'Remocion'});
            var titulo ="Amenaza de Remoción en Masa";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' REMOCIONG';
        } 
        else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Amenaza Baja'], ['Amenaza Media'], ['Amenaza Alta'], ['Amenaza Muy Alta'], ['Licuefacción'], ['Revisar']];
            var total1 = search("preproduccion:RemosionEnMasaFiltro", values, 'Baja');
            var total2 = search("preproduccion:RemosionEnMasaFiltro", values, 'Media');
            var total3 = search("preproduccion:RemosionEnMasaFiltro", values, 'Alta');
            var total4 = search("preproduccion:RemosionEnMasaFiltro", values, 'Muy Alta');
            var total5 = search("preproduccion:RemosionEnMasaFiltro", values, 'Licuefaccion');
            var total6 = search("preproduccion:RemosionEnMasaFiltro", values, 'Revisar');
            var totales = total1.concat(total2, total3, total4, total5, total6);
            var titulo ="Amenaza de Remoción en Masa";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';
               
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': 'Remocion', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' REMOCIONF';
        }
    }
    
    else if (style === "estratificacion_oficial") {
        viastransmasivo.setVisible(false);
        estacionestransmetro.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
            var total1 = search("preproduccion:EstratificacionOficial", '1');
            var total2 = search("preproduccion:EstratificacionOficial", '2');
            var total3 = search("preproduccion:EstratificacionOficial", '3');
            var total4 = search("preproduccion:EstratificacionOficial", '4');
            var total5 = search("preproduccion:EstratificacionOficial", '5');
            var total6 = search("preproduccion:EstratificacionOficial", '6');
            var total7 = search("preproduccion:EstratificacionOficial", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5, total6, total7);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } 
        else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
            var total1 = search("preproduccion:EstratificacionOficialFiltro", values, '1');
            var total2 = search("preproduccion:EstratificacionOficialFiltro", values, '2');
            var total3 = search("preproduccion:EstratificacionOficialFiltro", values, '3');
            var total4 = search("preproduccion:EstratificacionOficialFiltro", values, '4');
            var total5 = search("preproduccion:EstratificacionOficialFiltro", values, '5');
            var total6 = search("preproduccion:EstratificacionOficialFiltro", values, '6');
            var total7 = search("preproduccion:EstratificacionOficialFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5, total6, total7);
            estdistica(select, style, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';
               
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }
    }
     else if (style === "transmetro") {
        document.getElementById("statistics").style.display = "none";
        document.getElementById("botonocultarstatistics").style.display = "none";
        document.getElementById("botonmostrarstatistics").style.display = "none";
        predio.setVisible(false);
        construcciones.setVisible(false); 
        estacionestransmetro.setVisible(true);
        viastransmasivo.setVisible(true);
        document.getElementById('leyenda_transmetro').style.display = 'block';
        map.getView().fitExtent(viastransmasivo.getExtent(), map.getSize());
        document.getElementById('barra_codigo').style.display = 'none';
     }   
    
    
    else if (style === "espacio_publico") {
            viastransmasivo.setVisible(false);
            estacionestransmetro.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            espacio_pubico.setVisible(true);
            layerespaciopublico.setVisible(true);
            var select = search("preproduccion:SinInformacion");
            var param = [['Espacio Público Existente (Hectáreas)'], ['Espacion Público Propuesto (Hectáreas)']];   
            var total1 = search("preproduccion:EspacioPublico", 'Espacio Publico');
            var total2 = search("preproduccion:EspacioPublico", 'Espacio Publico Propuesto');
            var totales = total1.concat(total2);
            espacio_pubico.getSource().updateParams({'STYLES': ''});
            var titulo = "Espacio Público (hectáreas)";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
    }  
    
    else if (style === "Estructura Ecologica Principal") {
             estacionestransmetro.setVisible(false);
             viastransmasivo.setVisible(false);
             construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para ejecutar esta consulta");
             var select = search("preproduccion:TotalPredios");
             var param = [['Áreas Protegidas'], ['Corredores Ecológicos'], ['Sin Informacion']];
             var total1 = search("preproduccion:SinInformacion");
             var total2 = search("preproduccion:SinInformacion");
             var total3 = search("preproduccion:TotalPredios");
             var totales = total1.concat(total2, total3);
             var titulo = "Estructura Ecologica Principal";
             predio.getSource().updateParams({'STYLES': 'sin_informacion'});
             estdistica(select, titulo, param, totales);
             map.getView().fitExtent(predio.getExtent(), map.getSize());  
             queryexport = style;   
        } 
    else if (style === "Area Proteccion Urbanistica") {
             estacionestransmetro.setVisible(false);
             viastransmasivo.setVisible(false);
             construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para ejecutar esta consulta");
             var select = search("preproduccion:TotalPredios");
             var param = [['Protección Urbanistica'], ['No Protegido'], ['Sin Informacion']];
             var total1 = search("preproduccion:SinInformacion");
             var total2 = search("preproduccion:SinInformacion");
             var total3 = search("preproduccion:TotalPredios");
             var totales = total1.concat(total2, total3);
             var titulo = "Protección Urbanistica";
             predio.getSource().updateParams({'STYLES': 'sin_informacion'});
             estdistica(select, titulo, param, totales);
             map.getView().fitExtent(predio.getExtent(), map.getSize());  
             queryexport = style + ' G';   
    }  
    
    else if (style === "Clasificacion_Uso") { 
             estacionestransmetro.setVisible(false);
             viastransmasivo.setVisible(false);
             construcciones.setVisible(false);
             //predio_rural.setVisible(true);
             predio.setVisible(true);
             var select = search("preproduccion:TotalPredios");
             var param = [['Predios en Suelo de Expansión'], ['Predios en Suelo Rural'], ['Predios en Suelo Urbano']];
             var total1 = search("preproduccion:ClasificacionUsoUrbanos", 'Suelo de Expansion');
             var total2 = search("preproduccion:SinInformacion");
             var total3 = search("preproduccion:ClasificacionUsoUrbanos", 'Suelo Urbano');
             var totales = total1.concat(total2, total3);
             predio.getSource().updateParams({'STYLES': 'Clasificacion_Uso'});
             estdistica(select, style, param, totales);
             map.getView().fitExtent(predio.getExtent(), map.getSize());
             queryexport = style + ' G';
    
    }   
}






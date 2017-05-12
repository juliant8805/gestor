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
    if (style === "Rango Area Terreno") {
        viastransmasivo.setVisible(false);
        estacionestransmetro.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2'], ['Sin Area de Terreno']];
            var total1 = search("preproduccion:AreaTerrenoHacienda", 1, 100);
            var total2 = search("preproduccion:AreaTerrenoHacienda", 101, 1000);
            var total3 = search("preproduccion:AreaTerrenoHacienda", 1001, 10000);
            var total4 = search("preproduccion:AreaTerrenoHacienda", 10001, 999999);
            var total5 = search("preproduccion:AreaTerrenoHacienda", 0, 0);
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosEsp", values);
            var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2'], ['Sin Area de Terreno']];
            var total1 = search("preproduccion:TotalPrediosEsp", values, 1, 100);
            var total2 = search("preproduccion:TotalPrediosEsp", values, 101, 1000);
            var total3 = search("preproduccion:TotalPrediosEsp", values, 1001, 10000);
            var total4 = search("preproduccion:TotalPrediosEsp", values, 10000);
            var total5 = search("preproduccion:TotalPrediosEsp", values, 0, 0);
            var totales = total1.concat(total2, total3, total4, total5);
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
    
    //propiedad horizontal
     else if (style === "Tipo Construccion") { 
        estacionestransmetro.setVisible(false);
        viastransmasivo.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['NPH'], ['PH']];
            var total1 = search("preproduccion:PropiedadHorizontal", 0, 0);
            var total2 = search("preproduccion:PropiedadHorizontal", 1, 1);
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['NPH'], ['PH']];
            var total1 = search("preproduccion:PropiedadHorizontalFiltro", values, 0, 0);
            var total2 = search("preproduccion:PropiedadHorizontalFiltro", values, 1, 1);
            var totales = total1.concat(total2);
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


//distrito vs AAA
     else if (style === "Distrito vs Prestadores AAA") { 
        construcciones.setVisible(false);
        predio.setVisible(true);
        puntos_aaa.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Predios Coincidentes'], ['Predios En base catastral y no en AAA'], ['Registros AAA sin codigo catastral']];
            var total1 = search("preproduccion:DistritovsPrestadores", 'Si');
            var total2 = search("preproduccion:DistritovsPrestadores", 'No');  
            var total3 = search("preproduccion:PrestadoresAAA", '999'); 
            var totales = total1.concat(total2, total3);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Predios Coincidentes'], ['Predios En base catastral y no en AAA']];
            var total1 = search("preproduccion:DistritovsPrestadoresFiltro", values, 'Si');
            var total2 = search("preproduccion:DistritovsPrestadoresFiltro", values, 'No');
            var totales = total1.concat(total2);
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
    
    else if (style === "predios_construidos") { 
        estacionestransmetro.setVisible(false);
        viastransmasivo.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Construido'], ['No Construido']];
            var total1 = search("preproduccion:PrediosConstruidos", '1');
            var total2 = search("preproduccion:PrediosConstruidos", '0');   
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': 'construido'});
            var titulo = "Predios Area Construida en R1"
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Construido'], ['No Construido']];
            var total1 = search("preproduccion:PrediosConstruidosFiltro", values, '1');
            var total2 = search("preproduccion:PrediosConstruidosFiltro", values, '0');
            var totales = total1.concat(total2);
            var titulo = "Predios Area Construida en R1"
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'construido', 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }
    } 
    
     else if (style === "predios_actualizacion") {
             estacionestransmetro.setVisible(false);
             viastransmasivo.setVisible(false);
             construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para establecer cuales predios son sujetos de Actualización o Conservación Catastral");
                var select = search("preproduccion:TotalPredios");
                var param = [['Predio Sujeto a Conservación'], ['Predio Sujeto a Actualización'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Predios Susceptibles a Actualización o Conservación Catastral";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';
        }
    
    else if (style === "plusvalia") {
            estacionestransmetro.setVisible(false);
             viastransmasivo.setVisible(false);
             construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para establecer cuales predios generan Efecto de plusvalía");
                var select = search("preproduccion:TotalPredios");
                var param = [['Generador de Plusvalia'], ['No Generador'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Predios Generadores de Plusvalía";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        }
      
    else if (style === "Rango Area Construccion") {
        viastransmasivo.setVisible(false);
        estacionestransmetro.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['0-100m2'],['100-1.000m2'],['1.000-10.000m2'],['mayor a 10.000m2'], ['Sin Area Construida']];
            var total1 = search("preproduccion:AreaConstruidaHacienda", 1, 100);
            var total2 = search("preproduccion:AreaConstruidaHacienda", 101, 1000);
            var total3 = search("preproduccion:AreaConstruidaHacienda", 1001, 10000);
            var total4 = search("preproduccion:AreaConstruidaHacienda", 10001, 999999);
            var total5 = search("preproduccion:AreaConstruidaHacienda", 0, 0);
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2'], ['Sin Area de Terreno']];
            var total1 = search("preproduccion:AreaConstruidaHaciendaFiltro", values, 1, 100);
            var total2 = search("preproduccion:AreaConstruidaHaciendaFiltro", values, 101, 1000);   
            var total3 = search("preproduccion:AreaConstruidaHaciendaFiltro", values, 1001, 10000);  
            var total4 = search("preproduccion:AreaConstruidaHaciendaFiltro", values, 10000);
            var total5 = search("preproduccion:AreaConstruidaHaciendaFiltro", values, 0, 0);
            var totales = total1.concat(total2, total3, total4, total5);
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
    
    else if (style === "Calidad Construcciones") {
        viastransmasivo.setVisible(false);
        estacionestransmetro.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['0-20'], ['21-40'], ['41-60'], ['61-80'], ['81-100'], ['Sin Puntaje']];
            var total1 = search("preproduccion:CalidadConstruccion", 0, 20);
            var total2 = search("preproduccion:CalidadConstruccion", 21, 40);
            var total3 = search("preproduccion:CalidadConstruccion", 41, 60);
            var total4 = search("preproduccion:CalidadConstruccion", 61, 80);
            var total5 = search("preproduccion:CalidadConstruccion", 81, 100); 
            var total6 = search("preproduccion:CalidadConstruccion", 0, 0);
            var totales = total1.concat(total2, total3, total4, total5, total6);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
             var param = [['0-20'], ['21-40'], ['41-60'], ['61-80'], ['81-100'], ['Sin Puntaje']];
            var total1 = search("preproduccion:CalidadConstruccionFiltro", values, 0, 20);
            var total2 = search("preproduccion:CalidadConstruccionFiltro", values, 21, 40);   
            var total3 = search("preproduccion:CalidadConstruccionFiltro", values, 41, 60); 
            var total4 = search("preproduccion:CalidadConstruccionFiltro", values, 61, 80); 
            var total5 = search("preproduccion:CalidadConstruccionFiltro", values, 81); 
            var total6 = search("preproduccion:CalidadConstruccionFiltro", values, 0, 0);
            var totales = total1.concat(total2, total3, total4, total5, total6);
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
       
}






globalstyle = "sinconsulta";
function putgif() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 500);
        document.getElementById('carga2').style.display = "block";
    });
}
function quitgif() {
    //return new Promise(resolve => {
    /*setTimeout(() => {
     resolve(x);
     }, 2000);*/
    document.getElementById('carga2').style.display = "none";
    /*});*/
}
var rangoarea = async function (x) { // async function expression assigned to a variable
    await putgif();
    await rango(x);
    await quitgif();
};
function rango(style) {
    //console.log("2" + document.getElementById('carga2').style.display);
    globalstyle = style;
    puntos_aaa.setVisible(false);
    document.getElementById('leyenda_transmetro').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
    try {
        //rango de area de terreno
        if (style === "Rango Area Terreno") {
            manzana.setVisible(false);
            construcciones.setVisible(false);
            unidades.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerSUI.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                var select = select_query("SELECT Count(*) FROM u_terreno");
                var total1 = select_query("SELECT COUNT(area) FROM u_terreno where area<100");
                var total2 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 101 And 1000");
                var total3 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 1001 And 10000");
                var total4 = select_query("SELECT COUNT(area) FROM u_terreno where area>10001");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + ";");
                var total1 = select_query("SELECT COUNT(area) FROM u_terreno where area<100 AND cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 101 And 1000 AND cod_barrio=" + valor + "");
                var total3 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 1001 And 10000 AND cod_barrio=" + valor + "");
                var total4 = select_query("SELECT COUNT(area) FROM u_terreno where area>10001 AND cod_barrio=" + valor + "");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)}); //'CQL_FILTER':"cod_barrio='000005'" "cod_barrio='000005'" 
                //map.getView().fitExtent(ppExtent, map.getSize());
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                var total1 = select_query("SELECT COUNT(area) FROM u_terreno where area<100 AND cod_loc=" + valor + "");
                var total2 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 101 And 1000 AND cod_loc=" + valor + "");
                var total3 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 1001 And 10000 AND cod_loc=" + valor + "");
                var total4 = select_query("SELECT COUNT(area) FROM u_terreno where area>10001 AND cod_loc=" + valor + "");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                var total1 = select_query("SELECT COUNT(area) FROM u_terreno where area<100 AND manzana_co=" + valor + "");
                var total2 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 101 And 1000 AND manzana_co=" + valor + "");
                var total3 = select_query("SELECT COUNT(area) FROM u_terreno where area Between 1001 And 10000 AND manzana_co=" + valor + "");
                var total4 = select_query("SELECT COUNT(area) FROM u_terreno where area>10001 AND manzana_co=" + valor + "");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        } else if (style === "Avaluo Catastral") {

            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);

            //Vigencia 2016    
            if (document.getElementById("Avaluo Catastral").value === "2016") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    var select = select_query("SELECT Count(*) FROM u_terreno;");
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    var total1 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 0 And 100000000");
                    var total2 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 100000000 And 1000000000");
                    var total3 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 1000000000 And 10000000000");
                    var total4 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016>10000000000");
                    var totales = total1.concat(total2, total3, total4);
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2016'});
                    estdistica(select, style, param, totales);
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
                    queryexport = style + ' 2016G';
                } else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 0 And 100000000 AND cod_barrio=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 100000000 And 1000000000 AND cod_barrio=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 1000000000 And 10000000000 AND cod_barrio=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016>10000000000 AND cod_barrio=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2016', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2016B';
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 0 And 100000000 AND cod_loc=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 100000000 And 1000000000 AND cod_loc=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 1000000000 And 10000000000 AND cod_loc=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016>10000000000 AND cod_loc=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2016', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2016L';
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 0 And 100000000 AND manzana_co=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 100000000 And 1000000000 AND manzana_co=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016 Between 1000000000 And 10000000000 AND manzana_co=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2016) FROM u_terreno where avaluo_2016>10000000000 AND manzana_co=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2016', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2016M';
                }

            }
            //Vigencia 2015
            else if (document.getElementById("Avaluo Catastral").value === "2015") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    var select = select_query("SELECT Count(*) FROM u_terreno;");
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    var total1 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 0 And 100000000");
                    var total2 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 100000000 And 1000000000");
                    var total3 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 1000000000 And 10000000000");
                    var total4 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015>10000000000");
                    var totales = total1.concat(total2, total3, total4);
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2015'});
                    estdistica(select, style, param, totales);
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
                    queryexport = style + ' 2015G';
                } else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 0 And 100000000 AND cod_barrio=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 100000000 And 1000000000 AND cod_barrio=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 1000000000 And 10000000000 AND cod_barrio=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015>10000000000 AND cod_barrio=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2015', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2015B';
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 0 And 100000000 AND cod_loc=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 100000000 And 1000000000 AND cod_loc=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 1000000000 And 10000000000 AND cod_loc=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015>10000000000 AND cod_loc=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2015', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2015L';
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 0 And 100000000 AND manzana_co=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 100000000 And 1000000000 AND manzana_co=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015 Between 1000000000 And 10000000000 AND manzana_co=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2015) FROM u_terreno where avaluo_2015>10000000000 AND manzana_co=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2015', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2015M';
                }
            }

            //Vigencia 2014
            else if (document.getElementById("Avaluo Catastral").value === "2014") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    var select = select_query("SELECT Count(*) FROM u_terreno;");
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    var total1 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 0 And 100000000");
                    var total2 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 100000000 And 1000000000");
                    var total3 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 1000000000 And 10000000000");
                    var total4 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014>10000000000");
                    var totales = total1.concat(total2, total3, total4);
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2014'});
                    estdistica(select, style, param, totales);
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
                    queryexport = style + ' 2014G';
                } else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 0 And 100000000 AND cod_barrio=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 100000000 And 1000000000 AND cod_barrio=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 1000000000 And 10000000000 AND cod_barrio=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014>10000000000 AND cod_barrio=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2014', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2014B';
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 0 And 100000000 AND cod_loc=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 100000000 And 1000000000 AND cod_loc=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 1000000000 And 10000000000 AND cod_loc=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014>10000000000 AND cod_loc=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2014', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2014L';
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                    var total1 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 0 And 100000000 AND manzana_co=" + valor + "");
                    var total2 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 100000000 And 1000000000 AND manzana_co=" + valor + "");
                    var total3 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014 Between 1000000000 And 10000000000 AND manzana_co=" + valor + "");
                    var total4 = select_query("SELECT COUNT (avaluo_2014) FROM u_terreno where avaluo_2014>10000000000 AND manzana_co=" + valor + "");
                    var totales = total1.concat(total2, total3, total4);
                    var param = [['0-100 millones'], ['100-1.000 millones'], ['1.000-10.000 millones'], ['mayor a 10.000 millones']];
                    estdistica(select, style, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Avaluo Catastral 2014', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' 2014M';
                }
            }
        } else if (style === "predios_actualizacion") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Construido'], ['No Construido']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where area_cons = '1'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where area_cons = '0'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                predio.getSource().updateParams({'STYLES': 'construido'});
                var titulo = "Predios sin Area Construida en R1"
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
            } 

            else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where area_cons = '1' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where area_cons = '0' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Construido'], ['No Construido']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'construido', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } 

            else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where area_cons = '1' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where area_cons = '0' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Construido'], ['No Construido']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'construido', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where area_cons = '1' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where area_cons = '0' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Construido'], ['No Construido']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'construido', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        }

        //Rango area construccion  
        else if (style === "Rango Area Construccion") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                var select = select_query("SELECT Count(*) FROM u_terreno;");
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                var total1 = select_query("SELECT COUNT (area_construccion) FROM u_terreno where area_construccion Between 1 And 100");
                var total2 = select_query("SELECT COUNT (area_construccion) FROM u_terreno where area_construccion Between 101 And 1000");
                var total3 = select_query("SELECT COUNT (area_construccion) FROM u_terreno where area_construccion Between 1001 And 10000");
                var total4 = select_query("SELECT COUNT (area_construccion) FROM u_terreno where area_construccion>10000");
                var totales = total1.concat(total2, total3, total4);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE  cod_barrio=" + valor + "");
                var total1 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion<100 AND cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion Between 101 And 1000 AND cod_barrio=" + valor + "");
                var total3 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion Between 1001 And 10000 AND cod_barrio=" + valor + "");
                var total4 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion>10001 AND cod_barrio=" + valor + "");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)}); //'CQL_FILTER':"cod_barrio='000005'" "cod_barrio='000005'" 
                //map.getView().fitExtent(ppExtent, map.getSize());
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                var total1 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion<100 AND cod_loc=" + valor + "");
                var total2 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion Between 101 And 1000 AND cod_loc=" + valor + "");
                var total3 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion Between 1001 And 10000 AND cod_loc=" + valor + "");
                var total4 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion>10001 AND cod_loc=" + valor + "");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                var total1 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion<100 AND manzana_co=" + valor + "");
                var total2 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion Between 101 And 1000 AND manzana_co=" + valor + "");
                var total3 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion Between 1001 And 10000 AND manzana_co=" + valor + "");
                var total4 = select_query("SELECT COUNT(area_construccion) FROM u_terreno where area_construccion>10001 AND manzana_co=" + valor + "");
                var totales = total1.concat(total2, total3, total4);
                var param = [['0-100m2'], ['100-1.000m2'], ['1.000-10.000m2'], ['mayor a 10.000m2']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        }

        //tipo de construccion   
        else if (style === "Tipo Construccion") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerSUI.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['NPH'], ['PH']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where ph <'800'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where ph >= '800'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
            } 

            else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where ph <'800' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where ph >= '800' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['NPH'], ['PH']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } 

            else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where ph <'800' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where ph >= '800' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['NPH'], ['PH']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where ph <'800' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where ph >= '800' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['NPH'], ['PH']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        }
        //Distrito vs Prestadores
        else if (style === "Distrito vs Prestadores AAA") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            puntos_aaa.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {  
                try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(*) FROM localidades where nombre = 'nada'");}
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros AAA sin codigo catastral'], ['Registros En AAA y no Catastro']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'Si'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'No'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select count(*) from prestadoresaaa where condicion_='999'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total4 = select_query("select COUNT(presenteencatastro) from prestadoresaaa where presenteencatastro = 'No' and condicion_<>'999'");}catch(err){}
				if (!total4){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
      
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                 try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(*) FROM localidades where nombre = 'nada'");}
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros En AAA y no Catastro']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'Si' and cod_barrio=" + valor + ";");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'No' and cod_barrio=" + valor + ";");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select COUNT(presenteencatastro) from prestadoresAAA where presenteencatastro = 'No' and cod_barrio=" + valor + ";");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros En AAA y no Catastro']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                 try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(*) FROM localidades where nombre = 'nada'");}
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros En AAA y no Catastro']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'Si' and cod_loc=" + valor + ";");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'No' and cod_loc=" + valor + ";");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select COUNT(presenteencatastro) from prestadoresAAA where presenteencatastro = 'No' and cod_loc=" + valor + ";");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros En AAA y no Catastro']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                 try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(*) FROM localidades where nombre = 'nada'");}
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros En AAA y no Catastro']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'Si' and manzana_co=" + valor + ";");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where presenteenaaa = 'No' and manzana_co=" + valor + ";");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select COUNT(presenteencatastro) from prestadoresAAA where presenteencatastro = 'No' and manzana_co=" + valor + ";");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                var param = [['Predios Coincidentes'],  ['Predios En base catastral y no en AAA'], ['Registros En AAA y no Catastro']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        }
        //estratificion metrotel
        else if (style === "metrotel") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                var select = select_query("SELECT Count(*) FROM u_terreno;");
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                var total1 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 1'");
                var total2 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 2'");
                var total3 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 3'");
                var total4 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 4'");
                var total5 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 5'");
                var total6 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 6'");
                var total7 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Sin Est'");
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + ";");
                var total1 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 1' AND cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 2' AND cod_barrio=" + valor + "");
                var total3 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 3' AND cod_barrio=" + valor + "");
                var total4 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 4' AND cod_barrio=" + valor + "");
                var total5 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 5' AND cod_barrio=" + valor + "");
                var total6 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 6' AND cod_barrio=" + valor + "");
                var total7 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Sin Est' AND cod_barrio=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                var total1 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 1' AND cod_loc=" + valor + "");
                var total2 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 2' AND cod_loc=" + valor + "");
                var total3 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 3' AND cod_loc=" + valor + "");
                var total4 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 4' AND cod_loc=" + valor + "");
                var total5 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 5' AND cod_loc=" + valor + "");
                var total6 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 6' AND cod_loc=" + valor + "");
                var total7 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Sin Est' AND cod_loc=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                var total1 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 1' AND manzana_co=" + valor + "");
                var total2 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 2' AND manzana_co=" + valor + "");
                var total3 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 3' AND manzana_co=" + valor + "");
                var total4 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 4' AND manzana_co=" + valor + "");
                var total5 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 5' AND manzana_co=" + valor + "");
                var total6 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Est 6' AND manzana_co=" + valor + "");
                var total7 = select_query("SELECT COUNT(estratificacion_metrotel) FROM u_terreno where estratificacion_municipio = 'Sin Est' AND manzana_co=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        } else if (style === "Calidad Construcciones") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerSUI.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            espacio_pubico.setVisible(false);
            layerespaciopublico.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                var select = select_query("SELECT Count(*) FROM u_terreno;");
                var param = [['0-20'], ['21-40'], ['41-60'], ['61-80'], ['81-100']];
                var total1 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje<21");
                var total2 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 21 AND 40");
                var total3 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 41 AND 60");
                var total4 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 61 AND 80");
                var total5 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 81 AND 100");
                var totales = total1.concat(total2, total3, total4, total5);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + ";");
                var total1 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje<21 AND cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 21 AND 40 AND cod_barrio=" + valor + "");
                var total3 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 41 AND 60 AND cod_barrio=" + valor + "");
                var total4 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 61 AND 80 AND cod_barrio=" + valor + "");
                var total5 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 81 AND 100 AND cod_barrio=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5);
                var param = [['0-20'], ['21-40'], ['41-60'], ['61-80'], ['81-100']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + ";");
                var total1 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje<21 AND cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 21 AND 40 AND cod_loc=" + valor + "");
                var total3 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 41 AND 60 AND cod_loc=" + valor + "");
                var total4 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 61 AND 80 AND cod_loc=" + valor + "");
                var total5 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 81 AND 100 AND cod_loc=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5);
                var param = [['0-20'], ['21-40'], ['41-60'], ['61-80'], ['81-100']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + ";");
                var total1 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje<21 AND manzana_co=" + valor + "");
                var total2 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 21 AND 40 AND manzana_co=" + valor + "");
                var total3 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 41 AND 60 AND manzana_co=" + valor + "");
                var total4 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 61 AND 80 AND manzana_co=" + valor + "");
                var total5 = select_query("SELECT COUNT(puntaje) FROM u_terreno where puntaje BETWEEN 81 AND 100 AND manzana_co=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5);
                var param = [['0-20'], ['21-40'], ['41-60'], ['61-80'], ['81-100']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            }
        }


        //estratificacion oficial lineas
        else if (style === "estratificacion_oficial") {
            manzana.setVisible(false);
            construcciones.setVisible(false);
            unidades.setVisible(false);
            layermetrotel.setVisible(false);
            predio.setVisible(true);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'] , ['Estrato 4'] , ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where estratific = '1'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where estratific = '2'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where estratific = '3'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("select sum(numeropredios) from u_terreno where estratific = '4'");}catch(err){}
                if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where estratific = '5'");}catch(err){}
                if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where estratific = '6'");}catch(err){}
                if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total7 = select_query("select sum(numeropredios) from u_terreno where estratific = 'Sin Informacion'");}catch(err){}
                if (!total7){total7=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where estratific = '1' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where estratific = '2' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where estratific = '3' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("select sum(numeropredios) from u_terreno where estratific = '4' AND cod_barrio=" + valor + "");}catch(err){}
                if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where estratific = '5' AND cod_barrio=" + valor + "");}catch(err){}
                if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where estratific = '6' AND cod_barrio=" + valor + "");}catch(err){}
                if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total7 = select_query("select sum(numeropredios) from u_terreno where estratific = 'Sin Informacion' AND cod_barrio=" + valor + "");}catch(err){}
                if (!total7){total7=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'] , ['Estrato 4'] , ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where estratific = '1' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where estratific = '2' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where estratific = '3' AND cod_loc=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("select sum(numeropredios) from u_terreno where estratific = '4' AND cod_loc=" + valor + "");}catch(err){}
                if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where estratific = '5' AND cod_loc=" + valor + "");}catch(err){}
                if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where estratific = '6' AND cod_loc=" + valor + "");}catch(err){}
                if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total7 = select_query("select sum(numeropredios) from u_terreno where estratific = 'Sin Informacion' AND cod_loc=" + valor + "");}catch(err){}
                if (!total7){total7=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'] , ['Estrato 4'] , ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                 var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where estratific = '1' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where estratific = '2' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where estratific = '3' AND manzana_co=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("select sum(numeropredios) from u_terreno where estratific = '4' AND manzana_co=" + valor + "");}catch(err){}
                if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where estratific = '5' AND manzana_co=" + valor + "");}catch(err){}
                if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where estratific = '6' AND manzana_co=" + valor + "");}catch(err){}
                if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total7 = select_query("select sum(numeropredios) from u_terreno where estratific = 'Sin Informacion' AND manzana_co=" + valor + "");}catch(err){}
                if (!total7){total7=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6, total7);
                var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
            }
        }

        //Comparación Estratificación Oficial y Prestadores AAA
        else if (style === "oficial_vs_AAA") {
            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("oficial_vs_AAA").value === "Acueducto") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' &&  document.getElementById("manzana").value === '') {
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where dif_est_acued='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where dif_est_acued = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where dif_est_acued = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where dif_est_acued = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    predio.getSource().updateParams({'STYLES': 	'Oficial vs AAA Acueducto'});
                    var titulo = "Est Oficial vs Est Acueducto";
                    estdistica(select, titulo, param, totales);
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
                    queryexport = style + ' AcueductoG';
                 }
                 else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_acued='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_acued = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_acued = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre='nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_acued = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Acueducto";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Acueducto', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AcueductoB';
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_acued='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_acued = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_acued = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre= 'nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_acued = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Acueducto";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Acueducto', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AcueductoL';
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_acued='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_acued = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_acued = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre='nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_acued = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Acueducto";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Acueducto', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AcueductoM';
                  } 
                } 
                else if (document.getElementById("oficial_vs_AAA").value === "Alcantarillado") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where dif_est_alc='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where dif_est_alc = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where dif_est_alc = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where dif_est_alc = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    predio.getSource().updateParams({'STYLES': 	'Oficial vs AAA Alcantarillado'});
                    var titulo = "Est Oficial vs Est Alcantarillado";
                    estdistica(select, titulo, param, totales);
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
                    queryexport = style + ' AlcantarilladoG';
                 }
                 else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_alc='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_alc = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_alc = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre='nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_alc = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Alcantarillado";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Alcantarillado', 'CQL_FILTER': eval(filtro)});
                   queryexport = style + ' AlcantarilladoB';
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_alc='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_alc = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_alc = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre= 'nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_alc = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Alcantarillado";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Alcantarillado', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AlcantarilladoL';
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_alc='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_alc = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_alc = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre='nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_alc = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Alcantarillado";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Alcantarillado', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AlcantarilladoM';
                  } 
              } 
            else if (document.getElementById("oficial_vs_AAA").value === "Aseo") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where dif_est_aseo='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where dif_est_aseo = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where dif_est_aseo = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where dif_est_aseo = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    predio.getSource().updateParams({'STYLES': 	'Oficial vs AAA Aseo'});
                    var titulo = "Est Oficial vs Est Aseo";
                    estdistica(select, titulo, param, totales);
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
                    queryexport = style + ' AseoG';
                 }
                 else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_aseo='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_aseo = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_aseo = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre='nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dif_est_aseo = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Aseo";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Aseo', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AseoB';
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_aseo='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_aseo = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_aseo = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre= 'nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dif_est_aseo = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Aseo";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Aseo', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AseoL';
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    try{
                    var select = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + "");}catch(err){}
                    if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    var param = [['Estratos Coincidentes'], ['Estrato Prestador Mas Alto'], ['Estrato Prestador Mas Bajo'], ['Especial o Sin Inf.']];
                    try{
                    var total1 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_aseo='Igual'");}catch(err){}
                    if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total2 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_aseo = 'prest'");}catch(err){}
                    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                    try{
                    var total3 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_aseo = 'dist'");}catch(err){}
                    if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre='nada'");}  
                    try{
                    var total4 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dif_est_aseo = 'sincomp'");}catch(err){}
                    if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
                    var totales = total1.concat(total2, total3, total4);
                    var titulo = "Est Oficial vs Est Aseo";
                    estdistica(select, titulo, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Aseo', 'CQL_FILTER': eval(filtro)});
                    queryexport = style + ' AseoM';
                  } 
            }
        }


        //Comparación USO Oficial y USO Prestadores AAA
        else if (style === "oficial_vs_AAA_uso") {
            
            alert("No existe información para ejecutar esta consulta");
            /*layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("oficial_vs_AAA_uso").value === "Acueducto") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    var arrayResult = update_query("UPDATE u_terreno SET simbol='Ig' where uso_acueducto = uso_municipio; UPDATE u_terreno SET simbol = 'Dif' where uso_acueducto <> uso_municipio;");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno;");
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig'");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif'");
                    var totales = total1.concat(total2);
                    estdistica(select, style, param, totales);
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Acueducto'});
                    map.getView().fitExtent(metrotel.getExtent(), map.getSize());
                } else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_acueducto = uso_municipio and cod_barrio=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_acueducto <> uso_municipio and cod_barrio=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_barrio=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND cod_barrio=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND cod_barrio=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Acueducto', 'CQL_FILTER': eval(filtro)});
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_acueducto = uso_municipio and cod_loc=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_acueducto <> uso_municipio and cod_loc=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_loc=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND cod_loc=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND cod_loc=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Acueducto', 'CQL_FILTER': eval(filtro)});
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_acueducto = uso_municipio and manzana_co=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_acueducto <> uso_municipio and manzana_co=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where manzana_co=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND manzana_co=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND manzana_co=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Acueducto', 'CQL_FILTER': eval(filtro)});
                }
            } else if (document.getElementById("oficial_vs_AAA_uso").value === "Alcantarillado") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    var arrayResult = update_query("UPDATE u_terreno SET simbol='Ig' where uso_alcantarillado = uso_municipio; UPDATE u_terreno SET simbol = 'Dif' where uso_alcantarillado <> uso_municipio;");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno;");
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig'");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif'");
                    var totales = total1.concat(total2);
                    estdistica(select, style, param, totales);
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Alcantarillado'});
                    map.getView().fitExtent(metrotel.getExtent(), map.getSize());
                } else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_alcantarillado = uso_municipio and cod_barrio=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_alcantarillado <> uso_municipio and cod_barrio=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_barrio=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND cod_barrio=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND cod_barrio=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Alcantarillado', 'CQL_FILTER': eval(filtro)});
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_alcantarillado = uso_municipio and cod_loc=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_alcantarillado <> uso_municipio and cod_loc=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_loc=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND cod_loc=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND cod_loc=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Alcantarillado', 'CQL_FILTER': eval(filtro)});
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_alcantarillado = uso_municipio and manzana_co=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_alcantarillado <> uso_municipio and manzana_co=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where manzana_co=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND manzana_co=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND manzana_co=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Alcantarillado', 'CQL_FILTER': eval(filtro)});
                }
            } else if (document.getElementById("oficial_vs_AAA_uso").value === "Aseo") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                    var arrayResult = update_query("UPDATE u_terreno SET simbol='Ig' where uso_aseo = uso_municipio; UPDATE u_terreno SET simbol = 'Dif' where uso_aseo <> uso_municipio;");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno;");
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig'");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif'");
                    var totales = total1.concat(total2);
                    estdistica(select, style, param, totales);
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Aseo'});
                    map.getView().fitExtent(metrotel.getExtent(), map.getSize());
                } else if (document.getElementById("barrio").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_aseo = uso_municipio and cod_barrio=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_aseo <> uso_municipio and cod_barrio=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_barrio=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND cod_barrio=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND cod_barrio=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_barrio=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Aseo', 'CQL_FILTER': eval(filtro)});
                } else if (document.getElementById("localidad").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_aseo = uso_municipio and cod_loc=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_aseo <> uso_municipio and cod_loc=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_loc=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND cod_loc=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND cod_loc=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"cod_loc=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Aseo', 'CQL_FILTER': eval(filtro)});
                } else if (document.getElementById("manzana").value !== '') {
                    var valor = "'" + values + "'";
                    var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Ig' where uso_aseo = uso_municipio and manzana_co=" + valor + "; UPDATE u_terreno SET simbol = 'Dif' where uso_aseo <> uso_municipio and manzana_co=" + valor + "");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where manzana_co=" + valor + "");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Ig' AND manzana_co=" + valor + "");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Dif' AND manzana_co=" + valor + "");
                    var totales = total1.concat(total2);
                    var param = [['Uso Coincidente'], ['Uso Diferente']];
                    estdistica(select, style, param, totales);
                    var filtro = '"manzana_co=' + valor + '"';
                    predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Aseo', 'CQL_FILTER': eval(filtro)});
                }
            }*/

        }

        //disponibilidad de servicios publicos
        else if (style === "disponibilidad_AAA") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerSUI.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            construcciones.setVisible(false);
            //acueducto
            if (document.getElementById("disponibilidad_AAA").value === "Acueducto") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                     try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Acueducto']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto <> 'Sin Prestador'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto = 'Sin Prestador'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Acueducto'});
                var titulo = "Disponibilidad de Acueducto";
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
              } 
                else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto <> 'Sin Prestador' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto = 'Sin Prestador' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Acueducto']];
                var titulo = "Disponibilidad de Acueducto";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Acueducto', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto <> 'Sin Prestador' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto = 'Sin Prestador' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Acueducto']];
                var titulo = "Disponibilidad de Acueducto";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Acueducto', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto <> 'Sin Prestador' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_acueducto = 'Sin Prestador' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Acueducto']];
                var titulo = "Disponibilidad de Acueducto";
                estdistica(select, titulo, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Acueducto', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
             }
            }
            //alcantarillado
            else if (document.getElementById("disponibilidad_AAA").value === "Alcantarillado") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                     try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Existe Prestador de Alcantarillado'], ['Sin Prestador de Alcantarillado']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado <> 'Sin Prestador'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado = 'Sin Prestador'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado'});
                var titulo = "Disponibilidad de Alcantarillado";
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
              } 
                else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado <> 'Sin Prestador' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado = 'Sin Prestador' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Alcantarillado'], ['Sin Prestador de Alcantarillado']];
                var titulo = "Disponibilidad de Alcantarillado";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado <> 'Sin Prestador' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado = 'Sin Prestador' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Alcantarillado'], ['Sin Prestador de Alcantarillado']];
                var titulo = "Disponibilidad de Alcantarillado";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado <> 'Sin Prestador' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_alcantarillado = 'Sin Prestador' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Alcantarillado']];
                var titulo = "Disponibilidad de Alcantarillado";
                estdistica(select, titulo, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
             }
            }
            //aseo
            else if (document.getElementById("disponibilidad_AAA").value === "Aseo") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                     try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Existe Prestador de Aseo'], ['Sin Prestador de Aseo']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo <> 'Sin Prestador'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo = 'Sin Prestador'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Aseo'});
                var titulo = "Disponibilidad de Aseo";
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                queryexport = style + ' G';
              } 
                else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo <> 'Sin Prestador' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo = 'Sin Prestador' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Aseo'], ['Sin Prestador de Aseo']];
                var titulo = "Disponibilidad de Aseo";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Aseo', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' B';
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo <> 'Sin Prestador' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo = 'Sin Prestador' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Aseo'], ['Sin Prestador de Aseo']];
                var titulo = "Disponibilidad de Aseo";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Aseo', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' L';
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}  
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo <> 'Sin Prestador' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where disponibilidad_aseo = 'Sin Prestador' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2);
                var param = [['Existe Prestador de Aseo'], ['Sin Prestador de Aseo']];
                var titulo = "Disponibilidad de Aseo";
                estdistica(select, titulo, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Disponibilidad Aseo', 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
             }
        }
        }
        //nomenclatura no estandarizada
        else if (style === "Nomenclatura Domiciliaria") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerSUI.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            espacio_pubico.setVisible(false);
            layerespaciopublico.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Nomenclatura Estandarizada'], ['Nomenclatura No Estandarizada'], ['Sin Direccion']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where dir_no_estand = 'SI'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where dir_no_estand = 'NO'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where dir_no_estand = 'NN'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                estdistica(select, style, param, totales);
                predio.getSource().updateParams({'STYLES': 'Nomenclatura Domiciliaria'});
                map.getView().fitExtent(predio.getExtent(), map.getSize());
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Nomenclatura Estandarizada'], ['Nomenclatura No Estandarizada'], ['Sin Direccion']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dir_no_estand = 'SI'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dir_no_estand = 'NO'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + " and dir_no_estand = 'NN'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Nomenclatura Domiciliaria', 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Nomenclatura Estandarizada'], ['Nomenclatura No Estandarizada'], ['Sin Direccion']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dir_no_estand = 'SI'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dir_no_estand = 'NO'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + " and dir_no_estand = 'NN'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Nomenclatura Domiciliaria', 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("manzana").value !== '') {
                 var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Nomenclatura Estandarizada'], ['Nomenclatura No Estandarizada'], ['Sin Direccion']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dir_no_estand = 'SI'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dir_no_estand = 'NO'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + " and dir_no_estand = 'NN'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Nomenclatura Domiciliaria', 'CQL_FILTER': eval(filtro)});
            }
        }



        //tipo de contribuyente
        else if (style === "Tipo de Contribuyente") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente <> 'Sin Informacion';");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'] , ['Gran Contribuyente'] , ['N/A']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'REGIMEN COMUN'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'SIMPLIFICADO'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'AGENTE RETENEDOR'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'GRAN CONTRIBUYENTE'");}catch(err){}
                if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'N/A'");}catch(err){}
                if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");} 
                var totales = total1.concat(total2, total3, total4, total5);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
                queryexport = style + ' M';
          }
           else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                 var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'] , ['Gran Contribuyente'] , ['N/A']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'REGIMEN COMUN' and cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'SIMPLIFICADO' and cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'AGENTE RETENEDOR' and cod_barrio=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'GRAN CONTRIBUYENTE' and cod_barrio=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'N/A' and cod_barrio=" + valor + "");}catch(err){}
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5);
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                 var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'] , ['Gran Contribuyente'] , ['N/A']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'REGIMEN COMUN' and cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'SIMPLIFICADO' and cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'AGENTE RETENEDOR' and cod_loc=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'GRAN CONTRIBUYENTE' and cod_loc=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'N/A' and cod_loc=" + valor + "");}catch(err){}
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5);
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("manzana").value !== '') {
               var valor = "'" + values + "'";
                try{
                var select = select_query("select sum(numeropredios) from u_terreno where manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                 var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'] , ['Gran Contribuyente'] , ['N/A']];
                try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'REGIMEN COMUN' and manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'SIMPLIFICADO' and manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'AGENTE RETENEDOR' and manzana_co=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'GRAN CONTRIBUYENTE' and manzana_co=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where tipo_de_contribuyente = 'N/A' and manzana_co=" + valor + "");}catch(err){}
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5);
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } 
            
            
            
            
            
            
            
            
            
            
        }
        
        
        
        
        
        
        
        
        else if (style === "predios_exentos_2016") {
            layermetrotel.setVisible(false);
            predio.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
           if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                var select = select_query("SELECT Count(*) FROM u_terreno where exentos_patrimonio_historico_2016 is not null;");
                var param = [['Cultural'], ['Comercial'], ['Institucional'], ['Educativo'], ['Habitacional'], ['Entidades de Orden Nacional y Departamental']];
                var total1 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'CULTURAL'");
                var total2 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'COMERCIAL'");
                var total3 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'INSTITUCIONAL'");
                var total4 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'EDUCATIVO'");
                var total5 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'HABITACIONAL'");
                var total6 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'ENTIDADES ORDEN NACIONAL Y DEPARTAMENTAL'");
                var totales = total1.concat(total2, total3, total4, total5, total6);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_barrio=" + valor + " and exentos_patrimonio_historico_2016 is not null;");
                var total1 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'CULTURAL' AND cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'COMERCIAL' AND cod_barrio=" + valor + "");
                var total3 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'INSTITUCIONAL' AND cod_barrio=" + valor + "");
                var total4 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'EDUCATIVO' AND cod_barrio=" + valor + "");
                var total5 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'HABITACIONAL' AND cod_barrio=" + valor + "");
                var total6 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'ENTIDADES ORDEN NACIONAL Y DEPARTAMENTAL' AND cod_barrio=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5, total6);
                var param = [['Cultural'], ['Comercial'], ['Institucional'], ['Educativo'], ['Habitacional'], ['Entidades de Orden Nacional y Departamental']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE cod_loc=" + valor + " and exentos_patrimonio_historico_2016 is not null;");
                var total1 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'CULTURAL' AND cod_loc=" + valor + "");
                var total2 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'COMERCIAL' AND cod_loc=" + valor + "");
                var total3 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'INSTITUCIONAL' AND cod_loc=" + valor + "");
                var total4 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'EDUCATIVO' AND cod_loc=" + valor + "");
                var total5 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'HABITACIONAL' AND cod_loc=" + valor + "");
                var total6 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'ENTIDADES ORDEN NACIONAL Y DEPARTAMENTAL' AND cod_loc=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5, total6);
                var param = [['Cultural'], ['Comercial'], ['Institucional'], ['Educativo'], ['Habitacional'], ['Entidades de Orden Nacional y Departamental']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                var select = select_query("SELECT Count(*) FROM u_terreno WHERE manzana_co=" + valor + " and exentos_patrimonio_historico_2016 is not null;");
                var total1 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'CULTURAL' AND manzana_co=" + valor + "");
                var total2 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'COMERCIAL' AND manzana_co=" + valor + "");
                var total3 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'INSTITUCIONAL' AND manzana_co=" + valor + "");
                var total4 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'EDUCATIVO' AND manzana_co=" + valor + "");
                var total5 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'HABITACIONAL' AND manzana_co=" + valor + "");
                var total6 = select_query("SELECT COUNT(exentos_patrimonio_historico_2016) FROM u_terreno where exentos_patrimonio_historico_2016 = 'ENTIDADES ORDEN NACIONAL Y DEPARTAMENTAL' AND manzana_co=" + valor + "");
                var totales = total1.concat(total2, total3, total4, total5, total6);
                var param = [['Cultural'], ['Comercial'], ['Institucional'], ['Educativo'], ['Habitacional'], ['Entidades de Orden Nacional y Departamental']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            }
        }

       
        //Tipo de Propietario (Natural-Juridico)
        else if (style === "Tipo Propietario") {
            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            construcciones.setVisible(false);
            predio.setVisible(true);
            try{
                var select = select_query("select sum(numeropredios) from u_terreno");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Predios Suceptibles a cobro de Impuesto'], ['Otros'], ['Sin Informacion']];
                var total1 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total2 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total3 = select_query("select sum(numeropredios) from u_terreno");
                var totales = total1.concat(total2, total3);
                var titulo = "Impuesto de Industria y Comercio";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
        }

        //Conflictos de Uso del suelo (Uso actual - Uso normativo)
        else if (style === "Conflicto Uso del Suelo") {
            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
                var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Sin Conflicto' where uso_norma = uso_actual; UPDATE u_terreno SET simbol = 'Con Conflicto' where uso_norma <> uso_actual");
                    var select = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol is not null");
                    var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Sin Conflicto'");
                    var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Con Conflicto'");
                    var totales = total1.concat(total2);
                    var param = [['Sin Conflicto'], ['Con Conflicto']];
                    estdistica(select, style, param, totales);
                    predio.getSource().updateParams({'STYLES': style});
                    map.getView().fitExtent(predio.getExtent(), map.getSize());
            } 
            else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
                var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Sin Conflicto' where uso_norma = uso_actual and cod_barrio=" + valor + "; UPDATE u_terreno SET simbol = 'Con Conflicto' where uso_norma <> uso_actual and cod_barrio=" + valor + ";");
                var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_barrio=" + valor + " and simbol is not null;");
                var param = [['Sin Conflicto'], ['Con Conflicto']];
                var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Sin Conflicto' and cod_barrio=" + valor + "");
                var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Con Conflicto' and cod_barrio=" + valor + "");
                var totales = total1.concat(total2);
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
                var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Sin Conflicto' where uso_norma = uso_actual and cod_loc=" + valor + "; UPDATE u_terreno SET simbol = 'Con Conflicto' where uso_norma <> uso_actual and cod_loc=" + valor + ";");
                var select = select_query("SELECT COUNT(simbol) FROM u_terreno where cod_loc=" + valor + " and simbol is not null;");
                var param = [['Sin Conflicto'], ['Con Conflicto']];
                var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Sin Conflicto' and cod_loc=" + valor + "");
                var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Con Conflicto' and cod_loc=" + valor + "");
                var totales = total1.concat(total2);
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)}); 
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
                var arrayResult = update_query("ALTER TABLE u_terreno DROP COLUMN simbol; ALTER TABLE u_terreno ADD COLUMN simbol character varying(20); UPDATE u_terreno SET simbol='Sin Conflicto' where uso_norma = uso_actual and manzana_co=" + valor + "; UPDATE u_terreno SET simbol = 'Con Conflicto' where uso_norma <> uso_actual and manzana_co=" + valor + ";");
                var select = select_query("SELECT COUNT(simbol) FROM u_terreno where manzana_co=" + valor + " and simbol is not null;");
                var param = [['Sin Conflicto'], ['Con Conflicto']];
                var total1 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Sin Conflicto' and manzana_co=" + valor + "");
                var total2 = select_query("SELECT COUNT(simbol) FROM u_terreno where simbol = 'Con Conflicto' and manzana_co=" + valor + "");
                var totales = total1.concat(total2);
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            }
        }

        //Area de Proteccion Urbanistica
        else if (style === "Area Proteccion Urbanistica") {
            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            try{
                var select = select_query("select sum(numeropredios) from u_terreno");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Predio en Zona de Protección Urbanistica'], ['Sin Información']];
                var total1 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total2 = select_query("select sum(numeropredios) from u_terreno");
                var totales = total1.concat(total2);
                var titulo = "Predios en Zona de Protección Urbanistica";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());   
        }
        //Nivel de Amenaza
        else if (style === "Tipo de Amenaza") {
            manzana.setVisible(false);
            construcciones.setVisible(false);
            unidades.setVisible(false);
            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            //Amenaza de Inundacion   
            if (document.getElementById("Tipo de Amenaza").value === "Inundacion") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {	
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where inundacion <> 'Sin Riesgo'");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Riesgo de Inund. Bajo'], ['Riesgo de Inund. Medio'], ['Riego de Inund. Alto']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Baja'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Media'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Alta'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                predio.getSource().updateParams({'STYLES': 'Inundacion'});
				var titulo ="Predios en Zona de Inundación";
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
				queryexport = style + ' INUNDACIONG';
                } 
				
				else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where inundacion <> 'Sin Riesgo' and cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Baja' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Media' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Alta' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                var param = [['Riesgo de Inund. Bajo'], ['Riesgo de Inund. Medio'], ['Riego de Inund. Alto']];
                var titulo ="Predios en Zona de Inundación";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Inundacion', 'CQL_FILTER': eval(filtro)});
				queryexport = style + ' INUNDACIONB';
                } 
                else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where inundacion <> 'Sin Riesgo' and cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Baja' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Media' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Alta' AND cod_loc=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                var param = [['Riesgo de Inund. Bajo'], ['Riesgo de Inund. Medio'], ['Riego de Inund. Alto']];
                var titulo ="Predios en Zona de Inundación";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Inundacion', 'CQL_FILTER': eval(filtro)});
				queryexport = style + ' INUNDACIONL';
                } 
                else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where inundacion <> 'Sin Riesgo' and manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Baja' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Media' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where inundacion = 'Alta' AND manzana_co=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3);
                var param = [['Riesgo de Inund. Bajo'], ['Riesgo de Inund. Medio'], ['Riego de Inund. Alto']];
                var titulo ="Predios en Zona de Inundación";
                estdistica(select, titulo, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Inundacion', 'CQL_FILTER': eval(filtro)});
				queryexport = style + ' INUNDACIONM';
                }
            }
            //Amenaza de Remosion en Masa
            else if (document.getElementById("Tipo de Amenaza").value === "Remosion") {
                if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {	
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where remosion <> 'Sin Informacion'");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Amenaza Baja'], ['Amenaza Media'], ['Amenaza Alta'], ['Amenaza Muy Alta'], ['Licuefacción'], ['Revisar']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Baja'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Media'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Alta'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Muy Alta'");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Licuefaccion'");}catch(err){}
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Revisar'");}catch(err){}
				if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6);
                predio.getSource().updateParams({'STYLES': 'Remocion'});
				var titulo ="Amenaza de Remoción en Masa";
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());	
				queryexport = style + ' REMOCIONG';
                } 	
				else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where remosion <> 'Sin Informacion' and cod_barrio=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Baja' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Media' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Alta' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Muy Alta' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Licuefaccion' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Revisar' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6);
                var param = [['Amenaza Baja'], ['Amenaza Media'], ['Amenaza Alta'], ['Amenaza Muy Alta'], ['Licuefacción'], ['Revisar']];
                var titulo ="Riesgo de Remoción en Masa";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Remocion', 'CQL_FILTER': eval(filtro)});
				queryexport = style + ' REMOCIONB';
                } 
				
                else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where remosion <> 'Sin Informacion' and cod_loc=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Baja' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Media' AND cod_loc=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Alta' AND cod_loc=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Muy Alta' AND cod_loc=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Licuefaccion' AND cod_loc=" + valor + "");}catch(err){}
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5);
                try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Revisar' AND cod_loc=" + valor + "");}catch(err){}
				if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6);
                var param = [['Amenaza Baja'], ['Amenaza Media'], ['Amenaza Alta'], ['Amenaza Muy Alta'], ['Licuefacción'], ['Revisar']];
                var titulo ="Riesgo de Remoción en Masa";
                estdistica(select, titulo, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Remocion', 'CQL_FILTER': eval(filtro)});
				queryexport = style + ' REMOCIONL';
                } 
				
                else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno where remosion <> 'Sin Informacion' and manzana_co=" + valor + ";");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Baja' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Media' AND manzana_co=" + valor + "");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Alta' AND manzana_co=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total4 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Muy Alta' AND manzana_co=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total5 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Licuefaccion' AND manzana_co=" + valor + "");}catch(err){} 
				if (!total5){total5=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
               try{
                var total6 = select_query("select sum(numeropredios) from u_terreno where remosion = 'Revisar' AND manzana_co=" + valor + "");}catch(err){}
				if (!total6){total6=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4, total5, total6);
                var param = [['Amenaza Baja'], ['Amenaza Media'], ['Amenaza Alta'], ['Amenaza Muy Alta'], ['Licuefacción'], ['Revisar']];
                var titulo ="Riesgo de Remoción en Masa";
                estdistica(select, titulo, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': 'Remocion', 'CQL_FILTER': eval(filtro)});
				queryexport = style + ' REMOCIONM';
                }
            }
        }
        
       
         else if (style === "Tipo de Zona") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
				try{
                var select = select_query("select sum(numeropredios) from u_terreno;");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Suelo Urbano'], ['Suelo Rural'], ['Suelo de Expansion'] , ['Sin Informacion']];
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Suelo Urbano'");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Suelo Rural'");}catch(err){}
				if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Suelo de Expansion'");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Sin Informacion'");}catch(err){}
                if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4);
                predio.getSource().updateParams({'STYLES': style});
                estdistica(select, style, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());
            } else if (document.getElementById("barrio").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){};
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Suelo Urbano' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) FROM u_terreno where tipo = 'Suelo Rural' AND cod_barrio=" + valor + "");}catch(err){}
			    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) FROM u_terreno where tipo = 'Suelo de Expansion' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("SELECT COUNT(tipo) FROM u_terreno where tipo = 'Sin Informacion' AND cod_barrio=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4);
                var param = [['Suelo Urbano'], ['Suelo Rural'], ['Suelo de Expansion'] , ['Sin Informacion']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_barrio=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){};
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Suelo Urbano' AND cod_loc=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) FROM u_terreno where tipo = 'Suelo Rural' AND cod_loc=" + valor + "");}catch(err){}
			    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) FROM u_terreno where tipo = 'Suelo de Expansion' AND cod_loc=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("SELECT COUNT(tipo) FROM u_terreno where tipo = 'Sin Informacion' AND cod_loc=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4);
                var param = [['Suelo Urbano'], ['Suelo Rural'], ['Suelo de Expansion'] , ['Sin Informacion']];
                estdistica(select, style, param, totales);
                var filtro = '"cod_loc=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("manzana").value !== '') {
                var valor = "'" + values + "'";
				try{
                var select = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){};
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total1 = select_query("select sum(numeropredios) from u_terreno where tipo = 'Suelo Urbano' AND manzana_co=" + valor + "");}catch(err){}
				if (!total1){total1=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total2 = select_query("select sum(numeropredios) FROM u_terreno where tipo = 'Suelo Rural' AND manzana_co=" + valor + "");}catch(err){}
			    if (!total2){total2=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
                var total3 = select_query("select sum(numeropredios) FROM u_terreno where tipo = 'Suelo de Expansion' AND manzana_co=" + valor + "");}catch(err){}
				if (!total3){total3=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
				try{
				var total4 = select_query("SELECT COUNT(tipo) FROM u_terreno where tipo = 'Sin Informacion' AND manzana_co=" + valor + "");}catch(err){}
				if (!total4){total4=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var totales = total1.concat(total2, total3, total4);
                var param = [['Suelo Urbano'], ['Suelo Rural'], ['Suelo de Expansion'] , ['Sin Informacion']];
                estdistica(select, style, param, totales);
                var filtro = '"manzana_co=' + valor + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            }
        }
        
        
        else if (style === "Estructura Ecologica Principal") {
             try{
                var select = select_query("select sum(numeropredios) from u_terreno");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Áreas Protegidas'], ['Parques Urbanos'], ['Corredores Ecológicos'], ['Sin Información']];
                var total1 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total2 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total3 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total4 = select_query("select sum(numeropredios) from u_terreno");
                var totales = total1.concat(total2, total3, total4);
                var titulo = "Estructura Ecologica Principal";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());    
        }

    
        //espacio público
        else if (style === "espacio_publico") {
            layerEstratificacionOficial.setVisible(false);
            layermetrotel.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            predio.setVisible(true);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            layerSUI.setVisible(false);
            espacio_pubico.setVisible(true);
            layerespaciopublico.setVisible(true);
            var totalhec = select_query("SELECT (SUM(area_has))FROM espacio_publico WHERE tipo_trata <> 'Parque';");
            var select = parseInt(totalhec[0][0]);
            var select = [select+" Hectáreas"];
            var epublico = select_query("SELECT (SUM(area_has))FROM espacio_publico WHERE tipo_trata = 'Espacio Publico';");
            var total1 = parseInt(epublico[0][0]);
            var epublicopropues = select_query("SELECT (SUM(area_has))FROM espacio_publico WHERE tipo_trata = 'Espacio Publico Propuesto';");
            var total2 = parseInt(epublicopropues[0][0]);
            var totales = [[total1],[total2]];
            var param = [['Espacio Público Existente (Hectáreas)'], ['Espacion Público Propuesto (Hectáreas)']];      
            espacio_pubico.getSource().updateParams({'STYLES': ''});
            var titulo = "Espacio Público (hectáreas)";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(espacio_pubico.getExtent(), map.getSize());
            estadistica_espacio_publico(select, param, totales, porcentajes);
            //parseInt(existente)
        }
        
         //plusvalia
         else if (style === "plusvalia") {
            layermetrotel.setVisible(false);
            layerSUI.setVisible(false);
            layerindustriaycomercio.setVisible(false);
            layerEstratificacionOficial.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            layerprediosexentos2016.setVisible(false);
            estacionestransmetro.setVisible(false);
            viastransmasivo.setVisible(false);
            predio.setVisible(true);
            try{
                var select = select_query("select sum(numeropredios) from u_terreno");}catch(err){}
				if (!select){select=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");}
                var param = [['Predio Generador de Plusvalia'], ['No Generador'], ['Sin Informacion']];
                var total1 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total2 = select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");
                var total3 = select_query("select sum(numeropredios) from u_terreno");
                var totales = total1.concat(total2, total3);
                var titulo = "Predios Generadores de Plusvalia";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
        }
        
  
        //document.getElementById('barra_busqueda_direccion').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'none';
    }catch(err){}
}





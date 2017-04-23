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
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + values + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + values + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + values + '"';
                predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            }
            queryexport = style;
        }

    }
}
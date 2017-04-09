// ========= config section ================================================
var url = 'http://35.184.3.4:8080/geoserver/ows?';
var featurePrefix = 'preproduccion';
var featureType = ['u_terreno', 'estacionestransmetro', 'puntos_aaa', 'consolidado_campo'];
var featureNS = 'http://barranquilla.co';
var srsName = 'EPSG:4326';
var geometryName = 'geom';
var geometryType = 'MultiPolygon';
var fields = ['*'];
var infoFormat = 'application/vnd.ogc.gml/3.1.1';
var center = [-8327000, 1230000];
var zoom = 12;
// =========================================================================
// override the axis orientation for WMS GetFeatureInfo
var proj = new ol.proj.Projection({
    code: 'http://www.opengis.net/gml/srs/epsg.xml#4326',
    axis: 'enu'
});
//ol.proj.addEquivalentProjections([ol.proj.get('EPSG:4326'), proj]);
// create a GML format to read WMS GetFeatureInfo response
//var format = new ol.format.GML({featureNS: featureNS, featureType: featureType});
//var format1 = new ol.format.GML({featureNS: featureNS, featureType: featureType1});
var format = [];
var wmsSource = [];
for (var i = 0; i <= featureType.length - 1; i++)
{
    format[i] = new ol.format.GML({featureNS: featureNS, featureType: featureType[i]});
    wmsSource[i] = new ol.source.TileWMS({
        url: url,
        params: {
            'LAYERS': featurePrefix + ':' + featureType[i],
            'TILED': true
        },
        serverType: 'geoserver'
    });
}
;
// create a new popup with a close box
// the popup will draw itself in the popup div container
// autoPan means the popup will pan the map if it's not visible (at the edges of the map).
var popup = new app.Popup({
    element: document.getElementById('popup'),
    closeBox: true,
    autoPan: true
});
// the tiled WMS source for our local GeoServer layer
/*
 var wmsSource = new ol.source.TileWMS({
 url : url,
 params : {
 'LAYERS' : featurePrefix + ':' + featureType1,
 'TILED' : true
 },
 serverType : 'geoserver'
 });*/
// create a vector layer to contain the feature to be highlighted
/*var highlight = new ol.layer.Vector({
 image: new ol.style.Icon({
 anchor: [0.5, 1],
 opacity: 1,
 scale: 0.3,
 src: './imagenes/ubicacion.png'
 }),
 source: new ol.source.Vector()
 });*/

var highlight = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FFFF',
            width: 3
        })
    }),
    source: new ol.source.Vector()
});

/*var highlightfeatures = new ol.layer.Vector({
 style : new ol.style.Style({
 stroke : new ol.style.Stroke({
 color : '#00FFFF',
 width : 3
 })
 }),
 source : new ol.source.Vector()
 });*/


// when the popup is closed, clear the highlight
/*$(popup).on('close', function () {
 highlight.getSource().clear();
 });*/
// create the OpenLayers Map object
// we add a layer switcher to the map with two groups:
// 1. background, which will use radio buttons
// 2. default (overlays), which will use checkboxes
var measuring = false;
measureControl = function (opt_options) {
    var options = opt_options || {};
    var button = document.createElement('button');
    button.innerHTML = '<img src="../gesstor/imagenes/measure-control.png" />';
    var this_ = this;
    var handleMeasure = function (e) {
        if (!measuring) {
            this_.getMap().addInteraction(draw);
            measuring = true;
        } else {
            this_.getMap().removeInteraction(draw);
            measuring = false;
        }
    };
    button.addEventListener('click', handleMeasure, false);
    button.addEventListener('touchstart', handleMeasure, false);
    var element = document.createElement('div');
    element.className = 'measure-control ol-unselectable ol-control';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};
ol.inherits(measureControl, ol.control.Control);
var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map = new ol.Map({
    controls: ol.control.defaults().extend([new ol.control.ScaleLine(), new ol.control.ZoomToExtent({
            extent: [-8360194.483519, 1214264.520807, -8302594.687951, 1245861.102880]
        }), new measureControl(),
        new ol.control.OverviewMap({
            className: 'ol-overviewmap ol-custom-overviewmap',
            layers: [new ol.layer.Tile({
                    source: new ol.source.OSM({
                        'url': 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
                    })
                })],
            collapseLabel: '\u00BB',
            label: '\u00AB',
            collapsed: true
        })
    ]).extend([mousePositionControl]),
    // add the popup as a map overlay
    overlays: [popup],
    // render the map in the 'map' div
    target: document.getElementById('map'),
    // use the Canvas renderer
    renderer: 'canvas',
    layers: [layerBase, layerPot, layerPuntosFotocontrol, layerEstratificacionOficial, layerprediosexentos2016, layermetrotel, layerindustriaycomercio, layerSUI, layerCatastro, layerSitios, layerOrtofoto, highlight],
    view: new ol.View({
        center: center,
        zoom: zoom,
        extent: [-8360194.483519, 1214264.520807, -8302594.687951, 1245861.102880],
        maxZoom: 21, minZoom: 12
    })
});

map.getLayerGroup().set('name', 'CAPAS');
// register a single click listener on the map and show a popup
// based on WMS GetFeatureInfo
map.on('singleclick', function (evt) {
    document.getElementById("panel_atr").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "none";
    document.getElementById("botonocultarpanelatributos").style.display = "none";
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, map.getView().getProjection(),
            {'INFO_FORMAT': infoFormat}
    );
    var url2 = wmsSource[1].getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, map.getView().getProjection(),
            {'INFO_FORMAT': infoFormat}
    );
    var url3 = wmsSource[2].getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, map.getView().getProjection(),
            {'INFO_FORMAT': infoFormat}
    );
    var url1 = wmsSource[3].getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, map.getView().getProjection(),
            {'INFO_FORMAT': infoFormat}
    );
    
    if (url1) {
        //console.log(url4);
        $.ajax({
            url: url1,
            beforeSend: function () {
                putgif();
            },
            success: function (data) {
                var features = format[3].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    //var html = '<br/><table class="table table-striped table-bordered table-condensed"><tr><td colspan="2"><b>TRANSMETRO</b></td></tr>';
                    var values = feature.getProperties();
                    //console.log(values);
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    //var select = select_query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name LIKE 'temp_%'");
                    //console.log(select);
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    //var cell2 = row.insertCell(1);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION LOTE</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    select[0] = "<b>Direccion</b>";
                    select[1] = "<b>Propietario</b>";
                    select[2] = "<b>Tipo de Predio</b>";
                    select[3] = "<b>Destino Economico</b>";
                    select[4] = "<b>Via de Acceso</b>";
                    select[5] = "<b>Foco de Contaminacion</b>";
                    select[6] = "<b>Fecha de Captura</b>";
                    select[7] = "<b>Fotografias</b>";
                    sel[0] = values.direccion;
                    sel[1] = values.propietari;
                    sel[2] = values.tipo_predi;
                    sel[3] = values.destino_ec;
                    sel[4] = values.via_acceso;
                    sel[5] = values.foco_conta;
                    sel[6] = values.fecha_capt;
                    sel[7] = document.createElement("a");
                    sel[7].id = "img1";
                    sel[7].style = "width: 30px; height: 50px;";
                    sel[7].target = "marco";
                    sel[7].setAttribute("onclick", "open_streetview()");
                    sel[7].href = "http://35.184.3.4/gesstor/fotografias/" + values.cod_predia + "/1.jpg";
                    imag[7] = document.createElement("img");
                    imag[7].id = "im1";
                    imag[7].className = "pequeña";
                    imag[7].src = "http://35.184.3.4/gesstor/fotografias/" + values.cod_predia + "/1.jpg";
                    stv[7] = document.createElement("a");
                    stv[7].id = "imgstreet";
                    stv[7].target = "marco";
                    stv[7].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    console.log(values.geom.flatCoordinates);
                    stv[7].setAttribute("onclick", "open_streetview()");
                    ig[7] = document.createElement("img");
                    ig[7].src = "./imagenes/streetview.png";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 7) {
                            cell2.appendChild(sel[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            stv[i].appendChild(ig[i]);
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                }
            },
            complete: function(){
                quitgif();
            }
        });
        
    }
    if (url) {
        $.ajax({
            url: url,
            success: function (data) {
                //var select = validacionusuarios();	
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var ph = values.ph;
                    var codigo = "'" + values.codigo + "'";
                    //console.log(codigo);
                    var direccion = select_query("select direccion from sec08001 where codigo = " + codigo + "");
                    if (direccion ===null){
                        var direccion = [];
                        direccion[0]= "Sin Direccion";
                        //console.log(direccion);
                    }
                    document.getElementById("panel_atributos_puntos_aaa").style.display = "none";
                    //var sinduplicados = direccion;
                    //console.log(values);
                    if (ph >= 800) {
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>PROPIEDAD HORIZONTAL</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        for (i = 0; i < direccion.length; i++) {
                            var tablaph = ("<table max-width=20 border=1>");
                            for (i = 0; i < direccion.length; i++) {
                                tablaph += ("<tr>");
                                tablaph += ("<td><b>" + direccion[i] + "</b></td>");
                                tablaph += ("</tr>");
                            }
                            tablaph += ("</table>");     
                        }
                        select[0] = "<b>Direcciones</b>";
                        select[1] = "<b>Street View</b>";
                        sel[0] = tablaph; 
                        stv[1] = document.createElement("a");
                        stv[1].id = "imgstreet";
                        stv[1].target = "marco";
                        stv[1].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[1].setAttribute("onclick","open_streetview()");
                        ig[1] = document.createElement("img");
                        ig[1].src = "./imagenes/streetview.png";

                     for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 1){
                            cell2.appendChild(stv[i]);
                            stv[i].appendChild(ig[i]);
                        }else{
                            cell2.innerHTML = sel[i];
                        }
                    }
                        document.getElementById("panel_atr").style.display = "block";
                        document.getElementById("botonminimizar").style.display = "block";
                        var c = feature.values_.geom.flatCoordinates.length - 1;
                        for (var i = 0; i <= c; i = i + 3) {
                            var a = feature.values_.geom.flatCoordinates[i];
                            feature.values_.geom.flatCoordinates[i] = feature.values_.geom.flatCoordinates[i + 1];
                            feature.values_.geom.flatCoordinates[i + 1] = a;
                        }
                        feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                        highlightfeatures.setStyle(PredioStyle);
                        var markerSourceph = highlightfeatures.getSource();
                        markerSourceph.clear();
                        markerSourceph.addFeature(feature);
                    } else if (ph < 800) {
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        var codfoto = values.codigo_ant.substring(0,17); 
                        if (modulo=='planeacion'){
                        select[0] = "<b>Codigo Manzana</b>";
                        select[1] = "<b>Codigo Catastral Nuevo</b>";
                        select[2] = "<b>Codigo Catastral Anterior</b>";
                        select[3] = "<b>Dirección</b>"; 
                        select[4] = "<b>Estratificación Oficial</b>"; 
                        select[5] = "<b>Remoción en Masa</b>";
                        select[6] = "<b>Amenaza de Inundación</b>";
                        select[7] = "<b>Fotografias</b>";
                        sel[0] = values.manzana_co;
                        sel[1] = values.codigo;
                        sel[2] = values.codigo_ant;
                        sel[3] = direccion[0];
                        sel[4] = values.estratific;
                        sel[5] = values.remosion;
                        sel[6] = values.inundacion;
                        sel[7] = document.createElement("a");
                        sel[7].id = "img1";
                        sel[7].style = "width: 30px; height: 50px;";
                        sel[7].target = "marco";
                        sel[7].setAttribute("onclick","open_streetview()");
                        sel[7].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                        imag[7] = document.createElement("img");
                        imag[7].id = "im1";
                        imag[7].className = "pequeña";
                        imag[7].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";         
                        stv[7] = document.createElement("a");
                        stv[7].id = "imgstreet1";
                        stv[7].target = "marco";
                        stv[7].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[7].setAttribute("onclick","open_streetview()");  
                        ig[7] = document.createElement("img");
                        ig[7].src = "./imagenes/streetview.png";
                        var campos=7;
                        }
                    else if(modulo=='sui'){     
                    var estacueducto = values.estrato_acueducto;
                    var estalcantarillado = values.estrato_alcantarillado;
                    var estaseo = values.estrato_aseo;
                    if(estacueducto==11){
                        estacueducto = 'Industria (11)';
                    };
                    if(estacueducto==12){
                        estacueducto = 'Comercial (12)';
                    };
                    if(estacueducto==13){
                        estacueducto = 'Especial (13)';
                    };
                    if(estacueducto==14){
                        estacueducto = 'Oficial (14)';
                    };
                    if(estalcantarillado==11){
                        estalcantarillado = 'Industria (11)';
                    };
                    if(estalcantarillado==12){
                        estalcantarillado = 'Comercial (12)';
                    };
                    if(estalcantarillado==13){
                        estalcantarillado = 'Especial (13)';
                    };
                    if(estalcantarillado==14){
                        estalcantarillado = 'Oficial (14)';
                    };
                    if(estaseo==11){
                        estaseo = 'Industria (11)';
                    };
                    if(estaseo==12){
                        estaseo = 'Comercial (12)';
                    };
                    if(estaseo==13){
                        estaseo = 'Especial (13)';
                    };
                    if(estaseo==14){
                        estaseo = 'Oficial (14)';
                    };
                        
                        select[0] = "<b>Codigo Manzana</b>";
                        select[1] = "<b>Codigo Catastral Nuevo</b>";
                        select[2] = "<b>Codigo Catastral Anterior</b>";
                        select[3] = "<b>Dirección</b>"; 
                        select[4] = "<b>Estratificación Oficial</b>"; 
                        select[5] = "<b>Estratificación Acueducto</b>";
                        select[6] = "<b>Estratificación Alcantarillado</b>";
                        select[7] = "<b>Estratificación Aseo</b>";
                        select[8] = "<b>Unidades Acueducto</b>";
                        select[9] = "<b>Unidades Alcantarillado</b>";
                        select[10] = "<b>Unidades Aseo</b>";
                        select[11] = "<b>Tipo de Propiedad Prestadores</b>";           
                        select[12] = "<b>Fotografias</b>";
                        sel[0] = values.manzana_co;
                        sel[1] = values.codigo;
                        sel[2] = values.codigo_ant;
                        sel[3] = direccion[0];
                        sel[4] = values.estratific;
                        sel[5] = estacueducto;
                        sel[6] = estalcantarillado;
                        sel[7] = estaseo;
                        sel[8] = values.unid_acu;
                        sel[9] = values.unid_alc;
                        sel[10] = values.unid_aseo;
                        sel[11] = values.tipo_prop_prest; 
                        sel[12] = document.createElement("a");
                        sel[12].id = "img3";
                        sel[12].style = "width: 30px; height: 50px;";
                        sel[12].target = "marco";
                        sel[12].setAttribute("onclick","open_streetview()");
                        sel[7].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                        imag[12] = document.createElement("img");
                        imag[12].id = "im3";
                        imag[12].className = "pequeña";
                        imag[12].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";         
                        stv[12] = document.createElement("a");
                        stv[12].id = "imgstreet1";
                        stv[12].target = "marco";
                        stv[12].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[12].setAttribute("onclick","open_streetview()");  
                        ig[12] = document.createElement("img");
                        ig[12].src = "./imagenes/streetview.png";
                        var campos=12;         
                        }
                        
                    
                        
                    else if(modulo=='catastro'){
                        select[0] = "<b>Codigo Manzana</b>";
                        select[1] = "<b>Codigo Catastral Nuevo</b>";
                        select[2] = "<b>Codigo Catastral Anterior</b>";
                        select[3] = "<b>Dirección</b>"; 
                        select[4] = "<b>Código ZHG</b>"; 
                        select[5] = "<b>Valor m2 ZHG</b>";
                        select[6] = "<b>Código ZHF</b>";
                        select[7] = "<b>Uso Permitido</b>";
                        select[8] = "<b>Uso Actual</b>";
                        select[9] = "<b>Fotografias</b>";  
                        sel[0] = values.manzana_co;
                        sel[1] = values.codigo;
                        sel[2] = values.codigo_ant;
                        sel[3] = direccion[0];
                        sel[4] = values.zhg;
                        sel[5] = values.valor_m2_zhg;
                        sel[6] = values.zhf;
                        sel[7] = values.norma_uso;
                        sel[8] = values.uso_actual_zhf; 
                        sel[9] = document.createElement("a");
                        sel[9].id = "img1";
                        sel[9].style = "width: 30px; height: 50px;";
                        sel[9].target = "marco";
                        sel[9].setAttribute("onclick","open_streetview()");
                        sel[9].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";  
                        imag[9] = document.createElement("img");
                        imag[9].id = "im1";
                        imag[9].className = "pequeña";
                        imag[9].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";         
                        stv[9] = document.createElement("a");
                        stv[9].id = "imgstreet1";
                        stv[9].target = "marco";
                        stv[9].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[9].setAttribute("onclick","open_streetview()");  
                        ig[9] = document.createElement("img");
                        ig[9].src = "./imagenes/streetview.png";
                        var campos=9;
                        }
                        
                     
                      else if(modulo=='hacienda'){
                        select[0] = "<b>Codigo Manzana</b>";
                        select[1] = "<b>Codigo Catastral Nuevo</b>";
                        select[2] = "<b>Codigo Catastral Anterior</b>";
                        select[3] = "<b>Dirección</b>"; 
                        select[4] = "<b>Estrato</b>"; 
                        select[5] = "<b>Destino Económico</b>";
                        select[6] = "<b>Avalúo Catastral 2017</b>";
                        select[7] = "<b>Impuesto Predial 2017</b>";
                        select[8] = "<b>Área de Terreno (m2)</b>";  
                        select[9] = "<b>Área Construida (m2)</b>";
                        select[10] = "<b>Fotografias</b>";  
                        sel[0] = values.manzana_co;
                        sel[1] = values.codigo;
                        sel[2] = values.codigo_ant;
                        sel[3] = direccion[0];
                        sel[4] = values.estrato_hacienda;
                        sel[5] = values.destino_hacienda;
                        sel[6] = values.avaluo_hacienda;
                        sel[7] = values.impuesto_hacienda;  
                        sel[8] = values.area_terreno_hacienda;
                        sel[9] = values.area_construida_hacienda;  
                        sel[10] = document.createElement("a");
                        sel[10].id = "img1";
                        sel[10].style = "width: 30px; height: 50px;";
                        sel[10].target = "marco";
                        sel[10].setAttribute("onclick","open_streetview()");
                        sel[10].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";  
                        imag[10] = document.createElement("img");
                        imag[10].id = "im1";
                        imag[10].className = "pequeña";
                        imag[10].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";         
                        stv[10] = document.createElement("a");
                        stv[10].id = "imgstreet1";
                        stv[10].target = "marco";
                        stv[10].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[10].setAttribute("onclick","open_streetview()");  
                        ig[10] = document.createElement("img");
                        ig[10].src = "./imagenes/streetview.png";
                        var campos=10;
                        }   
                        
                        
                        
                    else if(modulo=='totem'){     
                    var estacueducto = values.estrato_acueducto;
                    var estalcantarillado = values.estrato_alcantarillado;
                    var estaseo = values.estrato_aseo;
                    if(estacueducto==11){
                        estacueducto = 'Industria (11)';
                    };
                    if(estacueducto==12){
                        estacueducto = 'Comercial (12)';
                    };
                    if(estacueducto==13){
                        estacueducto = 'Especial (13)';
                    };
                    if(estacueducto==14){
                        estacueducto = 'Oficial (14)';
                    };
                    if(estalcantarillado==11){
                        estalcantarillado = 'Industria (11)';
                    };
                    if(estalcantarillado==12){
                        estalcantarillado = 'Comercial (12)';
                    };
                    if(estalcantarillado==13){
                        estalcantarillado = 'Especial (13)';
                    };
                    if(estalcantarillado==14){
                        estalcantarillado = 'Oficial (14)';
                    };
                    if(estaseo==11){
                        estaseo = 'Industria (11)';
                    };
                    if(estaseo==12){
                        estaseo = 'Comercial (12)';
                    };
                    if(estaseo==13){
                        estaseo = 'Especial (13)';
                    };
                    if(estaseo==14){
                        estaseo = 'Oficial (14)';
                    };
   
                    select[0] = "<b>Localidad</b>";  
                    select[1] = "<b>Barrio</b>" 
                    select[2] = "<b>Codigo Manzana</b>";
                    select[3] = "<b>Codigo Catastral Nuevo</b>";
                    select[4] = "<b>Codigo Catastral Anterior</b>";
                    select[5] = "<b>Dirección</b>";  
                    select[6] = "<b>Estratificación Acueducto</b>";
                    select[7] = "<b>Estratificación Alcantarillado</b>";
                    select[8] = "<b>Estratificación Aseo</b>";       
                    select[9] = "<b>Fotografias</b>"; 
                    sel[0] = values.nombre_loc;
                    sel[1] = values.cod_barrio; 
                    sel[2] = values.manzana_co;
                    sel[3] = values.codigo;
                    sel[4] = values.codigo_ant;
                    sel[5] = direccion[0];  
                    sel[6] = estacueducto;
                    sel[7] = estalcantarillado;
                    sel[8] = estaseo;
                    sel[9] = document.createElement("a");
                    sel[9].id = "img1";
                    sel[9].style = "width: 30px; height: 50px;";
                    sel[9].target = "marco";
                    sel[9].setAttribute("onclick","open_streetview()");
                    sel[9].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    imag[9] = document.createElement("img");
                    imag[9].id = "im1";
                    imag[9].className = "pequeña";
                    imag[9].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";         
                    stv[9] = document.createElement("a");
                    stv[9].id = "imgstreet1";
                    stv[9].target = "marco";
                    stv[9].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[9].setAttribute("onclick","open_streetview()");  
                    ig[9] = document.createElement("img");
                    ig[9].src = "./imagenes/streetview.png";
                        var campos=9;         
                        }
                                  
                     for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        
                        if (i === campos){
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);
                            
                        }else{
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";

                        var c = feature.values_.geom.flatCoordinates.length - 1;
                        for (var i = 0; i <= c; i = i + 3) {
                            var a = feature.values_.geom.flatCoordinates[i];
                            feature.values_.geom.flatCoordinates[i] = feature.values_.geom.flatCoordinates[i + 1];
                            feature.values_.geom.flatCoordinates[i + 1] = a;
                        }
                        feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                        highlightfeatures.setStyle(PredioStyle);
                        var markerSourcenoph = highlightfeatures.getSource();
                        markerSourcenoph.clear();
                        markerSourcenoph.addFeature(feature);
                    }
                }
            }
        });
    }
    if (url2) {
        if (infoFormat === 'text/html') {
            popup.setPosition(evt.coordinate);
            popup.setContent('<iframe seamless frameborder="0" src="' + url2 + '"></iframe>');
            popup.show();
        } else {
            $.ajax({
                url: url2,
                success: function (data) {
                    var features = format[1].readFeatures(data);
                    if (features && features.length >= 1 && features[0]) {
                        var feature = features[0];
                        //console.log(feature);
                        var html = '<br/><table class="table table-striped table-bordered table-condensed"><tr><td colspan="2"><b>TRANSMETRO</b></td></tr>';
                        var values = feature.getProperties();
                        var hasContent = false;
                        html += '<tr><td><b>Nombre</b></td><td>' + values.nombre + '</td></tr>';
                        html += '<tr><td><b>Información</b></td><td>' + '<a href="http://www.transmetro.gov.co/estaciones/' + values.link + '" target="_blank"><img src="./imagenes/rutastransmetro.png" >' + '</td></tr>';
                        html += '<tr><td><b>Ver en:</b></td><td>' + '<a href="street_view.html?coordenadas=' + values.geom.flatCoordinates + '" target="marco" onclick="open_streetview()"><img src="./imagenes/streetview.png">' + '</td></tr></table>';
                        hasContent = true;
                        for (var key in values) {
                            if (key !== 'the_geom' && key !== 'boundedBy') {
                                //html += '<tr><td>' + key + '</td><td>' + values[key] + '</td></tr>';
                                hasContent = true;
                            }
                        }
                        if (hasContent === true) {
                            popup.setPosition(evt.coordinate);
                            popup.setContent(html);
                            popup.show();
                        }
                        //feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                        highlight.getSource().addFeature(feature);
                    }
                }
            });
        }
    }
    if (url3) {
        $.ajax({
            url: url3,
            success: function (data) {;
                var features = format[2].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    //console.log("url3= " + feature);
                    var values = feature.getProperties();
                    document.getElementById("botonminimizarpuntosaaa").style.display = "block";
                    document.getElementById("botonmaximizarpuntosaaa").style.display = "none";
                    document.getElementById("statistics").style.display = "none";
                    document.getElementById("botonocultarstatistics").style.display = "none";
                    document.getElementById('coddireccionpuntosaaa').innerHTML = values.dir_origin;
                    document.getElementById('imgstreetpuntosaaa').href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    document.getElementById("panel_atributos_puntos_aaa").style.display = "block";
                    document.getElementById("tablaatributospuntosaaa").style.display = "block";
                    //document.getElementById("botonocultarpanelatributospuntosaaa").style.display = "block";
                    var c = feature.values_.geom.flatCoordinates.length - 1;
                    for (var i = 0; i <= c; i = i + 3) {
                        var a = feature.values_.geom.flatCoordinates[i];
                        feature.values_.geom.flatCoordinates[i] = feature.values_.geom.flatCoordinates[i + 1];
                        feature.values_.geom.flatCoordinates[i + 1] = a;
                    }
                    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                    highlight.setStyle(PuntoStyle);
                    var markerSourcepuntosaaa = highlight.getSource();
                    markerSourcepuntosaaa.clear();
                    markerSourcepuntosaaa.addFeature(feature);
                }
            }
        });
    }
});
/*map.getView().on('propertychange', function(e) {
 switch (e.key) {
 case 'resolution':
 //console.log(map.getView().getZoom());
 if (map.getView().getZoom()>=12){
 ortofotourbana.setVisible(true);            
 }else{
 ortofotourbana.setVisible(false);
 }
 //.get["[[Scopes]]"]["0"].zoom
 break;
 }
 });*/

//herramienta medir
var sketch;
var helpTooltipElement;
var helpTooltip;
var measureTooltipElement;
var measureTooltip;
var continueLineMsg = 'Click to continue drawing the line';
var source = new ol.source.Vector();
var draw; // global so we can remove it later
function addInteraction() {
    var type = 'LineString';
    draw = new ol.interaction.Draw({
        source: source,
        type: /** @type {ol.geom.GeometryType} */ (type),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)'
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                })
            })
        })
    });
    //map.addInteraction(draw);
    createMeasureTooltip();
    createHelpTooltip();
    var listener;
    draw.on('drawstart',
            function (evt) {
                // set sketch
                sketch = evt.feature;
                /** @type {ol.Coordinate|undefined} */
                var tooltipCoord = evt.coordinate;
                listener = sketch.getGeometry().on('change', function (evt) {
                    var geom = evt.target;
                    var output;
                    output = formatLength(/** @type {ol.geom.LineString} */ (geom));
                    tooltipCoord = geom.getLastCoordinate();
                    measureTooltipElement.innerHTML = output;
                    measureTooltip.setPosition(tooltipCoord);
                });
            }, this);
    draw.on('drawend',
            function (evt) {
                measureTooltipElement.className = 'tooltip tooltip-static';
                measureTooltip.setOffset([0, -7]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                measureTooltipElement = null;
                createMeasureTooltip();
                ol.Observable.unByKey(listener);
            }, this);
}

/**
 * Creates a new help tooltip
 */
function createHelpTooltip() {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip hidden';
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left'
    });
    map.addOverlay(helpTooltip);
}

/**
 * Creates a new measure tooltip
 */
function createMeasureTooltip() {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
    });
    map.addOverlay(measureTooltip);
}

var wgs84Sphere = new ol.Sphere(6378137);
/**
 * format length output
 * @param {ol.geom.LineString} line
 * @return {string}
 */
var formatLength = function (line) {
    var length;
    length = Math.round(line.getLength() * 100) / 100;
    var output;
    if (length > 100) {
        output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
    } else {
        output = (Math.round(length * 100) / 100) + ' ' + 'm';
    }
    return output;
};
addInteraction();
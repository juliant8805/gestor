var BarrioStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    /*fill : new ol.style.Fill({
     color : "rgba(0,0,255,0.7)"
     })*/

    text: new ol.style.Text({
        font: '12px helvetica,sans-serif',
        scale: 1.5,
        fill: new ol.style.Fill({
            color: '#000000'
        }),
        stroke: new ol.style.Stroke({
            color: '#FFFFFF',
            width: 3.5
        })
    })
});


var PredioStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    fill: new ol.style.Fill({
        color: "rgba(0,255,255,0.3)"
    })
});

var PuntoStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",

    }),
    fill: new ol.style.Fill({
        color: "rgba(0,255,255,0.3)"
    })
});


// A point marker style using a flag image as the icon.
var flagStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.2, 0.9],
        opacity: 0.75,
        scale: 0.25,
        src: './imagenes/flag.png'
    })
});
var street1 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/1.png'
    })
});
var street2 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/2.png'
    })
});
var street3 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/3.png'
    })
});
var street4 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/4.png'
    })
});
var street5 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/5.png'
    })
});
var street6 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],

        scale: 1,
        src: './imagenes/street/6.png'
    })
});
var street7 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/7.png'
    })
});
var street8 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/8.png'
    })
});
var street9 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/9.png'
    })
});
var street10 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/10.png'
    })
});
var street11 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/11.png'
    })
});
var street12 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/12.png'
    })
});
var street13 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/13.png'
    })
});
var street14 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/14.png'
    })
});
var street15 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/15.png'
    })
});
var street16 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/16.png'
    })
});
var ubicacion = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        opacity: 1,
        scale: 0.3,
        src: './imagenes/ubicacion.png'
    })
});
//AUTOCOMPLETE INITIAL
$("#direccion").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#address1").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#direccion_gestor").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#cedul").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#barrio").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#comuna").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#localidad").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#manzana").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#codigo").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#matricula").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#propietarios").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#input_ladomanzana").autocomplete({
    minLength: 1,
    source: addressSource,
    select: ladomanzanaSelect
});
$("#input_predioshasusos").autocomplete({
    minLength: 1,
    source: addressSource,
    select: predioshasusosSelect
});

//FORMAT STRING
function viewparamsToStr(obj) {
    var str = '';
    $.each(obj, function (k, v) {
        str.length && (str += ';');
        str += k + ':' + v;
    });
    return str;
}

function addressSource(requestString, responseFunc) {
    //console.log(requestString);
    //globalstyle = "sinconsulta";
    predio.setVisible(true);
    //console.log(requestString);
    // Strip crazy (non-alpha) characters from the input string.
    var querystr = requestString.term.replace(/[^0-9a-zA-Z ]/g, "");
    //console.log(querystr);
    // If there's nothing left after stripping, just return null.
    if (querystr.length === 0) {
        response([]);
        return;
    }
    // Form the input parameters into a standard viewparams
    // object string.
    var viewParamsStr = viewparamsToStr({
        query: querystr
    });
    // Set up the parameters for our WFS call to the address_autocomplete
    // web service.


    //busqueda direccion y codigo en reg
    if (requestString.val === "direccion") {
        //console.log(4);
        var tempname = "preproduccion:codigo_autocompletar";
        var temp = "codigo";
    } else if ($("#direccion")["0"].value !== "") {
        var tempname = "preproduccion:buscar_direccion_registro1";
        var temp = "direccion";
    }

    //busqueda cod en reg 
    else if ($("#codigo")["0"].value !== "") {
        // var tempname = "preproduccion:codigo_autocompletar";
        var tempname = "preproduccion:buscar_cod_reg";
        var temp = "cod";//no significa que este buscando por direccion; busqueda por codigo
        //console.log(codigo);
    } else if ($("#propietarios")["0"].value !== "") {
        var tempname = "preproduccion:buscar_propietario_reg";
        var temp = "propietario";
    } else if ($("#cedul")["0"].value !== "") {
        var tempname = "preproduccion:buscar_cedula_reg";
        var temp = "cedula";
    } else if ($("#matricula")["0"].value !== "") {
        var tempname = "preproduccion:buscar_matricula_reg";
        var temp = "matricula";
    } else if ($("#address1")["0"].value !== "") {
        var tempname = "preproduccion:sitios_autocompletar";
        var temp = "address1";
    } else if ($("#direccion_gestor")["0"].value !== "") {
        var tempname = "preproduccion:buscar_dir_gestor";
        var temp = "direcci";
    } else if ($("#barrio")["0"].value !== "") {
        var tempname = "preproduccion:buscar_barrio";
        var temp = "nombre";
    } else if ($("#comuna")["0"].value !== "") {
        var tempname = "preproduccion:buscar_comuna";
        var temp = "nombre";
    } else if ($("#localidad")["0"].value !== "") {
        var tempname = "preproduccion:buscar_localidad";
        var temp = "nombre";
    } else if ($("#manzana")["0"].value !== "") {
        var tempname = "preproduccion:buscar_manzana";
        var temp = "codigo";
    } else if ($("#input_ladomanzana")["0"].value !== "") {
        var tempname = "preproduccion:ladomanzana_autocompletar";
        var temp = "lado_manza";
    } else if ($("#input_predioshasusos")["0"].value !== "") {
        var tempname = "preproduccion:predioshasusos_autocompletar";
        var temp = "referencia";
    }
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: tempname,
        outputFormat: 'application/json',
        srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };
    $.ajax({
        url: url,
        data: wfsParams,
        type: "GET",
        dataType: "json",
        success: function (data, status, xhr) {
            var geojson = new ol.source.GeoJSON({
                object: data
            });
            var arr = [];
            if (temp === "direccion") {
                //console.log(data.features);
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        //label: data.features[i].properties.direccion,
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.direccion,
                        feature: data
                    });
                }
            } else if (temp === "cod") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.codigo,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "matricula") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.matricula,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "propietario") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.propietario,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "cedula") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.cedula,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else {
                geojson.forEachFeature(function (feat) {
                    arr.push({
                        label: feat.get(temp),
                        value: feat.get(temp),
                        feature: feat,
                        direccionoriginal: requestString.direccionoriginal
                    });

                });
            }
            if (arr.length !== 0) {
                if (requestString.val === "direccion") {
                    var arreglado = {};
                    for (var i = 0; i < arr.length; ++i) {
                        arreglado[i] = arr[i];
                    }
                    arreglado.item = arreglado["0"];
                    addressSelect(1, arreglado);
                }
                try {
                    responseFunc(arr);
                } catch (err) {
                }
            } else {
                if (temp === 'direcci') {
                    //console.log(viewParamsStr);
                    codeAddress(viewParamsStr);
                } else {
                    arr[0] = "No se encuentra informacion geografica asociada a la consulta";
                    responseFunc(arr);
                }
            }
        },
        error: function () {
            console.log("error");
        }

    });

}
function addressSelect(event, ui) {
    //console.log(ui);
    //var select = validacionusuarios();
    var consultaregistro = new Object();
    consultaregistro.term = ui.item.codigo;
    consultaregistro.val = "direccion";
    //consultaregistro.direccionoriginal = ui.item.value;
    //consultaregistro.direccion = ui.item.direccion;
    if (ui.item.direccion) {
        consultaregistro.direccionoriginal = ui.item.direccion;
    } else {
        consultaregistro.direccionoriginal = ui.item.value;
    }
    try {
        if (!ui.item.feature.features["0"].geometry) {
            //console.log(1);
            addressSource(consultaregistro);
            return;
        }
    } catch (err) {
        //console.log(2);
    }
    var feat = ui.item.feature;
    globalstyle = "sinconsulta";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    values = feat.values_.codigo;
    var geom = feat.getGeometry();

    highlightfeatures.setStyle(PredioStyle);
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSourceAlineamiento.clear();
    markerSourceAlineamiento.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    //var select = validacionusuarios();
    //console.log(modulo);
    if (modulo === 'planeacion') {
        predio.setVisible(true);
        /*document.getElementById("panel_atributos").style.display = "block";
         document.getElementById("tablaatributos").style.display = "block";
         document.getElementById("botonocultarpanelatributos").style.display = "block";*/
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                //console.log(format[0]);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
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
                    var codfoto = values.codigo_ant.substring(0, 17);
                    select[0] = "<b>Codigo Manzana</b>";
                    select[1] = "<b>Codigo Catastral Nuevo</b>";
                    select[2] = "<b>Codigo Catastral Anterior</b>";
                    select[3] = "<b>Dirección</b>";
                    select[4] = "<b>Estratificación Oficial</b>";
                    select[5] = "<b>Remoción en Masa</b>";
                    select[6] = "<b>Amenaza de Inundación</b>";
                    select[7] = "<b>Fotografias</b>";
                    //select[8] = "<b>Street View</b>";
                    sel[0] = values.manzana_co;
                    sel[1] = values.codigo;
                    sel[2] = values.codigo_ant;
                    sel[3] = ui.item.direccionoriginal;
                    sel[4] = values.estratific;
                    sel[5] = values.remosion;
                    sel[6] = values.inundacion;
                    sel[7] = document.createElement("a");
                    sel[7].id = "img1";
                    sel[7].style = "width: 30px; height: 50px;";
                    sel[7].target = "marco";
                    sel[7].setAttribute("onclick", "open_streetview()");
                    //sel[7].onclick = "open_streetview()";
                    sel[7].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    imag[7] = document.createElement("img");
                    imag[7].id = "im1";
                    imag[7].className = "pequeña";
                    imag[7].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    stv[7] = document.createElement("a");
                    stv[7].id = "imgstreet1";
                    stv[7].target = "marco";
                    stv[7].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
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
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'catastro') {
        predio.setVisible(true);

        $.ajax({
            url: url,
            success: function (data) {
                var features = format[0].readFeatures(data);
                //console.log(features);
                //console.log(ui);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
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
                    var codfoto = values.codigo_ant.substring(0, 17);


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
                    sel[3] = ui.item.direccionoriginal;
                    sel[4] = values.zhg;
                    sel[5] = values.valor_m2_zhg;
                    sel[6] = values.zhf;
                    sel[7] = values.norma_uso;
                    sel[8] = values.uso_actual_zhf;

                    sel[9] = document.createElement("a");
                    sel[9].id = "img1";
                    sel[9].style = "width: 30px; height: 50px;";
                    sel[9].target = "marco";
                    sel[9].setAttribute("onclick", "open_streetview()");
                    //sel[7].onclick = "open_streetview()";
                    sel[9].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    imag[9] = document.createElement("img");
                    imag[9].id = "im1";
                    imag[9].className = "pequeña";
                    imag[9].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    stv[9] = document.createElement("a");
                    stv[9].id = "imgstreet1";
                    stv[9].target = "marco";
                    stv[9].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[9].setAttribute("onclick", "open_streetview()");
                    ig[9] = document.createElement("img");
                    ig[9].src = "./imagenes/streetview.png";

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];

                        if (i === 9) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'hacienda') {
        predio.setVisible(true);
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                //console.log(format[0]);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
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
                    var codfoto = values.codigo_ant.substring(0, 17);
                    select[0] = "<b>Codigo Manzana</b>";
                    select[1] = "<b>Codigo Catastral Nuevo</b>";
                    select[2] = "<b>Codigo Catastral Anterior</b>";
                    select[3] = "<b>Dirección</b>";
                    select[4] = "<b>Estrato</b>";
                    select[5] = "<b>Destino</b>";
                    select[6] = "<b>Avalúo Catastral 2017</b>";
                    select[7] = "<b>Impuesto Predial 2017</b>";
                    select[8] = "<b>Area de Terreno (m2)</b>";
                    select[9] = "<b>Area Construida (m2)</b>"
                    select[10] = "<b>Fotografias</b>";      
                    sel[0] = values.manzana_co;
                    sel[1] = values.codigo;
                    sel[2] = values.codigo_ant;
                    sel[3] = ui.item.direccionoriginal;
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
                    
                     for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i+1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        
                        if (i === 10){
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    } else if (modulo === 'sui') {
        predio.setVisible(true);
        //document.getElementById("panel_atributos_sui").style.display = "block";
        //document.getElementById("tablaatributossui").style.display = "block";
        //document.getElementById("botonminimizarsui").style.display = "block";  
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var estacueducto = values.estrato_acueducto;
                    var estalcantarillado = values.estrato_alcantarillado;
                    var estaseo = values.estrato_aseo;
                    if (estacueducto == 11) {
                        estacueducto = 'Industria (11)';
                    }
                    ;
                    if (estacueducto == 12) {
                        estacueducto = 'Comercial (12)';
                    }
                    ;
                    if (estacueducto == 13) {
                        estacueducto = 'Especial (13)';
                    }
                    ;
                    if (estacueducto == 14) {
                        estacueducto = 'Oficial (14)';
                    }
                    ;
                    if (estalcantarillado == 11) {
                        estalcantarillado = 'Industria (11)';
                    }
                    ;
                    if (estalcantarillado == 12) {
                        estalcantarillado = 'Comercial (12)';
                    }
                    ;
                    if (estalcantarillado == 13) {
                        estalcantarillado = 'Especial (13)';
                    }
                    ;
                    if (estalcantarillado == 14) {
                        estalcantarillado = 'Oficial (14)';
                    }
                    ;
                    if (estaseo == 11) {
                        estaseo = 'Industria (11)';
                    }
                    ;
                    if (estaseo == 12) {
                        estaseo = 'Comercial (12)';
                    }
                    ;
                    if (estaseo == 13) {
                        estaseo = 'Especial (13)';
                    }
                    ;
                    if (estaseo == 14) {
                        estaseo = 'Oficial (14)';
                    }
                    ;

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
                    var codfoto = values.codigo_ant.substring(0, 17);
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
                    sel[3] = ui.item.direccionoriginal;
                    sel[4] = values.estratific;
                    sel[5] = estacueducto;
                    sel[6] = estalcantarillado;
                    sel[7] = estaseo;
                    sel[8] = values.unid_acu;
                    sel[9] = values.unid_alc;
                    sel[10] = values.unid_aseo;
                    sel[11] = values.tipo_prop_prest;
                    sel[12] = document.createElement("a");
                    sel[12].id = "img1";
                    sel[12].style = "width: 30px; height: 50px;";
                    sel[12].target = "marco";
                    sel[12].setAttribute("onclick", "open_streetview()");
                    sel[12].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    imag[12] = document.createElement("img");
                    imag[12].id = "im1";
                    imag[12].className = "pequeña";
                    imag[12].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    stv[12] = document.createElement("a");
                    stv[12].id = "imgstreet1";
                    stv[12].target = "marco";
                    stv[12].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[12].setAttribute("onclick", "open_streetview()");
                    ig[12] = document.createElement("img");
                    ig[12].src = "./imagenes/streetview.png";

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];

                        if (i === 12) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";

                }
            }

        });

    } else if (modulo === 'totem') {
        predio.setVisible(true);
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var estacueducto = values.estrato_acueducto;
                    var estalcantarillado = values.estrato_alcantarillado;
                    var estaseo = values.estrato_aseo;
                    if (estacueducto == 11) {
                        estacueducto = 'Industria (11)';
                    }
                    ;
                    if (estacueducto == 12) {
                        estacueducto = 'Comercial (12)';
                    }
                    ;
                    if (estacueducto == 13) {
                        estacueducto = 'Especial (13)';
                    }
                    ;
                    if (estacueducto == 14) {
                        estacueducto = 'Oficial (14)';
                    }
                    ;
                    if (estalcantarillado == 11) {
                        estalcantarillado = 'Industria (11)';
                    }
                    ;
                    if (estalcantarillado == 12) {
                        estalcantarillado = 'Comercial (12)';
                    }
                    ;
                    if (estalcantarillado == 13) {
                        estalcantarillado = 'Especial (13)';
                    }
                    ;
                    if (estalcantarillado == 14) {
                        estalcantarillado = 'Oficial (14)';
                    }
                    ;
                    if (estaseo == 11) {
                        estaseo = 'Industria (11)';
                    }
                    ;
                    if (estaseo == 12) {
                        estaseo = 'Comercial (12)';
                    }
                    ;
                    if (estaseo == 13) {
                        estaseo = 'Especial (13)';
                    }
                    ;
                    if (estaseo == 14) {
                        estaseo = 'Oficial (14)';
                    }
                    ;

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
                    var codfoto = values.codigo_ant.substring(0, 17);

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
                    sel[5] = ui.item.direccionoriginal;

                    sel[6] = estacueducto;
                    sel[7] = estalcantarillado;
                    sel[8] = estaseo;


                    sel[9] = document.createElement("a");
                    sel[9].id = "img1";
                    sel[9].style = "width: 30px; height: 50px;";
                    sel[9].target = "marco";
                    sel[9].setAttribute("onclick", "open_streetview()");
                    sel[9].href = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";


                    imag[9] = document.createElement("img");
                    imag[9].id = "im1";
                    imag[9].className = "pequeña";
                    imag[9].src = "http://35.184.3.4/gesstor/fotografias/" + codfoto + "/1.jpg";
                    stv[9] = document.createElement("a");
                    stv[9].id = "imgstreet1";
                    stv[9].target = "marco";
                    stv[9].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[9].setAttribute("onclick", "open_streetview()");
                    ig[9] = document.createElement("img");
                    ig[9].src = "./imagenes/streetview.png";

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];

                        if (i === 9) {
                            cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";

                }
            }

        });

    }


    try {
        if (globalstyle) {
            rangoarea(globalstyle);
        }
    } catch (err) {
        sinconsulta();
    }

}

function PlaceSelect(event, ui) {
    var view = map.getView();
    var feat = ui.item.feature;
    var values = feat.values_;
    var geom = feat.getGeometry();
    var coord = values.geometry.flatCoordinates;
    //console.log(coord);
    var transf = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
    //console.log(transf);
    var transf1 = (transf[1]);
    var transf2 = (transf[0]);
    var transf = [transf[1], transf[0], 0];
    //console.log(transf);

    view.setCenter(geom.getFirstCoordinate());
    view.setZoom(18);
    highlight.setStyle(flagStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    var table = document.getElementById("tblatt");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.colSpan = 2;
    cell1.innerHTML = "<b>INFORMACION SITIO</b>";
    var select = [];
    var sel = [];
    var imag = [];
    var stv = [];
    var ig = [];
    select[0] = "<b>Nombre</b>";
    select[1] = "<b>Tipo</b>";
    select[2] = "<b>Street View</b>";
    sel[0] = values.address1;
    sel[1] = values.tipo;
    stv[2] = document.createElement("a");
    stv[2].id = "imgstreetsitio";
    stv[2].target = "marco";
    stv[2].href = "street_view.html?coordenadas=" + transf;
    //console.log(transf);
    stv[2].setAttribute("onclick", "open_streetview()");
    ig[2] = document.createElement("img");
    ig[2].src = "./imagenes/streetview.png";
    for (i = 0; i < select.length; i++) {
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = select[i];
        if (i === 2) {
            cell2.appendChild(stv[i]);
            stv[i].appendChild(ig[i]);
        } else {
            cell2.innerHTML = sel[i];
        }
    }
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("botonminimizar").style.display = "block";
}
function PoligonSelect(event, ui) {
    var view = map.getView();
    var feat = ui.item.feature;
    values = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 200;
    ppExtent[2] = ppExtent[2] + 200;
    ppExtent[1] = ppExtent[1] - 200;
    ppExtent[3] = ppExtent[3] + 200;
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    //view.setZoom(16);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[2].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (globalstyle === "sinconsulta") {
        sinconsulta();
    } else {
        rangoarea(globalstyle);
    }
}
function manzanaSelect(event, ui) {
    var view = map.getView();
    var feat = ui.item.feature;
    //console.log(feat);
    values = feat.values_.codigo;
    BarrioStyle.text_.scale_ = 1;
    BarrioStyle.text_.text_ = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (globalstyle === "sinconsulta") {
        sinconsulta();
    } else {
        rangoarea(globalstyle);
    }
}


function ladomanzanaSelect(event, ui) {
    document.getElementById("panel_atributos_predioshasusos").style.display = "none";
    document.getElementById("tablaatributospredioshasusos").style.display = "none";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    //document.getElementById("panel_atributos_alineamiento").style.display = "block";
    //document.getElementById("tablaatributosalineamiento").style.display = "block";
    //document.getElementById("botonminimizar").style.display = "block";  
    //document.getElementById("botonmaximizarhasusos").style.display = "none";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSourceAlineamiento.clear();
    markerSourceAlineamiento.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var ladoman = feat.values_.lado_manza;
    predio.setVisible(true);
    $.ajax({
        success: function (data) {
            var table = document.getElementById("tblatt");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.colSpan = 2;
            cell1.innerHTML = "<b>LADO DE MANZANA</b>";
            var select = [];
            var sel = [];
            select[0] = "<b>Codigo Manzana</b>";
            select[1] = "<b>Lado de Manzana</b>";
            select[2] = "<b>Perfil</b>";
            select[3] = "<b>Nombre de Perfil</b>";
            select[4] = "<b>Lb_Lc</b>";
            sel[0] = feat.values_.codigo;
            sel[1] = feat.values_.lado_manza;
            sel[2] = feat.values_.perfil;
            sel[3] = feat.values_.nom_perfil;
            sel[4] = feat.values_.lb_lc;
            for (i = 0; i < select.length; i++) {
                row = table.insertRow(i + 1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = select[i];
                if (i === 6) {
                    cell2.appendChild(sel[i]);

                    cell2.appendChild(stv[i]);
                    ;
                    stv[i].appendChild(ig[i]);
                } else {
                    cell2.innerHTML = sel[i];
                }
            }
            document.getElementById("panel_atr").style.display = "block";
            document.getElementById("botonminimizar").style.display = "block";
        }
    });

}

function predioshasusosSelect(event, ui) {
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "none";
    document.getElementById("tablaatributosalineamiento").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "none";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourcehasusos = highlightfeatures.getSource();
    markerSourcehasusos.clear();
    markerSourcehasusos.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url5 = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (url5) {
        predio.setVisible(true);
        $.ajax({
            url: url5,
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var referencia = "'" + values.referencia + "'";
                    var grupo = select_query("SELECT actividad FROM predioshasusos where referencia =" + referencia + "");
                    //var tablahasusos = ("<table max-width=20 border=1>"); 
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION USOS</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var tablahasusos = ("<table max-width=20 border=1>");
                    for (i = 0; i < grupo.length; i++) {
                        tablahasusos += ("<tr>");
                        tablahasusos += ("<td><b>" + grupo[i] + "</b></td>");
                        tablahasusos += ("</tr>");
                    }
                    tablahasusos += ("</table>");
                    select[0] = "<b>Referencia Catastral</b>";
                    select[1] = "<b>Usos Permitidos</b>";
                    select[2] = "<b>Street View</b>";
                    sel[0] = values.referencia;
                    sel[1] = tablahasusos;
                    stv[2] = document.createElement("a");
                    stv[2].id = "imgstreet1";
                    stv[2].target = "marco";
                    stv[2].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[2].setAttribute("onclick", "open_streetview()");

                    ig[2] = document.createElement("img");

                    ig[2].src = "./imagenes/streetview.png";

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];

                        if (i === 2) {
                            //cell2.appendChild(sel[i]);
                            //cell2.appendChild(imag[i]);
                            //sel[i].appendChild(imag[i]);
                            cell2.appendChild(stv[i]);
                            //cell2.appendChild(ig[i]);
                            stv[i].appendChild(ig[i]);

                            //document.getElementById("ig").onclick=open_streetview();
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    }
}

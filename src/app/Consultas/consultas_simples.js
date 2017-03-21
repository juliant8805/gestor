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
    fill : new ol.style.Fill({
     color : "rgba(0,255,255,0.3)"
     }) 
});

var PuntoStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        
    }),
    fill : new ol.style.Fill({
     color : "rgba(0,255,255,0.3)"
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
});var street5 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/5.png'
    })
});var street6 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        
        scale: 1,
        src: './imagenes/street/6.png'
    })
});var street7 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],       
        scale: 1,
        src: './imagenes/street/7.png'
    })
});var street8 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/8.png'
    })
});var street9 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/9.png'
    })
});var street10 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/10.png'
    })
});var street11 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/11.png'
    })
});var street12 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/12.png'
    })
});var street13 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/13.png'
    })
});var street14 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/14.png'
    })
});var street15 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],        
        scale: 1,
        src: './imagenes/street/15.png'
    })
});var street16 = new ol.style.Style({
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
$("#nombre_propietario").autocomplete({
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
    //console.log(requestString.val);
    if (requestString.val === "direccion") {
        var tempname = "preproduccion:codigo_autocompletar";
        var temp = "codigo";
    }    
    else if ($("#direccion")["0"].value !== "") {
        var tempname = "preproduccion:buscar_direccion_registro1";
        var temp = "direccion";
    } else if ($("#codigo")["0"].value !== "") {
        var tempname = "preproduccion:codigo_autocompletar";
        var temp = "codigo";
        //console.log(codigo);
    } else if ($("#matricula")["0"].value !== "") {
        var tempname = "preproduccion:matricula_autocompletar";
        var temp = "matricula";
    } else if ($("#address1")["0"].value !== "") {
        var tempname = "preproduccion:sitios_autocompletar";
        var temp = "address1";
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
    }  else if ($("#input_predioshasusos")["0"].value !== "") {
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
            if (temp=="direccion"){
              for (i = 0; i < data.features.length; i++){
               arr.push({
                    //label: data.features[i].properties.direccion,
                    codigo: data.features[i].properties.codigo,
                    value: data.features[i].properties.direccion,
                    feature: data
                });
            };  
        }
            else{
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
                      for (var i = 0; i < arr.length; ++i){
                        arreglado[i] = arr[i];  
                      }
                      arreglado.item = arreglado["0"];    
                     addressSelect(1,arreglado);
                }
                try{
                    responseFunc(arr);
                }catch(err){};
                
            } else {
                arr[0] = "No se encuentra informacion geografica asociada a la consulta";
                responseFunc(arr);
            }
        }
      
    });
    
}
function addressSelect(event, ui) {
    //var select = validacionusuarios();
    var consultaregistro = new Object();
    consultaregistro.term = ui.item.codigo;
    consultaregistro.val = "direccion";
    consultaregistro.direccionoriginal = ui.item.value;
    try{
    if (!ui.item.feature.features["0"].geometry){
        addressSource(consultaregistro);
        return;
    } 
    }catch(err){} 
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
    ppExtent[0]=ppExtent[0]-40;
    ppExtent[2]=ppExtent[2]+40;
    ppExtent[1]=ppExtent[1]-40;
    ppExtent[3]=ppExtent[3]+40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat    
    });
	var select = validacionusuarios();
	try {
	if (select[0][9] === 't') {
    if (url) {
        predio.setVisible(true);
         document.getElementById("panel_atributos").style.display = "block";
         document.getElementById("tablaatributos").style.display = "block";
         document.getElementById("botonocultarpanelatributos").style.display = "block";
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                //console.log(format[0]);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                        document.getElementById('codmanzana').innerHTML=values.manzana_co;
                        document.getElementById('codcatastral').innerHTML=values.codigo;  
                        document.getElementById('coddireccion').innerHTML=ui.item.direccionoriginal;
                        document.getElementById('codestratrificacionmunicipio').innerHTML=values.estratific; 
                        document.getElementById('codremosion').innerHTML = values.remosion;
                        document.getElementById('codinundacion').innerHTML = values.inundacion;
                        document.getElementById('codclasificaciondelsuelo').innerHTML = values.tipo;   
                        document.getElementById('img1').href="./fotografias/" + values.codigo + "/1.png";	
                        document.getElementById('im1').src="./fotografias/" + values.codigo + "/1.png";
                        document.getElementById('img2').href="./fotografias/" + values.codigo + "/2.png";
                        document.getElementById('im2').src="./fotografias/" + values.codigo + "/2.png";
                        document.getElementById('img3').href="./fotografias/" + values.codigo + "/3.png";
                        document.getElementById('im3').src="./fotografias/" + values.codigo + "/3.png";
                        document.getElementById('imgstreet').href="street_view.html?coordenadas=" + values.geom.flatCoordinates;
                } 
            }
        });
    } 
	}
	 } catch (err) {
    };

    try {
	if (select[0][7] === 't') {
       
    if (url) {
        predio.setVisible(true);
        document.getElementById("panel_atributos_sui").style.display = "block";
        document.getElementById("tablaatributossui").style.display = "block";
        document.getElementById("botonminimizarsui").style.display = "block";  
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var estacueducto = values.estrato_acueducto;
                    var estalcantarillado = values.estrato_acueducto;
                    var estaseo = values.estrato_acueducto;
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
                        document.getElementById('codmanzanasui').innerHTML=values.manzana_co;
                        document.getElementById('codcatastralsui').innerHTML=values.codigo;  
                        document.getElementById('coddireccionsui').innerHTML=ui.item.direccionoriginal;
                        document.getElementById('codestratrificacionmunicipiosui').innerHTML=values.estratific;  
                        document.getElementById('codestratrificacionacueducto').innerHTML=estacueducto; 
                        document.getElementById('codestratrificacionalcantarillado').innerHTML=estalcantarillado; 
                        document.getElementById('codestratrificacionaseo').innerHTML=estaseo; 
                        document.getElementById('img1_sui').href="./fotografias/" + values.codigo + "/1.png";	
                        document.getElementById('im1_sui').src="./fotografias/" + values.codigo + "/1.png";
                        document.getElementById('img2_sui').href="./fotografias/" + values.codigo + "/2.png";
                        document.getElementById('im2_sui').src="./fotografias/" + values.codigo + "/2.png";
                        document.getElementById('img3_sui').href="./fotografias/" + values.codigo + "/3.png";
                        document.getElementById('im3_sui').src="./fotografias/" + values.codigo + "/3.png";
                        document.getElementById('imgstreetsui').href="street_view.html?coordenadas=" + values.geom.flatCoordinates;  
                } 
            }
        });
    } 
	}
	 } catch (err) {
    };
    
		
    try{
        if (globalstyle){      
        rangoarea(globalstyle);
    }  
    }
    catch(err){
        sinconsulta();
    }
  
}

function PlaceSelect(event, ui) {
    var view = map.getView();
    var feat = ui.item.feature;
    //console.log(feat);
    var geom = feat.getGeometry();
    view.setCenter(geom.getFirstCoordinate());
    view.setZoom(18);
    highlight.setStyle(flagStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
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
    ppExtent[0]=ppExtent[0]-200;
    ppExtent[2]=ppExtent[2]+200;
    ppExtent[1]=ppExtent[1]-200;
    ppExtent[3]=ppExtent[3]+200;
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    //view.setZoom(16);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[2].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
        if (globalstyle === "sinconsulta"){ 
        sinconsulta();
    }  
    else {
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
    ppExtent[0]=ppExtent[0]-40;
    ppExtent[2]=ppExtent[2]+40;
    ppExtent[1]=ppExtent[1]-40;
    ppExtent[3]=ppExtent[3]+40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat    
    });
    if (globalstyle === "sinconsulta"){ 
        sinconsulta();
    }  
    else {
        rangoarea(globalstyle);
    }
}


function ladomanzanaSelect(event, ui) {
	document.getElementById("panel_atributos_predioshasusos").style.display = "none";
    document.getElementById("tablaatributospredioshasusos").style.display = "none";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "block";
    document.getElementById("tablaatributosalineamiento").style.display = "block";
    document.getElementById("botonminimizar").style.display = "block";  
	document.getElementById("botonmaximizarhasusos").style.display = "none";
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
    ppExtent[0]=ppExtent[0]-40;
    ppExtent[2]=ppExtent[2]+40;
    ppExtent[1]=ppExtent[1]-40;
    ppExtent[3]=ppExtent[3]+40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var ladoman = feat.values_.lado_manza;
    predio.setVisible(true);
    console.log(feat);
    
    
        $.ajax({
            success: function (data) {
                        document.getElementById('codladomanzana').innerHTML=feat.values_.codigo;
                        document.getElementById('codmanzanaalineamiento').innerHTML=feat.values_.lado_manza;
                        document.getElementById('codperfil').innerHTML=feat.values_.perfil;
                        document.getElementById('codnombreperfil').innerHTML=feat.values_.nom_perfil;
                        document.getElementById('codlblc').innerHTML=feat.values_.lb_lc;
                        document.getElementById('imgstreetalineamiento').href="street_view.html?coordenadas=" + feat.values_.geometry.flatCoordinates;
                
                
                       
                                  
            }
        });
    
}

function predioshasusosSelect(event, ui) {
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "none";
    document.getElementById("tablaatributosalineamiento").style.display = "none";
	document.getElementById("panel_atributos_predioshasusos").style.display = "block";
    document.getElementById("tablaatributospredioshasusos").style.display = "block";
    document.getElementById("botonminimizarhasusos").style.display = "block";  
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
    ppExtent[0]=ppExtent[0]-40;
    ppExtent[2]=ppExtent[2]+40;
    ppExtent[1]=ppExtent[1]-40;
    ppExtent[3]=ppExtent[3]+40;
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
                    var tablahasusos = ("<table max-width=20 border=1>"); 
                    for (i = 0; i < grupo.length; i++){
							tablahasusos +=	("<tr>"); 
							tablahasusos +=	("<td><b>" + grupo[i] + "</b></td>");
							tablahasusos +=	("</tr>");
							} 
							tablahasusos += ("</table>");
                    
				        
                        document.getElementById('codreferencia').innerHTML=values.referencia;
                        document.getElementById('codusospermitidos').innerHTML=tablahasusos;
                        document.getElementById('imgstreethasusos').href="street_view.html?coordenadas=" + values.geom.flatCoordinates;
                   
                    //highlight.getSource().addFeature(feature);
                } 
            }
        });
    } 
}





// Create layers instances
var highlightfeatures = new ol.layer.Vector({
    style : new ol.style.Style({
    	stroke : new ol.style.Stroke({
            color : '#00FFFF',
            width : 3
	})
    }),
    source : new ol.source.Vector()
});

var ortofotourbana = new ol.layer.Tile({
    visible: true,
    minResolution:0,
    maxResolution:20,
    opacity:0,
    source: new ol.source.XYZ({
        url: "http://35.184.3.4/ortofoto/{z}/{x}/{y}.png"
    }), name: 'Ortofoto 2016 Distrito'
});

var mapabase = new ol.layer.Tile({
    visible: true,
    source: new ol.source.XYZ({
        url: "http://35.184.3.4/mapa_base/{z}/{x}/{y}.jpg"
    }), name: 'Mapa Base'
});

var streetmap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: false,
    /*minResolution:2,
    maxResolution:20,*/
    name: 'Street Map'
});

var bingarranque = new ol.layer.Image({
                            visible: true,
                            minResolution:20,
                            opacity: 1,
                            title: "BING",    
                            source: new ol.source.ImageStatic({
                               url: "http://35.184.3.4/imagenes_base/Bing.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [1888, 940],
                                imageExtent: [-8377346.467879, 1202426.862044, -8279545.277057, 1256384.963248]
                            })
                        });

var bing = new ol.layer.Tile({
    visible: false,
    source: new ol.source.BingMaps({
        key: 'LAx1oGVyN8TZwSTH1RC1~hnxyYFGev93MbI6hBUQOZQ~AjSJCfyU_TmBIhT5SRRpRIOBHVnA0zTKFRKEVuP-XHE3LAMKr-1ZcqtTq4YTRLds',
        imagerySet: 'Aerial'
    }), name: 'Satelite'
});
var predio = new ol.layer.Tile({
    //preload: Infinity,
    //title : 'Predios',
    // extent: [-8327292.022321, 1232500.154157, -8325566.164885, 1233464.624518],
    extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: true,
    //minResolution:0.000280044661523,
    //maxResolution:0.960833233684,
   minResolution: -0.420066992284,
   maxResolution: 56.5679014489,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:u_terreno', STYLES: ''}
    }), name: 'Predios'
});

var predio_rural = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:r_terreno', STYLES: ''}
    }), name: 'Predios Rurales'
});

var manzana = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:u_manzana', STYLES: ''}
    }), name: 'Manzanas'
});
var nom_dom = new ol.layer.Tile({
    visible: true,
    minResolution: 0.000280044661523,
    maxResolution: 0.480556639173,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:n_domiciliaria', STYLES: ''}
    }), name: 'Placa'
});
var barrio = new ol.layer.Tile({
    extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:barrios', STYLES: ''}
    }), name: 'Barrios'
});
var comuna = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:comunas', STYLES: ''}
    }), name: 'Comunas'
});
var localidad = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:localidades', STYLES: ''}
    }), name: 'Localidades'
});
var amenazainundacion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:amenazainundacion', STYLES: ''}
    }), name: 'Amenaza Inundación'
});
var remosionenmasa = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:amenazaremocionmasa', STYLES: ''}
    }), name: 'Remoción en Masa'
});
var areareservaacueducto = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:areas_reservaacueducto', STYLES: ''}
    }), name: 'Area Reserva Acueducto'
});
var areareservaalcantarillado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:areasreservaalcantarillado', STYLES: ''}
    }), name: 'Area Reserva Alcantarillado'
});
var arroyos = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:arroyos', STYLES: ''}
    }), name: 'Arroyos'
});
var ciclorutaspropuestas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:ciclorutas_propuestas', STYLES: ''}
    }), name: 'Ciclorutas Propuestas'
});
var cienaga_mallorquin = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:cienagamallorquin', STYLES: ''}
    }), name: 'Cienaga Mallorquin'
});
var clasificacionsuelo = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:clasificacionsuelo', STYLES: ''}
    }), name: 'Clasificación Suelo'
});
var estacionestransmetro = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:estacionestransmetro', STYLES: ''}
    }), name: 'Estaciones Transmetro'
});
var intercambiadores = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:intercambiadores_multimodales_transporte', STYLES: ''}
    }), name: 'Intercambiadores Transporte'
});
var limitesdistrital = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:limitedistrital', STYLES: ''}
    }), name: 'Limites Distrital'
});
var malecon = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:maleconavenidario', STYLES: ''}
    }), name: 'Malecon Avenida Río'
});
var parquespropuestos = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:parquespropuestos', STYLES: ''}
    }), name: 'Parques Propuestos'
});
var parquespropuestosrural = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:parquespropuestosrural', STYLES: ''}
    }), name: 'Parques Propuestos Rural'
});
var perimetrourbano = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:perimetrourbano', STYLES: ''}
    }), name: 'Perimetro Urbano'
});
var instrumentosplanificacion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:poligonosinstrumentosplanificacion', STYLES: ''}
    }), name: 'Instrumentos Planificación'
});
var normativosuso = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:poligonosnormativos', STYLES: ''}
    }), name: 'Normativos Uso'
});
var proteccionliteral = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:proteccionlitoralmarcaribe', STYLES: ''}
    }), name: 'Protección Litoral Mar Caribe'
});
var proteccionrural = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:proteccionconservacionrural', STYLES: ''}
    }), name: 'Protección Conservación Rural'
});
var acueductoprimaria = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:redacueductoprimaria', STYLES: ''}
    }), name: 'Red Acueducto Primaria'
});
var redalcantarillado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:redalcantarillado', STYLES: ''}
    }), name: 'Red Alcantarillado'
});
var altatension = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:redesenergiaaltatension', STYLES: ''}
    }), name: 'Red Energia Alta Tensión'
});
var rondaarroyos15 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:rondasarroyossecundarios15m', STYLES: ''}
    }), name: 'Ronda Arroyos 15m'
});
var rondaarroyos30 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:rondaarroyosprincipales30m', STYLES: ''}
    }), name: 'Ronda Arroyos 30m'
});
var rondariomagdalena = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:rondariomagdalena', STYLES: ''}
    }), name: 'Ronda Río Magdalena'
});
var tratamientosurbanisticos = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:tratamientosurbanisticos', STYLES: ''}
    }), name: 'Tratamientos Urbanisticos'
});
var viasruralpropuesta = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:viasruralpropuesta', STYLES: ''}
    }), name: 'Vias Rural Propuesta'
});
var viastransmasivo = new ol.layer.Tile({
    extent: [-8335866.925323, 1221365.091082, -8315171.898268, 1232615.200186],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:vias_transmasivo', STYLES: ''}
    }), name: 'Vias Transmasivo'
});
var zampa50 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:zampa_arroyos_principales_50m', STYLES: ''}
    }), name: 'Zampa Ríos 50m'
});
var zampa30 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:zampa_arroyos_secundarios_30m', STYLES: ''}
    }), name: 'Zampa Arroyos 30m'
});
var zampacienaga = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:zampa_cienaga_mallorquin_50m', STYLES: ''}
    }), name: 'Zampa Cienaga Mallorquin 50m'
});
var zampariomagdalena = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:zampa_rio_magdalena_50m', STYLES: ''}
    }), name: 'Zampa Río Magdalena 50m'
});

var zonacentro = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:zonadeclaradcentro', STYLES: ''}
    }), name: 'Zona Declarada Centro'
});
var puntosfotocontrol = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:puntos_fotocontrol', STYLES: ''}
    }), name: 'Puntos de Fotocontrol'
});
var prediossui = new ol.layer.Tile({
    visible: true,
	extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:predios_sui', STYLES: ''}
    }), name: 'Predios SUI'
});
var perfilviasurbanaspropuestas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:perfilviasurbanaspropuestas', STYLES: ''}
    }), name: 'Perfil Vias Urbanas Propuestas'
});
var zonadeclaradaprado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:zonadeclaradaprado', STYLES: ''}
    }), name: 'Zona Declarada Prado'
});
var metrotel = new ol.layer.Tile({
    visible: true,
	extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:metrotel', STYLES: ''}
    }), name: 'Metrotel'
});
var industriaycomercio = new ol.layer.Tile({
    visible: true,
	extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:industria_y_comercio', STYLES: ''}
    }), name: 'Camara y Comercio'
});
var estratificacion_oficial = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:estratificacion_oficial', STYLES: ''}
    }), name: 'Estratificación Oficial'
});
var predios_exentos_2016 = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:predios_exentos_2016', STYLES: ''}
    }), name: 'Predios Exentos 2016'
});

var vias = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:vias', STYLES: ''}
    }), name: 'Vias'
});

var espacio_pubico = new ol.layer.Tile({
    extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:espacio_publico', STYLES: ''}
    }), name: 'Espacio Público'
});

var ladomanzana = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:ladosmanzana', STYLES: ''}
    }), name: 'Lado Manzana'
    
});

var sitios = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:sitios', STYLES: ''}
    }), name: 'Sitios de Interes'
    
});

var puntos_aaa = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:puntos_aaa', STYLES: ''}
    }), name: 'Puntos AAA'
    
});

var consolidado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:consolidado_campo', STYLES: ''}
    }), name: 'Consolidado'
    
});

var construcciones = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:u_construccion', STYLES: ''}
    }), name: 'Construcciones'
    
});

var paramento = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:paramento', STYLES: ''}
    }), name: 'Paramento'
    
});

var antejardin = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:antejardin', STYLES: ''}
    }), name: 'Antejardin'
    
});

var unidades = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:u_unidad', STYLES: ''}
    }), name: 'Unidades'
    
});
var geocodificador = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.3.4:8080/geoserver/preproduccion/wms',
        params: {LAYERS: 'preproduccion:geo_wgs84', STYLES: ''}
    }), name: 'Geo'
});
//CAPS GROUP
var layerCatastro = new ol.layer.Group({
    layers: [predio_rural, manzana, predio, construcciones, unidades, vias, consolidado, highlightfeatures],
    name: 'Catastro'
});
var layerSitios = new ol.layer.Group({
    layers: [sitios, puntos_aaa],
    name: 'Sitios'
});
var layerSUI = new ol.layer.Group({
    extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    layers: [prediossui],
    name: 'SUI'
});
var layermetrotel = new ol.layer.Group({
    visible: false,
    layers: [metrotel],
    name: 'Metrotel'
});
var layerindustriaycomercio = new ol.layer.Group({
    visible: false,
    layers: [industriaycomercio],
    name: 'Camara y Comercio'
});
var layerPuntosFotocontrol = new ol.layer.Group({
    visible: false,
    layers: [puntosfotocontrol],
    name: 'Puntos de Fotocontrol'
});
var layerEstratificacionOficial = new ol.layer.Group({
    visible: false,
    layers: [estratificacion_oficial],
    name: 'Estratificación Oficial'
});
var layerprediosexentos2016 = new ol.layer.Group({
    visible: false,
    layers: [predios_exentos_2016],
    name: 'Predios Exentos 2016'
});
var layerespaciopublico = new ol.layer.Group({
    visible: false,
    layers: [espacio_pubico],
    name: 'Espacio Público'
});
var layerPot = new ol.layer.Group({
    layers: [zonacentro, zonadeclaradaprado, zampariomagdalena, zampacienaga, zampa30, zampa50, viastransmasivo, viasruralpropuesta, tratamientosurbanisticos, rondariomagdalena, rondaarroyos30, rondaarroyos15, altatension, redalcantarillado, acueductoprimaria, proteccionrural, proteccionliteral, normativosuso, instrumentosplanificacion, perimetrourbano, parquespropuestosrural, parquespropuestos, perfilviasurbanaspropuestas, malecon, limitesdistrital, intercambiadores, espacio_pubico, estacionestransmetro, clasificacionsuelo, cienaga_mallorquin, ciclorutaspropuestas, arroyos, areareservaalcantarillado, areareservaacueducto, remosionenmasa, amenazainundacion, localidad, barrio, ladomanzana],
    name: 'POT'
});
var layerOrtofoto= new ol.layer.Group({
    layers: [ortofotourbana],
    name: 'Ortofoto 2016 Distrito'
});

var layerBase = new ol.layer.Group({
    layers: [mapabase, bing, streetmap, bingarranque],
    name: 'Capas Base'
});


var layerCartobasica = new ol.layer.Group({
    layers: [paramento, antejardin, paramento],
    name: 'Cartografia Básica'
});




function buildLayerTree(layer) {
    var elem;
    var name = layer.get('name') ? layer.get('name') : "Group";
    if (name != 'Group') {
        if (layer.values_.visible == true && layer.get('name') != 'CAPAS') {
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".jpg' alt='Smiley face' height='20' width='20' >" + layer.get('name') + "</span>" + "<i class='glyphicon glyphicon-check'></i> ";
        } else if (layer.get('name') == 'CAPAS') {
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".png' alt='Smiley face' height='30' width='100'>" /*+ layer.get('name') */+ "</span>";
        } else {
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".jpg' alt='Smiley face' height='20' width='20'>" + layer.get('name') + "</span>" + "<i class='glyphicon glyphicon-unchecked'></i> ";
        }
        if (layer.getLayers) {
            var sublayersElem = '';
            var layers = layer.getLayers().getArray(),
                    len = layers.length;
            for (var i = len - 2; i >= 0; i--) {
                sublayersElem += buildLayerTree(layers[i]);
            }
            elem = div + " <ul>" + sublayersElem + "</ul></li>";
        } else {
            elem = div + " </li>";
        }
        return elem;
    }
}
/**
 * Initialize the tree from the map layers
 * @returns {undefined}
 */
function initializeTree() {
    var elem = buildLayerTree(map.getLayerGroup());
    $('#layertree').empty().append(elem);
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    var longitud = $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch').length
    for (var i = 0; i < longitud; i++) {
        var colapse = $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch')[i];
        var colap = $(colapse).parent('li.parent_li').find(' > ul > li');
        colap.hide('fast');
    }
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('glyphicon-plus').removeClass('glyphicon-minus');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus').removeClass('glyphicon-plus');
        }
        e.stopPropagation();
    });
}
/**
 * Finds recursively the layer with the specified key and value.
 * @param {ol.layer.Base} layer
 * @param {String} key
 * @param {any} value
 * @returns {ol.layer.Base}
 */
function findBy(layer, key, value) {
    if (layer.get(key) === value) {
        return layer;
    }
    // Find recursively if it is a group
    if (layer.getLayers) {
        var layers = layer.getLayers().getArray(),
                len = layers.length, result;
        for (var i = 0; i < len; i++) {
            result = findBy(layers[i], key, value);
            if (result) {
                return result;
            }
        }
    }
    return null;
}
$(document).ready(function () {
    initializeTree();
    // Handle opacity slider control
    $('input.opacity').slider().on('slide', function (ev) {
        var layername = $(this).closest('li').data('layerid');
        var layer = findBy(map.getLayerGroup(), 'name', layername);
        layer.setOpacity(ev.value);
    });
    // Handle visibility control
    $('i').on('click', function () {
        var layername = $(this).closest('li').data('layerid');
        var layer = findBy(map.getLayerGroup(), 'name', layername);
        layer.setVisible(!layer.getVisible());
        if (layer.getVisible()) {
            $(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
        } else {
            $(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        }
    });
});

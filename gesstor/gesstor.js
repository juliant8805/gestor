function busca_dir() {
    var dir = document.getElementById('dir_g1').value + " " + document.getElementById('dir1').value + " " + document.getElementById('dir_g2').value + " " + document.getElementById('dir2').value;
    var sel = search("preproduccion:DireccionGesstor", dir);
    if (sel.length>0) {
        console.log("base");
        var sele = search("preproduccion:DireccionGesstorSele", dir);
        if (document.getElementById('dir3').value > +sele[0][0]) {
            var placa = +sele[0][0];
        } else if (document.getElementById('dir3').value < 1) {
            var placa = 1;
        } else {
            var placa = document.getElementById('dir3').value;
        }
        var dirc = dir + " " + placa;
        var parametro = "preproduccion:dir_geo";
        var select = search(parametro, dirc);
        if (select) {
            var coord = select[0][2].split("(")[1].split(")")[0].split(" ");
            addmarker(+coord[1], +coord[0]);
        } else {
            //console.log("mmm");
        }
    } else {
        console.log("google");
        var val = document.getElementById('dir_g1').value + " " + document.getElementById('dir1').value + " " + document.getElementById('dir2').value + " " + document.getElementById('dir3').value;
        //obtengo la direccion del formulario
        var address = 'barranquilla ' + val;
        geocoder = new google.maps.Geocoder();        
        //hago la llamada al geodecoder
        geocoder.geocode({'address': address}, function(results, status) {
            //si el estado de la llamado es OK
            if (status == google.maps.GeocoderStatus.OK) {
                //console.log(address);
                //console.log(results);
                //console.log(results[0].geometry.viewport.b.b);
                //console.log(results[0].geometry.viewport.f.b);
                var long = ((results[0].geometry.viewport.b.b + results[0].geometry.viewport.b.f) / 2);
                var lat = ((results[0].geometry.viewport.f.b + results[0].geometry.viewport.f.f) / 2);
                //console.log(long);
                //console.log(lat);
                addmarker(lat, long);
            } else {
                //si no es OK devuelvo error
                //alert("No podemos encontrar la direcci&oacute;n, error: " + status);
                alert("No podemos encontrar la direcci&oacute;n");
            }
        });
    }
}
function addmarker(long, lat) {
    var vectorSource = new ol.source.Vector({});
    var thing = new ol.geom.Point(ol.proj.transform([lat, long], 'EPSG:4326', 'EPSG:3857'));
    var feat = new ol.Feature({
        name: "Thing",
        geometry: thing
    });
    var view = map.getView();
    view.setCenter(ol.proj.transform([lat, long], 'EPSG:4326', 'EPSG:3857'));
    view.setZoom(18);
    highlight.setStyle(flagStyle);
    vectorSource = new ol.source.Vector({
        features: [feat]
    });
    vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
}// END addmarkerr()
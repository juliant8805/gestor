function busca_dir() {
    /*var dir_g1 = document.getElementById('dir_g1').value;
     var dir1 = document.getElementById('dir1').value;
     var dir_g2 = document.getElementById('dir_g2').value;
     var dir2 = document.getElementById('dir2').value;
     var dir3 = document.getElementById('dir3').value;*/
    var dirc = document.getElementById('dir_g1').value + " " + document.getElementById('dir1').value + " " + document.getElementById('dir_g2').value + " " + document.getElementById('dir2').value + " " + document.getElementById('dir3').value;
    //console.log(dirc);
    var select = select_query("SELECT direcci, ST_AsText(geom) FROM geo_wgs84 WHERE direcci='" + dirc + "';");
    console.log(select);
    if (select) {
        var geojson = new ol.source.GeoJSON({
            object: select[0]
        });
        console.log(geojson);
    }
}
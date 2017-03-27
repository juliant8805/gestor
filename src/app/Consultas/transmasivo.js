function transmasivo(style, capa) {
    document.getElementById('busqueda_personalizada').style.display = 'none';
    layerEstratificacionOficial.setVisible(false);
    layermetrotel.setVisible(false);
    layerindustriaycomercio.setVisible(false);
    layerSUI.setVisible(false);
    layerprediosexentos2016.setVisible(false);
    predio.setVisible(false);
    construcciones.setVisible(false);
    manzana.setVisible(false);
    estacionestransmetro.setVisible(true);
    viastransmasivo.setVisible(true);
    //console.log(viastransmasivo.getSource());
    map.getView().fitExtent(viastransmasivo.getExtent(), map.getSize());
    try {
        document.getElementById('botones').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'none';
        document.getElementById('barra_busqueda_direccion').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
        document.getElementById('cerrar_submenu').style.display = 'none';
        document.getElementById('leyenda_transmetro').style.display = 'block';
    } catch (err) {}
}
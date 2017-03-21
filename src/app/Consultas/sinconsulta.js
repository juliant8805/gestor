var sinconsulta = async function (x) {
    await putgif();
    await general(x);
    await quitgif();
};
function general() {
    document.getElementById('mensaje').style.display = 'block'; 
   if(document.getElementById("barrio").value !== ''){
        document.getElementById('mensaje').style.display = 'block'; 
        document.getElementById("panel_atributos").style.display = "none";
        document.getElementById("tablaatributos").style.display = "none";
        document.getElementById("botonmostrarpanelatributos").style.display = "none";
        document.getElementById("botonocultarpanelatributos").style.display = "none"; 
        predio.setVisible(true);
        var valor = "'" + values + "'";
        var filtro='"cod_barrio='+valor+'"';
        predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});  
	   try{
                var totalprediosbarrio = select_query("select sum(numeropredios) from u_terreno WHERE cod_barrio=" + valor + ";");}catch(err){};
				if (!totalprediosbarrio){totalprediosbarrio=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");;}
        document.getElementById('mensaje').innerHTML = "Numero de Predios: "+totalprediosbarrio+/*"<br>Numero de Manzanas: "+totalmanzanas+*/"<br>Nombre del Barrio: "+values+"";
   } 
   else if(document.getElementById("localidad").value !== ''){
       document.getElementById('mensaje').style.display = 'block'; 
       document.getElementById("panel_atributos").style.display = "none";
       document.getElementById("tablaatributos").style.display = "none";
       document.getElementById("botonmostrarpanelatributos").style.display = "none";
       document.getElementById("botonocultarpanelatributos").style.display = "none"; 
       predio.setVisible(true);
       var valor = "'" + values + "'";
       var filtro='"cod_loc='+valor+'"';
       predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_localidad', 'CQL_FILTER':eval(filtro)});  
      try{
                var totalpredioslocalidad = select_query("select sum(numeropredios) from u_terreno WHERE cod_loc=" + valor + ";");}catch(err){};
				if (!totalpredioslocalidad){totalpredioslocalidad=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");;}
       document.getElementById('mensaje').innerHTML = "Numero de Predios: "+totalpredioslocalidad+/*"<br>Numero de Manzanas: "+totalmanzanas+*/"<br>Codigo Localidad: "+values+"";
   }
    else if(document.getElementById("manzana").value !== ''){
       document.getElementById('mensaje').style.display = 'block'; 
       document.getElementById("panel_atributos").style.display = "none";
       document.getElementById("tablaatributos").style.display = "none";
       document.getElementById("botonmostrarpanelatributos").style.display = "none";
       document.getElementById("botonocultarpanelatributos").style.display = "none"; 
       predio.setVisible(true);
       var valor = "'" + values + "'";
       var filtro='"manzana_co='+valor+'"';
       predio.getSource().updateParams({'STYLES': 'predios_sin_consulta', 'CQL_FILTER':eval(filtro)});  
        try{
                var totalprediosmanzana = select_query("select sum(numeropredios) from u_terreno WHERE manzana_co=" + valor + ";");}catch(err){};
				if (!totalprediosmanzana){totalprediosmanzana=select_query("SELECT COUNT(nombre) FROM localidades where nombre = 'nada'");;}
       document.getElementById('mensaje').innerHTML = "Numero de Predios: "+totalprediosmanzana+"<br>Codigo Manzana: "+values+"";
   }
        document.getElementById('leyenda_transmetro').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'none';
 }




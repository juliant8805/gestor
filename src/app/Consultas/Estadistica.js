function estdistica(select, titulo, param, totales) {
       if (totales=== null){
        alert("No existen predios dentro de este poligono");  
        document.getElementById("statistics").style.display = "none";
    }
    else{
    document.getElementById("statistics").style.display = "block";
    document.getElementById("botonocultarstatistics").style.display = "block";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("botonmostrarpanelatributos").style.display = "none";
    document.getElementById("botonocultarpanelatributos").style.display = "none";  
    var color = new Array(param.length);
    var dat = new Array(param.length);
    for (i = 0; i < param.length; i++) {
        if (param[i][0]==='PH'){
            color[i]='#ffff4c';
        }else if (param[i][0]==='NPH'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='No Construido'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='0-100m2'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='100-1.000m2'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='1.000-10.000m2'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='mayor a 10.000m2'){
            color[i]='#7fbf7f';
        }else if (param[i][0]==='Estrato 1'){
            color[i]='#FF8A8A';
        }else if(param[i][0]==='Estrato 2'){
            color[i]='#FFFF84';
        }else if(param[i][0]==='Estrato 3'){
            color[i]='#8FFEDD';
        }else if(param[i][0]==='Estrato 4'){
            color[i]='#AAFD8E';
        }else if(param[i][0]==='Estrato 5'){
            color[i]='#ffc966';
        }else if(param[i][0]==='Estrato 6'){
            color[i]='#89FC63';
        } else if(param[i][0]==='Sin Estrato'){
            color[i]='#919092';
        }else if (param[i][0]==='1'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='2'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='3'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='4'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='5'){
            color[i]='#ffae19';
        }else if(param[i][0]==='6'){
            color[i]='#21cc65';
        }else if (param[i][0]==='Regimen Comun'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Regimen Simplificado'){
            color[i]='#ffae19';
        }else if(param[i][0]==='No Aplica'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='Agente Retenedor'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='Gran Contribuyente'){
            color[i]='#ffff4c';
        }else if (param[i][0]==='Comercial'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='Educativo'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Entidades de Orden Nacional y Departamental'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Habitacional'){
            color[i]='#ffae19';
        }else if(param[i][0]==='Cultural'){
            color[i]='#0000ff';
        }else if(param[i][0]==='Institucional'){
            color[i]='#21cc65';
        }else if(param[i][0]==='Sin Estado'){
            color[i]='#fed3dd';
        }else if(param[i][0]==='Conservacion'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='Actualizacion'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='No Existe en Acueducto'){
            color[i]='#329932';
        }else if(param[i][0]==='Estrato Coincidente'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Estrato Diferente'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Sin Conflicto'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Con Conflicto'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Uso Coincidente'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Uso Diferente'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Cuenta con Acueducto'){
            color[i]='#9999ff';
        }else if(param[i][0]==='Sin Disponibilidad de Acueducto'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Cuenta con Alcantarillado'){
            color[i]='#66b266';
        }else if(param[i][0]==='Pozo Septico'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Cuenta con Servicio de Aseo'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='No Cuenta con Servicio de Aseo'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Sin Direccion'){
            color[i]='#FFA8A8';
        }else if(param[i][0]==='Nomenclatura Estandarizada'){
            color[i]='#b4b4e5';
        }else if(param[i][0]==='Nomenclatura No Estandarizada'){
            color[i]='#ffdb98';
        }else if(param[i][0]==='0-20'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='21-40'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='41-60'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='61-80'){
            color[i]='#19409e';
        }else if(param[i][0]==='81-100'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Sin Informacion'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Persona Natural'){
            color[i]='#9999ff';
        }else if(param[i][0]==='Persona Juridica'){
            color[i]='#ffff19';
        }else if(param[i][0]==='0-100 millones'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='100-1.000 millones'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='1.000-10.000 millones'){
            color[i]='#ffae19';
        }else if(param[i][0]==='mayor a 10.000 millones'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='Sin Proteccion'){
            color[i]='#F7FE2E';
        }else if(param[i][0]==='Area de Reserva y Proteccion'){
            color[i]='#04B4AE';
        }else if(param[i][0]==='Suelo de Expansion'){
            color[i]='#FFFF00';
        }else if(param[i][0]==='Suelo Rural'){
            color[i]='#008000';
        }else if(param[i][0]==='Suelo Urbano'){
            color[i]='#00004c';
        }else if(param[i][0]==='Licuefacción'){
            color[i]='#FFA4FF';
        }else if(param[i][0]==='Amenaza Muy Alta'){
            color[i]='#FFFF84';
        }else if(param[i][0]==='Amenaza Alta'){
            color[i]='#AAFD8E';
        }else if(param[i][0]==='Amenaza Media'){
            color[i]='#BEFEEB';
        }else if(param[i][0]==='Amenaza Baja'){
            color[i]='#AAAAFF';
        }else if(param[i][0]==='Revisar'){
            color[i]='#8f8d90';
        }else if(param[i][0]==='ZRA'){
            color[i]='#CD85FE';
        }else if(param[i][0]==='ZEE'){
            color[i]='#298A08';
        }else if(param[i][0]==='ZUMR'){
            color[i]='#0489B1';
        }else if(param[i][0]==='100'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='100-1.000'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='1.000-10.000'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='10.000'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Espacios Verdes'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Area de Control Ambiental'){
            color[i]='#006600';
        }else if(param[i][0]==='Corredor Ecologico'){
            color[i]='#003300';
        }else if(param[i][0]==='Riesgo de Inund. Bajo'){
            color[i]='#AAFD8E';
        }else if(param[i][0]==='Riesgo de Inund. Medio'){
            color[i]='#FFFF84';
        }else if(param[i][0]==='Riego de Inund. Alto'){
            color[i]='#FF9797';
        }else if(param[i][0]==='Predios Coincidentes'){
            color[i]='#A5A5FF';
        }else if(param[i][0]==='Predios En base catastral y no en AAA'){
            color[i]='#FFFF7F';
        }else if(param[i][0]==='Registros En AAA y no Catastro'){
            color[i]='#00cc00';
        }else if(param[i][0]==='Registros AAA sin codigo catastral'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Estratos Coincidentes'){
            color[i]='#b5e4a5';
        }else if(param[i][0]==='Estrato Prestador Mas Alto'){
            color[i]='#FFA8A8';
        }else if(param[i][0]==='Estrato Prestador Mas Bajo'){
            color[i]='#A5A5FF';
        }else if(param[i][0]==='Especial o Sin Inf.'){
            color[i]='#a2a0a3';
        }else if(param[i][0]==='Existe Prestador de Acueducto'){
            color[i]='#b7b7ff';
        }else if(param[i][0]==='Sin Prestador de Acueducto'){
            color[i]='#FFA8A8';
        }else if(param[i][0]==='Existe Prestador de Alcantarillado'){
            color[i]='#b7b7ff';
        }else if(param[i][0]==='Sin Prestador de Alcantarillado'){
            color[i]='#FFA8A8';
        }else if(param[i][0]==='Existe Prestador de Aseo'){
            color[i]='#b7b7ff';
        }else if(param[i][0]==='Sin Prestador de Aseo'){
            color[i]='#FFA8A8';
        }else if(param[i][0]==='Espacio Público Existente (Hectáreas)'){
            color[i]='#56ab2c';
        }else if(param[i][0]==='Espacion Público Propuesto (Hectáreas)'){
            color[i]='#a3cccc';
        }
        
        
        
      
        
        dat[i] = new Array(param.length);
        for (j = 0; j < param.length; j++) {
            if (i === j) {
                dat[i][j] = totales[i][0];
            } else {
                dat[i][j] = 0;
            }
        }
    }
}
    var serie = "[";
    for (i = 0; i < param.length; i++) {
        serie = serie + "{name: '" + param[i][0] + "',color: '" + color[i] + "',data: [" + dat[i] + "]";
        if (i === param.length - 1) {
            serie = serie + "}]";
        } else {
            serie = serie + "},";
        }
    }
    //series: [{name: 'NPH',color: '#7f7fff',data: [12043,0,0]},{name: 'PH',color: '#ffff4c',data: [0,1832,0]},{name: 'No Const',color: '#7fbf7f',data: [0,0,647]}]
    //Highcharts Estadisticas Rango de áreas
    $(function () {
        Highcharts.chart('statistics', {
            chart: {
                type: 'column'
            },

            title: {
                text: titulo
            },
            subtitle: {
                text: '<span style="color: red">Total Predios: ' + select[0] + '</span>'
            },
            xAxis: {
                categories: param
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Número de Predios'
                }
            },
            legend: {
                reversed: false
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: ('#000000')
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: eval(serie)
            //series: [{name: 'NPH',color: '#7f7fff',data: [12043,0,0]},{name: 'PH',color: '#ffff4c',data: [0,1832,0]},{name: 'No Const',color: '#7fbf7f',data: [0,0,647]}]
        });
    });

    //Evento para Remover Layer
   /* map.on('singleclick', function (evt) {
        //map.removeLayer(layer);
        predio.getSource().updateParams({'STYLES': ''});
        document.getElementById('statistics').innerHTML = '';
        document.getElementById("statistics").style.display = "none";
    });*/

}



//nueva funcion

function estadistica_espacio_publico(select, param, totales, porcentajes) {
    if (totales=== null){
        alert("No existe espacio público en esta area");
    }
    document.getElementById("statistics").style.display = "block";
    var color = new Array(param.length);
    var dat = new Array(param.length);
    for (i = 0; i < param.length; i++) {
        if (param[i][0]==='Espacio Publico'){
            color[i]='#7fbf7f';
        }else if (param[i][0]==='Espacio Publico Propuesto'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Parque'){
            color[i]='#7f7fff';
        }
    dat[i] = new Array(param.length);
        
        for (j = 0; j < param.length; j++) {
            if (i === j) {
                dat[i][j] = totales[i][0];
                //console.log(dat[i][j]);
            } else {
                dat[i][j] = 0;
            }
        }
    }
    //console.log(porcentajes[0][0]);
    //console.log(porcentajes[1][0]);
    var existente=porcentajes[0][0];
    var propuesto=porcentajes[1][0];
    var totalhec=parseInt(existente)+parseInt(propuesto);
    var serie = "[";
    for (i = 0; i < param.length; i++) {
        serie = serie + "{name: '" + param[i][0] + "',color:'" + color[i] + "',data: [['" + param[i][0] + "',"+porcentajes[i]+"],{ y: 12.8,sliced: false, selected: true}]}";
        if (i === param.length - 1) {
            serie = serie + "]]";
        } else {
            serie = serie + "]";
        }
    }
//console.log(serie);
    
//[{name: 'Espacio Publico Propuesto',color:'#ffff4c',data: [['Espacio Publico Propuesto',0.8108160014234198],{ y: 12.8,sliced: false, selected: true}]}]{name: 'Espacio Publico',color:'#7fbf7f',data: [['Espacio Publico',0.770197994965995],{ y: 12.8,sliced: false, selected: true}]}]{name: 'Parque',color:'#7f7fff',data: [['Parque',0.41898600361058536],{ y: 12.8,sliced: false, selected: true}]}]]
    

$(function () {

    $(document).ready(function () {

        // Build the chart
        Highcharts.chart('statistics', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Espacio Público'
            },
            subtitle: {
                text: '<span style="color: red">Total Hectareas: ' + totalhec + '</span><br><span style="color: red">Total Hectareas Existentes: ' + parseInt(existente) + '</span><br><span style="color: red">Total Hectareas Propuestas: ' + parseInt(propuesto) + '</span>'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Espacio Público',
                colorByPoint: true,
                data: [{
                    name: 'Existente',
                    y: parseInt(existente)
                }, {
                    name: 'Propuesto',
                    y: parseInt(propuesto),
                    sliced: true,
                    selected: true
                }]
            }]
        });
    });
});

}

/*
function piegoogle(select, titulo, param, totales){
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart); 
      function drawChart() {
          if (totales=== null){
        alert("No existen predios dentro de este poligono");
    }
    document.getElementById("statistics").style.display = "block";
     var color = new Array(param.length);
    var dat = new Array(param.length);     
      for (i = 0; i < param.length; i++) {
        if (param[i][0]==='PH'){
            color[i]='#7fbf7f';
        }else if (param[i][0]==='NPH'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='No Const'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='0-100m2'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='100-1.000m2'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='1.000-10.000m2'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='mayor a 10.000m2'){
            color[i]='#7fbf7f';
        }else if (param[i][0]==='Est 1'){ //
            color[i]='#e31a1c';
        }else if(param[i][0]==='Est 2'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Est 3'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='Est 4'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Est 5'){
            color[i]='#ffae19';
        }else if(param[i][0]==='Est 6'){
            color[i]='#21cc65';
        } else if(param[i][0]==='Sin Est'){
            color[i]='#fed3dd';
        }else if (param[i][0]==='1'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='2'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='3'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='4'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='5'){
            color[i]='#ffae19';
        }else if(param[i][0]==='6'){
            color[i]='#21cc65';
        }else if (param[i][0]==='REGIMEN COMUN'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='SIMPLIFICADO'){
            color[i]='#ffae19';
        }else if(param[i][0]==='N/A'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='AGENTE RETENEDOR'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='GRAN CONTRIBUYENTE'){
            color[i]='#ffff4c';
        }else if (param[i][0]==='COMERCIAL'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='EDUCATIVO'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='ENTIDADES ORDEN NACIONAL Y DEPARTAMENTAL'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='HABITACIONAL'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='CULTURAL'){
            color[i]='#ffae19';
        }else if(param[i][0]==='INSTITUCIONAL'){
            color[i]='#21cc65';
        }else if(param[i][0]==='SIN'){
            color[i]='#fed3dd';
        }else if(param[i][0]==='CONSERVACION'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='ACTUALIZACION'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='No Existe en AAA'){
            color[i]='#329932';
        }else if(param[i][0]==='Igual'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Diferente'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Tiene Acueducto'){
            color[i]='#9999ff';
        }else if(param[i][0]==='Sin Acueducto'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Tiene Alcantarillado'){
            color[i]='#66b266';
        }else if(param[i][0]==='Pozo Septico'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Con Disponibilidad Aseo'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='Sin Disponibilidad Aseo'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Sin Direccion'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Estandarizada'){
            color[i]='#9999ff';
        }else if(param[i][0]==='No Estandarizada'){
            color[i]='#ffff19';
        }else if(param[i][0]==='0-20'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='21-40'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='41-60'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='61-80'){
            color[i]='#19409e';
        }else if(param[i][0]==='81-100'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='Sin Informacion'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Natural'){
            color[i]='#9999ff';
        }else if(param[i][0]==='Juridico'){
            color[i]='#ffff19';
        }else if(param[i][0]==='100 M'){
            color[i]='#7fbf7f';
        }else if(param[i][0]==='100 M -1.000 M'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='1.000 M -10.000 M'){
            color[i]='#ffae19';
        }else if(param[i][0]==='10.000 M'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='Sin Proteccion'){
            color[i]='#F7FE2E';
        }else if(param[i][0]==='Area de Proteccion'){
            color[i]='#04B4AE';
        }else if(param[i][0]==='Expansion'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Rural'){
            color[i]='#9999ff';
        }else if(param[i][0]==='Urbano'){
            color[i]='#ffff19';
        }else if(param[i][0]==='Alta'){
            color[i]='#FF0000';
        }else if(param[i][0]==='Media'){
            color[i]='#FFFF00';
        }else if(param[i][0]==='Baja'){
            color[i]='#00FF00';
        }else if(param[i][0]==='ZRA'){
            color[i]='#2EFE9A';
        }else if(param[i][0]==='ZEE'){
            color[i]='#298A08';
        }else if(param[i][0]==='ZUMR'){
            color[i]='#0489B1';
        }else if(param[i][0]==='100'){
            color[i]='#e31a1c';
        }else if(param[i][0]==='100-1.000'){
            color[i]='#ffff4c';
        }else if(param[i][0]==='1.000-10.000'){
            color[i]='#7f7fff';
        }else if(param[i][0]==='10.000'){
            color[i]='#7fbf7f';
        }
        
        dat[i] = new Array(param.length);
        for (j = 0; j < param.length; j++) {
            if (i === j) {
                dat[i][j] = totales[i][0];
            } else {
                dat[i][j] = 0;
            }
        }
    }     
      
          
          
      var serie1="{";   
     for (i = 0; i < param.length; i++) {
    serie1 = serie1+"['"+param[i][0]+"',"+totales[i][0]+"]";
         if (i === param.length - 1) {
            serie1 = serie1 + "}";
        } else {
            serie1 = serie1 + ",";
        }
         
     }
  
          console.log(serie1);
       
        var data = google.visualization.arrayToDataTable([
         ['Task','Número de Predios'],
            eval(serie1)/*
           ['0-100m2',2340],['1.000-10.000m2',692],['mayor a 10.000m2',76],['100-1.000m2',11414]*/
       /* ]);
       

        var options = {
          title: titulo,
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('statistics'));
        chart.draw(data, options);
      }
}
*/
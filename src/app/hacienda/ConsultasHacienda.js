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
    var formatNumber = {
                 separador: ".", // separador para los miles
                 sepDecimal: ',', // separador para los decimales
                 formatear:function (num){
                  num +='';
                  var splitStr = num.split('.');
                  var splitLeft = splitStr[0];
                  var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
                  var regx = /(\d+)(\d{3})/;
                  while (regx.test(splitLeft)) {
                  splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
                  }
                  return this.simbol + splitLeft  +splitRight;
                 },
                 new:function(num, simbol){
                  this.simbol = simbol ||'';
                  return this.formatear(num);
                 }
                }
    if (style === "Avaluo Catastral") {
        construcciones.setVisible(false);
        predio.setVisible(true);
        alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de avalúo catastral");
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPrediosHacienda");
            var param = [['0-20 millones'], ['20-50 millones'], ['50-100 millones'], ['100-500 millones'], ['mayor a 500 millones']];
            var total1 = search("preproduccion:AvaluoCatastral", 0, 20000000);
            var total2 = search("preproduccion:AvaluoCatastral", 20000001, 50000000);
            var total3 = search("preproduccion:AvaluoCatastral", 50000001, 100000000);
            var total4 = search("preproduccion:AvaluoCatastral", 100000001, 500000000);
            var total5 = search("preproduccion:AvaluoCatastral", 500000001, 9999999999999);
            var valoravaluo = search("preproduccion:AvaluoTotal");  
            var valoravaluo = formatNumber.new(valoravaluo); 
            var titulo = "Total Avalúo Catastral: " + valoravaluo;       
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosEsp", values);
            var param = [['0-20 millones'], ['20-50 millones'], ['50-100 millones'], ['100-500 millones'], ['mayor a 500 millones']];
            var total1 = search("preproduccion:AvaluoCatastralFiltro", values, 0, 20000000);
            var total2 = search("preproduccion:AvaluoCatastralFiltro", values, 20000001, 50000000);
            var total3 = search("preproduccion:AvaluoCatastralFiltro", values, 50000001, 100000000);
            var total4 = search("preproduccion:AvaluoCatastralFiltro", values, 100000001, 500000000);
            var total5 = search("preproduccion:AvaluoCatastralFiltro", values, 500000001, 9999999999999);
            var totales = total1.concat(total2, total3, total4, total5);
            estdistica(select, style, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }
    }
    
   
      
    else if (style === "Tipo de Contribuyente") {
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPrediosContribuyentes");
            var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'], ['Gran Contribuyente'], ['No Aplica']];
            var total1 = search("preproduccion:TipoContribuyente", 'REGIMEN COMUN');
            var total2 = search("preproduccion:TipoContribuyente", 'SIMPLIFICADO');
            var total3 = search("preproduccion:TipoContribuyente", 'AGENTE RETENEDOR');
            var total4 = search("preproduccion:TipoContribuyente", 'GRAN CONTRIBUYENTE');
            var total5 = search("preproduccion:TipoContribuyente", 'NO APLICA');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosContribuyentesFiltro", values);
            var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'], ['Gran Contribuyente'], ['No Aplica']];
            var total1 = search("preproduccion:TipoContribuyenteFiltro", values, 'REGIMEN COMUN');
            var total2 = search("preproduccion:TipoContribuyenteFiltro", values, 'SIMPLIFICADO');   
            var total3 = search("preproduccion:TipoContribuyenteFiltro", values, 'AGENTE RETENEDOR');  
            var total4 = search("preproduccion:TipoContribuyenteFiltro", values, 'GRAN CONTRIBUYENTE');
            var total5 = search("preproduccion:TipoContribuyenteFiltro", values, 'NO APLICA');
            
            var totales = total1.concat(total2, total3, total4, total5);
            estdistica(select, style, param, totales);  
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';
               
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
            }
        }
    
        else if (style === "Impuesto Camara") {
        construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para ejecutar esta consulta");
                var select = search("preproduccion:TotalPredios");
                var param = [['Sin Deuda'], ['Con Dueda'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Impuesto Industria y Comercio";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        } 
    
        else if (style === "Tipo Propietario") {
        construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para ejecutar esta consulta");
                var select = search("preproduccion:TotalPredios");
                var param = [['Persona Natural'], ['Persona Juridica'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Tipo de Propietario";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        }
    
        else if (style === "Incremento Avaluo") {
             construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información de avalúos para vigencias anteriores a 2017");
                var select = search("preproduccion:TotalPredios");
                var param = [['Avalúo 2016'], ['Avalúo 2017'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Incremento de Avalúo Catastral";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        }
       
}






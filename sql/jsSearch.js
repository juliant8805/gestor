function search(param, request, request1, request2) {
    //console.log(request1);
    if (request1 === undefined && request2 === undefined) {
        var viewParamsStr = viewparamsToStr({
            query: request
        });
    } else if (request2 === undefined) {
        var viewParamsStr = viewparamsToStr({
            query: request,
            query1: request1
        });
    } else {
        var viewParamsStr = viewparamsToStr({
            query: request,
            query1: request1,
            query2: request2
        });
    }
    //console.log(viewParamsStr);
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: param,
        outputFormat: 'application/json',
        srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };
    var temp = $.ajax({
        url: url,
        data: wfsParams,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data, status, xhr) {},
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            console.log(exception);
            //console.log(msg);
        }
    });
    var arr = [];
    for (i = 0; i < temp.responseJSON.features.length; i++) {
        arr[i] = [];
        for (j = 0; j < Object.keys(temp.responseJSON.features[i].properties).length; j++) {
            var a = Object.keys(temp.responseJSON.features[i].properties)[j];
            arr[i][j] = temp.responseJSON.features[i].properties[a];
        }
    }
    return arr;
}
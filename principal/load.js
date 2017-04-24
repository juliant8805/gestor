function onload() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {
        deleteCookie(cookies[i].split("=")[0]);
    }
    var val = document.location.href;
    var validar = val.split("?");
    if (validar[1] === "ig=error")
    {
        document.getElementById('er').style.display = 'block';
    } else
    {
        document.getElementById('er').style.display = 'none';
    }
    if (validar[1] === "ig=navegador")
    {
        document.getElementById('er1').style.display = 'block';
    } else
    {
        document.getElementById('er1').style.display = 'none';
    }
}
function setC(name, value, expirydays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirydays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    //console.log(name + "=" + value + "; " + expires+";path=/");
    document.cookie = name + "=" + value + "; " + expires + ";path=/";
    ;
}

function deleteCookie(name) {
    setC(name, "", -1);
}
function setCookie(cname, cvalue, exdays) {
    if (document.getElementById("u").value != "" && document.getElementById("p").value != "")
    {
        var pw = hex_md5(document.getElementById("p").value);
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 36000;
        now.setTime(expireTime);
        //console.log(document.getElementById("u").value + "=" + pw + ";expires="+now.toGMTString()+";path=/");
        document.cookie = document.getElementById("u").value + "=" + pw + ";expires=" + now.toGMTString() + ";path=/";
    }
}
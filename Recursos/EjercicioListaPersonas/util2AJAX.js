function pAjax(url, metodo, callBack, parametros) {
        metodo = metodo.toUpperCase();
        //Inicializamos la petición HTTP
        var httpRequest = new XMLHttpRequest();
        //Preparamos la función que vayamos a usar como respuesta
        httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4) {
                        if (httpRequest.status == 200) {
                                console.log(httpRequest.responseText);
                                callBack(JSON.parse(httpRequest.responseText));
                        }
                }
        };
        //Hacemos la petición
        if (metodo == "POST") {
                httpRequest.open(metodo, url);
                httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                httpRequest.send(parametros);
        }

        if (metodo == "GET") {
                httpRequest.open(metodo, url);
                httpRequest.send(null);

        }
}

function rellenarTabla(array) {
        function insertarFila(arrayFila) {
                var fila = document.createElement("tr");
                var casilla; var contenido;
                arrayFila.forEach(function (e) {
                        casilla = document.createElement("td");
                        contenido = document.createTextNode(e);
                        casilla.appendChild(contenido);
                        fila.appendChild(casilla);
                });
                return fila;
        }

        var fila; var tabla = document.getElementById(loquesea);
        array.forEach(function (e) {
                fila = insertarFila(e);
                tabla.appendChild(fila);
        });
}


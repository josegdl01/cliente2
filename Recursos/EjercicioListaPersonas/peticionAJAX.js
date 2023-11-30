
function pAJAX(url, metodo, callback, parametros) {
    var peticion_http = new XMLHttpRequest();
    metodo = metodo.toUpperCase();
    peticion_http.onreadystatechange = function () {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                console.log("Respuesta del servidor:", peticion_http.responseText);
                //callback(JSON.parse(peticion_http.responseText));
                try {
                    // Intentar analizar la respuesta como JSON
                    var jsonResponse = JSON.parse(peticion_http.responseText);
                    callback(jsonResponse);
                } catch (error) {
                    // En caso de error al analizar JSON, puedes manejar la respuesta de otra manera
                    console.error("Error al analizar JSON:", error);
                    // Aquí puedes agregar tu lógica para manejar respuestas no JSON
                }
            }
        }
    };

    if (metodo == "GET") {
        peticion_http.open(metodo, url);
        peticion_http.send(null);
    }

    if (metodo == "POST") {
        peticion_http.open(metodo, url);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion_http.send(parametros);
    }

}

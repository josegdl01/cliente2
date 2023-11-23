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

//Función independiente que devuelve una fila en base a un array
const crearFila = (array) => {
        let fila = document.createElement("tr");
        let casilla, contenido;
        array.forEach(e => {
                casilla = document.createElement("td");
                contenido = document.createTextNode(e);
                casilla.appendChild(contenido);

                fila.appendChild(casilla);
        });
        return fila;
}

//CREAR FILA DEPARTAMENTOS
const crearFilaDept = (array) => {
        let fila = document.createElement("tr");
        let casilla;
        array.forEach(e => {
                casilla = document.createElement("td");
                if (e.value != null) {
                        casilla.appendChild(e);
                        e.onclick = leerProfesSQL;
                } else {
                        let contenido = document.createTextNode(e);
                        casilla.appendChild(contenido);
                }
                fila.appendChild(casilla);
        });
        return fila;
}


//LLENAR TABLA DEPARTAMENTOS
const rellenarTablaDept = (json) => {
        tabla = document.getElementById("detalle_departamentos");
        tabla.innerHTML = "";
        let arrayBi = json.map(e => {
                let verDept = document.createElement("button");
                verDept.value = "verDepartamento";
                verDept.appendChild(document.createTextNode("Ver Profesores"));
                verDept.dataset.departamento = e.ID;
                return [e.ID, e.NOMBRE, e.DESCRIPCION, verDept];
        });
        tabla = document.getElementById("detalle_departamentos");
        arrayBi.forEach(e => {
                console.log(e);
                tabla.appendChild(crearFilaDept(e));
        });
}

//CREAR FILA PROFESORES
const crearFilaProf = (array) => {
        let fila = document.createElement("tr");
        let casilla;
        array.forEach(e => {
                casilla = document.createElement("td");
                if (e.value != null) {
                        casilla.appendChild(e);
                        if (e.value == "borrar") {
                                //e.onclick = ;

                        } else {
                                //e.onclick = ;
                        }
                } else {
                        let contenido = document.createTextNode(e);
                        casilla.appendChild(contenido);
                }
                fila.appendChild(casilla);
        });
        return fila;
}


//LLENAR TABLA PROFESORES
const rellenarTablaProf = (json) => {
        tabla = document.getElementById("detalle_profesores");
        tabla.innerHTML = "";
        let arrayBi = json.map(e => {
                let borrarProf = document.createElement("button");
                let editProf = document.createElement("button");
                borrarProf.appendChild(document.createTextNode("Borrar")); borrarProf.value = "borrar";
                editProf.appendChild(document.createTextNode("Modificar")); editProf.value = "editar";
                verDept.dataset.departamento = e.ID;
                return [e.ID, e.DNI, e.NOMBRE, e.APELLIDOS, borrarProf, editProf];
        });
        tabla = document.getElementById("detalle_departamentos");
        arrayBi.forEach(e => {
                console.log(e);
                tabla.appendChild(crearFilaDept(e));
        });
}




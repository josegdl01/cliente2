//Valida longitud y letra de un dni
function dniValidar(nif) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    console.log(nif.substring(0, 8) % 23, "length nif: "+ nif.length);
    if (nif.length != 9) {
        return false;
    }
    return (letras[nif.substring(0, 8) % 23] == nif[8].toUpperCase());
}

//Solo minúsculas y espacios
function limitaMinusc(e) {
    return ((e.keyCode <= 123 && e.keyCode >= 96) || e.keyCode == 32)
}

//Convierte a mayúsculas
function mayusc() {
    this.value = this.value.toUpperCase();
}

function numDecimalesAbs(e){
    var cadena = this.value;
    if(cadena.indexOf(",") == -1){
        return ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 44);
    } else {
        return ((e.keyCode >= 48 && e.keyCode <= 57));
    }
}

function enterosConSigno(e){
    var cadena = this.value;
    if(cadena.indexOf("-") == -1){
        "-".concat(cadena);
    } else {
        return ((e.keyCode >= 48 && e.keyCode <= 57));
    }
}

//Solo números
function limitaNums(e){
    return ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 46);
} 

function validarFecha(ano, mes, dia){
    var day = dia;
    var month = mes - 1;
    var year = ano;
    var fecha = new Date(year, month, day);
    console.log(ano, mes, dia);
    console.log(fecha.getFullYear(),fecha.getMonth(),fecha.getDate());
    return ((ano = fecha.getFullYear())||(mes = fecha.getMonth())||(dia = fecha.getDate()));
}

function ariaChecked(areas){
    var bandera = false;
    for(var i = 0; i < areas.length; i++){
        bandera = bandera || areas[i].checked;
    }
    return bandera;
}

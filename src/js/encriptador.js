var textoCifrado = "";
var copiatextoIngresado = "";
var textoIngresado = document.getElementById("valorIngresado");
var copia_encriptado = document.getElementById("valorIngresado");
var desencriptar_text = "";


function encriptar() {

    if (textoIngresado.value.trim() === "") {
        document.getElementById("campo").style.display = "block";

        return;
    }

    document.getElementById("campo").style.display = "none";

    var validar = /^[a-z\s]+$/g.test(textoIngresado.value);

    if (!validar) {

        document.getElementById("alert").style.display = "block";
        return;

    }
    document.getElementById("alert").style.display = "none";


    for (let i = 0; i < textoIngresado.value.length; i++) {

        switch (textoIngresado.value[i]) {

            case "e":
                textoCifrado += "enter"
                break;

            case "i":
                textoCifrado += "imes"
                break;

            case "o":
                textoCifrado += "ober"
                break;

            case "a":
                textoCifrado += "ai"
                break;

            case "u":
                textoCifrado += "ufer"
                break;

            default:
                textoCifrado += textoIngresado.value[i];
                break;

        }
    }

    copiatextoIngresado = textoCifrado;

    textoCifrado = "";

    document.getElementById("resultado").value = copiatextoIngresado;
    document.getElementById("show_resultado").style.display = "block";
    document.getElementById("alert_visible").style.display = "none";

    textoIngresado.value = "";

}



function desencriptar() {

    copia_encriptado.value.toLowerCase();

    if (copia_encriptado.value.trim() === "") {

        document.getElementById("campo").style.display = "block";

        return;
    }
    document.getElementById("campo").style.display = "none";

    /*var validar = /^[a-z]/g.test(textoIngresado.value);*/
    var validar = (/^[a-z\s]+/g).test(textoIngresado.value);
    /*(/^[a-z\s]+$/g)*/

    if (!validar) {
        document.getElementById("alert").style.display = "block";
        return;

    }
    document.getElementById("alert").style.display = "none";


    desencriptar_text = copia_encriptado.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");


    document.getElementById("resultado").value = desencriptar_text;

    desencriptar_text.value = "";
    // console.log(desencriptar_text);

    document.getElementById("resultado").value = desencriptar_text;
    document.getElementById("show_resultado").style.display = "block";
    document.getElementById("alert_visible").style.display = "none";




}

function copiar() {

    var resultadoEncriptacion = document.getElementById("resultado");

    resultadoEncriptacion.select();

    navigator.clipboard.writeText(resultadoEncriptacion.value);
}


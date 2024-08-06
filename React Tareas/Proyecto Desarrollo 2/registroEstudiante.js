function comprobarClave(){
    let clave1 = document.getElementById("clave1")
    let clave2 = document.getElementById("clave2")

    if(clave1.value != clave2.value){
        alert("Son diferentes, vuelve a intentarlo")
    } else{
        registra()
    }
    
}

function responde() {
	
}
function registra() {
    var estudianteinstanciado = new _estudiante(
        document.getElementById("carnet").value,
        document.getElementById("correo").value,
        document.getElementById("nombreCompleto").value,
        document.getElementById("especialidad").value,
        document.getElementById("seccion").value,
        '',
        document.getElementById('clave1').value,
        document.getElementById('clave2').value

    );
    estudianteinstanciado.Guardar("/api/estudiante", responde);
}


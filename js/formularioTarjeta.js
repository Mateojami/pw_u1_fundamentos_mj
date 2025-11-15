function guardar() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {
    let tieneErrores = false;
    
    let nombre = document.getElementById("id_nombre").value;
    if (nombre === "") {
        mostrarAsterisco('id_error_nombre');
        tieneErrores = true;
    }

    let card = document.getElementById("id_card").value;
    if (card === "") {
        mostrarAsterisco('id_error_card');
        tieneErrores = true;
    }

    let fechaExpiracion = document.getElementById("id_fecha").value;
    if (fechaExpiracion === "") {
        mostrarAsterisco('id_error_fecha');
        tieneErrores = true;
    }

    
    let cvv = document.getElementById("id_cvv").value;
     if (cvv === "") {
        mostrarAsterisco('id_error_cvv');
        tieneErrores = true;
    }

    if (tieneErrores) {
        mostrarMensaje('Falta completar campos obligatorios');
        return;
    }
    
    alert("Formulario validado correctamente");
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}

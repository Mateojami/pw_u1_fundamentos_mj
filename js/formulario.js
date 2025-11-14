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

    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        mostrarAsterisco('id_error_apellido');
        tieneErrores = true;
    }

    let fechaNacimiento = document.getElementById("id_fecha").value;

    let email = document.getElementById("id_email").value;
    if (email === "") {
        mostrarAsterisco('id_error_email');
        tieneErrores = true;
    } else if (!validarEmail(email)) {
        mostrarAsterisco('id_error_email');
        tieneErrores = true;
    }

    let password = document.getElementById("id_password").value;

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

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

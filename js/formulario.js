function guardar() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById("id_nombre").value;
    if (nombre === "") {
        mostrarMensaje('Falta completar el campo');
        mostrarAsterisco('id_error_nombre');
        return;
    }

    let apellido = document.getElementById("id_apellido").value;
    if (apellido === "") {
        mostrarMensaje('Falta completar el campo');
        mostrarAsterisco('id_error_apellido');
        return; 
    }

    let fechaNacimiento = document.getElementById("id_fecha").value;

    let email = document.getElementById("id_email").value;
    if (email === "") {
        mostrarMensaje('Falta completar el campo');
        mostrarAsterisco('id_error_email');
        return;
    } else if (!validarEmail(email)) {
        mostrarMensaje('Formato de email inválido');
        mostrarAsterisco('id_error_email');
        return;
    }

    let password = document.getElementById("id_password").value;

    // Si llega aquí, TODO está validado
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

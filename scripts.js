
// Mostrar la hoja de vida en el modal
document.getElementById("form-hoja-vida").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const sobreTi = document.getElementById("sobre-ti").value;
    const estudios = document.getElementById("estudios").value;
    const referencias = document.getElementById("referencias").value;
    const habilidades = document.getElementById("habilidades").value;
    const foto = document.getElementById("foto").files[0];

    // Validar que todos los campos estén llenos
    if (!nombre || !sobreTi || !estudios || !referencias || !habilidades || !foto) {
        // Mostrar mensaje de error si hay campos vacíos
        document.getElementById("error-message").classList.remove("d-none");
        return; // Detener la ejecución si hay error
    }

    // Ocultar el mensaje de error si todos los campos están completos
    document.getElementById("error-message").classList.add("d-none");

    // Actualizar la información en el modal
    document.getElementById("nombre-result").textContent = nombre;
    document.getElementById("sobre-ti-result").textContent = sobreTi;
    document.getElementById("estudios-result").textContent = estudios;
    document.getElementById("referencias-result").textContent = referencias;
    document.getElementById("habilidades-result").textContent = habilidades;

    // Mostrar la foto en el modal
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("foto-result").src = e.target.result;
        document.getElementById("foto-result").style.display = "block";
    };
    reader.readAsDataURL(foto);

    // Mostrar el modal de Bootstrap
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});

// Eliminar la información mostrada en el modal
document.getElementById("eliminar-btn").addEventListener("click", function() {
    // Limpiar la información mostrada en el modal
    document.getElementById("nombre-result").textContent = '';
    document.getElementById("sobre-ti-result").textContent = '';
    document.getElementById("estudios-result").textContent = '';
    document.getElementById("referencias-result").textContent = '';
    document.getElementById("habilidades-result").textContent = '';
    document.getElementById("foto-result").style.display = "none";

    // Cerrar el modal
    const myModal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    myModal.hide();
});

document.getElementById("formProfesor").addEventListener("submit", function(event) {
    event.preventDefault(); // Evite el envío por defecto del formulario.

    // Agarre los valores del formulario.
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;

    // Cree un objeto con los datos del profesor.
    const profesor = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    };

    // Converti el objeto a formato JSON.
    const profesorJSON = JSON.stringify(profesor);

    // Muestro el objeto JSON en el div 'resultado'.
    document.getElementById("resultado").innerText = "Datos en JSON: " + profesorJSON;
});
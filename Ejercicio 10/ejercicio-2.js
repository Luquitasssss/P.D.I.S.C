document.getElementById("formMateria").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Agrarre los valores del formulario
    const nombreMateria = document.getElementById("nombreMateria").value;
    const anio = document.getElementById("anio").value;
    const nombreProfesor = document.getElementById("nombreProfesor").value;

    // Cree un objeto con los datos de la materia
    const materia = {
        nombre: nombreMateria,
        anio: anio,
        profesor: nombreProfesor
    };

    // Converti el objeto a formato JSON
    const materiaJSON = JSON.stringify(materia);

    // Muestro el objeto JSON en el div 'resultadoMateria'
    document.getElementById("resultadoMateria").innerText = "Datos en JSON: " + materiaJSON;
});
document.getElementById("formDispositivo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evite el envío por defecto del formulario.

    // Agarre los valores del formulario.
    const tipo = document.getElementById("tipo").value;
    const codigo = document.getElementById("codigo").value;

    // Cree un objeto con los datos del dispositivo.
    const dispositivo = {
        tipo: tipo,
        codigo: codigo
    };

    // Converti el objeto a formato JSON.
    const dispositivoJSON = JSON.stringify(dispositivo);

    // Muestro el objeto JSON en el div 'resultadoDispositivo'.
    document.getElementById("resultadoDispositivo").innerText = "Datos en JSON: " + dispositivoJSON;
});
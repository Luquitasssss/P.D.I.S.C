const nombre = document.getElementById('nombre').value;
console.log("Valor del nombre:", nombre);

const nombreLength = document.getElementById('nombre').value.length;
console.log("Cantidad de letras del nombre:", nombreLength);

const cantidadFormularios = document.getElementsByClassName('formulario').length;
console.log("Cantidad de elementos con clase 'formulario':", cantidadFormularios);

const formularios = document.getElementsByClassName('formulario');
for (let i = 0; i < formularios.length; i++) {
    console.log("ID del formulario", i + 1, ":", formularios[i].id);
}

document.getElementById('contenido').style.backgroundColor = 'red';

const cantidadSpan = document.querySelectorAll('span').length;
console.log("Cantidad de elementos 'span':", cantidadSpan);
function dibujarPalabra(){
    let palabra = document.querySelector("#palabra");
    let dibujo = document.querySelector("#dibujo");
   
    for (const letra of palabra.value) {
        dibujo.innerHTML+=`<span onclick="mostrarLetra('${letra}')"><h1>${letra}</h1></span>`;
       
    }


}

function mostrarLetra(letra){
    alert(letra);
}
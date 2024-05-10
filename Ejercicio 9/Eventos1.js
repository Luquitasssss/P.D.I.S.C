function validarEdades(){
    let edades = document.querySelectorAll(".edad");
    edades.forEach(function(elem, ind){
        let check = document.querySelector("#check-" + ind);
       
        if(elem.value>18){
            check.checked = true;
        }else{
         check.checked = false;
        };
    });
}
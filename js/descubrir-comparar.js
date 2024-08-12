
import { acierto, error } from "./acierto-error.js";


// ✅ Voltear Tarjetas( max 2 tarjetas )
function descubrir(e){

    // Añade clase descubierta a tarjeta clicada
    e.target.classList.add("descubierta"); 

    // seleccionamos tarjeta clase descubierta y no clase acertada
    // Porque las acertadas no se borran solo se ocultan
    const descubiertas = document.querySelectorAll( ".descubierta:not(.acertada)" );

    // Validar si ya hay dos tarjetas descubiertas
    if ( descubiertas.length > 2 ){
        e.target.classList.remove("descubierta");
        return;
    }
    // Validar si dos tarjetas son iguales o no
    comparar( descubiertas );
};



// ✅ Comparar Tarjetas
function comparar( descubiertas ){
    // Si hay dos tarjetas descubiertas, validar si son iguales
    if ( descubiertas.length === 2 ) {
        if ( descubiertas[0].dataset.valor === descubiertas[1].dataset.valor ) {
            acierto( descubiertas );
        } else {
            error( descubiertas );
        }
    } 
};


export{
    descubrir,
    comparar
}
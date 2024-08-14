
import { acierto, error } from "./acierto-error.js";
import { actualizarMovimientos } from "./movimientos.js";
import { finalizar } from "./finalizar.js";
import { titulo, btnRepartir } from "./globales.js";
import { reiniciarMovimientos, reiniciarTemporizador } from "./reiniciar-contadores.js";


// ✅ Voltear Tarjetas( max 2 tarjetas )
function descubrir(e){

    // Añade clase descubierta a tarjeta clicada
    e.target.classList.add("descubierta"); 
    
    //Agregamos sonido / cloneNode() para almacenar el sonido
    // en la memoria del nav y que no demore el tiempo de reproducirlo
    document.querySelector("#sonido-carta").cloneNode().play();

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

    // Contador de Movimientos
    actualizarMovimientos();

    // Lanzar Modal cuando se descubren todas las tarjetas
    let pendientes;
    // Seleccionamos todas las tarjetas aun NO acertadas
    pendientes = document.querySelectorAll( ".tarjeta:not(.acertada)" );
    // Si las No acertadas son = 0 es que ya se han descubierto todas
    if ( pendientes.length === 0 ) {
        setTimeout( () => {
            //Ocultar Boton Repartir, titulo y mostrar Modal Final
            titulo.classList.add("ocultar");
            btnRepartir.classList.add("ocultar");
            finalizar();
            // Reiniciar contadores
            reiniciarMovimientos();
            reiniciarTemporizador();
        },1000);
    };
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
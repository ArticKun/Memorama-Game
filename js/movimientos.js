

import { nivelActual,niveles, mov, modo } from "./globales.js";
import { gameOver } from "./finalizar.js";



function actualizarMovimientos() {

    let movTexto;
    mov.movimientos++; // mov.movimientos = mov.movimientos + 1

    // Asignamos valor de movimientos a texto
    movTexto = mov.movimientos;

    // validamos que movimientos no supere el maximo permitido
    // y que la alerta no se muestre en modo relax
    if( mov.movimientos > niveles[nivelActual.level].movimientosMax 
        && !modo.modoRelax ) 
    {
        gameOver();
        return;
    };

    // formatear 2 digitos
    movTexto = movTexto < 10 ? "0" + movTexto : movTexto;
    // Actualizar Texto en HTML
    document.querySelector('#mov').innerHTML = movTexto;
};


// ✅ Actualiza movimientos max en cada nivel
function maxContadorMov() {

    const movMaxTexto = niveles[nivelActual.level].movimientosMax;
    // formatear 2 digitos
    const movMax = movMaxTexto < 10 ? "0" + movMaxTexto : movMaxTexto;
    // Actualizar Texto en HTML
    document.querySelector('#mov-total').innerText = movMax;
};



export {
    actualizarMovimientos,
    maxContadorMov
};


// ✅ Movimientos
export const  mov = {
    movimientos: 0
};

function actualizarMovimientos() {

    let movTexto;
    mov.movimientos++; // mov.movimientos = mov.movimientos + 1

    // Asignamos valor de movimientos a texto
    movTexto = mov.movimientos;

    // formato de 2 cifras
    if( mov.movimientos < 10 ) {
        movTexto = '0' + mov.movimientos;
    };

    // Actualizar Texto en HTML
    document.querySelector('#mov').innerHTML = movTexto;
};


export {
    actualizarMovimientos
};
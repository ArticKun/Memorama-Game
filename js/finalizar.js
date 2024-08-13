

import { tempCero } from "./reiniciar-contadores.js";

function finalizar() {
    // Mostrar Modal Final
    document.querySelector("#endGame").classList.add("visible");
    // Mostrar 00:00 en el contador de tiempo
    tempCero();
};


export {
    finalizar
};
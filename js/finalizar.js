

import { tempCero } from "./reiniciar-contadores.js";
import { nivelActual, niveles } from "./globales.js";


// ✅ Funcion que muestra Modales al finalizar
function finalizar() {

    // Mostrar Modal Final / Subir Nivel
    // Para no pasarnos del numero de niveles disponibles
    if( nivelActual.level < niveles.length - 1 ) {
        document.querySelector("#subeNivel").classList.add("visible");
    }else{
        document.querySelector("#endGame").classList.add("visible");
    }

    // Mostrar 00:00 en el contador de tiempo
    tempCero();
};


// ✅ Funcion que muestra Modal GameOver al finalizar
function gameOver(){
    document.querySelector("#gameOver").classList.add("visible");
};


export {
    finalizar,
    gameOver
};
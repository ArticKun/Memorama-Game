

import { nivelActual, niveles } from "./globales.js";


// ✅ Modal para Subir Nivel o Superado los Niveles
function finalizar() {
    // Validamos  Para no pasar del numero de niveles disponibles
    if( nivelActual.level < niveles.length - 1 ) {
        // Modal sube nivel
        document.querySelector("#subeNivel").classList.add("visible");
    }else{
        // Modal superado los niveles
        document.querySelector("#endGame").classList.add("visible");
    }
};


// ✅ Modal Cuando se acaban los Movimientos
function gameOver(){
    document.querySelector("#gameOver").classList.add("visible");
};


// ✅ Modal Cuando se acaba el Tiempo
function timerOver(){
    document.querySelector("#timeOver").classList.add("visible");
};



export {
    finalizar,
    gameOver,
    timerOver
};
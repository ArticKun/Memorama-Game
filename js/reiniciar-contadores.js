
import { mov } from "./globales.js";
import { temp } from "./globales.js";


// ✅ Reiniciar movimientos
function reiniciarMovimientos(){
    // ✅ Reiniciar movimientos
    const movTexto = mov.movimientos = "00";
    // Actualizar Texto en HTML
    document.querySelector('#mov').innerHTML = movTexto;
};


// ✅ Reiniciar Temporizador
function reiniciarTemporizador(){
    clearInterval(temp.temporizador);
};


function tempCero(){
    const minTexto = "00";
    const segTexto = "00";
    document.querySelector("#minutos").innerHTML  = minTexto;
    document.querySelector("#segundos").innerHTML = segTexto;
};


export {
    reiniciarMovimientos,
    reiniciarTemporizador,
    tempCero
};
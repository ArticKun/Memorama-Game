

import { reparteTarjetas } from "./barajar-repartir.js";
import { iniciarTemporizador } from "./temporizador.js";
import { nivelActual,niveles } from "./globales.js";
import { cargaNivel } from "./niveles.js";
import { maxContadorMov } from "./movimientos.js";



// ✅ Mantener el nivel actual
function obtenerNivelActual() {
    return niveles[nivelActual.level].nivel;
}


//⚡⚡ Iniciar Juego
function Iniciar(){

    // ✅ Muestra Maximo de Movimientos
    maxContadorMov();

    // ✅ Botón Repartir Tarjetas / Reset
    const button = document.querySelector("#btn-repartir");
    //Enviamos como parametro el level que queremos repartir
    button.addEventListener("click", () => {
        const nivel = obtenerNivelActual();
        reparteTarjetas( nivel);
    } );
    
    // ✅ Temporizador / Timer
    //iniciarTemporizador();
};

Iniciar();



// ✅ Botones Reiniciar de los Modales
const btnReiniciar = document.querySelectorAll(".reiniciar");
//Enviamos como parametro el level que queremos repartir
btnReiniciar.forEach( (btn) => btn.addEventListener("click", () => {
    const nivel = obtenerNivelActual();
    reparteTarjetas( nivel );
}) );


// ✅ Boton Subir Nivel
const btnSubirNivel = document.querySelector("#subir");
btnSubirNivel.addEventListener("click", cargaNivel );


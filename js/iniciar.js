

import { reparteTarjetas } from "./barajar-repartir.js";
import { nivelActual,niveles } from "./globales.js";
import { cargaNivel } from "./niveles.js";
import { maxContadorMov } from "./movimientos.js";
import { 
        reiniciarMovimientos, 
        reiniciarTemporizador, 
        tempCero } from "./reiniciar-contadores.js";
import { iniciarTemporizador } from "./temporizador.js";
import { juegoNormal, JuegoRelax } from "./comenzar-juego.js";
import { modo } from "./globales.js";



// ✅ Cargar Pantalla de Inicio
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar pantalla Inicio
    const bienvenida = document.querySelector("#bienvenida");
    bienvenida.classList.add("visible");

    // Selccionamos botones
    const botonJuegoNormal = document.querySelector("#juego-normal");
    const botonJuegoRelax  = document.querySelector("#juego-relax");

    // Asignar los eventos de click
    botonJuegoNormal.addEventListener("click",juegoNormal);
    botonJuegoRelax.addEventListener("click",JuegoRelax);
});



// ✅ Mantener el nivel actual
// para poder usar boton repartir tarjetas como reset
// siempre nos mostrara las tarjetas del nivel actual
function obtenerNivelActual() {
    return niveles[nivelActual.level].nivel;
};


//⚡⚡ Iniciar Juego ⚡⚡
function Iniciar(){
    // ✅ Maximo de Movimientos de cada nivel
    maxContadorMov();
    // ✅ Botón Repartir Tarjetas / Reset
    const button = document.querySelector("#btn-repartir");
    //Enviamos como parametro el level que queremos repartir
    button.addEventListener("click", () => {
        const nivel = obtenerNivelActual();
        reparteTarjetas( nivel);
    });
    // ✅ Ocultar o Mostrar temporizador segun el modo
    if ( !modo.modoRelax ) {
        tempCero();              // Mostrar 00:00 cuando reparte tarjetas
        reiniciarTemporizador(); // Reinicio temporizador cuando reparte tarjetas
    } else {
        document.querySelector("#cronometro").classList.add("cronometro-oculto");
    }
};

Iniciar();


// ✅ Reiniciar Contadores / Ocultar Modales
export const reiniciar = () => {
    
    tempCero();              // Mostrar 00:00 cuando reparte tarjetas
    reiniciarTemporizador(); // Reinicio temporizador cuando reparte tarjetas
    iniciarTemporizador();   // Inicio temporizador nuevamente
    reiniciarMovimientos();  // Reinicio Movimientos cuando reparte tarjetas

    // ✅ Ocultar Modales cuando reparte tarjetas
    document.querySelector("#subeNivel").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#timeOver").classList.remove("visible");
    document.querySelector("#endGame").classList.remove("visible");

    // ✅ Volver al nivel 1
    //nivelActual.level = 0;
};



// ✅ Botones Reiniciar de los Modales
const btnReiniciar = document.querySelectorAll(".reiniciar");
//Enviamos como parametro el level que queremos repartir
btnReiniciar.forEach( (btn) => btn.addEventListener("click", () => {
    const nivel = obtenerNivelActual();
    reparteTarjetas( nivel );
}));


// ✅ Boton Siguiente Nivel
const btnSubirNivel = document.querySelector("#subir");
btnSubirNivel.addEventListener("click", cargaNivel );



export { Iniciar, juegoNormal, JuegoRelax };
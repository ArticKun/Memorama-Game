
import { descubrir } from "./descubrir-comparar.js";
import { titulo,btnRepartir  } from "./globales.js";
import { reiniciarMovimientos, reiniciarTemporizador, tempCero } from "./reiniciar-contadores.js";
import { iniciarTemporizador } from "./temporizador.js";



// ✅ Barajar tarjetas
function barajaTarjetas( level ) {
    // Duplicar tarjetas para crear pares
    const tarjetasTotales = [...level, ...level ]; 
    let resultado;
    resultado = tarjetasTotales.sort( () => {
        return 0.5 - Math.random();
    });
    return resultado;
};

// ✅ Repartir Tarjetas
function reparteTarjetas( level ) {

    // Mostrar 00:00 en el contador de tiempo
    tempCero();

    // Ocultar Modales
    document.querySelector("#subeNivel").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#timeOver").classList.remove("visible");
    document.querySelector("#endGame").classList.remove("visible");

    // Mostrar Tiulo y Boton Repartir
    titulo.classList.remove("ocultar");
    btnRepartir.classList.remove("ocultar");

    // Reiniciar contadores
    reiniciarMovimientos();
    reiniciarTemporizador();
    iniciarTemporizador();

    // Barajamos tarjetas segun nivel
    const barajar = barajaTarjetas( level );
    
    const mesa = document.querySelector("#mesa");

    mesa.innerHTML = ""; // limpiar mesa previa

    // ⚡ Crear Tarjeta
    barajar.forEach( (emoji, index ) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta","aparecer"); //Animacion aparecer
        tarjeta.dataset.valor = emoji;

        const tarjetaContenido = document.createElement("div");
        tarjetaContenido.classList.add("tarjeta__contenido");
        tarjetaContenido.innerHTML = emoji;

        tarjeta.appendChild( tarjetaContenido );
        tarjeta.onclick = descubrir; // funcion descubrir

        mesa.appendChild( tarjeta );

        //Animacion entrada Delay
        setTimeout(() => {
            tarjeta.style.animationDelay = `${index * 0.03}s`;
        });
        
        //remover animacion aparecer y Delay
        setTimeout(() => {
            tarjeta.style.animationDelay = `${index * 0}s`;
            tarjeta.classList.remove("aparecer");
        },1000);
    });
};


export {
    reparteTarjetas
};
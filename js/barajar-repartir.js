
import { descubrir } from "./descubrir-comparar.js";
import { tarjetasTotales,titulo,btnRepartir  } from "./globales.js";
import { reiniciarMovimientos, reiniciarTemporizador, tempCero } from "./reiniciar-contadores.js";
import { iniciarTemporizador } from "./temporizador.js";



// ✅ Barajar tarjetas
function barajaTarjetas() {
    let resultado;
    resultado = tarjetasTotales.sort( () => {
        return 0.5 - Math.random();
    });
    return resultado;
};


// ✅ Repartir Tarjetas
function reparteTarjetas(){

    // Mostrar 00:00 en el contador de tiempo
    tempCero();

    // Ocultar Modal Final
    document.querySelector("#endGame").classList.remove("visible");

    // Mostrar Tiulo y Boton Repartir
    titulo.classList.remove("ocultar");
    btnRepartir.classList.remove("ocultar");

    // Reiniciar contadores
    reiniciarMovimientos();
    reiniciarTemporizador();
    iniciarTemporizador();

    const barajar = barajaTarjetas();
   
    const mesa = document.querySelector("#mesa");

    mesa.innerHTML = ""; // limpiar mesa previa

    // Crear Tarjeta
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
            tarjeta.style.animationDelay = `${index * 0.04}s`;
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


import { reparteTarjetas } from "./barajar-repartir.js";
import { iniciarTemporizador } from "./temporizador.js";

document.addEventListener( "DOMContentLoaded", () => {

    // ✅ Botón Repartir Tarjetas
    const button = document.querySelector("#btn-repartir");
    button.addEventListener("click", reparteTarjetas);
    
    // ✅ Temporizador / Timer
    //iniciarTemporizador();

    // ✅ Boton Modal Final
    const btnFinalizar = document.querySelector(".reiniciar");
    btnFinalizar.addEventListener("click", reparteTarjetas );

});
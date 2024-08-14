

import { reparteTarjetas } from "./barajar-repartir.js";
import { nivelActual, niveles } from "./globales.js";
import { maxContadorMov } from "./movimientos.js";



// ✅ Funcion Subir Nivel
const suberNivel = () => {
    nivelActual.level ++;
};


// ✅ Funcion Actualizar Nivel en HTML
function actualizaNivel(){
    //+1 es visualmente ya que los indices comienzan en 0
    const nivelTexto = nivelActual.level + 1;
    // formatear 2 digitos
    const nivelFormateado = nivelTexto < 10 ? "0" + nivelTexto : nivelTexto;
    //actualizamos html
    document.querySelector("#nivel").innerHTML = nivelFormateado;
    
};


// ✅ Funcion para cargar niveles
function cargaNivel(){
    suberNivel();
    actualizaNivel();
    maxContadorMov();
    reparteTarjetas( niveles[nivelActual.level].nivel );
};



export {
    suberNivel,
    actualizaNivel,
    cargaNivel
}
import { reparteTarjetas } from "./barajar-repartir.js";
import { niveles, nivelActual, modo } from "./globales.js";
import { Iniciar, reiniciar } from "./iniciar.js";
import { maxContadorMov } from "./movimientos.js";
import { actualizaNivel } from "./niveles.js";


// ✅ Escritura de niveles
function escribirNiveles(){
    const menuNiveles = document.querySelector(".selecciona-nivel ul");
    niveles.forEach((nivel, index) => {
        const controlNivel = document.createElement("li");
        controlNivel.innerHTML =
        "<button class='nivel' data-nivel=" +
        index +
        ">Nivel " +
        (index + 1) +
        "</button>";
    menuNiveles.appendChild(controlNivel);
    });
};


// ✅ Mostramos los niveles
function muestraMenuNiveles( evento ){
    evento.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.toggle("visible");
    // oculta boton 
    document.querySelector("#control-nivel").classList.add("oculta-menu");
};

// ✅ Ocultamos los niveles
function ocultaMenuNiveles(){
    document.querySelector(".selecciona-nivel").classList.remove("visible");
    // oculta boton 
    document.querySelector("#control-nivel").classList.remove("oculta-menu");
};


// ✅ Cargar / Cambiar los niveles
function cambiaNivel( e ){
    const nivel = parseInt( e.target.dataset.nivel );
    nivelActual.level = nivel;
    actualizaNivel();
    maxContadorMov();
    reparteTarjetas( niveles[nivelActual.level].nivel );
};



// ✅ Cerrar menu Clickeando fuera o con "esc"
function clickFueraMenu( evento ){
    if( evento.target.closest(".selecciona-nivel") ) return;
    document.querySelector(".selecciona-nivel").classList.remove("visible");
    // oculta boton 
    document.querySelector("#control-nivel").classList.remove("oculta-menu");
};

function teclaEsc( evento ){
    if( evento.key === "Escape" ){
        document.querySelector(".selecciona-nivel").classList.remove("visible");
        // oculta boton 
        document.querySelector("#control-nivel").classList.remove("oculta-menu");
    }
};


// ✅ Recargar  Pagina trae de vuelta pantalla Bienvenida 
const botonConfig = document.querySelector("#config");

botonConfig.addEventListener("click", () => {
    location.reload();
});




export { 
    escribirNiveles, 
    muestraMenuNiveles,
    ocultaMenuNiveles,
    cambiaNivel,
    clickFueraMenu,
    teclaEsc
};
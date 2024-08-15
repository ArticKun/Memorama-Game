
import { Iniciar } from "./iniciar.js";
import { modo } from "./globales.js";
import { 
    escribirNiveles, 
    cambiaNivel, 
    muestraMenuNiveles, 
    ocultaMenuNiveles,
    clickFueraMenu,
    teclaEsc
} from "./aside-menu.js";



//✅ Botones Juego Normal y Relax
export function juegoNormal() {
  modo.modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  Iniciar();
  console.log("Modo Contra Reloj Iniciado");
};

export function JuegoRelax() {
  modo.modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  Iniciar();
  console.log("Modo Relax Iniciado");
};




//✅ Escritura de niveles
escribirNiveles();

//✅ Mostrar niveles
  document
    .querySelector("#control-nivel")
    .addEventListener("click", muestraMenuNiveles );

// ✅ Ocultar niveles
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles );

// ✅ Cambiar los niveles
document.querySelectorAll(".nivel").forEach( function(elemento) {
    elemento.addEventListener("click", cambiaNivel )
});




// ✅ Click fuera del menu niveles / Esc
document.querySelector("body").addEventListener("click", clickFueraMenu );
document.addEventListener("keydown",teclaEsc );
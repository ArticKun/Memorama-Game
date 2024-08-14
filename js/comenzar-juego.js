
import { Iniciar } from "./iniciar.js";
import { modo } from "./globales.js";


//✅ Botones Juego Normal y Relax
export function juegoNormal() {
  modo.modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  Iniciar();
  console.log("Modo Normal Iniciado", modo.modoRelax);
};


export function JuegoRelax() {
  modo.modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  Iniciar();
  console.log("Modo Relax Iniciado", modo.modoRelax);
};


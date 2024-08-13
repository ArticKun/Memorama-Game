

// ✅ Crear de tarjetas
//const grupoTarjetas   = ["⚡", "👽", "👹", "👺", "👾", "🤖", "💩", "💀", "🤙"];
const grupoTarjetas   = ["⚡","👽"];//prueba
// Duplicar tarjetas para crear pares
const tarjetasTotales = [...grupoTarjetas, ...grupoTarjetas ];

// ✅ Titulo y Boton Repartir Tarjetas
const titulo          = document.querySelector("h1");
const btnRepartir     = document.querySelector("#btn-repartir");

export {
    tarjetasTotales,
    titulo,
    btnRepartir
};
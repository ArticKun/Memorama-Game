

// ✅ Crear de tarjetas
//const grupoTarjetas   = ["⚡", "👽", "👹", "👺", "👾", "🤖", "💩", "💀", "🤙"];

const grupoTarjetas   = [ 
    
    ["👽","👹","👺"], //0 Level 1
    //["👽"], //0 Level 1
    ["👾","🤖","💩"], //1 level 2
    //["👾"], //1 level 2
    ["💀","🤙","🏀"], //2 level 3
    ["🎁","🕹️","⚔️"], //3 level 4
    ["🎹","🥶","😶‍🌫️"], //4 level 5
];


//✅ Niveles
const  nivelActual = {
    level:0
};

const niveles = [
    {
        nivel:grupoTarjetas[0],
        movimientosMax: 10
    },
    {
        nivel:[...grupoTarjetas[0], ...grupoTarjetas[1]],
        movimientosMax: 30
    },
    {
        nivel: [...grupoTarjetas[0], ...grupoTarjetas[1], ...grupoTarjetas[2]],
        movimientosMax: 50  
    },
    {
        nivel: [...grupoTarjetas[0], ...grupoTarjetas[1], ...grupoTarjetas[2], ...grupoTarjetas[3]],
        movimientosMax: 70
    },
    {
        nivel: [...grupoTarjetas[0], ...grupoTarjetas[1], ...grupoTarjetas[2], ...grupoTarjetas[3], ...grupoTarjetas[4]],
        movimientosMax: 90
    }
];


// ✅ Titulo y Boton Repartir Tarjetas
const titulo          = document.querySelector("h1");
const btnRepartir     = document.querySelector("#btn-repartir");



export {
    grupoTarjetas,
    titulo,
    btnRepartir,
    nivelActual,
    niveles
};
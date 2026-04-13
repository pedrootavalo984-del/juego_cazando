let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
 
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
 
const ALTO_GATO = 100;
const ANCHO_GATO = 120;
const ALTO_COMIDA = 80;
const ANCHO_COMIDA = 80;


function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}
 

function graficarGato(){
    gatoX = canvas.width / 2 - ANCHO_GATO / 2;
    gatoY = canvas.height /2 - ALTO_GATO /2 ;
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#0b49e8");
}

function graficarComida(){
    comidaX = canvas.height-ANCHO_COMIDA
    comidaY = canvas.width-ALTO_COMIDA
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA,"#00ff95ea");
}



function iniciarJuego(){
    graficarGato();
    graficarComida();
}



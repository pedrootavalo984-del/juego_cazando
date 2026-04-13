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
 

gatoX = canvas.width / 2 - ANCHO_GATO / 2;
gatoY = canvas.height /2 - ALTO_GATO /2 ;

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#0b49e8");
}

comidaX = canvas.height-ANCHO_COMIDA
comidaY = canvas.width-ALTO_COMIDA

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA,"#00ff95ea");
}



function iniciarJuego(){
    graficarGato();
    graficarComida();
    detectarColision()
}

 function limpiarCanva (){
    ctx.clearRect(0,0,canvas.width, canvas.height)
 }

 function moverIzquierda(){
    gatoX -= 10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
 }

 function moverDerecha(){
    gatoX += 10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
 }
 function moverArriba(){
    gatoY -= 10
    limpiarCanva()
    graficarGato()
    graficarComida()
   detectarColision()
 }
 function moverAbajo(){
    gatoY += 10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
   
 }


 let puntaje = 0;

function detectarColision() {
  if (
    gatoX + ANCHO_GATO >= comidaX &&
    gatoX <= comidaX + ANCHO_COMIDA &&
    gatoY + ALTO_GATO >= comidaY &&
    gatoY <= comidaY + ALTO_COMIDA
  ) {
    
    puntaje += 1;
    mostrarEnSpan("puntos", puntaje);

    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

    limpiarCanva();
    graficarGato();
    graficarComida();

    alert("Comelon! ");
  }
}

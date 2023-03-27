//tamanho raquetes
let compRaq=10
let altRaq=80

//variáveis raquete esquerda
let xRaqEsc=2
let yRaqEsc=160
let velRaqEsc=9

//variáveis raquete direita
let xRaqDir=588
let yRaqDir=160
let velRaqDir=9

function raquete(x,y){
  rect(x, y, compRaq, altRaq);
  }


function controleRaqueteEsquerda(){
  if (keyIsDown(87)){
    if(yRaqEsc > 0){
      yRaqEsc -= velRaqEsc
    }
}
  
  if (keyIsDown(83)){
    if(yRaqEsc < 320){
      yRaqEsc += velRaqEsc
    }
  }
}

function colisaoRaqueteEsquerda(x,y){
  if (xBola-raioBola < x+compRaq && yBola+raioBola > y && yBola-raioBola < y+altRaq){
    velXBola *= -11/10
    velYBola *= 21/20
    batida.play()
  }
}

function colisaoRaqueteDireita(x,y){
  if (xBola+raioBola > x && yBola+raioBola > y && yBola-raioBola < y+altRaq){
    velXBola *= -11/10
    velYBola *= 21/20
    batida.play()
  }
}

function controleRaqueteDireita(){
  if (keyIsDown(UP_ARROW)){
    if(yRaqDir > 0){
      yRaqDir -= velRaqDir
  }
}
  
  if (keyIsDown(DOWN_ARROW)){
    if(yRaqDir < 320){
      yRaqDir += velRaqDir
    }
  }
}

//variáveis bola
let xBola=300
let yBola=200
let diametroBola=20
let raioBola=diametroBola/2

//movimentação bola
let velXBola=5/2
let velYBola=5/2

function bola(){
  fill(0)
  circle(xBola, yBola, diametroBola)
}

function movimento(){
  xBola += velXBola
  yBola += velYBola
}

function colisaoBorda(){
  if (xBola+raioBola > width ||
      xBola-raioBola < 0) {
    velXBola *= -1
  }

  if (yBola+raioBola > height ||
     yBola-raioBola < 0) {
    velYBola *= -1
  }
}

function respawnBola(){
  if(xBola > 590){
    xBola = 300
    yBola = 200
    velXBola *= 1/2
    velYBola *= 1/2
  }
  
  if(xBola < 10){
    xBola = 300
    yBola = 200
    velXBola *= 1/2
    velYBola *= 1/2
  }
}

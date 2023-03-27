//placar
let pontosEsquerda=0
let pontosDireita=0

function placar(){
  textSize(20)
  fill(255,0,0)
  rect(190,18,50,30)
  fill(0)
  text(pontosDireita, 200, 40)
  fill(255,255,0)
  rect(390,18,50,30)
  fill(0)
  text(pontosEsquerda, 400, 40)
}

function pontuar(){
  if(xBola > 590){
    pontosDireita += 1
    ponto.play()
  }
  if(xBola < 10){
    pontosEsquerda += 1
    ponto.play()
  }
}

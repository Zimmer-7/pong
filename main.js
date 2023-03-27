
function setup() {
  createCanvas(600, 400);
  fundo.loop()
}

function draw() {
  background(176,224,230);
  bola()
  movimento()
  colisaoBorda()
  raquete(xRaqEsc,yRaqEsc)
  raquete(xRaqDir,yRaqDir)
  controleRaqueteEsquerda()
  colisaoRaqueteEsquerda(xRaqEsc,yRaqEsc)
  colisaoRaqueteDireita(xRaqDir,yRaqDir)
  controleRaqueteDireita()
  placar()
  pontuar()
  respawnBola()
}



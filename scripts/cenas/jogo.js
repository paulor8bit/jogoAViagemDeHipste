class Jogo {
  constructor(){
      this.indice = 0 
      this.mapa = fita.mapa
      
  }
  setup() {
    
      cenario = new Cenario(imagemCenario, 1)
      cenarioUm = new Cenario(imagemCenarioUm,1)
      cenarioDois = new Cenario(imagemCenarioDois, 1)
      cenarioTres = new Cenario(imagemCenarioTres, 9)
      cenarioQuatro = new Cenario(imagemCenarioQuatro, 10)
      pontuacao = new Pontuacao()
      vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    
      personagem = new Personagem(matrizPersonagem, imagemPersonagem,
          50, 30, 110, 135, (larguraPersonagem/4), (alturaPersonagem/4))
          // 0, 30, 110, 135, 220, 270)        
     
      const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52,
      30, 80, 80, 500, 500, 10)
      // const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52,
      //   30, 52, 52, 104, 104, 10)
      
      const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width-52,
      30, 150, 150, (larguraSpriteInimigoGrande/4), (alturaSpriteInimigoGrande/4), 10)

      const morty = new Inimigo(matrizMorty, imagemMorty, width-52,
      30, 100, 150, (larguraSpriteMorty/4), (alturaSpriteMorty/4), 10)
      
      const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width-52,
      200, 100, 75, (larguraSpriteInimigoVoador/4),(alturaSpriteInimigoVoador/2), 10)

      const duck = new Inimigo(matrizDuck, imagemDuck, width-52,
      30, 100, 150, (larguraSpriteDuck/4), (alturaSpriteDuck/4), 10)
      
      inimigos.push(inimigo)
      inimigos.push(inimigoGrande)
      inimigos.push(inimigoVoador)
      inimigos.push(morty)
      inimigos.push(duck)
    
  }
keyPressed(key) {
// if (key === 'ArrowUp') {
//   personagem.pula()
//   somDoPulo.play()
// }

if(keyIsDown(UP_ARROW) || keyIsDown(87))
{
  personagem.pula()
  somDoPulo.play()
}
if(keyIsDown(DOWN_ARROW) || keyIsDown(83))
{  
  somWoof.play()
}

if(keyIsDown(LEFT_ARROW) || keyIsDown(65))
{
  personagem.esquerda()
   }

if(keyIsDown(RIGHT_ARROW) || keyIsDown(68))
{
  personagem.direita()
  pontuacao.adcionarPontoDuplo()
  
}

if (gameOver && key === "Enter") {
  window.location.reload();
}



  }

  
  
draw() {
  cenario.exibe()
  cenario.move()
  cenarioUm.exibe()
  cenarioUm.move()
  cenarioDois.exibe()
  cenarioDois.move()
  cenarioTres.exibe()
  cenarioTres.move()
  cenarioQuatro.exibe()
  cenarioQuatro.move()

    // if (pontuacao.pontos < 201) {
    //   cenario.exibe();
    //   cenario.move();
    // } else if (pontuacao.pontos > 200 && pontuacao.pontos < 400) {
    //   cenario2.exibe();
    //   cenario2.move();
    // } else {
    //   cenario3.exibe();
    //   cenario3.move();
    // }

  vida.draw()
  pontuacao.exibe()
  pontuacao.adcionarPonto()

  
  const linhaAtual = this.mapa[this.indice]
  const inimigo = inimigos[linhaAtual.inimigo]
  const inimigoVisivel = inimigo.x < - inimigo.largura
  inimigo.velocidade = linhaAtual.velocidade
  
  inimigo.exibe()
  inimigo.move()

  if (inimigoVisivel){
      this.indice++
      inimigo.aparece()
    if (this.indice > this.mapa.length -1){
      this.indice = 0
    }
  }
  
  personagem.aplicaGravidade()
  personagem.exibe()   
  if(personagem.estaColidindo(inimigo) ) {
    console.log('colidiu')
    vida.perdeVida()
    personagem.ficaInvencivel()
    
    if(vida.vidas === 0) {
      
      noLoop()
      
      // somGameOver.play()
      image(imagemGameOver, ( width / 2 ) - 206, ( height / 2 ) - 39, 412, 78);
      somDoJogo.stop()  
      textFont(fonteTelaInicial);
      textSize(25);
      textAlign(CENTER);
      text('Aperte ENTER para reniciar o jogo ', width/2, height/5*4);
      gameOver = true
    }
  }
}



}
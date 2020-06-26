class TelaInicial {
    constructor() {}
    draw() {
      this._imagemDeFundo();
      this._texto();
      this._botao();
    }
  
    _imagemDeFundo() {
      image(imagemTelaInicial, 0, 0, width, height);
    }
  
    _texto() {
        textFont(fonteTelaInicial)
        textSize(50)
        textAlign(CENTER)
        text('A Viagem de', width /2, 100)
        textSize(80)
        text('Hipste', width /2, 150)
        textSize(20);
        text('Use as setas ou wasd para correr e pular', width / 2, height/ 7*5+100)
    }
    _botao() {
      botaoGerenciador.y = height/7*5;
      botaoGerenciador.draw();
    }
  }


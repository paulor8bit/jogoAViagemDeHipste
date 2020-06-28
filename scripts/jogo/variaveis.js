let fita
let jogo
let cenaAtual = 'telaInicial'
let cenas
let telaInicial
let cenario
let imagemTelaInicial
let fonteTelaInicial
let imagemCenario
let imagemCenarioUm // Cenario com Paralax
let imagemCenarioDois
let imagemCenarioTres
let imagemCenarioQuatro 
let cenarioUm
let cenarioDois
let cenarioTres
let cenarioQuatro
let inimigofun

let gameOver = false
let vida
let imagemVida
let pontuacao

let personagem
let imagemPersonagem
const larguraPersonagem = 3520
const alturaPersonagem = 1760
const matrizPersonagem =  [
    [0,0], [(larguraPersonagem/4),0], [(larguraPersonagem/4)*2,0], [(larguraPersonagem/4)*3,0],    
    [0,(alturaPersonagem/4)], [(larguraPersonagem/4),(alturaPersonagem/4)], [(larguraPersonagem/4)*2,(alturaPersonagem/4)], [(larguraPersonagem/4)*3,(alturaPersonagem/4)],
    [0,(alturaPersonagem/4)*2], [(larguraPersonagem/4),(alturaPersonagem/4)*2], [(larguraPersonagem/4)*2,(alturaPersonagem/4)*2], [(larguraPersonagem/4)*3,(alturaPersonagem/4)*2],
    [0,(alturaPersonagem/4)*3], [(larguraPersonagem/4),(alturaPersonagem/4)*2], [(larguraPersonagem/4)*2,(alturaPersonagem/4)*3], [(larguraPersonagem/4)*3,(alturaPersonagem/4)*3]]



//   const matrizPersonagem =  [
//     [0,0], [220,0], [440,0], [660,0],
//     [0,270], [220,270], [440,270], [660,270],
//     [0,540], [220,540], [440,540], [660,540],
//     [0,810], [220,810], [440,810], [660,810]]
  

let inimigo
let imagemInimigo
const matrizInimigo =[
  [0,0],
  //  [104,0],[208,0],[312,0],
  // [0,104],[104,104],[208,104],[312,104],
  // [0,208],[104,208],[208,208],[312,208],
  // [0,312],[104,312],[208,312],[312,312],
//   [0,418],[104,418],[208,418],[312,418],
//   [0,522],[104,522],[208,522],[312,522],
//   [0,626],[104,626],[208,626],[312,626]
]
  
let inimigoGrande
let imagemInimigoGrande
const larguraSpriteInimigoGrande = 1848
const alturaSpriteInimigoGrande = 2040
const matrizInimigoGrande = [
  [0,0], [(larguraSpriteInimigoGrande/4),0], [(larguraSpriteInimigoGrande/4)*2,0], [(larguraSpriteInimigoGrande/4)*3,0],    
  [0,(alturaSpriteInimigoGrande/4)], [(larguraSpriteInimigoGrande/4),(alturaSpriteInimigoGrande/4)], [(larguraSpriteInimigoGrande/4)*2,(alturaSpriteInimigoGrande/4)], [(larguraSpriteInimigoGrande/4)*3,(alturaSpriteInimigoGrande/4)],
  [0,(alturaSpriteInimigoGrande/4)*2], [(larguraSpriteInimigoGrande/4),(alturaSpriteInimigoGrande/4)*2], [(larguraSpriteInimigoGrande/4)*2,(alturaSpriteInimigoGrande/4)*2], [(larguraSpriteInimigoGrande/4)*3,(alturaSpriteInimigoGrande/4)*2],
  [0,(alturaSpriteInimigoGrande/4)*3], [(larguraSpriteInimigoGrande/4),(alturaSpriteInimigoGrande/4)*2], [(larguraSpriteInimigoGrande/4)*2,(alturaSpriteInimigoGrande/4)*3], [(larguraSpriteInimigoGrande/4)*3,(alturaSpriteInimigoGrande/4)*3]]

let inimigoVoador
let imagemInimigoVoador
const larguraSpriteInimigoVoador = 2340
const alturaSpriteInimigoVoador = 2298
const matrizInimigoVoador = [
  [0,0], [(larguraSpriteInimigoVoador/4),0], [(larguraSpriteInimigoVoador/4)*2,0], [(larguraSpriteInimigoVoador/4)*3,0],    
  [0,(alturaSpriteInimigoVoador/4)*2], [(larguraSpriteInimigoVoador/4),(alturaSpriteInimigoVoador/4)*2], [(larguraSpriteInimigoVoador/4)*2,(alturaSpriteInimigoVoador/4)*2], [(larguraSpriteInimigoVoador/4)*3,880],
  
]

let morty
let imagemMorty
const larguraSpriteMorty = 3120
const alturaSpriteMorty = 4680
const matrizMorty =  [
  [0,0], [(larguraSpriteMorty /4),0], [(larguraSpriteMorty /4)*2,0], [(larguraSpriteMorty /4)*3,0],    
  [0,(alturaSpriteMorty/4)], [(larguraSpriteMorty /4),(alturaSpriteMorty/4)], [(larguraSpriteMorty /4)*2,(alturaSpriteMorty/4)], [(larguraSpriteMorty /4)*3,(alturaSpriteMorty/4)],
  [0,(alturaSpriteMorty/4)*2], [(larguraSpriteMorty /4),(alturaSpriteMorty/4)*2], [(larguraSpriteMorty /4)*2,(alturaSpriteMorty/4)*2], [(larguraSpriteMorty /4)*3,(alturaSpriteMorty/4)*2],
  [0,(alturaSpriteMorty/4)*3], [(larguraSpriteMorty /4),(alturaSpriteMorty/4)*2], [(larguraSpriteMorty /4)*2,(alturaSpriteMorty/4)*3], [(larguraSpriteMorty /4)*3,(alturaSpriteMorty/4)*3]]


const inimigos = []

let somDoPulo
let somDoJogo
let somWoof

let botaoGerenciador


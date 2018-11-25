let largura;
let altura;
let vida = 0;
let tempo = 30;
let criaMosquito;

const nivel = window.location.search.replace('?', '');
if(nivel === 'normal'){
  criaMosquito = 1500;
} else if(nivel === 'dificil') {
  criaMosquito = 1000;
} else if(nivel === 'chucknorris') {
  criaMosquito = 750;
}

function ajustaTamanhoPalcoJogo() {
  largura = window.innerWidth;
  altura = window.innerHeight;

  console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function() {
  document.getElementById('cronometro').innerHTML = tempo;
  tempo -= 1;

  if(tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosca);
    window.location.href = 'vitoria.html'
  }
},1000);

function posicaoRandomica() {
  
  //remover o mosquito anterior (caso exista)
  if(document.getElementById('mosquito')) {
    vida++;
    removerMosquito(vida);
    if(vida >= 3) {
      window.location.href = 'fim-de-jogo.html'
    }
  }

  let posX = Math.floor(Math.random() * largura) - 90;
  let posY = Math.floor(Math.random() * altura) - 90;

  posX = posX < 0 ? 0 : posX;
  posY = posY < 0 ? 0 : posY;
    
  let mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosquito.png';
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
  mosquito.style.left = posX + 'px';
  mosquito.style.top = posY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';

  mosquito.onclick = function() {
      this.remove();
  }

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  var classe = Math.ceil(Math.random() * 3);
  return 'mosquito' + classe;
}

function ladoAleatorio() {
  var classe = Math.ceil(Math.random() * 2);
  return 'lado' + classe;
}

function removerMosquito(vida) {
  document.getElementById('mosquito').remove();
  document.getElementById('v' + vida).src = 'imagens/coracao_vazio.png';
}

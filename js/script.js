
// Variáveis
const listaForca = document.getElementsByClassName('itemForca');
const listaInicial = document.getElementsByClassName('inicial');
const listaInGame = document.getElementsByClassName('inGame');
const botaoStart = document.getElementById('botaoStart');
const botaoRecomecar = document.getElementById('recomecar');
const botaoPulaEssa = document.getElementById('pula');
const botaoVerPalavras = document.getElementById('verPalavras');
const botaoNovaPalavra = document.getElementById('novaPalavra');

const teclado = document.getElementsByClassName('linhaTeclas');
const palavraOculta = document.querySelector('#palavraOculta');

let respostasErradas = 0, vitorias = 0, derrotas =0; respostaOculta = []; resposta = '';
let acertouPalavra = true; jogoRodando = false;
let palavras = [
'camelo',
'mesa',
'geladeira',
'vaso'
];

// Chamadas de Funções

	botaoStart.onclick = inicia;
	botaoRecomecar.onclick = finaliza;
	botaoPulaEssa.onclick = pulaEssa;
	inicia();

// Funções
function inicia() {
	respostasErradas = 0;
	resposta = sorteiaPalavra().toUpperCase();
		console.log(resposta);
	ocultaTodos(listaInicial);
	exibeTodos(listaInGame);
	respostaOculta = [];
	imprimePalavraOculta();
	desenhaForca();
	preencheTeclado();
}

function finaliza() {
	ocultaTodos(listaForca);
	ocultaTodos(listaInGame);
	exibeTodos(listaInicial);
	limpaTeclado();
	limpaAcertos();
	palavraOculta.textContent = '';
	respostasErradas = 0; vitorias = 0; derrotas =0; acertouPalavra = true; jogoRodando = false;
}

function ocultaTodos(lista) {
	for (const item of lista) {
	    oculta (item);
	}
}

function exibeTodos(lista) {
	for (const item of lista) {
	    exibe(item);
	}
}

function oculta(elemento) {
    elemento.style.display = 'none';
}

function exibe(elemento) {
    elemento.style.display = '';
}

function preencheTeclado() {
	preencheLinha (1, "QWERTYUIOP");
	preencheLinha (2, "ASDFGHJKLÇ");
	preencheLinha (3, "ZXCVBNM");
}

function preencheLinha (linha, letras) {
	for (let l of letras) {
		let tecla = document.createElement('a')
 		tecla.id = l.toUpperCase()
 		tecla.append(l)
 		tecla.addEventListener('click', confereChave)
 		document.querySelector('#tecladoLinha_' + linha).append(tecla)
 	}
}

function limpaTeclado() {
  for (var i of document.querySelectorAll('.areaTeclado div')) //limpa o teclado
    i.innerText = ''
}


function confereChave() {
	let letraChave = this.innerText.toUpperCase();
	if (resposta.includes(letraChave)){
		for (var i in respostaOculta) {
			if (resposta[i] == letraChave) respostaOculta[i] = resposta[i];
		}
		atualizarExibirPalavra();
    this.classList.toggle('letraCorreta', true)
    this.removeEventListener('click', confereChave)
  } else {
    // Quando erra a letra
    this.classList.toggle('letraIncorreta', true)
    this.removeEventListener('click', confereChave)
    respostasErradas++;
    desenhaForca();
  }
}

function imprimePalavraOculta () {
	for (var i of resposta) respostaOculta.push('_');
		console.log(respostaOculta)
	atualizarExibirPalavra();
}

function atualizarExibirPalavra() {
  var display = ''
  for (var i of respostaOculta) display += i + ' '
  display.slice(0, -1)
  palavraOculta.textContent = display
}

function sorteiaPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)]
}

function palavraCertaOuErrada () {
	if (acertouPalavra) {
		let img = document.createElement('img');
		img.src = 'img/acerto.png';
		document.querySelector('#totalAcertos').append(img);
	} else {
		let img = document.createElement('img');
		img.src = 'img/erro.png';
		document.querySelector('#totalAcertos').append(img);
	}
}

function pulaEssa() {
	acertouPalavra = false;
	derrotas++;
	palavraCertaOuErrada();
}

function limpaAcertos() {
	for (let i of document.querySelectorAll('#totalAcertos img')) {
		i.parentNode.removeChild(i);
	}
}

function desenhaForca() {
  switch (respostasErradas) {
    case 0:
		exibe (listaForca[respostasErradas]);
		break
    case 1:
		exibe (listaForca[respostasErradas]);
		break
    case 2:
		exibe (listaForca[respostasErradas]);
		break
    case 3:
		exibe (listaForca[respostasErradas]);
		break
    case 4:
		exibe (listaForca[respostasErradas]);
		break
    case 5:
		exibe (listaForca[respostasErradas]);
		break
    case 6:
		exibe (listaForca[respostasErradas]);
		break
    default:
  }
}

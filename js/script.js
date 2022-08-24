// Variáveis
const listaForca = document.getElementsByClassName('itemForca');
const listaInicial = document.getElementsByClassName('inicial');
const listaInGame = document.getElementsByClassName('inGame');
const botaoStart = document.getElementById('botaoStart');
const botaoRecomecar = document.getElementById('recomecar');
const botaoPulaEssa = document.getElementById('pula');
const botaoVerPalavras = document.getElementById('verPalavras');
const botaoNovaPalavra = document.getElementById('novaPalavra');
const avisos = document.getElementById('avisos');

const teclado = document.getElementsByClassName('linhaTeclas');
const palavraOculta = document.querySelector('#palavraOculta');
const dicaElemento = document.querySelector('#dica');

let letrasErradas = 0, vitorias = 0, derrotas =0; respostaOculta = []; resposta = '';
let acertouPalavra = true;
var palavras = [
'camelo',
'mesa',
'geladeira',
'vaso'
];

var dicas = [
'animal',
'objeto',
'cozinha',
'planta'
];

// Chamadas de Funções

	botaoStart.onclick = inicia;
	botaoRecomecar.onclick = finaliza;
	botaoPulaEssa.onclick = pulaEssa;
	inicia();

// Funções
function inicia() {
	letrasErradas = 0; vitorias = 0; derrotas =0; acertouPalavra = true;
	ocultaTodos(listaInicial);
	proximaPalavraOculta();
}

function finaliza() {
	ocultaTodos(listaForca);
	ocultaTodos(listaInGame);
	exibeTodos(listaInicial);
	reiniciaTeclado();
	limpaAcertos();
	palavraOculta.textContent = '';
	dicaElemento.textContent = '';
	avisos.textContent = '';
}

function proximaPalavraOculta () {
	palavraOculta.textContent = '';
	dicaElemento.textContent = '';
	avisos.textContent = "";
	letrasErradas = 0;
	respostaOculta = [];
	reiniciaTeclado();
	novaResposta();
	imprimePalavraOculta();
	desenhaForca();
	preencheTeclado();
	exibeTodos(listaInGame);
}

function confereLetra() {
	let letraChave = this.innerText.toUpperCase();
  this.classList.toggle('letraClicada', true)
  this.removeEventListener('click', confereLetra)
	if (resposta.includes(letraChave)){
		// Se acerta a letra
		for (var i in respostaOculta) {
			if (resposta[i] == letraChave) respostaOculta[i] = resposta[i];
		}
		atualizarExibirPalavra();
		if (respostaOculta.includes('_') == false) {
			// Se acabam os _
			acertouPalavra = true;
			palavraCertaOuErrada();
			// Verificar fim da palavra ou do jogo
			fimDaPalavra();
			// proximaPalavraOculta();
		}
  } else {
    // Quando erra a letra
    this.classList.toggle('letraClicada', true)
    this.removeEventListener('click', confereLetra)
    letrasErradas++;
    desenhaForca();
  }
}

function fimDaPalavra() {
		ocultaTodos(listaInGame);
		ocultaTodos(listaForca);
		reiniciaTeclado();
	if (acertouPalavra) {
		avisos.textContent = 'Palavra correta!';
	} else {
		palavraOculta.textContent = resposta;
		avisos.textContent = 'Palavra incorreta!';
	}
	vitoriaOuDerrota();
}

function vitoriaOuDerrota() {
	if (vitorias == 4 || derrotas == 4) {
		if (vitorias > derrotas) {
			avisos.textContent = 'Parabéns! Você Venceu!';
			avisos.onclick = finaliza;
		} else {
			avisos.textContent = 'Você perdeu!';
			avisos.onclick = finaliza;
		}
	} else {
		avisos.onclick = proximaPalavraOculta;
	}
}

function pulaEssa() {
	acertouPalavra = false;
	palavraCertaOuErrada();
	fimDaPalavra();
}

function novaResposta() {
	index = sorteiaIndex();
	resposta = palavras[index].toUpperCase();
	dica = dicas[index].toUpperCase();
	dicaElemento.textContent = dica;
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
 		tecla.addEventListener('click', confereLetra)
 		document.querySelector('#tecladoLinha_' + linha).append(tecla)
 	}
}

function reiniciaTeclado() {
  for (var i of document.querySelectorAll('.areaTeclado div')) //limpa o teclado
    i.innerText = ''
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

function sorteiaIndex() {
  return Math.floor(Math.random() * palavras.length);
}

function palavraCertaOuErrada () {
	if (acertouPalavra) {
		vitorias++;
		let img = document.createElement('img');
		img.src = 'img/acerto.png';
		document.querySelector('#totalAcertos').append(img);
	} else {
		derrotas++;
		let img = document.createElement('img');
		img.src = 'img/erro.png';
		document.querySelector('#totalAcertos').append(img);
	}
}

function limpaAcertos() {
	for (let i of document.querySelectorAll('#totalAcertos img')) {
		i.parentNode.removeChild(i);
	}
}

function desenhaForca() {
  switch (letrasErradas) {
    case 0:
			exibe (listaForca[letrasErradas]);
			break
    case 1:
			exibe (listaForca[letrasErradas]);
			break
    case 2:
			exibe (listaForca[letrasErradas]);
			break
    case 3:
			exibe (listaForca[letrasErradas]);
			break
    case 4:
			exibe (listaForca[letrasErradas]);
			break
    case 5:
			exibe (listaForca[letrasErradas]);
			break
    case 6:
			exibe (listaForca[letrasErradas]);
			acertouPalavra = false;
			palavraCertaOuErrada();
			// Verificar fim da palavra ou do jogo
			fimDaPalavra();
		break
    default:
  }
}

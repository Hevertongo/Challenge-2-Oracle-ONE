
// Variáveis
const botaoStart = document.getElementById('botaoStart');
const botaoEndGame = document.getElementById('endGame');

const gameLogo = document.getElementById('gameLogo');
const listaForca = document.getElementsByClassName('itemForca');
const teclado = document.getElementsByClassName('linhaTeclas');
const palavraOculta = document.getElementById('palavraOculta');

let respostasErradas = 0;


// Chamadas de Funções

	// escondeTodos(listaForca);
	esconde (palavraOculta);
	botaoStart.onclick = inicia;
	botaoEndGame.onclick = finaliza;

// Funções
function inicia() {
	esconde (gameLogo);
	esconde (botaoStart);
	desenhaForca();
	exibe (palavraOculta);
}

function finaliza() {
	exibe (gameLogo);
	exibe (botaoStart);
	escondeTodos(listaForca);
	esconde (palavraOculta);
}

function escondeTodos(lista) {
	for (const item of lista) {
	    esconde (item);
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

function esconde(elemento) {
    elemento.style.display = 'none';
}

function exibe(elemento) {
    elemento.style.display = '';
}
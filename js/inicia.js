
// Variáveis
var start = document.getElementById('start');
var finalizaGame = document.getElementById('endGame')


// Chamadas de Funções
	start.onclick = inicia;
	finalizaGame.onclick = finaliza;


// Funções
	function finaliza() {
		// body...
		document.getElementById('gameLogo').style.display = '';
		document.getElementById('start').style.display = '';
	}

	function inicia() {
		// body...
		document.getElementById('gameLogo').style.display = 'none';
		document.getElementById('start').style.display = 'none';
	}
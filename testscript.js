let fields = [];
let gameOver= false;
let currentShape = 'cross';
let counterWin = 0;

function fillShape(id) {
	if (!fields[id] && !gameOver) {
		// Wenn Feld bereits belegt, wird Wert true ausgegeben
		if (currentShape == 'cross') {
			currentShape = 'circle';
			document.getElementById('player-1').classList.remove('player-inactive');
			document.getElementById('player-2').classList.add('player-inactive');
		} else {
			currentShape = 'cross';
			document.getElementById('player-1').classList.add('player-inactive');
			document.getElementById('player-2').classList.remove('player-inactive');
		}
		fields[id] = currentShape;
		draw();
		checkforWin();
	}
}
function draw() {
	// Kreuz oder Kreis zeichnen
	for (let i = 0; i < fields.length; i++) {
		if (fields[i] == 'circle') {
			document.getElementById('circle-' + i).classList.remove('d-none');
		}
		if (fields[i] == 'cross') {
			document.getElementById('cross-' + i).classList.remove('d-none');
		}
	}
}
function checkforWin() {
	// Gewinner ermitteln
	let winner;

	//* Horizontale Treffer
	if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
		winner = [0];
		document.getElementById('line-1').style.transform = 'scaleX(1.4)';
		document.getElementById('line-1').classList.remove('d-none');
		counterWin = fields[0];
	 }
	 if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
		winner = [4];
		document.getElementById('line-2').style.transform = 'scaleX(1.4)';
		document.getElementById('line-2').classList.remove('d-none');
		
		counterWin = fields[3];
	 }
	 if (fields[6]==fields[7]&&fields[7]&&fields[8]==fields[6]) {
		winner = [7];
		document.getElementById('line-3').style.transform = 'scaleX(1.4)';
		document.getElementById('line-3').classList.remove('d-none');
		counterWin = fields[7];
	 }
	 if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
		winner = [0];
		document.getElementById('line-4').style.transform = ' rotate(90deg) scaleX(1.4)';
		document.getElementById('line-4').classList.remove('d-none');
		counterWin = fields[0];
	 }
	 if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
		winner = [1];
		document.getElementById('line-5').style.transform = ' rotate(90deg) scaleX(1.4)';
		document.getElementById('line-5').classList.remove('d-none');
		counterWin = fields[1];
	 }
	 if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
		winner = [2];
		document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1.4)';
		document.getElementById('line-6').classList.remove('d-none');
		counterWin = fields[2];
	 }
	 if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
		winner = [0];
		document.getElementById('line-7').style.transform = ' rotate(45deg) scaleX(1.7)';
		document.getElementById('line-7').classList.remove('d-none');
		counterWin = fields[0];
	 }
	 if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
		winner = [2];
		document.getElementById('line-8').style.transform = ' rotate(135deg) scaleX(1.7)';
		document.getElementById('line-8').classList.remove('d-none');
		counterWin = fields[2];
	 }
  




	if (winner) {
		console.log('Gewonnen:', winner);
		gameOver = true;
		setTimeout(function(){
			document.getElementById('game-over').classList.remove('d-none');
		}, 1000);
		
	}
}

let bool = true;
let board  = Array.from(Array(9).keys());

function setBoard(squares){
	let btn = document.querySelector(".btn");
	let status = document.getElementById('status');
	
	for(let i = 0; i < squares.length; i++){
		squares[i].classList.toggle('square');
	}
	btn.onclick = function(){
		for(let i = 0; i < squares.length; i++){
			gameStart(squares);
			squares[i].innerHTML = '';
			squares[i].classList.remove('X');
			squares[i].classList.remove('O');
			status.classList.remove('you-won');
			status.innerHTML = 'Move your mouse over a square and click to play an X or an O.';
			board = Array.from(Array(9).keys());
			bool = true;
		}
	};
}

function gameStart(squares){
	for(let i = 0; i < squares.length; i++){
		squares[i].setAttribute('id', i);
		squares[i].addEventListener('click', select, false);
		squares[i].addEventListener('mouseenter', enter);
		squares[i].addEventListener('mouseleave', exit);
	}
}

function gameOver(squares){
	for(let i = 0; i < squares.length; i++){
		squares[i].removeEventListener('click', select, false);
		squares[i].removeEventListener('mouseenter', enter);
		squares[i].classList.remove('hover');
		squares[i].removeEventListener('mouseleave', exit);
	}
}

function select(square){
	let el = document.getElementById(square.target.id);
	let contents = el.innerHTML

	if(bool === true && contents === ''){
		el.innerHTML = 'O';
		el.classList.add('O');
		board[square.target.id] = 'O';
		checkWin('O');
		bool = false;
	}
	else if(bool === false && contents === ''){
		el.innerHTML = 'X';
		el.classList.add('X');
		board[square.target.id] = 'X';
		checkWin('X');
		bool = true;
	}
}

function enter(square){
	let elem = document.getElementById(square.target.id);
	elem.classList.add('hover');
}

function exit(square){
	let elem = document.getElementById(square.target.id);
	elem.classList.remove('hover');
}

function checkWin(player){
	let status = document.getElementById('status');
	const squares = document.getElementById('board').getElementsByTagName('div');
	const winningMoves = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 8]
	];

	let plays = board.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []);

	for (let [index, win] of winningMoves.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			status.innerHTML = `Congratulations! ${player} is the Winner!`;
			status.classList.toggle('you-won');
			gameOver(squares);
			break;
		}
	}
}

window.onload = function(){
	const squares = document.getElementById('board').getElementsByTagName('div');
	setBoard(squares);
	gameStart(squares);
};

let bool = true;

function setBoard(){
	let btn = document.querySelector(".btn");
	for(let i = 0; i < 9; i++){
		document.getElementById('board').getElementsByTagName('div')[i].classList.toggle('square');
	}
	btn.onclick = function(){
		for(let i = 0; i < 9; i++){
			document.getElementById('board').getElementsByTagName('div')[i].innerHTML = '';
			bool = true;
		}
	};
}

function gameStart(){
	let board  = Array.from(Array(9).keys());
	const squares = document.getElementById('board').getElementsByTagName('div');
	for(let i = 0; i < squares.length; i++){
			document.getElementById('board').getElementsByTagName('div')[i].setAttribute('id', i);
			squares[i].addEventListener('click', select, false);
	}
}

function select(square){
	const player1 = 'O';
	const player2 = 'X';
	let el = document.getElementById(square.target.id);
	console.log(square.target.id);

	if(bool === true){
		el.innerHTML = 'O';
		el.classList.toggle('O');
		bool = false;
	}
	else{
		el.innerHTML = 'X';
		el.classList.toggle('X');
		bool = true;
	}
}

window.onload = function(){
	setBoard();
	gameStart();
};

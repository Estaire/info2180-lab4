function setBoard(){
	let btn = document.querySelector(".btn");
	
	btn.onclick = function(){
		for(i = 0; i < 9; i++){
			document.getElementById('board').getElementsByTagName('div')[i].classList.toggle('square');
		}
	};
}

window.onload = function(){
	setBoard();
};

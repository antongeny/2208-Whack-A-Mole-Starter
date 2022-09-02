let score = 0;

let holes = document.getElementsByClassName("hole");
setInterval(function () {
	const randomHole = Math.floor(Math.random() * holes.length);
	const movingMole = holes[randomHole];
	movingMole.classList.toggle("mole");
}, 500);

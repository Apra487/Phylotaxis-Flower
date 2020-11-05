const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');
let n = 0,
	c = 15;

let angleArr = [137.9, 137.2, 137.8, 137.4, 137.5, 137.7, 137.3, 137, 137.1,137.6, 138, 138.1, 138.3, 138.5, 138.8, 140]
let angle = angleArr[Math.floor(Math.random() * angleArr.length)];

const text = document.getElementById('angle');

setup();
animation();

function setup() {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	text.innerText = angle;
}

function draw(x, y) {
	ctx.strokeStyle = 'red';
	ctx.fillStyle = `hsl(${n % 361}, 100%, 50%)`;
	ctx.beginPath();
	ctx.arc(x, y, 5, 0, Math.PI * 2);
	ctx.fill();
}

function animation() {
	let a = n * angle;
	let r = c * Math.sqrt(n);
	let x = r * Math.cos(a * (Math.PI / 180)) + canvas.width / 2;
	let y = r * Math.sin(a * (Math.PI / 180)) + canvas.height / 2;
	n++;
	if (n > 750) {
		return;
	}
	draw(x, y);
	requestAnimationFrame(animation);
}



window.addEventListener('resize', (e) => {
	setup();
	n = 0;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	animation();
});

document.querySelector("#golden-angle").addEventListener("click", (event) => {
	event.preventDefault();
	angle = 137.5;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	text.innerText = angle;
	setup();
	n = 0;
	animation();
});

document.querySelector(".genearte").addEventListener("click", (event) => {
	event.preventDefault();
	angle = angleArr[Math.floor(Math.random() * angleArr.length)];
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	text.innerText = angle;
	setup();
	n = 0;
	animation();
});


const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');
let n = 0,
	c = 15;
setup();
animation();

window.addEventListener('resize', (e) => {
	setup();
	n = 0;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	animation();
});

function setup() {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
}

function draw(x, y) {
	ctx.strokeStyle = 'red';
	ctx.fillStyle = `hsl(${n % 361}, 100%, 50%)`;
	ctx.beginPath();
	ctx.arc(x, y, 5, 0, Math.PI * 2);
	ctx.fill();
}
function animation() {
	let a = n * 137.3;
	let r = c * Math.sqrt(n);
	let x = r * Math.cos(a * (Math.PI / 180)) + canvas.width / 2;
	let y = r * Math.sin(a * (Math.PI / 180)) + canvas.height / 2;
	n++;
	if (n > 600) {
		return;
	}

	draw(x, y);
	requestAnimationFrame(animation);
}

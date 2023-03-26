const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let raf;
let running = false;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 5,
  radius: 10,
  color: 'blue',
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  // ctx.clearRect(0,0, canvas.width, canvas.height);
  clear();
  ball.draw();
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }
  ball.x += ball.vx;
  ball.y += ball.vy;
  // ball.x += ball.vx * (Math.random() * 2 - 1);
  // ball.y += ball.vy * (Math.random() * 2 - 1);
  raf = requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e){
  if (!running) {
    clear();
    ball.x = e.offsetX;
    ball.y = e.offsetY;
    ball.draw();
  }
});

canvas.addEventListener('click',function(e){
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener('mouseout', function(e){
  window.cancelAnimationFrame(raf);
  running = false;
});

function draw() {
  const context = document.getElementById('canvas');
  const ctx = context.getContext('2d');

  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, 55, 50);
  
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 55, 50);
}

draw();

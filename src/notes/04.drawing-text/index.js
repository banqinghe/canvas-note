function drawText() {
  const ctx = document.getElementById('drawing-text').getContext('2d');
  
  ctx.font = '50px Ubuntu';
  
  ctx.fillText('Hello World!', 0, 50);
  ctx.strokeText('Hello World!', 0, 100);
}

function draw() {
  drawText();
};

draw();

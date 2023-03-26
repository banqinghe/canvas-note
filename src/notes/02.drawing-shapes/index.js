function drawRect() {
  const canvas = document.getElementById('rect');
  const ctx = canvas.getContext('2d');

  ctx.fillRect(0, 0, 100, 100);
  ctx.clearRect(50, 50, 100, 100);
  ctx.strokeRect(100, 100, 100, 100);
}

function drawPath() {
  const canvas = document.getElementById('path');
  const ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(200, 20);
  ctx.lineTo(100, 150);
  ctx.fill();
}

function drawArc() {
  const canvas = document.getElementById('arc');
  const ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.arc(150, 100, 50, 0, 1.5 * Math.PI);
  ctx.fill();
}

function drawBezier() {
  const canvas = document.getElementById('bezier');
  const ctx = canvas.getContext('2d');
  
  // 二次贝塞尔曲线
  ctx.beginPath();
  ctx.moveTo(75, 25);
  ctx.quadraticCurveTo(25, 25, 25, 62.5);
  ctx.quadraticCurveTo(25, 100, 50, 100);
  ctx.quadraticCurveTo(50, 120, 30, 125);
  ctx.quadraticCurveTo(60, 120, 65, 100);
  ctx.quadraticCurveTo(125, 100, 125, 62.5);
  ctx.quadraticCurveTo(125, 25, 75, 25);
  ctx.stroke();
};

function drawWithPath2D() {
  const canvas = document.getElementById('path2d');
  const ctx = canvas.getContext('2d');

  const rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);

  const circle = new Path2D();
  circle.arc(100, 35, 25, 0, 2 * Math.PI);

  const svgPath = new Path2D("M10 10 h 80 v 80 h -80 Z");
  svgPath.fillStyle = 'rgba(0, 0, 200, 0.9)';

  ctx.stroke(rectangle);
  ctx.fill(circle);
  ctx.fill(svgPath);
}

function draw() {
  drawRect();
  drawPath();
  drawArc();
  drawBezier();
  drawWithPath2D();
}

draw();

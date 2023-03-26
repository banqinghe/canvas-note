function drawLineChart() {
  const ctx = document.getElementById('line-chart').getContext('2d');
  const img = new Image();
  img.setAttribute('crossorigin', 'anonymous');

  img.onload = () => {
    ctx.drawImage(img, 0, 0);

    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);

    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);

    ctx.moveTo(10, 40);
    ctx.lineTo(200, 190);

    ctx.stroke();
  };
  img.src =
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/backdrop.png';
}

function drawWithScale() {
  const ctx = document.getElementById('line-chart-scale').getContext('2d');
  const img = new Image();
  img.setAttribute('crossorigin', 'anonymous');

  img.onload = () => {
    ctx.drawImage(img, 0, 0, 240, 80);
  };
  img.src =
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/js.jpeg';
}

function drawWithSlice() {
  const ctx = document.getElementById('js-slice').getContext('2d');
  const img = new Image();
  img.setAttribute('crossorigin', 'anonymous');

  img.onload = () => {
    ctx.drawImage(img, 200, 200, 200, 150, 0, 0, 200, 150);
  };

  img.src =
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/js.jpeg';
}

function draw() {
  drawLineChart();
  drawWithScale();
  drawWithSlice();
}

draw();

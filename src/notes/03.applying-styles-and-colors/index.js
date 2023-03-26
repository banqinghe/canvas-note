function drawWithFillStyle() {
  const canvas = document.getElementById('fill-style-test');
  const ctx = canvas.getContext('2d');

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle =
        'rgb(' +
        Math.floor(255 - 42.5 * i) +
        ',' +
        Math.floor(255 - 42.5 * j) +
        ', 100)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
}

function drawWithStrokeStyle() {
  const canvas = document.getElementById('stroke-style-test');
  const ctx = canvas.getContext('2d');

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.strokeStyle =
        'rgb(' +
        Math.floor(255 - 42.5 * i) +
        ',' +
        Math.floor(255 - 42.5 * j) +
        ', 200)';
      ctx.beginPath();
      ctx.arc(25 * j + 12.5, 25 * i + 12.5, 10, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

function drawWithGlobalAlpha() {
  const canvas = document.getElementById('global-alpha');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  ctx.globalAlpha = 0.03;
  for (let i = 0; i < 75; i++) {
    ctx.arc(75, 75, i + 1, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function drawLineWidth() {
  const canvas = document.getElementById('line-width');
  const ctx = canvas.getContext('2d');

  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = i + 1;
    // 如果不重新 beginPath，lineWidth 都会是 10
    ctx.beginPath();
    ctx.moveTo(i * 14 + 5 + 0.5, 5);
    ctx.lineTo(i * 14 + 5 + 0.5, 120);
    ctx.stroke();
  }
}

function drawLineCap() {
  const ctx = document.getElementById('line-cap').getContext('2d');
  const lineCap = ['butt', 'round', 'square'];

  // 创建路径
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // 画线条
  ctx.strokeStyle = 'black';
  for (let i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }
}

function drawLineJoin() {
  const ctx = document.getElementById('line-join').getContext('2d');
  const lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 6;

  for (let i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 145 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}

function drawMarchingAnts() {
  const canvas = document.getElementById('marching-ants');
  const ctx = canvas.getContext('2d');
  let offset = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([4, 2]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 180, 120);
  }

  function march() {
    offset++;
    // 线段 + 间隔长度为 6
    if (offset > 5) {
      offset = 0;
    }
    draw();
    // requestAnimationFrame(march);
    setTimeout(march, 100);
  }

  march();
}

function drawWithPattern() {
  const canvas = document.getElementById('pattern');
  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.setAttribute('crossorigin', 'anonymous');
  img.src =
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/webpack.png';

  img.onload = () => {
    const pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 250, 220);
  };
}

function drawShadow() {
  const ctx = document.getElementById('shadow').getContext('2d');

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // ctx.shadowOffsetX = 2;
  // ctx.shadowOffsetY = 20;
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#fff';

  // ctx.font = '20px Times New Roman';
  ctx.fillStyle = '#FFFFFF';
  ctx.arc(50, 50, 15, 0, Math.PI * 2);
  ctx.fill();
  // ctx.fillText('Ban Qinghe is 21. 班庆贺二十一岁。', 5, 30);
}

function drawEvenOdd() {
  const ctx = document.getElementById('even-odd').getContext('2d');

  ctx.moveTo(30, 80);
  ctx.lineTo(50, 10);
  ctx.lineTo(70, 80);
  ctx.lineTo(25, 30);
  ctx.lineTo(75, 30);

  ctx.fill('evenodd');

  ctx.font = '12px Times New Roman';
  ctx.fillText('even odd', 0, 12);
}

function drawNonzero() {
  const ctx = document.getElementById('nonzero').getContext('2d');

  ctx.moveTo(30, 80);
  ctx.lineTo(50, 10);
  ctx.lineTo(70, 80);
  ctx.lineTo(25, 30);
  ctx.lineTo(75, 30);

  ctx.fill('nonzero');

  ctx.font = '12px Times New Roman';
  ctx.fillText('nonzero', 0, 12);
}

function draw() {
  drawWithFillStyle();
  drawWithStrokeStyle();
  drawWithGlobalAlpha();
  drawLineWidth();
  drawLineCap();
  drawLineJoin();
  drawMarchingAnts();
  drawWithPattern();
  drawShadow();
  drawEvenOdd();
  drawNonzero();
}

draw();

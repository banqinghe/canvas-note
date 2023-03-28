const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const earthRevolutionTime = 60000;
const moonRevolutionTime = 6000;

let sunImg = null;
let moonImg = null;
let earthImg = null;

function getImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.setAttribute('crossorigin', 'anonymous');

    img.onload = () => {
      resolve(img);
    };

    img.onerror = () => {
      reject(`load ${url} error`);
    };
  });
}

function getAllImages(urls) {
  return Promise.all(urls.map(url => getImage(url)));
}

function init() {
  getAllImages([
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/canvas_sun.png',
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/canvas_moon.png',
    'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/canvas_earth.png',
  ]).then(imgs => {
    sunImg = imgs[0];
    moonImg = imgs[1];
    earthImg = imgs[2];

    console.log(imgs);

    // draw();
    requestAnimationFrame(draw);
  });
}

function draw() {
  // 后绘制的内容在先绘制内容的后面
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // 地球
  ctx.rotate(
    (Date.now() % earthRevolutionTime) * ((2 * Math.PI) / earthRevolutionTime)
  );
  ctx.translate(105, 0);
  // 背对着太阳的半部分添加阴影
  ctx.fillRect(0, -12, 50, 24);

  // 地球自转
  ctx.save();
  ctx.rotate((Date.now() % 3000) * ((2 * Math.PI) / 3000));
  ctx.drawImage(earthImg, -12, -12);
  ctx.restore();

  // 月球围绕地球旋转
  ctx.save();
  ctx.rotate(
    (Date.now() % moonRevolutionTime) * ((2 * Math.PI) / moonRevolutionTime)
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moonImg, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.drawImage(sunImg, 0, 0, WIDTH, HEIGHT);

  requestAnimationFrame(draw);
}

init();

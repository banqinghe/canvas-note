import { getImage } from '../util/get-images.js';

const canvas = document.getElementById('source-canvas');
const zoomWindow = document.getElementById('zoom-window');
const ctx = canvas.getContext('2d');
const zoomCtx = zoomWindow.getContext('2d');
const imageUrl =
  'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/rhino.png';
let img = null;

function handleMouseEnter() {
  zoomWindow.style.display = 'block';
}

function handleMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  zoomWindow.style.left = x + 20 + 'px';
  zoomWindow.style.top = y + 20 + 'px';

  zoomCtx.drawImage(
    canvas,
    Math.abs(x - 12),
    Math.abs(y - 12),
    25,
    25,
    0,
    0,
    200,
    200
  );
  zoomCtx.beginPath();
  zoomCtx.moveTo(95, 100);
  zoomCtx.lineTo(105, 100);
  zoomCtx.moveTo(100, 95);
  zoomCtx.lineTo(100, 105);
  zoomCtx.stroke();
}

function handleMouseLeave() {
  zoomWindow.style.display = 'none';
}

function init() {
  getImage(imageUrl)
    .then((res) => {
      img = res;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      zoomCtx.imageSmoothingEnabled = false;

      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    })
    .catch(console.error);
}

init();

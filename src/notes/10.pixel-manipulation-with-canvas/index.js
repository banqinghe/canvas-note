const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorBox = document.getElementById('color-text');
const imageUrl =
  'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/bilibili.png';

function updateColorText(x, y, text) {
  colorBox.innerText = '(' + x + ',' + y + '): ' + text;
  colorBox.style.background = text;
}

function handleMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const pixel = ctx.getImageData(x, y, 1, 1);
  const data = pixel.data;

  const rgbaText = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`;
  updateColorText(x, y, rgbaText);
}

function init() {
  const img = new Image();
  img.setAttribute('crossorigin', 'anonymous');

  img.onload = () => {
    canvas.height = (canvas.width * img.height) / img.width;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.addEventListener('mousemove', handleMouseMove);
  };

  img.onerror = () => {
    console.error('load image failed');
  };

  img.src = imageUrl;
}

init();

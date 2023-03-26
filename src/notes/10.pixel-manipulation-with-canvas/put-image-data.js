import { getImage } from '../util/get-images.js';

const canvas = document.getElementById('put-image-data');
const ctx = canvas.getContext('2d');
const imageUrl =
  'https://raw.githubusercontent.com/banqinghe/blog/main/images/canvas-note/rhino.png';
let img = null;

function init() {
  getImage(imageUrl)
    .then((res) => {
      img = res;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // invert();
      // grayscale();
      document.querySelectorAll('[name=color]').forEach((input) => {
        input.addEventListener('change', (e) => {
          switch (e.target.value) {
            case 'invert':
              return invert();
            case 'grayscale':
              return grayscale();
            default:
              return original();
          }
        });
      });
    })
    .catch(console.error);
}

function original() {
  ctx.drawImage(img, 0, 0);
}

function invert() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0, len = data.length; i < len; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }

  ctx.putImageData(imageData, 0, 0);
}

function grayscale() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0, len = data.length; i < len; i += 4) {
    const grayValue =
      0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    data[i] = grayValue;
    data[i + 1] = grayValue;
    data[i + 2] = grayValue;
  }

  ctx.putImageData(imageData, 0, 0);
}

init();

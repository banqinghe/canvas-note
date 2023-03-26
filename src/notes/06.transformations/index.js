// 利用 save 和 restore 保存样式，避免重复书写
function saveAndRestore() {
  const ctx = document.getElementById('save-and-restore').getContext('2d');
  
  ctx.fillRect(0, 0, 150, 150);
  ctx.save();

  ctx.fillStyle = '#09f';
  ctx.fillRect(15, 15, 120, 120);
  ctx.save();

  ctx.fillStyle = '#fff'          // 再次改变颜色配置
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

  ctx.restore();                  // 重新加载之前的颜色状态，globalAlpha 也不是 0.5 了
  ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

  ctx.restore();                  // 加载默认颜色配置
  ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
}

function translate() {
  const ctx = document.getElementById('translate').getContext('2d');
  
  ctx.font = '14px Times New Roman';
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // save and restore keep origin always be original (0, 0)
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}

function rotate() {
  const ctx = document.getElementById('rotate').getContext('2d');

  ctx.fillStyle = '#acd';
  ctx.fillRect(0, 0, 100, 100);
  
  ctx.translate(50, 20);
  ctx.rotate(Math.PI / 8);
  ctx.fillStyle = '#aaf';
  ctx.fillRect(0, 0, 100, 100);
}

function coordinateSystem() {
  const canvas = document.getElementById('coordinate-system');
  const ctx = canvas.getContext('2d');
  
  ctx.translate(0, canvas.height);
  ctx.scale(1, -1);

  ctx.fillRect(0, 0, 20, 20);
}

function scale() {
  const ctx = document.getElementById('scale').getContext('2d');
  
  ctx.scale(3, 1);
  ctx.scale(2, 1);

  ctx.fillRect(0, 0, 100, 100);
}

function draw() {
  saveAndRestore();
  translate();
  rotate();
  coordinateSystem();
  scale();
}

draw();

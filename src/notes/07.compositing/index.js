function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 == 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // 只在半径 60 的圆里绘制
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // 背景
  const nightColor = ctx.createLinearGradient(0, -75, 0, 75);
  nightColor.addColorStop(0, "#232256");
  nightColor.addColorStop(1, "#143778");

  ctx.fillStyle = nightColor;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150)
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
  ctx.restore();
  // requestAnimationFrame(draw);
}

draw();

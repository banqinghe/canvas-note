const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();

if (ctx.addHitRegion) {
  ctx.addHitRegion({id: 'circle'});
} else {
  console.info('未实现的 API');
}

canvas.addEventListener('mousemove', function(event){
  if(event.region) {
    console.info('hit region: ' + event.region);
  }
});
var imgs = ["InobeHome.png"];
var img0 = new Image();
img0.src = imgs[0];

function draw(){
  canvas = document.getElementById("cv0");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img0,0,0);
}
draw();

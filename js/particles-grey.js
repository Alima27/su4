canvas = document.getElementById("canvas");
canvas.width = $(window).width();
canvas.height = (2520);
context = canvas.getContext("2d");

particleCount = 150;
particleSizeMin = 1;
particleSizeMax = 5;
particleSpeedMin = 1;
particleSpeedMax= 1;
particleLineDistance= 70;
particles = [];

for(i=0;i<particleCount;i++){
  if(Math.random()>0.5){
    dxPlus = 0.3;
  }else{
    dxPlus = -0.3;
  }
  if(Math.random()>0.5){
    dyPlus = 0.3;
  }else{
    dyPlus = -0.3;
  }
  particles[i] = {
    x:  Math.floor(Math.random() * (canvas.width + 1)),
    y:  Math.floor(Math.random() * (canvas.height + 1)),
    dx: Math.floor( Math.random() * (particleSpeedMax - particleSpeedMin + 1) ) + particleSpeedMin,
    dy:  Math.floor( Math.random() * (particleSpeedMax - particleSpeedMin + 1) ) + particleSpeedMin,
    size: Math.floor( Math.random() * (particleSizeMax - particleSizeMin + 1) ) + particleSizeMin,
    dxPlus: dxPlus,
    dyPlus: dyPlus
  }
}
console.log(particles);
function drawFrame(){
  context.clearRect(0, 0, canvas.width, canvas.height)
  for(i=0;i<(particleCount-1);i++){
    for(j=i+1;j<particleCount;j++){
      distance = Math.sqrt(Math.pow((particles[i].x-particles[j].x),2)+Math.pow((particles[i].y-particles[j].y),2));
      if(distance<particleLineDistance){
        context.beginPath();
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(particles[j].x, particles[j].y);
        context.lineWidth = 1;
        context.strokeStyle = "#c0c0c0";
        context.stroke();
      }
    }
  }
  for(i=0;i<particleCount;i++){
    context.beginPath();
    context.arc(particles[i].x,particles[i].y,particles[i].size,0,2*Math.PI);
    context.fillStyle = "#c0c0c0";
    context.fill();
    particles[i].x = particles[i].x+particles[i].dxPlus*particles[i].dx;
    particles[i].y = particles[i].y+particles[i].dyPlus*particles[i].dy;
    if(particles[i].x>canvas.width){
      particles[i].x=0;
    }
    if(particles[i].y>canvas.height){
      particles[i].y=0;
    }
    if(particles[i].x<0){
      particles[i].x=canvas.width;
    }
    if(particles[i].y<0){
      particles[i].y=canvas.height;
    }
  }
  setTimeout(drawFrame,10);
}
drawFrame();
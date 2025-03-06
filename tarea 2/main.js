const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


function dibujarCirculo(x,y, startAngle) {
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.ellipse(x, y, 130 ,130, startAngle, 0, Math.PI/1);
  ctx.fill(); 
  }
  
  dibujarCirculo (212,213,Math.PI/2);
  dibujarCirculo (222,213,3.15);
  dibujarCirculo(555,213,Math.PI);
  dibujarCirculo(555,213,4.7);
  dibujarCirculo(890,213,Math.PI/2);
  dibujarCirculo(890,213,3.15);
  dibujarCirculo(222,505,0);
  dibujarCirculo(222,505,4.7);
  dibujarCirculo(555,505,0);
  dibujarCirculo(555,505,Math.PI/2);
  dibujarCirculo(890,505,0);
  dibujarCirculo(890,505,4.7);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  function dibujarCirculo(x,y, rotation) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.ellipse(x, y, 120 ,120, Math.PI *2, rotation, Math.PI*2);
    ctx.fill(); 
    }
    
    dibujarCirculo (222,213,180);
    dibujarCirculo(555,213,180);
    dibujarCirculo(934,213,100);
    dibujarCirculo(222,505,100);
    dibujarCirculo(555,505,300);
    dibujarCirculo(934,505,300);

});
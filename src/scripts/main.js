(function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);
        
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
                
    /**
     * Your drawings need to be inside this function otherwise they will be reset when 
     * you resize the browser window and the canvas goes will be cleared.
     */
    drawStuff(); 
  }
  
  resizeCanvas();
        
function drawStuff() {

let img = new Image();
img.src = 'https://raw.githubusercontent.com/HerbFargus/plymouth-to-canvas/main/src/images/spritesheet.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 1;
const width = 100;
const height = 100;
const canvaswidth = canvas.width;
const canvasheight = canvas.height;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * width, frameY * height, width, height,
                ((canvaswidth / 2) - (width/2) ), ((canvasheight / 2) - (width/2)), scaledWidth, scaledHeight);
}

const cycleLoop = [5, 6];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 5) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

function init() {
  window.requestAnimationFrame(step);
}

};

})();
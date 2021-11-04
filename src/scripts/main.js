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
// add logo
	let img = new Image();
		img.onload = function() {

	if (canvas.width > canvas.height)
		{  // Screen width is wider than screen height, we will scale to screen height
		scaledratio =  (canvas.height * 0.2);
		}
	else
		{  // Screen height is wider than screen width, we will match the screen width
		scaledratio =  (canvas.width * 0.2);
		}

	var x = (canvas.width - scaledratio) / 2;
	var y = (canvas.height - scaledratio) / 2;
	context.drawImage(img, x, y, scaledratio, scaledratio); // drw image with scaled width and height

	};

// animate ship
	let spritesheet = new Image();
		spritesheet.onload = function() {
// get the position is half of the canvas width minus the scaled width of the image 
	var scale = (.5);
	var x = (canvas.width - spritesheet.width * scale) / 2;
	var y = (canvas.height - spritesheet.height * scale) / 2;
	context.drawImage(spritesheet, x, y, spritesheet.width * scale, spritesheet.height * scale); // drw image with scaled width and height	

	};
		img.src = '../images/retropie_logo_wireframe.png';
		spritesheet.src = '../images/spritesheet.png';

	}
})();
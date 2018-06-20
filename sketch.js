

function setup() {
	

	//This p5 function will give us a 'canvas'
	createCanvas(640, 480); //width and height of my canvas
	//This is background in grayscale


}

function draw() {
	background(255,204,0);
	c = color('#00ff00');
	fill(c); // Use updated 'c' as fill colord
	rect(mouseX, mouseY, random(150), random(150));
    triangle(mouseX, mouseY, random(150), random(150),random(150),random(150),random(150),random(150));
    quad(random(150),random(150),random(150),random(150),random(150),random(150),random(150),random(150));
}
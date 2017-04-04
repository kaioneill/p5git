var c;
var width = 640;
var height = 480;
var heartPic;
var squares = [];
var i = 0;



function Square(x, y) {

	this.x = x;
	this.y = y;
	this.opacity = 255;

	// this.display = function() {
	// 	  push();
	// 	  translate(this.x,this.y);
	// 	  rotate(random(-.3,.3));
	// 	  fill(this.opacity);
 //          rectMode(CENTER);
 //          rect(0,0,50,50);
 //          this.opacity-=15;
 //          pop();
	// }


    this.display = function() {
		  push();
		  translate(this.x,this.y);
		  rotate(random(-.2,.2));
		  imageMode(CENTER);
		  tint(255,this.opacity);
		  image(heartPic,0,0);
          this.opacity-=15;
          pop();
	}



}



function setup() {
  c = createCanvas(640, 480);
  heartPic = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/ab/Heart_2D.png');
  frameRate(17);
        
	width = window.innerWidth;
	height = window.innerHeight;	  


}

function draw() {
  c.size(window.innerWidth, window.innerHeight);
  background(0);
  for (i = 0; i < squares.length; i++) {
    squares[i].display();
  }


}

function mousePressed() {
  squares[i] = new Square(mouseX, mouseY);
  i++;
}

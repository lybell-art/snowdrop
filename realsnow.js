/**
 * 2023 remake ver.(using ES6)
 */

class Snow
{
	x = 0;
	y = 0;
	size = 10;
	velocity = 5;
	active = false;
	create()
	{
		this.x = random(width);
		this.y = 0;
		this.size = random(5,15);
		this.velocity = random(3,8);
		this.active = true;
	}
	drop()
	{
		if(!this.active) return;
		ellipse(this.x,this.y,this.size,this.size);
		this.y+=this.velocity;
		if(this.y > windowHeight) this.active = false;
	}
}

const MAX_SNOW_NUMBER = 1000;
const snows = Array.from({length:1000}, ()=>new Snow());
let indice = 0;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	background("#cccccc");
	noStroke();
	fill(255);
}

function draw()
{
	background("#cccccc");
	snows[indice++ % MAX_SNOW_NUMBER].create();
	snows.forEach( snow=>snow.drop() );
}

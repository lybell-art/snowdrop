function snow()
{
	var x,y,z,vel;
	var onoff=false;
	this.create = function()
	{
		this.x=random(-width,width*2);
		this.y=0;
		this.z=random(3,8);
    this.vel=random(0.3,0.7);
    this.onoff=true;
	}
	this.fall = function()
	{
		this.y+=this.vel*map(mouseY,0,height,0.5,5);
	    this.x+=map(mouseX,0,width,-this.z/8,this.z/8);
	    fill(255,map(this.z,3,8,0,255));
	    ellipse(this.x,this.y,this.z,this.z);
	    if(this.y>height) destroy();
	}
	this.copyS = function()
	{
		var newSnow=new snow();
		newSnow.x=this.x;
		newSnow.y=this.y;
	    newSnow.z=this.z;
	    newSnow.vel=this.vel;
	    newSnow.onoff=this.onoff;
	    return newSnow;
	}
	this.destroy = function()
  {
    this.onoff=false;
  }
}
function snowSystem()
{
	var n=0, max_n=50000, freq=5;
	var S=[];
	for(var i=0;i<max_n;i++)
	{
		S.push(new snow());
	}
	this.snow_create = function()
	{
		var i;
		for(i=0;i<this.freq/10;i++)
		{
			S[this.n%this.max_n].create();
			this.n++;
		}
		if(random(1)<this.freq/10-i+1)
		{
			S[this.n%this.max_n].create();
			this.n++;
		}
	}
	this.snow_fall = function()
	{
		var i;
		for(i=0;i<this.n;i++)
    {
      this.S[i].fall();
    }
    for(i=0;i<this.n-1;i++)
    {
      if(!this.S[i].onoff&&i!=this.n-1)
      {
        this.S[i]=S[this.n-1].copyS();
        this.n--;
      }
    }
	}
	this.fraqControl = function()
  {
    if(isUp)
    {
      if(this.freq<10) this.freq+=1;
      else if(this.freq<30) this.freq+=2;
      else if(this.freq<100) this.freq+=5;
    }
    if(isDown)
    {
      if(this.freq>30) this.freq-=5;
      else if(this.freq>10) this.freq-=2;
      else if(this.freq>1) this.freq-=1;
    }
  }
}
var ss=new snowSystem();
var isUp=false, isDown=false;
function setup()
{
	createCanvas(windowWidth, windowHeight);
	background("#cccccc");
	noStroke();
}
function draw()
{
	background("#cccccc");
	ss.snow_create();
	ss.snow_fall();
  ss.fraqControl();
}
function keyPressed()
{
	if(keyCode==38) isUp=true;
  if(keyCode==40) isDown=true;
}
function keyReleased()
{
  if(keyCode==38) isUp=false;
  if(keyCode==40) isDown=false;
}
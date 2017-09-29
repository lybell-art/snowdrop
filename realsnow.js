var max_n=1000;
var n=0;
var s=[];
function setup()
{
  createCanvas(windowWidth,windowHeight);
  background("#cccccc");
  noStroke();
  fill(255);
  for(var i=0;i<max_n;i++) s.push(new snow());
}
function draw()
{
  background("#cccccc");
  s[n++%max_n].create();
  for(var i=0;i<max_n;i++)
  {
    s[i].drop();
  }
}
function snow()
{
	var x,y,size,vel;
	var ison=false;
	this.create=function()
	{
		this.x=random(width);
    this.y=0;
    this.size=random(5,15);
    this.vel=random(3,8);
    this.ison=true;
	}
	this.drop=function()
  {
    if(this.ison)
    {
      ellipse(this.x,this.y,this.size,this.size);
      this.y+=this.vel;
      if(this.y>height) this.ison=false;
    }
  }
}

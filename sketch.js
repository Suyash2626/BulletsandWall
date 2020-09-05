var wall,thickness;
var bullet,speed,weight;
function setup() {
createCanvas(800,400);
  bullet=createSprite(50,200,20,40);
  bullet.shapeColor="white";
  bullet.velocityX = speed;

    speed=random(223,331);

    weight=random(30,52);

  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2)
  

}

function draw() {
  background("black"); 

  if (hascollided(bullet,wall))
  {
bullet.velocityx=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=("red")
  }

  if(damage<10)
  {
    wall.shapeColor("green")
  }

  }
  drawSprites();
}

function hascollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x,+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false;
}
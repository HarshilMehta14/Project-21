var wall, thickness;
var bullet, speed,weight;
var damage;
function setup() {
  createCanvas(1400,400);
  
  thickness=random(22,83);
  
  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor=(255);
  
  bullet=createSprite(20,200,20,5);
  bullet.shapeColor="white";

  speed=random(223 ,321);
  weight=random(30 ,52);

  bullet.velocityX= speed;
}

function draw() {
  background(0,0,255);
  
  if (hasCollided(bullet, wall))
    {
      var damage=(0.5 * weight * speed * speed)/(thickness* thickness* thickness);
      bullet.velocityX = 0;
      
      if(damage <= 10)
      {
        text("The wall is safe.", 300, 100);
        wall.shapeColor=color(0,255,0);
      }

      if (damage > 10)
      {
        text("The wall is unsafe.", 300, 100);
        wall.shapeColor=color(255,0,0);

      } 
    }
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = bullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  } else
  {
    return false;
  }
}
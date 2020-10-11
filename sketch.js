
var bullet; 
var wall, thickness; 
var speed, weight; 

function setup() {
  createCanvas(1600, 400)

  speed = random(223, 321); 
  weight = random(30, 52); 
  thickness=random(22, 83); 

  bullet = createSprite(50, 200, 50, 20); 

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80); 

  bullet.velocityX = speed;  
}

function draw() {
  background(0,0,0);  
  
  collision(bullet, wall); 

  drawSprites();
}

function collision (bulletvar, wallvar) {
  if (wallvar.x-bulletvar.x < (bulletvar.width+wallvar.width)/2) {
    bulletvar.velocityX = 0; 

    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(deformation<10) {
      wallvar.shapeColor = color(0, 255, 0); 
    }

    else {
      wallvar.shapeColor = color(255, 0, 0); 
    }

  }
}

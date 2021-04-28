
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = -1
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
 
  ground = createSprite(400,350,900,10);
  ground.velocityX = -5;
  ground.X = ground.Width/2;
  console.log(ground.X);
}
function draw() {

  stroke("white");
  textSize(20);
  fill("white")
 text("score:" + score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivaleTime = Math.round(frameCount/frameRate());
  text("survivaleTime:" + survivaleTime, 100,50);
  
  
  
 drawSprite(); 
}







//variables
gameState=0;
play=1;
end=2;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  monkey = createSprite(100,150,20,20);
 monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;
  ground = createSprite(100,180,600,2);
  obstacleGroup = new Group();
  foodGroup=new Group();

}


function draw() {
background("White");
  drawSprites();
 if(gameState===play){
    if(keyDown("space")) {
      monkey.velocityY = -8;
    }
    
     // monkey.collide(ground)
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
 }
  if(gameState===end){
    if(obstacleG.isTouching(monkey)){
    monkey.velocityX=0;
    obstacleG.velocityX=0
    banana.velocityX=0;
    }
    
  }
obstacleG();
bananaG();
}
function bananaG(){
  if(World.frameCount%80===0){
var banana = createSprite(400,200,20,20) 
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,130));
    banana.velocityX=-8;
    banana.setLifetime=50;
    banana.scale=0.1;    
    foodGroup.add(banana);
  }
}


  function obstacleG(){
  if(World.frameCount%100===0){
var obstacle = createSprite(400,200,20,20) 
    obstacle.addImage(obstacleImage);
    obstacle.y=Math.round(random(170,170));
    obstacle.velocityX=-8;
    obstacle.setLifetime=50;
    obstacle.scale=0.1;    
    obstacleGroup.add(obstacle);
  }
}





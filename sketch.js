var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obs1, obs2, obs3, obs4, obs5, obs6;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obstacle1 = loadImage("assets/obsBottom1.png");
obstacle2 = loadImage("assets/obsBottom2.png");
obstacle3 = loadImage("assets/obsBottom3.png");
obstacle4 = loadImage("assets/obsTop1.png");
obstacle5 = loadImage("assets/obsTop2.png");
obstacle6 = loadImage("bird-removebg-preview.png");
}

function setup(){
createCanvas(displayWidth, displayHeight);

//background image
bg = createSprite(width/2, height/2 ,1,1);
bg.addImage(bgImg);
bg.scale = 1.5;

//creating top and bottom grounds
bottomGround = createSprite(width/2,height,800,20);
bottomGround.visible = false;

topGround = createSprite(width/2,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.6;

obs1 = createSprite(400,595,700,30);
obs1.addImage(obstacle1);
obs1.scale = 0.3;

obs2 = createSprite(700,525,700,30);
obs2.addImage(obstacle2);
obs2.scale = 0.38;

obs3 = createSprite(1300,495,700,30);
obs3.addImage(obstacle3);
obs3.scale = 0.38;

obs4 = createSprite(950,220,700,30);
obs4.addImage(obstacle4);
obs4.scale = 0.5;

obs5 = createSprite(200,90,700,30);
obs5.addImage(obstacle5);
obs5.scale = 0.3;

obs6 = createSprite(500,120,700,30);
obs6.addImage(obstacle6);
obs6.scale = 1.2;

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.2;
   
        drawSprites();
        
}
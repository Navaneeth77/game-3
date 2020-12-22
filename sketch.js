var harry,harryImg;
var snitch,snitchImg,snitchGroup;
var dementor,dementorImg,dementorGroup;
var background,backImg;
var dobby,dobbyImg;
var sock,sockImg;
var cloud,cloudImg,cloudGroup;
var PLAY =1;
var END = 0;
var gamestate = PLAY;
var score = 0;
var lifetime = 2;

function preload(){
  
  harryImg = loadImage("harry.png");
  snitchImg = loadImage("snitch.png");
  dementorImg = loadImage("dementor.png");
  backImg = loadImage("back.png");
  dobbyImg = loadImage("dobby.png");
  sockImg = loadImage("sock.png");
  cloudImg = loadImage("cloud.png");
  grassImg = loadImage("grass.png");
   
}

function setup(){
createCanvas(600,300);
  
harry = createSprite(150,150,20,20);
harry.addImage(harryImg);
harry.scale = 0.2;
  
  dobby = createSprite(400,150,20,20);
  dobby.addImage(dobbyImg);
  dobby.scale = 0.05;
  
  sock = createSprite(200,150,20,20);
  sock.addImage(sockImg);
  sock.scale = 0.1;
  snitchGroup = new Group();
  cloudGroup = new Group();
  dementorGroup = new Group();

}

function draw(){
  background("lightblue");
  text("Score : "+ score,540,20);
  text("Lifetime :"+lifetime,540,40);
  
  if(gamestate === PLAY){
    
    dobby.visible = false;
    sock.visible = false;
    
    snitches();
  clouds();
  dementors();
  
  
  harry.y = World.mouseY;
  
    
    if(snitchGroup.isTouching(harry)){
    
    snitchGroup.destroyEach();
    score = score + 10;
    
    
  }
  
  if(dementorGroup.isTouching(harry)){
    
    dementorGroup.destroyEach();
    lifetime = lifetime - 1;
    score = 0;}
    
    if( lifetime === 0){
      
      
       gamestate = END;
      
       
      
    } 
  
    
   
      }
     
     
     
     
     
     
  
  drawSprites();
   if(gamestate === END){
      
       text("GAMEOVER",280,120);
       text("GIVE THE SOCK TO DOBBY TO CONTINUE",190,240);
     harry.visible = false;
     dobby.visible = true;
     sock.visible = true;
     cloudGroup.destroyEach();
     snitchGroup.destroyEach();
     dementorGroup.destroyEach();
     sock.x = World.mouseX;
     sock.y = World.mouseY;
     sock.depth = dobby.depth;
     dobby.depth= dobby.depth + 1;
     
      
      
      
      if(sock.isTouching(dobby)){
        
       reset(); 
        
        
      }   
                
      }
    }

function snitches(){
  
  if(frameCount % 100 === 0){
    
var snitch = createSprite(600,310,10,10);
snitch.y = Math.round(random(20,280));
snitch.velocityX = -5;
snitch.addImage(snitchImg);
snitch.scale = 0.03;
snitch.depth = harry.depth;
harry.depth = harry.depth + 1;
snitch.lifetime = 210;
snitchGroup.add(snitch);
      
  }
  
}

function clouds(){
  if(frameCount % 50 === 0){
    
var cloud = createSprite(600,33,10,10);
cloud.addImage(cloudImg);
cloud.scale = 0.08;
cloud.y = Math.round(random(20,290));
cloud.velocityX = -3;
cloud.depth = harry.depth;
harry.depth = harry.depth +1;
cloudGroup.add(cloud);
    
  }
  
}

function dementors(){
  
  if(frameCount % 30 === 0){
dementor = createSprite(600,200,30,30);
    dementor.addImage(dementorImg);
    dementor.scale = 0.1;
    dementor.velocityX = -10;
 dementor.y = Math.round(random(20,280));
    dementor.depth = harry.depth;
    harry.depth = harry.depth +1;
    dementorGroup.add(dementor);
    
  }
  
  
}

function reset(){
  
  gamestate = PLAY;
  score = 0;
  lifetime = 2; 
  harry.visible = true;
  
  
  
  
}











































































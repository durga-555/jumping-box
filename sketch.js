var bg;
var greensprite,redsprite,yellowsprite,bluesprite;
var gsSound,rsSound,ysSound,bsSound;

function preload(){
  gsSound=loadSound("Oops.mp3");
  rsSound=loadSound("Yeah.mp3");
  ysSound=loadSound("OH NO.mp3");
  bsSound=loadSound("Huh.mp3");
}

function setup(){
    createCanvas(400,400);
 bg=createSprite(200,200,400,400);
 bg.shapeColor="black"
 bg.scale=3

  greensprite = createSprite(50,350,100, 20);
  greensprite.shapeColor="green"

  redsprite = createSprite(150, 350, 100, 20);
  redsprite.shapeColor="red"

  yellowsprite = createSprite(250, 350,100, 20);
  yellowsprite.shapeColor="yellow"

  bluesprite = createSprite(350, 350,100, 20);
  bluesprite.shapeColor="blue"


  
  
 bouncingsprite=createSprite(200,200,15,15);
  bouncingsprite.shapeColor="white"

  
  
}

function draw() {

    background(255);
  
    bouncingsprite.x = World.mouseX
    bouncingsprite.y = World.mouseY 
  
    if(bouncingsprite.x-greensprite.x < bouncingsprite.height/2+greensprite.height/2 && greensprite.x-bouncingsprite.x < bouncingsprite.height/2+greensprite.height/2 ){
      bouncingsprite.shapeColor="green"
      gsSound.play();
    }
    
    
    if(bouncingsprite.x-redsprite.x < bouncingsprite.height/2+redsprite.height/2 && redsprite.x-bouncingsprite.x < bouncingsprite.height/2+redsprite.height/2 ){
      bouncingsprite.shapeColor="red"
      rsSound.play();
    }
   
    
    if(bouncingsprite.x-yellowsprite.x < bouncingsprite.height/2+yellowsprite.height/2 && yellowsprite.x-bouncingsprite.x < bouncingsprite.height/2+yellowsprite.height/2 ){
      bouncingsprite.shapeColor="yellow"
      ysSound.play();
    }
    
    
    if(bouncingsprite.x-bluesprite.x < bouncingsprite.height/2+bluesprite.height/2 && bluesprite.x-bouncingsprite.x < bouncingsprite.height/2+bluesprite.height/2 ){
      bouncingsprite.shapeColor="blue"
      bsSound.play();
    }
  
  
  drawSprites();
}

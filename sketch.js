var plate,plateImage;
var cake,cakeImage;
var oveno,ovenc,ovenOpen,ovenClosed;
var gameState = "1";
var play;
var isenser;
var cakealarm;

function preload(){
plateImage = loadImage("plate.png");
cakeImage = loadImage("cake.png");
ovenOpen = loadImage("oven open.png");
ovenclosed = loadImage("oven colsed.jpg");
}

function setup() {
  createCanvas(600,600);
  plate = createSprite(450,500,100,100);
  plate.shapeColor = "white";
  plate.addImage(plateImage);
  plate.visible = false;
  

  cake = createSprite(450,490,30,30);
  cake.addImage(cakeImage);
  cake.scale = 0.5;
  cake.visible = false;

  oveno = createSprite(100,100,200,200);
  oveno.addImage(ovenOpen);
  oveno.visible = false;

  ovenc = createSprite(100,100,200,200);
  ovenc.addImage(ovenclosed);
  ovenc.visible = false;

  play = createSprite(300,300,50,30);

  isenser = createSprite(40,95,30,90);
  isenser.visible = false;
  

  cakealarm = createSprite(450,100,50,50);
  cakealarm.visible = false;


  
}

function draw() {
  if(gameState === 1){
    cake.x = World.mouseX;
    cake.y = World.mouseY;
    play.visible = true;
  }
  if(mousePressedOver(play)){
    gameState = "2";
    plate.visible = true;
    oveno.visible = true;
    cake.visible = true;
    play.visible = false;
    cakealarm.visible = true;

  }
  if(gameState === "2"){
    cake.x = World.mouseX;
    cake.y = World.mouseY;

    if(mousePressedOver(oveno)){
    ovenc.visible = true;
    oveno.visible = false;
    cakealarm.shapeColor = "red";
    }
    if(mousePressedOver(isenser)){
      cakealarm.shapeColor = "green";
      ovenc.visible = false;
      oveno.visible = true;
      gameState = "3";
    }
  }
  if(gameState === "3"){
    oveno.visible = false;
    cakealarm.visible = false;
    plate.Y = 220;
    plate.x = 300;
    cake.x = 310;
    cake.y = 310;
    
    if(mousePressedOver(plate)){
      gameState = "1";
    }
  }

   background("blue");
  
  drawSprites();
}

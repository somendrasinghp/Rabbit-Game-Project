var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 createapple();
 createleaf();
 drawSprites();
}

function createapple(){
 if(frameCount%80===0){
  var apple=createSprite(Math.round(random(100,300)),-10) 
 apple.addImage(appleImage)
 apple.velocityY=3
 apple.scale=0.05
 }
}
 function createleaf(){
  if(frameCount%110===0){
   var leaf=createSprite(Math.round(random(100,300)),-10) 
  leaf.addImage(leafImage)
  leaf.velocityY=3
  leaf.scale=0.05
  }
 }























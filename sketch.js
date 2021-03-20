var path, virus, signal, sanitizer, mask; 
var signalG, sanitizerG, maskG; 
var pathImg, virusImg, signalImg, maskImg, sanitizerImg, endImg;
var PLAY=1;
var END=0;
var gameState=1;
function preload() {

virusImg= loadAnimation("virus.png");
signalImg= loadImage("signal.jpg");
maskImg= loadImage("mask.jpg");
sanitizerImg= loadImage("santizer.png");
endImg= loadAnimation("gameOver.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  path= createSprite(width/2, 200);
  
  path.velocityY=4;

  virus= createAnimation(width/2, height-20, 20, 20);
  virus= addImage(virusImg);
  virus.scale= 0.05;
  

  maskG=new Group();
  signalG = new Group();
  sanitizerG= new Group();
  
}
function draw() {
 if(gameState===PLAY){
 background(0);
 virus.x=World.mouseX;
  
  edges= createEdgeSprites();
  virus.collide(edges);

  if(path.y>height){
    path.y=height/2;

  }
  createMask();
  createSignal();
  createSanitizer();
 }

  drawSprites();
}
function createMask(){
  if(World.frameCount%200==0){
    var mask = createSprite(Math.round(random(50, width-50), 40, 10, 10));
    mask.addImage(maskImg);
    mask.velocityY=3;
    mask.lifetime=150;
    mask.scale=0.12;
    maskG.add(mask);

  }
}
  function createSignal(){
    if(World.frameCount%240==0){
      var signal= createSprite(Math.round(random(50, width-50), 40, 10, 10));
      signal.addImage(signalImg);
      signal.velocityY=3;
      signal.lifetime=150;
      signal.scale=0.03;
      signalG.add(signal);
    }
  }

  function createSanitizer(){
    if(World.frameCount%540==0){
      var sanitizer= createSprite(Math.round(random(50, width-50),40, 10, 10));
      sanitizer.addImage(sanitizerImg);
      sanitizer.veocityY=3;
      sanitizer.lifetme=150;
      sanitizer.scale=0.2;
      sanitizerG.add(sanitizer);
    }
  }
var bgImg;
var cat,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse,mouse1Img,mouse2Img,mouse3Img,mouse4Img;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    cat1Img=loadImage("cat1.png");
    mouse1Img=loadImage("mouse.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(200,100,80,80);
    mouse=createSprite(300,100,90,90);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catRunning",cat3Img);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseHappy",mouse1Img);
    mouse.changeAnimation("mouseHappy");


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode=== LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse3Img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;
  }


}

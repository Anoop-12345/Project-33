const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg;
var snow=[];
var snow1img,snow2img;
var boy,boyImg;
var music;

function preload(){
  bgimg=loadImage("snow3.jpg");
  snow1img=loadImage("snow4.webp");
  snow2img=loadImage("snow5.webp");
  boyImg=loadImage("boy_1.png");
  music=loadSound("Music (mp3cut.net).mp3");
}
function setup() {
  engine=Engine.create();
  world=engine.world;

  boy=createSprite(830,385,20,20);
  boy.addImage(boyImg);
 
  createCanvas(1000,600);
  //createSprite(400, 200, 50, 50);
  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,1000), random(0,1000)));
      
    }

  }
 

}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  
  for(var i = 0; i<200; i++){
        snow[i].showDrop();
        snow[i].updateY()
  }
  music.play();
  
 
  drawSprites();
}


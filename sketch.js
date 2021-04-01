
var soldiersaluting,soldiersalutingimg;
var batman,batmanimg;
var background1,background1img;
var dialouge1,dialouge1img;
var dialouge2,dialouge2img;
var dialouge3,dialouge3img;
var pressStart,pressStartimg;
var newSoldier,newSoldierimg;
var Junglebackground,Junglebackgroundimg;
var enemies,enemiesimg;
var Soldierbullet,Soldierbulletimg;
var enemydestroy,enemydestroyimg;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
soldiersaluting=loadImage("Soldiersaluting.png")
batman=loadImage("Batman.png");
background1=loadImage("Background.png");
dialouge1=loadImage("Dialouges/batdialouge.png");
dialouge2=loadImage("Dialouges/batdialouge1.png");
dialouge3=loadImage("Dialouges/Soldierdialouge.png");
pressStart=loadImage("Pressspace.png");
Junglebackground=loadImage("newJungle.jpg");
newSoldier=loadImage("Soldier.png");
enemies=loadImage("enemies.png");
Soldierbullet=loadImage("soldierBullet.png");
enemydestroy=loadImage("enemydestroy1.png");
}



function setup() {
  createCanvas(1000,1000);
 // engine=Engine.create();
 // world=engine.world;




 background1img=createSprite(500,400);
 background1img.addImage(background1);
 background1img.scale=2;
 

 soldiersalutingimg=createSprite(300,300);
  soldiersalutingimg.addImage(soldiersaluting);
  soldiersalutingimg.scale=0.3;

  batmanimg=createSprite(550,300);
  batmanimg.addImage(batman);
batmanimg.scale=0.2;


dialouge1img=createSprite(600,150);
dialouge1img.addImage(dialouge1);
dialouge1img.scale=0.25;
//dialouge1img.lifetime=200;
dialouge1img.visible =false



dialouge2img=createSprite(600,150);
dialouge2img.addImage(dialouge2);
dialouge2img.scale=0.25;
//dialouge2img.lifetime=90;
dialouge2img.visible =false



dialouge3img=createSprite(340,130);
dialouge3img.addImage(dialouge3);
dialouge3img.scale=0.25;
dialouge3img.visible =false


/*pressStartimg=createSprite(400,700);
pressStartimg.addImage(pressStart);
pressStartimg.scale=1;*/


Junglebackgroundimg=createSprite(500,700)
Junglebackgroundimg.addImage(Junglebackground);
Junglebackgroundimg.visible =false



newSoldierimg=createSprite(300,500);
  newSoldierimg.addImage(newSoldier);
  newSoldierimg.scale=0.3;

  newSoldierimg.visible =false

enemiesGroup=createGroup();
BulletGroup=createGroup();
}

function draw() {

  background("white");
 // Engine.update(engine); 

if (frameCount >=80){
  dialouge1img.visible =true
}

if (frameCount >=160){
  dialouge2img.visible =true
}

if (frameCount >=240){
  dialouge1img.destroy();
  dialouge2img.destroy();
  dialouge3img.visible =true;
 

}

if(frameCount >=300){
  dialouge3img.destroy();
  batmanimg.destroy();
  background1img.destroy();
  soldiersalutingimg.destroy();
  
  Junglebackgroundimg.visible =true;
  Junglebackgroundimg.velocityX=-7;

  if(Junglebackgroundimg.x < 0){
   Junglebackgroundimg.x=Junglebackgroundimg.width/4;
  }

  newSoldierimg.visible =true;

spawnenemiesimg();

//if(gameState === PLAY){

  //gameOver.visible = false;
  //restart.visible = false;
  
 
  //score = score + Math.round(getFrameRate()/60);
  
  
}
  
  if(enemiesGroup.isTouching(Soldierbulletimg)){
      
    enemiesimg.changeImage("enemydestroyimg", enemydestroyimg);
  }

 ///else if (gameState === END) {
    //gameOver.visible = true;
    //restart.visible = true;
   
   //change the trex animation
   
    //ground.velocityX = 0;
    //trex.velocityY = 0
    
   
    //set lifetime of the game objects so that they are never destroyed
  //obstaclesGroup.setLifetimeEach(-1);
  //cloudsGroup.setLifetimeEach(-1);
   
   //obstaclesGroup.setVelocityXEach(0);
   //cloudsGroup.setVelocityXEach(0);    
 //}




  
if(keyDown("S")){
  Soldierbulletimg=createSprite(newSoldierimg.x+95,newSoldierimg.y-45);
  Soldierbulletimg.addImage(Soldierbullet);
  Soldierbulletimg.scale=0.05;
  Soldierbulletimg.velocityX=2;
}

  
  
   /* dialouge2img.destroy();
    pressStartimg.destroy();
    dialouge3img.destroy();
    dialouge1img.destroy();
    batmanimg.destroy();
   background1img.destroy();
  soldiersalutingimg.destroy();*/
  






 
  

 

  /*if(keyDown("s")){
Soldierbulletimg=createSprite(soldier.x+30,soldier.y-10)
Soldierbulletimg.addImage(Soldierbullet);
Soldierbulletimg.scale=0.2;
Soldierbulletimg.velocityX=2;
  }*/

  






  drawSprites();


}

function spawnenemiesimg() {
 
  if (frameCount % 60 === 0) {
     enemiesimg= createSprite(600,100,40,10);
     enemiesimg.y = Math.round(random(50,600));
     enemiesimg.addImage(enemies);
     enemiesimg.scale = 0.25;
     enemiesimg.velocityX =-3;
     enemiesimg.depth=Junglebackgroundimg.depth
     enemiesimg.depth=enemiesimg.depth+1
     enemies.lifetime = 1000;
    


   //cloudsGroup.add(cloud); 
enemiesGroup.add(enemiesimg);










  }}
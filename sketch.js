var spaceImg,space;
var earthImg,earth;
var sunImg,sun;
var moonImg,moon;
var mercury,mercuryImg;
var venusImg,venus;
var marsImg,mars;
var jupiterImg,jupiter;
var saturnImg,saturn;
var uranusImg,uranus;
var neptuneImg,neptune;
var plutoImg,pluto;

var gameover,gameoverImg;

var restart,restartImg;

var hcraft,hcraftImg;

var laser,laserpinkImg,lasergreenImg,laserredImg,laserblueImg,lasersGroup;

var alien,alien1Img,alien2Img,alien3Img,alien4Img,aliensGroup;

var score=0;
var lives=5;


var playButton,playButtonImg;

var gameState="play";
var end;

var laserSound;

function preload(){

 spaceImg = loadImage("galaxy black.png");
 earthImg = loadImage("e.png");
 sunImg = loadImage("sun.png");
 moonImg = loadImage("moon.png");
 mercuryImg = loadImage("mercury.png");
 venusImg = loadImage("venus.png");
 marsImg = loadImage("mars.png");
 jupiterImg = loadImage("jupiter.png");
 saturnImg = loadImage("saturn.png");
 uranusImg = loadImage("uranus.png");
 neptuneImg = loadImage("neptune.png");
 plutoImg = loadImage("pluto.png");


 hcraftImg = loadImage("amazing.png");
 laserblueImg = loadImage("laser blue.png");
 lasergreenImg = loadImage("laser green.png");
 laserpinkImg  = loadImage("laser pink.png");
 laserredImg = loadImage("laser red.png");

 alien1Img = loadImage("hero craft2.png");
 alien2Img = loadImage("craft3.png");
 alien3Img = loadImage("enemy shapeship2.png");
 alien4Img = loadImage("alien ufo3.png");
 
 gameoverImg = loadImage("game over.png");
 restartImg = loadImage("restart.png");
 
 

 aliensGroup = new Group();

 lasersGroup = new Group();


}



function setup(){
createCanvas(1200,600);

space = createSprite(0,0,800,600);
space.scale=3;
space.addImage(spaceImg);
space.velocityY=1;



earth = createSprite(250,150,10,10);
earth.scale=0.2;
earth.rotation = 0;
earth.rotateToDirection=true;
earth.velocityX =0;
earth.rotationSpeed=0;
/*earth.velocityX=0.01;
earth.velocityY=0.01;*/
earth.addImage(earthImg);

sun = createSprite(650,150,10,10);
sun.scale=0.5;
sun.rotation = 0;
sun.rotateToDirection=true;
sun.velocityX =0;
sun.rotationSpeed=0;
/*sun.velocityX=0.01;
sun.velocityY=0.01;*/
sun.addImage(sunImg);

mercury= createSprite(750,150,10,10);
mercury.scale=0.3;
mercury.rotation = 0;
mercury.rotateToDirection=true;
mercury.velocityX =0;
mercury.rotationSpeed=0;
/*mercury.velocityX=0.01;
mercury.velocityY=0.01;*/
mercury.addImage(mercuryImg);

moon= createSprite(900,200,10,10);
moon.scale=0.3;
moon.rotation = 0;
moon.rotateToDirection=true;
moon.velocityX =0;
moon.rotationSpeed=0;
/*moon.velocityX=0.01;
moon.velocityY=0.01;*/
moon.addImage(moonImg);

venus= createSprite(300,220,10,10);
venus.scale=0.2;
venus.rotation = 0;
venus.rotateToDirection=true;
venus.velocityX =0;
venus.rotationSpeed=0;
/*venus.velocityX=0.01;
venus.velocityY=0.01;*/
venus.addImage(venusImg);

mars= createSprite(340,220,10,10);
mars.scale=0.2;
mars.rotation = 0;
mars.rotateToDirection=true;
mars.velocityX =0;
mars.rotationSpeed=0;
/*mars.velocityX=0.01;
mars.velocityY=0.01;*/
mars.addImage(marsImg);

jupiter= createSprite(370,250,10,10);
jupiter.scale=0.2;
jupiter.rotation = 0;
jupiter.rotateToDirection=true;
jupiter.velocityX =0;
jupiter.rotationSpeed=0;
/*jupiter.velocityX=0.01;
jupiter.velocityY=0.01;*/
jupiter.addImage(jupiterImg);

saturn= createSprite(700,450,10,10);
saturn.scale=0.2;
saturn.rotation = 0;
saturn.rotateToDirection=true;
saturn.velocityX =0;
saturn.rotationSpeed=0;
/*saturn.velocityX=0.01;
saturn.velocityY=0.01;*/
saturn.addImage(saturnImg);

uranus= createSprite(600,320,10,10);
uranus.scale=0.2;
uranus.rotation = 0;
uranus.rotateToDirection=true;
uranus.velocityX =0;
uranus.rotationSpeed=0;
/*uranus.velocityX=0.01;
uranus.velocityY=0.01;*/
uranus.addImage(uranusImg);

neptune= createSprite(500,380,10,10);
neptune.scale=0.2;
neptune.rotation = 0;
neptune.rotateToDirection=true;
neptune.velocityX =0;
neptune.rotationSpeed=0;
/*neptune.velocityX=0.01;
neptune.velocityY=0.01;*/
neptune.addImage(neptuneImg);

pluto= createSprite(750,350,10,10);
pluto.scale=0.2;
pluto.rotation = 0;
pluto.rotateToDirection=true;
pluto.velocityX =0;
pluto.rotationSpeed=0;
/*pluto.velocityX=0.01;
pluto.velocityY=0.01;*/
pluto.addImage(plutoImg);


hcraft = createSprite(300,520,10,10);
hcraft.addImage(hcraftImg);
hcraft.scale=0.5;



}




function draw(){


if(space.y>400){
space.y=300
}

earth.rotation=earth.rotation+1;
sun.rotation=sun.rotation+1;
moon.rotation=moon.rotation+1;
mercury.rotation=mercury.rotation+1;
venus.rotation=venus.rotation+1;
mars.rotation=mars.rotation+1;
jupiter.rotation=jupiter.rotation+1;
saturn.rotation=saturn.rotation+1;
uranus.rotation=uranus.rotation+1;
neptune.rotation=neptune.rotation+1;
pluto.rotation=pluto.rotation+1;

if(gameState == "play") {

if(keyDown("left")){
  hcraft.x=hcraft.x-3;
}
if(keyDown("right")){
  hcraft.x=hcraft.x+3;
}
if(keyDown("up")){
  hcraft.y=hcraft.y-3;
}
if(keyDown("down")){
  hcraft.y=hcraft.y+3;
}

 if(keyDown("space")) {
     spawnlaser();

 }

  
    
 

 spawnAliens();
 if(lasersGroup.isTouching(aliensGroup)){
   aliensGroup.destroyEach();
   score=score+6;
 }
 
}

if(gameState === "end"){
  gameover.visible=true;

  textSize(17);
  textFont(17);
  fill("green");
  text(" You Loose",550,250);

  
 
  
}

if(aliensGroup.isTouching(hcraft)){

  gameState = end;

  restart=createSprite(600,550);
  restart.addImage(restartImg);
  restart.visible = true;
  restart.scale=1;
  

  gameover = createSprite(600,320);
  gameover.addImage(gameoverImg);
  gameover.scale=2;
 

  background.velocityY=0;
  hcraft.velocityX=0;
  aliensGroup.destroyEach();
  lasersGroup.destroyEach();
 

}

drawSprites();


textSize(32);
textFont("italic");
fill("Spring Green");
text("score :"+score,70,140);





}
function spawnlaser(){
  laser = createSprite(hcraft.x+10,hcraft.y-50);
  laser.velocityY=-5;

  var rand=Math.round(random(1,4));
  switch(rand) {
    case 1:
      laser.addImage(laserblueImg);
      break;

      case 2:
        laser.addImage(lasergreenImg );
        break;
  
        case 3:
          laser.addImage(laserpinkImg);
          break;


          case 4:
        laser.addImage(laserredImg);
        break;
  }
  
     lasersGroup.add(laser);
}


function spawnAliens(){
  if(frameCount % 200 === 0){
    alien=createSprite(Math.round(random(120,400)),50);
    var rand=Math.round(random(1,4));
    switch(rand) {
      case 1:
        alien.addImage(alien1Img);

        break;
  
        case 2:
          alien.addImage(alien2Img );
          break;
    
          case 3:
            alien.addImage(alien3Img);
            break;
  
  
            case 4:
          alien.addImage(alien4Img);
          break;

          
    }
    alien.depth=hcraft.depth;
    hcraft.depth=hcraft.depth+1;
    alien.velocityY=5;
    alien.scale=0.3;
    aliensGroup.add(alien);
    
  }

}



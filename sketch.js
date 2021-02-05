var canvas;
var music;
var bluebox;
var redbox;
var ball;
var greenbox;
var orangebox;
var blackbox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
    bluebox=createSprite(700,599,150,50);
    bluebox.shapeColor="blue";

    redbox=createSprite(525,599,150,50);
    redbox.shapeColor="red";

    ball=createSprite(200,200,50,50);
    ball.shapeColor="pink";

    greenbox=createSprite(350,599,150,50);
    greenbox.shapeColor="green";

    orangebox=createSprite(175,599,150,50);
    orangebox.shapeColor="orange";

    blackbox=createSprite(0,599,150,50);
    blackbox.shapeColor="black";



    //create box sprite and give velocity

}

function draw() {
   // background(rgb(169,169,169));
   background(200); 

   music.play();

   ball.x=World.mouseX;
   ball.y=World.mouseY;

 // ball.velocityX=3;
 // ball.velocityY=3;

  if(ball.isTouching(redbox)) {
      ball.shapeColor="red";
  }
  
  if(ball.isTouching(bluebox)) {
      ball.shapeColor="blue";
  }

  if(ball.isTouching(greenbox)) {
    ball.shapeColor="green";
}
  
  if(ball.isTouching(orangebox)) {
    ball.shapeColor="orange";
  }

  if(ball.isTouching(blackbox)) {
    ball.shapeColor="black";
  }

   //create edgeSprite
 
   //createEdgeSprites();
 // ball.bounceOff(topEdge);
 // ball.bounceOff(bottomEdge);
  //ball.bounceOff(leftEdge);
 // ball.bounceOff(rightEdge);
   


drawSprites();
    //add condition to check if box touching surface and make it box
}

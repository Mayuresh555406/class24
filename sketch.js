
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1=createSprite(560,390,100,20);
	ball1.shapeColor=("red");
 
    ball2=createSprite(600,350,20,100);
	ball2.shapeColor=("red");
	

	ball3=createSprite(500,350,20,100);
	ball3.shapeColor=("red");
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
ball3.display();
  drawSprites();
 
}




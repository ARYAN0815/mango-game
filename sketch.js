
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    stone=new Stone(200,200,10,10);

	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
  Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  drawSprites();
 
}




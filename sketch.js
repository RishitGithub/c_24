
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1;

var paper1; 

var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(400,600,800,10);

    paper1 = new Paper(75,350);

    dustbin1 = new Dustbin(600,590,110,10);
    dustbin2 = new Dustbin(545,550,10,80);
    dustbin3 = new Dustbin(652,550,10,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();

  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15});
  }
}



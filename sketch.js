
var redrop1,redrop2,redrop3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	redrop1=createSprite(400, 650,200,20);
	redrop1.shapeColor ="red";

	redrop2=createSprite(490, 600,20,100);
	redrop2.shapeColor ="red";

	redrop3=createSprite(310, 600,20,100);
	redrop3.shapeColor ="red";

	engine = Engine.create();
	world = engine.world;

	paperball = new paper(100,640,40)
	ground = new Ground(500,650,1200,20)

	Engine.run(engine);

  
	redrop1= Bodies.rectangle(400, 640,200,20, {isStatic:true} );
	 World.add(world, redrop1);
	 
	 redrop2= Bodies.rectangle(490, 600,20,100, {isStatic:true} );
	 World.add(world, redrop2);

	 redrop3= Bodies.rectangle(310, 600,20,100, {isStatic:true} );
	 World.add(world, redrop3);

	 Matter.Body.setStatic(redrop1, true);
	 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.display();
  ground.display();


  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:155}) 
	
	}
	}
	

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1
var mouse;

function preload()
{
	
}

function setup() {
	Canvas = createCanvas(windowWidth / 2 , windowHeight / 1.5);
	
	engine = Engine.create();
	world = engine.world; 


	let canvasmouse = mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse : canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(World, MouseConstraint)

	bob1 = new PENDULUM(250,450,"blue");
	bob2 = new PENDULUM(320,450,"blue");
	bob3 = new PENDULUM(390,450,"blue");
	bob4 = new PENDULUM(460,450,"blue");
	bob5 = new PENDULUM(530,450,"blue");
	
	Engine.run(engine);

	
}


function draw() {
	background("blue")
	Engine.update(engine);
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

  drawSprites();
 
}





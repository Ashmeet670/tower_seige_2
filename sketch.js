const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground1
var ball


function preload()
{
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(930,380,380,10,"brown")

	box1 = new Boxo(830,235,50,60,"orange")
	box2 = new Boxo(880,235,50,60,"orange")
	box3 = new Boxo(930,235,50,60,"orange")
	box4 = new Boxo(980,235,50,60,"orange")
	box5 = new Boxo(1030,235,50,60,"orange")


	box6 = new Boxr(860,195,50,60,"red")
	box7 = new Boxr(910,195,50,60,"red")
	box8 = new Boxr(960,195,50,60,"red")
	box9 = new Boxr(1010,195,50,60,"red")

	box10 = new Boxb(890,155,50,60,"blue")
	box11 = new Boxb(940,155,50,60,"blue")
	box12 = new Boxb(990,155,50,60,"blue")

	box13 = new Boxg(910,115,50,60,"green")
	box14 = new Boxg(960,115,50,60,"green")

	box15 = new Boxy(935,70,50,60,"yellow")



	ball = new Ball(200,200,50,50)

	slingShot = new SlingShot(ball.body , {x:200 , y:200})



	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

	ground1.display();
	  box1.display();
	  box2.display();
	  box3.display();
	  box4.display();
	  box5.display();
	  box6.display();
	  box7.display();
	  box8.display();
	  box9.display();
	  box10.display()
	  box11.display()
	  box12.display()
	  box13.display()
	  box14.display()
	  box15.display()

	  ball.display()
	  slingShot.display


}

function mouseDragged(){
	Matter.Body.setPosition(ball.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){
	slingShot.fly()
}

function keyPressed(){
	if (keyCode === 32){
		slingShot.attach();
	}
}
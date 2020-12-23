
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope3;
var bobDiameter=40;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	bob1 = new bob(250,600,70);
	bob2 = new bob(320,600,70);
	bob3 = new bob(390,600,70);
	bob4 = new bob(460,600,70);
  bob5 = new bob(530,600,70);
  roof = new Roof(400,200,500,50);
  rope1 = new Rope(bob1.body,roof.body,-140,0);
  rope2 = new Rope(bob2.body,roof.body,-70,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,70,0);
  rope5 = new Rope(bob5.body,roof.body,140,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  BOB(); 
  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   
 } 
}

function BOB(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:45});
 }
}





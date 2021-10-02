const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var up;
var right;
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  up = createImg("right.png");
  up.position(220,30);
  up.size(50,50);
  up.mouseClicked(hForce);


  right = createImg("up.png");
  right.position(20,30);
  right.size(50,50);
  right.mouseClicked(vForce);

  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

var ballOption = {
  restitution:0.5
}


  ball = Bodies.circle(200,100,20,ballOption);
  World.add(world,ball);
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20);


}

function hForce(){

Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
 
}

function vForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
 

}


 


const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
  box=Bodies.rectangle(200,100,50,50)
  World.add(world,box)
  var groundoption={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,groundoption)
     World.add(world,ground)
 // createSprite(400, 200, 50, 50);
 var b={
restitution:1
 }
 ball=Bodies.circle(200,150,20,b);
 World.add(world,ball)
}
function draw() {
  background("green");
  Engine.update(engine)  
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
drawSprites();
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(4000, 1000);


  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,800,3000,10);
  border = new Ground(2000,1,4000,10);
  
  box1 = new Block(1500,700,90,80);
  box2 = new Block(1500,600,90,80);
  box3 = new Block(1500,500,90,80);
  box4 = new Block(1500,400,90,80);
  box5 = new Block(1500,300,90,80);
  box6 = new Block(1600,500,90,80);
  box7 = new Block(1600,700,90,80);
  box8 = new Block(1600,600,90,80);
  box9 = new Block(1600,400,90,80);
  box10 = new Block(1600,300,90,80);
  box11 = new Block(1600,200,90,80);
  box12 = new Block(1600,100,90,80);
  box13 = new Block(1700,700,90,80);
  box14 = new Block(1700,600,90,80);
  box15 = new Block(1700,500,90,80);
  box16 = new Block(1700,400,90,80);
  box17 = new Block(1700,300,90,80);

  monster = new Monster(2000,500,400,400);

  hero = new Hero(1000,500,600,300);
  rope = new Fly(hero.body,{x:1000, y:100});
}

function draw() {
  background(bg);
  textSize(70);
  fill("black");
  strokeWeight(5);
  text("Press spacebar for 2nd chance😎!" , width-1500,850)
  noStroke();
  noFill();     
  Engine.update(engine);
// display ground.
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();


monster.win();
monster.display();

hero.display();
rope.display();


}
function mouseDragged(){
   Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  rope.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
     rope.attach(hero.body);
  }
}
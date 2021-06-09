const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var buggy1,buggy2,buggy3,buggy4,buggy5;
var chain1,chain2,chain3,chain4,chain5;
var rock1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  buggy1 = new Buggy(50,360,50,50);
  buggy2 = new Buggy(150,360,50,50);
  buggy3 = new Buggy(250,360,50,50);
  buggy4 = new Buggy(350,360,50,50);
  buggy5 = new Buggy(450,360,50,50);
  buggy6 = new Buggy(550,360,50,50);

  rock1 = new Rock(1100,360,100,100)

  chain1 = new SlingShot(buggy1.body,buggy2.body);
  chain2 = new SlingShot(buggy2.body,buggy3.body);
  chain3 = new SlingShot(buggy3.body,buggy4.body);
  chain4 = new SlingShot(buggy4.body,buggy5.body);
  chain5 = new SlingShot(buggy5.body,buggy6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  buggy1.display();
  buggy2.display();
  buggy3.display();
  buggy4.display();
  buggy5.display();
  buggy6.display();
  rock1.display();
  var Collision = Matter.SAT.collides(buggy6.body,rock1.body);
  if(Collision.collided){
    flag = 1
  }
  if(flag === 1) {
    textSize(30);
    stroke(3);
    fill("blue");
    text("CRASH",550,100);
    crashSound.play();
  }
  }

  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(buggy6.body,{x:buggy6.body.position.x,y:buggy6.body.position.y}, {x:0.5,y:0});
      trainSound.play();
    }
  }

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,690,800,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
for (var j=75; j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
}
  
  //create 4th row of plinko objects
for (var j=50; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,375));
}

  //create particle objects
  /*p1 = new Particle(200,200,10)
  p2 = new Particle(200,200,10)
  p3 = new Particle(200,200,10)
  p4 = new Particle(200,200,10)
  p5 = new Particle(200,200,10)
  p6 = new Particle(200,200,10)*/

  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }
for(var a = 0; a<particles.length;a++){
  particles[a].display();
}
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,ball1,ground, scene;


function preload(){

 scenery=loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;
//595 947 
    
    ground = new Ground(680,height,805,20)
    hero1 = new hero(300,380,250,250)
    monster1 = new monster(1057,318,170)
    rope1 = new Rope(hero1.body,{x:300,y:139})

    //   hero1 = new hero(250,280,250,40)
    box1 = new box(813,200,60,60);
    box2 = new box(813,200,60,60);
    box3 = new box(813,200,60,60);
    box4 = new box(813,200,60,60);
    box5 = new box(813,200,60,60);
    box6 = new box(813,200,60,60);
    box7 = new box(813,200,60,60);
    box8 = new box(813,200,60,60);

    box_1 = new box(613,200,60,60);
    box_2 = new box(613,200,60,60);
    box_3 = new box(613,200,60,60);
    box_4 = new box(613,200,60,60);
    box_5 = new box(613,200,60,60);
    box_6 = new box(613,200,60,60);
    box_7 = new box(613,200,60,60);
    box_8 = new box(613,200,60,60);


}

function draw(){
    background(scenery);
    Engine.update(engine);
    console.log("X: "+mouseX)
    console.log("Y: "+mouseY)
    //ball1.display()
box1.x = mouseX;
monster1.display();
rope1.display()
hero1.display();

    detectollision(box1,monster1);
    detectollision(box2,monster1);
    detectollision(box3,monster1);
    detectollision(box4,monster1);
    detectollision(box5,monster1);
    detectollision(box6,monster1);
    detectollision(box7,monster1);
    detectollision(box8,monster1);

    detectollision(box_1,monster1);
    detectollision(box_2,monster1);
    detectollision(box_3,monster1);
    detectollision(box_4,monster1);
    detectollision(box_5,monster1);
    detectollision(box_6,monster1);
    detectollision(box_7,monster1);
    detectollision(box_8,monster1);
    
   
    fill(random(0,255),random(0,255),random(0,255))
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()

    box_1.display()
    box_2.display()
    box_3.display()
    box_4.display()
    box_5.display()
    box_6.display()
    box_7.display()
    box_8.display()
    ground.display();

    
}

function mouseDragged(){

  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})
}

function detectollision(block,monsterbad){

  mangoBodyPosition=block.body.position
  stoneBodyPosition=monsterbad.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=block.x+monsterbad.r)
    {
      
  	  Matter.Body.setStatic(monsterbad.body,false);
    }

  }
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new ground(240,790,480,20);
  for(var k = 0;k<=width; k = k +80) {
    divisionHeight.push(new divisions(k, height - divisionHeight/2 , 10, divisionHeight));
  for(var j = 40; j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10 ;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
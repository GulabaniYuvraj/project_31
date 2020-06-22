class Practicle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body=bodies.circle(x,y,this.r,options)
      this.color=color (random(0,255),random(0,255),random(0,255));
      World.add(World,this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      this.body=bodies.circle(x,y,this.r,options)
      this.color=color (random(0,255),random(0,255),random(0,255));
      World.add(World,this.body);
    }
  };
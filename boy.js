class Boy{
constructor(x,y,width,height){
    this.image = loadImage("stone.png");
    var options={
isStatic:false,
restitution:0,
friction:1,
}
this.body = Bodies.rectangle(x, y,width,height, options);
      this.width=width;
      this.height=height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
     
      rect(0, 0,this.width,this.height);
      pop();
    }
  };
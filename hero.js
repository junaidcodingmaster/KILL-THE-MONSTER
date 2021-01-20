class Hero {
    constructor (x,y,width,height)
    {
        var options={
          density: 1
        }
    
     this.image = loadImage("images/Superhero-01.png");
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add (world,this.body);
    }
     display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
     }
    
}
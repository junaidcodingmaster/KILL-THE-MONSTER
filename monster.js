class Monster {
    constructor (x, y, width, height) 
     {
          var options = {
               restitution :0.8,
               friction :1.0,
               density :20,
               isStatic: false
       }
        
       this.image = loadImage("images/Monster-01.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add (world,this.body);
   }
   display(){
           var pos = this.body.position;
           var angle = this.body.angle;
           push();
           translate(pos.x, pos.y);
           rotate(angle);
           imageMode(CENTER);
           image(this.image,0,0,this.width,this.height);
           pop();
       }
          
       
       win(){
        if (this.body.speed> 10){
            strokeWeight(100);
            stroke("green");
            textSize(100);
            fill("white");
            text("🎉YOU ARE THE WINNER🎉" , 1000, height/2); 
            noStroke(); 
            fill("black");
            text("This game is made by Junaid." , width-1500, 800);
          console.log("you win");
        }
      }
      
      
   }    
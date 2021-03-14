class hero {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic':false,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 250, 250, options);
        this.width = 20;
        this.height = 20;
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,250,250);   
        
        pop();
      }
}
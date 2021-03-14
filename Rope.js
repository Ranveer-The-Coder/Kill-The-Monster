class Rope{
    constructor(bodyA, pointB){
       this.pointB = pointB
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.7,
            length: 300
        }
       // this.pbodyB=bodyB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
     

    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        
        strokeWeight(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}

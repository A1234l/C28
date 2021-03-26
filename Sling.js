class Sling{
    constructor(b1,b2){
        var slingProps = {
            bodyA : b1,
            bodyB : b2,
            stiffness : 0.05
        }
        this.Sling = Matter.Constraint.create(slingProps);
        World.add(world, this.Sling);
    }
    display(){
        var posA = this.Sling.bodyA.position;
        var posB = this.Sling.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}
class Sling{
    constructor(b1,p2){
        var slingProps = {
            bodyA : b1,
            pointB : p2,
            stiffness : 0.05
        }
        this.sling = Matter.Constraint.create(slingProps);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.sling.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }

    slingBreak(){
        this.sling.bodyA = null;
    }
}
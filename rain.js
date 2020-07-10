class Rain{
    constructor(x,y,rad){
        var options = {
            isStatic: false,
            density: 1,
            friction: 1,
            restitution: 0.6
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.x = x;
        this.y = y;
        this.rad = rad;
        
        this.col = rgb(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.col);
        noStroke();
        translate(pos.x,pos.y);
        ellipse(0,0,this.rad);
        pop();
        if(pos.y > 620){
            World.remove(world,this.body);
        }
    }
}
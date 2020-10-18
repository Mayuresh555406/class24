class DustbinClass{
   
    constructor(x, y, width, height, angle) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        
            }
        this.body = Bodies.rectangle(x,y,width,height,options)
       this.width=200;
       this.height=20;
       World.add(world.this.body)
        
}
display(){
    
    var angle = this.body.angle;
    rectMode(CENTER);

}
    }
class bob
{
    constructor(x,y,r){
        
       var options= {
           isStatic:false,
           restituition:0.01,
           friction:10,
           density:1.2
       }

       this.x = x
       this.y = y
       this.r = r
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world,this.body);
    }
 
    display(){
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        strokeWeight(3)
        fill(127,0,255);
        ellipse(0,0,this.r,this.r);
        pop()  
    }
}    





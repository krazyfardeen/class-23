class Cannonball{


constructor(x,y){
var Options={
    isStatic:true
}
this.r = 30
this.body= Bodies.circle(x,y,this.r,Options);
World.add(world,this.body);
}
shoot(){
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:30,y:-20})
}
display(){
push()
var pos = this.body.position
ellipseMode(CENTER)
fill("black")
ellipse(pos.x,pos.y,this.r,this.r)

pop()


}




}
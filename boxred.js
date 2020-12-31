class Boxr{
    constructor(x,y,width,height,){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.visibility = 255

        this.image = loadImage("boxred.png")



        this.body = Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)

    }
    display(){

        if (this.body.speed < 10){
            imageMode(CENTER)
            image(this.image , this.body.position.x , this.body.position.y , this.width , this.height)
        }
        else{
            World.remove(world,this.body)
            push()
            this.visibility = this.visibility - 5
            tint(255,this.visibility)
            image(this.image , this.body.position.x , this.body.position.y , this.width , this.height)
            pop()
        }
        
    }
}
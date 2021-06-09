class Rock{
    constructor(x,y,width,height){

        var rock_options = {
            isStatic : false
        };

        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        this.image = loadImage("images/rock1.png");
        World.add(myWorld,this.body)
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
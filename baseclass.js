class Baseclass  {
    constructor(x,y,width,height,angle){

        box_options = {
            restitution : 0.75,
            friction :1.0,
            density : 1.0
        };

        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world,this.body);

    }

    display(){
        var angle = this.body.angle;

        push ();
        translate (this.body.position.x,this.body.position.y);
        angleMode (RADIANS);
        rotate (angle);
        imageMode (CENTER);

        //image (nameofimage,image_x,image_y,opt_width,opt_height);
        image(this.image,0,0,this.width,this.height);
        
        pop();
    }
}

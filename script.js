window.onload = () => {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight -10;
    
    class Circle{
        constructor(x,y,r, dy, friction, color){
            this.x = x;
            this.y = y; 
            this.r = r;
            this.dy = dy;
            this.friction = friction;
            this.color = color;
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        move(){
            this.draw();
            if (this.y >= canvas.height - this.r){
                this.dy *= -1 * this.friction;
            }
            else{
                this.dy+=1;
            }
            this.y += this.dy;
        }
    }
    let circles = [];
    
    for (var i = 0; i < 100; i++){
        circles.push(new Circle(Math.random()*canvas.width, Math.random()*canvas.height, Math.floor(Math.random()*30), 1, 0.9, randomColor()));
        
    }
    
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        circles.forEach(circle => {
            circle.move();
        });
    
    }
    animate();
    function randomColor(){
        return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    }
}

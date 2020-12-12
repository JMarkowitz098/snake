class Apple {
    constructor({size, color}){
        this.size = size;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        // let x = this.canvPos[0];
        // let y = this.canvPos[1];
        ctx.fillRect(50, 50, this.size, this.size);
    }
}

export default Apple
class Apple {
    constructor({size, color, pos}){
        this.size = size;
        this.color = color;
        this.x = pos.x
        this.y = pos.y
    }

    draw(ctx) {
        const { size, color, x, y } = this
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }

    isEaten(snakePos){
        const { x, y } = this;
        const sX = snakePos.x
        const sY = snakePos.y
        if ( x === sX && y === sY){
            this.x = null;
            this.y = null;
            return true;
        } else {
            return false
        }
    }
}

export default Apple
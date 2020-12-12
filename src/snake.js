class Snake {
    constructor({size, color, pos}) {
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
}

export default Snake
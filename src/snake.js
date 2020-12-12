import * as CONSTANTS from './constants'

class Snake {
    constructor({size, color, pos}) {
        this.size = size;
        this.color = color;
        this.x = pos.x
        this.y = pos.y
        this.dir = 'down'; //Starting Direction
        this.bodyPositions = [{
            x: CONSTANTS.SNAKE_START_POS,
            y: CONSTANTS.SNAKE_START_POS
        }]
        this.length = 4; //Starting Snake Size
    }

    draw(ctx) {
        const { size, color, bodyPositions } = this
        ctx.fillStyle = color;
        bodyPositions.forEach(({x, y}) => ctx.fillRect(x, y, size, size))
    }

    collidedWithWall(){
        const { x, y } = this;
        return (
            x < CONSTANTS.SNAKE_START_POS
                || x > CONSTANTS.CANVAS_SIDE_LENGTH + 75
                || y < CONSTANTS.SNAKE_START_POS
                || y > CONSTANTS.CANVAS_SIDE_LENGTH + 75
        )
    }

    cutBodyPositionsByLength(){
        const { bodyPositions, length } = this;
        this.bodyPositions = 
            bodyPositions.slice(bodyPositions.length - 3)
            // bodyPositions.slice(bodyPositions.length - length * 2)

        console.log(this.bodyPositions)
    }

    move(){
        const { x, y, dir } = this
        switch (dir) {
            case CONSTANTS.DIR_UP:
                this.y = y - CONSTANTS.SNAKE_VELOCITY
                break;
            case CONSTANTS.DIR_DOWN:
                this.y = y + CONSTANTS.SNAKE_VELOCITY
                break;
            case CONSTANTS.DIR_LEFT:
                this.x = x - CONSTANTS.SNAKE_VELOCITY
                break;
            case CONSTANTS.DIR_RIGHT:
                this.x = x + CONSTANTS.SNAKE_VELOCITY
                break;
        }
        this.bodyPositions.push({x: this.x, y: this.y})
        this.cutBodyPositionsByLength()
    }

    changeDir(newDir){
        this.dir = newDir
    }
}

export default Snake
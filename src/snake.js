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
        this.length = 1; //Starting Snake Size
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

    collidedWithSelf(){
        const { x, y, bodyPositions } = this;
        let snakeBody = bodyPositions.slice(0, bodyPositions.length - 2)
        return snakeBody.some(pos => x === pos.x && y === pos.y)
    }

    cutBodyPositionsByLength(){
        const { bodyPositions, length } = this;
        let sliceIdx = bodyPositions.length - length >= 1 ? bodyPositions.length - length : 1
        this.bodyPositions = 
            bodyPositions.slice(sliceIdx)
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

    isValidMove(newDir){
        switch (this.dir) {
            case CONSTANTS.DIR_UP:
                return newDir !== CONSTANTS.DIR_DOWN
            case CONSTANTS.DIR_DOWN:
                return newDir !== CONSTANTS.DIR_UP
            case CONSTANTS.DIR_LEFT:
                return newDir !== CONSTANTS.DIR_RIGHT
            case CONSTANTS.DIR_RIGHT:
                return newDir !== CONSTANTS.DIR_LEFT
        }
    }

    isInSnakeBody(applePos){
        const { bodyPositions } = this;
        const aX = applePos.x
        const aY = applePos.y
        return bodyPositions.some(({x, y}) => x === aX && y === aY)
    }

    changeDir(newDir){
        if (this.isValidMove(newDir)) this.dir = newDir
    }

    increaseLength(){
        let x = this.x
        let y = this.y
        this.bodyPositions.push({ x, y })
        this.length += 1;
    }
}

export default Snake
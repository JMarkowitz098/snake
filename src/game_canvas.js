import Apple from './apple'
import Snake from './snake'
import * as CONSTANTS from './constants'

const getRandPos = () => {
    const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.BLOCK_SIZE
    let x = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100
    let y = Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100
    return {x, y}
}

class GameCanvas {
    constructor({ctx}){
        this.ctx = ctx;
        this.fruit = this.placeStartingFruit(CONSTANTS.NUM_FRUIT)
        this.snake = this.placeSnake()
    }

    placeStartingFruit(numFruit){
        let fruit = [];
        for (let i = 0; i < numFruit; i++){
            let pos = getRandPos()
            let apple = new Apple({
                size: CONSTANTS.BLOCK_SIZE,
                color: CONSTANTS.APPLE_COLOR,
                pos
            })
            fruit.push(apple)
        }
        return fruit;
    }

    placeNewApple(){
        const { snake } = this;
        let pos = getRandPos()
        while(snake.isInSnakeBody(pos)) pos = getRandPos()
        let apple = new Apple({
            size: CONSTANTS.BLOCK_SIZE,
            color: CONSTANTS.APPLE_COLOR,
            pos
        })
        this.fruit.pop()
        this.fruit.push(apple)
    }

    drawFruit(){
        const {fruit, ctx} = this;
        fruit.forEach(apple => apple.draw(ctx))
    }

    placeSnake(){
        return new Snake({
            size: CONSTANTS.BLOCK_SIZE,
            color: CONSTANTS.SNAKE_COLOR,
            pos: { x: CONSTANTS.SNAKE_START_POS, y: CONSTANTS.SNAKE_START_POS }
        })
    }

    drawSnake(){
        const {snake, ctx} = this;
        snake.draw(ctx)
    }

    moveSnake(){
        this.snake.move();
    }

    checkApples(){
        const { snake } = this
        const snakePos = snake.bodyPositions[snake.bodyPositions.length - 1]
        this.fruit.forEach(apple => {
            if (apple.isEaten(snakePos)) {
                this.snake.increaseLength()
                this.placeNewApple()
                this.increaseScore();
            }
        })
    }

    clearCanvas(){
        const { ctx } = this;
        ctx.clearRect(
            CONSTANTS.CANVAS_SIDE_LENGTH, 
            CONSTANTS.CANVAS_SIDE_LENGTH, 
            CONSTANTS.CANVAS_SIDE_LENGTH, 
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
        ctx.fillStyle = "black";
        ctx.fillRect(
            CONSTANTS.SNAKE_START_POS,
            CONSTANTS.SNAKE_START_POS,
            CONSTANTS.CANVAS_SIDE_LENGTH,
            CONSTANTS.CANVAS_SIDE_LENGTH
        );
    }

    increaseScore(){
        let scoreEle = document.getElementById('score')
        let scoreStr = scoreEle.innerHTML
        let score = parseInt(scoreStr.split(':')[1])
        score += 1
        console.log(score)
        scoreEle.innerHTML = `Score: ${score}`;
    }
}

export default GameCanvas
import Apple from './apple'
import Snake from './snake'
import * as CONSTANTS from './constants'

const randPos = () => {
    const factor = CONSTANTS.CANVAS_SIDE_LENGTH / CONSTANTS.BLOCK_SIZE
    return Math.floor(Math.random() * factor) * CONSTANTS.BLOCK_SIZE + 100
}

class GameCanvas {
    constructor({ctx, numFruit}){
        this.ctx = ctx;
        this.fruit = this.placeFruit(numFruit)
        this.snake = this.placeSnake()
    }

    placeFruit(numFruit){
        let fruit = [];
        for (let i = 0; i < numFruit; i++){
            let pos = {x: randPos(), y: randPos()}
            let apple = new Apple({ 
                size: CONSTANTS.BLOCK_SIZE, 
                color: CONSTANTS.APPLE_COLOR,
                pos
            })
            fruit.push(apple)
        }
        return fruit;
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
}

export default GameCanvas
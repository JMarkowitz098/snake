import * as CONSTANTS from './constants'

class GameRenderer{
    constructor({ctx, gameCanvas}){
        this.dirOptions = CONSTANTS.DIR_OPTIONS
        this.ctx = ctx
        this.gameCanvas = gameCanvas

        this.step = this.step.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.animate = this.animate.bind(this)
    }

    animate(step) {
        setTimeout(() => requestAnimationFrame(step), 1000 / CONSTANTS.FPS);
    }

    gameOver(gameCanvas){
        const { snake } = gameCanvas
        return snake.collidedWithWall() || snake.collidedWithSelf() ;
    }
    
    start(){
        this.bindKeyHandlers()
        this.animate(this.step)
    }
    
    step(){
        const { gameCanvas, gameOver } = this;
        gameCanvas.clearCanvas()

        gameCanvas.moveSnake();

        gameCanvas.drawFruit();
        gameCanvas.drawSnake();

        gameCanvas.checkApples();

        if (!gameOver(gameCanvas)) this.animate(this.step)
    }

    onKeyDown(e) {
        const { gameCanvas, dirOptions } = this
        const newDir = dirOptions[e.key];

        if (Object.keys(dirOptions).includes(e.key))
            gameCanvas.snake.changeDir(newDir)
        
        if (e.key === 'q') gameCanvas.snake.increaseLength();
    }

    bindKeyHandlers() {
        document.addEventListener("keydown", this.onKeyDown)
    };
}

export default GameRenderer
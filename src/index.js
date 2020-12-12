import GameCanvas from './game_canvas'
import * as CONSTANTS from './constants'



document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas")
    const ctx = canvasEl.getContext("2d");
    const gameCanvas = new GameCanvas({ctx, numFruit: 4})

    // const game = new Game();

    // const gameView = new GameView(game, ctx)


    //Starts game when 'm' is pressed-----------
    ctx.fillStyle = "black";
    ctx.fillRect(
        100, 
        100, 
        CONSTANTS.CANVAS_SIDE_LENGTH, 
        CONSTANTS.CANVAS_SIDE_LENGTH
    );
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    gameCanvas.drawFruit()
    gameCanvas.drawSnake()

    // const startGame = () => {
    //     gameView.start();
    //     document.removeEventListener('keydown', gameFunc)
    //     setInterval(game.increaseVelocity, 10000);
    // }

    // const gameFunc = (e) => {
    //     if (e.key === 'm') {
    //         startGame()
    //     }
    // }

    // document.addEventListener('keydown', gameFunc) //Start game if 'm' is pressed
});


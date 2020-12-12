import Apple from './apple'

const BLOCK_SIZE = 20
const APPLE_COLOR = "red"

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas")
    const ctx = canvasEl.getContext("2d");

    const apple = new Apple({size: BLOCK_SIZE, color: APPLE_COLOR})
    // const game = new Game();

    // const gameView = new GameView(game, ctx)


    //Starts game when 'm' is pressed-----------
    ctx.fillStyle = "black";
    ctx.fillRect(-10, 50, 400, 700);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Press 'm' to start ", 40, 600);
    apple.draw(ctx);

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


import { Map } from "./map.js";

window.addEventListener("load", () => {

    const canvas = document.getElementById("gameArea");
    const ctx = canvas.getContext("2d");

    canvas.width = 1020;
    canvas.height = 600;

    /*------------------------------------------------------------------------------
    ->GAME LOOP<-
    ------------------------------------------------------------------------------*/
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.map = new Map(this);
        }

        update() {
            
        }

        draw(context) {
            this.map.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate() {
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    
    animate();
})
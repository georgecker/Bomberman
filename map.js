export class Map {
    constructor (game) {
        this.game = game;
        this.size = 600;    
    }

    update() {

    }
    
    draw(context) {
        context.fillRect(0, 0, this.size, this.size);
    }
}
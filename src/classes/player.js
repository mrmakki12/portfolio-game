// import avatar here

export class Player {
    constructor() {
        // keep track of position
        this.position = {
            x: 100,
            y: 600
        }

        // pic of character
        this.avatar = ''

        // velocity
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    // draw player
    // ctx == canvas context
    draw(ctx) {
        // probably have to flip image when player goes left
        ctx.fillRect(this.position.x, this.position.y, 100, 100)
    }

    // update position
    // ctx == canvas context
    update(ctx) {
        this.draw(ctx)  
        this.position.y += this.velocity.y
        
        // update y position
        if (this.position.y < 600) {
            this.velocity.y += .75
        } else {
            this.velocity.y = 0
        }

        // update x position
        if (this.position.x > -11) {
            this.position.x += this.velocity.x
        } else {
            this.velocity.x = 0
        }
    }
}

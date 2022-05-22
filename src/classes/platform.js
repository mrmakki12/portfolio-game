// import platform image here

export class Platform {
    constructor(x, y, width, height) {
        // set position
        this.position = {
            x,
            y,
        }

        // position copy for reset on death
        this.resetPosition = {
            x, 
        }

        // velocity
        // used when background scrolls
        this.velocity = {
            x: 0
        }

        // demensions
        this.dimensions = {
            height,
            width,
        }

        // platform image
        this.image = ''
    }

    // draw it
    // ctx == canvas context
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

    // background scroll
    update(ctx) {
        this.position.x += this.velocity.x
        this.draw(ctx)
    }
}
// import platform image here

export class Platform {
    constructor(x, y, width, height) {
        // set position
        this.position = {
            x,
            y,
        }

        // demensions
        this.demensions = {
            height,
            width,
        }

        // platform image
        this.image = ''
    }

    // draw it
    // ctx == canvas context
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.demensions.width, this.demensions.height)
    }
}
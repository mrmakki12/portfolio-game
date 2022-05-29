// import platform image here
import ground from '../images/other/ground.png'
import mediumPlatform from '../images/other/med-platform.png'
import tallPlatform from '../images/other/tall-thin-platform.png'
// return image helper function
import { returnImage } from '../helper_functions/helper'

class Platform {
    constructor(x, y, width, height, image) {
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
        this.image = returnImage(image)
    }

    // draw it
    // ctx == canvas context
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

    // background scroll
    update(ctx) {
        this.position.x += this.velocity.x
        this.draw(ctx)
    }
}

export const platforms = [

    new Platform(0, 700, 530, 180, ground),

    new Platform(530, 700, 530, 180, ground),

    new Platform(1060, 700, 530, 180, ground),

    new Platform(1850, 500, 370, 348, mediumPlatform),

    new Platform(2100, 700, 530, 180, ground),

    new Platform(2900, 700, 530, 180, ground),

    new Platform(3600, 550, 168, 477, tallPlatform),

    new Platform(3800, 350, 168, 477, tallPlatform),

    new Platform(4100, 500, 370, 348, mediumPlatform),

    new Platform(4500, 700, 530, 180, ground),

    new Platform(5100, 700, 530, 180, ground),

    new Platform(5750, 500, 370, 348, mediumPlatform),

    new Platform(6250, 700, 530, 180, ground),

    new Platform(6780, 700, 530, 180, ground),

    new Platform(7310, 700, 530, 180, ground),

    new Platform(7840, 700, 530, 180, ground),

    new Platform(8370, 700, 530, 180, ground)
]
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

    new Platform(1800, 500, 370, 348, mediumPlatform)
]
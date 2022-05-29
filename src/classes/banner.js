// import banner images
import TyreeckHeader from '../images/other/tyreeck-header.png'
import HelloHeader from '../images/other/hello-header.png'
import Controls from '../images/other/controls.png'
// return image helper function
import { returnImage } from '../helper_functions/helper'

class Banner {
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

export const banners = [

    new Banner(175, 75, 1020, 600, TyreeckHeader),

    new Banner(2200, 100, 680, 400, HelloHeader)
]

export const staticBanners = [

    new Banner(10, 10, 161, 158, Controls)
]
// import banner images
import TyreeckHeader from '../images/other/tyreeck-header.png'
import HelloHeader from '../images/other/hello-header.png'
import Controls from '../images/other/controls.png'
import Me from '../images/other/me.jpg'
import SkillsHeader from '../images/other/skills-header.png'
import Skills from '../images/other/skills.png'
import AudioOn from '../images/other/audio-on.png'
import AudioOff from '../images/other/audio-off.png'
import ProjectsHeader from '../images/other/projects-header.png'
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

    new Banner(2200, 100, 680, 400, HelloHeader),

    new Banner(3000, 100, 400, 520, Me),

    new Banner(4000, 100, 680, 400, SkillsHeader),

    new Banner(4750, 100, 615, 500, Skills),

    new Banner(5750, 100, 680, 400, ProjectsHeader)
]

export const staticBanners = [

    new Banner(10, 10, 161, 158, Controls),

    new Banner(1400, 10, 125, 125, AudioOn)
]
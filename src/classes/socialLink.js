// import images
import linkedIn from '../images/social_images/linkedin.png'
import github from '../images/social_images/github.png'
// import helper functions
import { returnImage } from "../helper_functions/helper"

class SocialLink {
    // img == social logo, link == website link
    constructor(x, y, social) {
        this.social = social

        // position
        this.position = {
            x, 
            y
        }

        // reset postion when player dies
        this.resetPosition = {
            x,
        }

        // velocity
        // used when background scrolls
        this.velocity = {
            x: 0
        }

        // dimensions 
        this.dimensions = {
            height: 100,
            width: 100
        }
    }

    // draw it
    // ctx == canvas context
    draw(ctx) {

        ctx.drawImage(this.social.img, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

    // background scroll
    update(ctx) {
        this.position.x += this.velocity.x
        this.draw(ctx)
    }
}

// all links used
export const socialLinks = [
    
    new SocialLink(1500, 100, { 
        img: returnImage(github), 
        link: 'https://github.com/mrmakki12/'
    }),

    new SocialLink(1200, 100, {
        img: returnImage(linkedIn), 
        link: 'https://www.linkedin.com/in/tyreeck-makki/'
    })
]



// import banner images
import TyreeckHeader from '../images/banner_images/tyreeck-header.png'
import HelloHeader from '../images/banner_images/hello-header.png'
import Controls from '../images/banner_images/controls.png'
import Me from '../images/banner_images/me.jpg'
import SkillsHeader from '../images/banner_images/skills-header.png'
import Skills from '../images/banner_images/skills.png'
import AudioOn from '../images/banner_images/audio-on.png'
import AudioOff from '../images/banner_images/audio-off.png'
import ProjectsHeader from '../images/banner_images/projects-header.png'
import ContactHeader from '../images/banner_images/contact-header.png'
import EndHeader from '../images/banner_images/end-header.png'
import DeathHeader from '../images/banner_images/death-header.png'

// audio
import GameSound from '../audio/gamesound.mp3'
// return image helper function
import { returnImage } from '../helper_functions/helper'
// instantiate audio
const gameSound = new Audio(GameSound)
gameSound.volume = 0.25
gameSound.loop = true
let playing = false


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

    new Banner(1650, 700, 120, 51, DeathHeader),

    new Banner(2200, 100, 680, 400, HelloHeader),

    new Banner(3000, 100, 400, 520, Me),

    new Banner(4000, 100, 680, 400, SkillsHeader),

    new Banner(4750, 100, 615, 500, Skills),

    new Banner(5750, 100, 680, 400, ProjectsHeader),

    new Banner(9700, 100, 680, 400, ContactHeader),

    new Banner(11160, 100, 680, 400, EndHeader)
]

export const staticBanners = [

    new Banner(10, 10, 161, 158, Controls),

    new Banner(1400, 10, 125, 125, AudioOn)
]

addEventListener('click', (event) => {
    console.log(event.x, event.y)
    const audioBanner = staticBanners[1]
    if (event.x >= audioBanner.position.x && event.x <= audioBanner.position.x + audioBanner.dimensions.width && event.y >= audioBanner.position.y && event.y <= audioBanner.position.y + audioBanner.dimensions.height) {
        if (!playing) {
            console.log('play')
            gameSound.play()
            playing = !playing
        } else {
            console.log('stop playing')
            gameSound.pause()
            playing = !playing 
        }
        audioBanner.image.src == AudioOn ? audioBanner.image.src = AudioOff : audioBanner.image.src = AudioOn

    }
})
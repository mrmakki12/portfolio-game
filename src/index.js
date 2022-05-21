// get canvas 
const canvas = document.getElementById('canvas')
// get context
const ctx = canvas.getContext('2d')
// import all needed classes
import { Player } from './classes/player'
import { Platform } from './classes/platform'
import { projects } from './classes/project'
import { socialLinks } from './classes/socialLink'

canvas.height = innerHeight
canvas.width = innerWidth

// platform
const platform = new Platform(1000, 500, 200, 50)
const platform1 = new Platform(600, 400, 200, 50)
const platforms = [platform, platform1]

// player and its movement
const player1 = new Player()

// controller used in listen events to update x-axis velocity
const right = {
    isPressed: false
}
const left = {
    isPressed: false
}

// listen to events and update player controller values
addEventListener('keydown', (event) => {

    switch(event.key) {

        case 'a' || 'A':
            left.isPressed = true; break;

        case 'd' || 'D':
            right.isPressed = true; break;

        case 'w' || 'W':
            if (!event.repeat) {
                player1.velocity.y -= 24; break;
            }
            
    }
})

// used to prevent velocity update when key isn't pressed
addEventListener('keyup', ({key}) => {
    
    switch(key) {
        case 'a' || 'A':
            left.isPressed = false; break;
            
        case 'd' || 'D':
            right.isPressed = false; break;

    }
})



// play the game -- animate canvas
const play = () => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // draw platforms and detect collisions
    platforms.forEach(platform => {

        platform.draw(ctx)

        if (player1.position.y + 100 <= platform.position.y && player1.position.y + 100 + player1.velocity.y >= platform.position.y && player1.position.x + 100 >= platform.position.x && player1.position.x <= platform.position.x + platform.demensions.width) {
            player1.velocity.y = 0
        }
    })

    // draw projects and detect collisions
    projects.forEach(project => {

        project.draw(ctx)
    
        if (player1.position.x + 100 >= project.position.x && player1.position.x <= project.position.x + project.dimensions.width && player1.position.y <= project.position.y + 150) {
            // open link to project
            open(project.project.link, '_blank')

            // disable buttons to prevent multiple pages from opening
            left.isPressed = false
            right.isPressed = false
        }
    })

    // draw social links and detect collisions
    socialLinks.forEach(socialLink => {
        console.log(socialLink)
        socialLink.draw(ctx)

        if (player1.position.x + 100 >= socialLink.position.x && player1.position.x <= socialLink.position.x + socialLink.dimensions.width && player1.position.y <= socialLink.position.y + 50) {
            // open link to social site
            open(socialLink.social.link, '_blank')

            // disable buttons to prevent multiple pages from opening
            left.isPressed = false
            right.isPressed = false
        }
    })

    // update velocity based on events
    if (right.isPressed) {

        player1.velocity.x = 5

    } else {

        player1.velocity.x = 0
    }

    if (left.isPressed) {

        player1.velocity.x = -5
    } 

    // draw player
    player1.update(ctx)


    requestAnimationFrame(play)
}

play()
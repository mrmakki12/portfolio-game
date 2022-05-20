// get canvas 
const canvas = document.getElementById('canvas')
// get context
const ctx = canvas.getContext('2d')
// import all needed classes
import { Player } from './classes/player'
import { Platform } from './classes/platform'
import { Project } from './classes/project'
import { SocialLink } from './classes/socialLink'

canvas.height = innerHeight
canvas.width = innerWidth

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

        case 'w' || 'W' && !event.repeat:
            if (player1.velocity.y === 0) {

                player1.velocity.y -= 20; break;

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
    player1.update(ctx)

    // update velocity based on events
    if (right.isPressed) {
        player1.velocity.x = 5
    } else {
        player1.velocity.x = 0
    }

    if (left.isPressed) {
        player1.velocity.x = -5
    } 

    

    requestAnimationFrame(play)
}

play()
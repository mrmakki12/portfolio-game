// get canvas 
const canvas = document.getElementById('canvas')
// get context
const ctx = canvas.getContext('2d')
// import all needed classes/elements
import { Player } from './classes/player'
import { banners, staticBanners } from './classes/banner'
import { platforms } from './classes/platform'
import { projects } from './classes/project'
import { socialLinks } from './classes/socialLink'
// helper functions
import { background, platformDrawCollisions, projectsDrawCollisions, 
    socialsDrawCollisions, drawBanners, drawStaticBanners,
handleDeath, updatePlayerBackgroundVelocity } from './helper_functions/helper'

canvas.height = innerHeight < 1080 ? innerHeight : 1080
canvas.width = innerWidth

// background --made over everything that scrolls 
// projects, social links, banner
const backgrounds = banners.concat(platforms, projects, socialLinks)

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
    console.log(event.key)
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
    // handle canvas clear, background update
    background(ctx)

    // draw platforms/projects/social links and detect collisions
    platformDrawCollisions(ctx, player1, platforms)
    projectsDrawCollisions(ctx, player1, projects, left, right)
    socialsDrawCollisions(ctx, player1, socialLinks, left, right)

    // draw banners
    drawBanners(ctx, banners)
    drawStaticBanners(ctx, staticBanners)

    // detect death and reset character/map position
    handleDeath(player1, backgrounds)

    // update velocity of player and background based on key events and position
    updatePlayerBackgroundVelocity(player1, left, right, backgrounds)

    // draw player
    player1.update(ctx)

    requestAnimationFrame(play)
}

play()
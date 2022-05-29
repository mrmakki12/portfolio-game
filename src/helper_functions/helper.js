// import needed assets
// death audio
import dead from '../audio/dead.mp3'

// instantial death audio
const deadAudio = new Audio(dead)

// image with change src
export const returnImage = (src) => {
    const image = new Image()
    image.src = src
    return image
}

// clear and draw background color, reset fill style
export const background = (ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#fffded'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'red'
}

// draw platforms and detect collisions
export const platformDrawCollisions = (ctx, player, platforms) => {
    platforms.forEach(platform => {

        platform.update(ctx)

        if (player.position.y + 50 <= platform.position.y && player.position.y + 50 + player.velocity.y >= platform.position.y && player.position.x + 75 >= platform.position.x && player.position.x <= platform.position.x + platform.dimensions.width) {
            player.velocity.y = 0
        }
    })
}

// draw projects and detect collisions
export const projectsDrawCollisions = (ctx, player, projects, left, right) => {
    projects.forEach(project => {

        project.update(ctx)
    
        if (player.position.x + 75 >= project.position.x && player.position.x <= project.position.x + project.dimensions.width && player.position.y <= project.position.y + project.dimensions.height) {
            // open link to project
            open(project.project.link, '_blank')

            // disable buttons to prevent multiple pages from opening
            left.isPressed = false
            right.isPressed = false
        }
    })
}

// draw social links and detect collisions
export const socialsDrawCollisions = (ctx, player, socialLinks, left, right) => {
    socialLinks.forEach(socialLink => {

        socialLink.update(ctx)

        if (player.position.x + 75 >= socialLink.position.x && player.position.x <= socialLink.position.x + socialLink.dimensions.width && player.position.y <= socialLink.position.y + 50) {
            // open link to social site
            open(socialLink.social.link, '_blank')

            // disable buttons to prevent multiple pages from opening
            left.isPressed = false
            right.isPressed = false
        }
    })
}

// draw banners
export const drawBanners = (ctx, banners) => {
    banners.forEach(banner => {

        banner.update(ctx)
        
    })
}

// draw static banners
export const drawStaticBanners = (ctx, staticBanners) => {
    staticBanners.forEach(banner => {

        banner.draw(ctx)

    })
}

// handle death
export const handleDeath = (player, backgrounds) => {
    if (player.position.y > 800) {
        deadAudio.play()
        // reset player position
        player.position = {x: 100, y: 600}

        // reset background position
        backgrounds.forEach(background => {
            background.position.x = background.resetPosition.x
        })
    }
}

// update player and background velocity based on events and position
export const updatePlayerBackgroundVelocity = (player, left, right, backgrounds) => {
    if (right.isPressed && player.position.x <= 500) {

        player.velocity.x = 7

    } else if (left.isPressed && player.position.x >= 100) {

        player.velocity.x = -7

    } else {

        player.velocity.x = 0

        // player going left, move background to right
        if (left.isPressed) {

            backgrounds.forEach(background => {
                background.velocity.x = 7
            })

        // player going right, move background to left
        } else if (right.isPressed) {

            backgrounds.forEach(background => {
                background.velocity.x = -7
            })

        // player standing still, stop moving background
        } else {

            backgrounds.forEach(background => {
                background.velocity.x = 0
            })
        }

    }
}
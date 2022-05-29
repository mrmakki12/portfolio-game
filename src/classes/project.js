// import all images
import portfolio from '../images/projects_images/portfolio.png'
import donutland2 from '../images/projects_images/donutland2.png'
import reddit from '../images/projects_images/reddit.png'
import sunnyside from '../images/projects_images/sunnyside.png'
import mblog from '../images/projects_images/mblog.png'
// helper functions
import { returnImage } from '../helper_functions/helper'

class Project {
    // project == image and link to project
    constructor(x, y, project) {
        this.project = project

        // projects position
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
            height: 250,
            width: 445
        }

    }

    // draw it
    // ctx == canvas context
    draw(ctx) {       

        ctx.drawImage(this.project.img, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
    }

    // background scroll
    update(ctx) {
        this.position.x += this.velocity.x
        this.draw(ctx)
    }

}

// all projects to be rendered
export const projects = [

    new Project(6500, 50,{
        link: 'https://tyreeckcodes.com',
        img: returnImage(portfolio)
    }),

    new Project(7030, 50, {
        link: 'https://mblog-api.herokuapp.com/',
        img: returnImage(mblog)
    }),
    
    new Project(7560, 50, { 
        link: 'https://reddit-miniapp.netlify.app/',
        img: returnImage(reddit)
    }), 

    new Project(8090, 50, { 
        link: 'https://donutland2.netlify.app/',
        img: returnImage(donutland2)
    }), 

    new Project(8620, 50, { 
        link: 'https://the-sunnyside-agency.netlify.app/',
        img: returnImage(sunnyside)
    })
]
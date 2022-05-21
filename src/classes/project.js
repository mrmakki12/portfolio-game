// import all images
import portfolio from '../images/projects_images/portfolio.png'
import donutland2 from '../images/projects_images/donutland2.png'
import reddit from '../images/projects_images/reddit.png'
import sunnyside from '../images/projects_images/sunnyside.png'
import mblog from '../images/projects_images/mblog.png'

class Project {
    // img == project screenshot, link == website link
    constructor(x, y, project) {
        this.project = project

        // projects position
        this.position = {
            x,
            y
        }

        // dimensions 
        this.dimensions = {
            height: 150,
            width: 300
        }

    }

    // draw it
    // ctx == canvas context
    draw(ctx) {
       
        ctx.drawImage(this.project.img, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height)
  
    }

}

// image with change src
const returnImage = (src) => {
    const image = new Image()
    image.src = src
    return image
}

export const projects = [

    new Project(200, 0,{
        link: 'https://tyreeckcodes.com',
        img: returnImage(portfolio)
    }),

    new Project(500, 0, {
        link: 'https://mblog-api.herokuapp.com/',
        img: returnImage(mblog)
    }),
    
    new Project(700, 0, { 
        link: 'https://reddit-miniapp.netlify.app/',
        img: returnImage(reddit)
    }), 

    new Project(0, 0, { 
        link: 'https://donutland2.netlify.app/',
        img: returnImage(donutland2)
    }), 

    new Project(800, 0, { 
        link: 'https://the-sunnyside-agency.netlify.app/',
        img: returnImage(sunnyside)
    })
]
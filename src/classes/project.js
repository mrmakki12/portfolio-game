const projects = [
    {
        link: 'https://tyreeckcodes.com',
        img: ''
    },
    {
        link: 'https://mblog-api.herokuapp.com/',
        img: ''
    },
    { 
        link: 'https://reddit-miniapp.netlify.app/',
        img: ''
    }, 
    { 
        link: 'https://donutland2.netlify.app/',
        img: ''
    }, 
    { 
        link: 'https://the-sunnyside-agency.netlify.app/',
        img: ''
    }
]

export class Projects {
    // img == project screenshot, link == website link
    constructor(x, y) {
        this.projects = projects

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

        // current project index
        this.currentProjectIndex = 0
    }

    // draw it
    // ctx == canvas context
    draw(ctx) {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y, 300, 150)
        ctx.fillStyle = 'black'
    }

    // update
    // ctx == canvas context
    update(ctx) {
        setTimeout(() => {
            if (this.currentProjectIndex === this.projects.length - 1) {
                this.currentProjectIndex = 0
            } else {
                this.currentProjectIndex += 1
            }
        }, 2500)
        this.draw(ctx)
    }
}
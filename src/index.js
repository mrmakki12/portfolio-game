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


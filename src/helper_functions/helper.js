// image with change src
export const returnImage = (src) => {
    const image = new Image()
    image.src = src
    return image
}
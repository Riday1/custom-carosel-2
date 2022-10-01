

const images = [

    'bag-1.png',
    'bag-2.png',
    'bag-3.png',
]

const img = document.getElementById('caroselImage')

let imgIndex = 0;
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex]
    // console.log(images[imgIndex])
    console.log(imgLink)
    img.setAttribute('src', `images/${imgLink}`)
    imgIndex++;
}, 1300);
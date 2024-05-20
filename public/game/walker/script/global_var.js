let style = {
    board: {
        bgColor: '#ffc34d',
    },
    box: {
        bgColor: '#b65d04',
        borderColor: "#4d2600",
        borderLineWidth: 4,
    },
    user: {
        bgColor: '#000',
        dorRadius: 10,
    },
    bullet: {
        bgColor: '#cd0000',
        bgColorCrashed: '#fa2727',
        radius: 5,
    }
}

let ganster1X = 900;
let ganster1Y = 10;
let ganster1Angle = 0

let ganster2Health = 20;
let ganster2X = 900;
let ganster2Y = 550;
let ganster2Angle = 0

const user = {
    health: 100,
    x: 10,
    y: 10,
    step: 0.5,
    angle: 0,
    visibilityRadius: 300,
}

const mouse = {
    x: 200,
    y: 200,
}

let mousePositionX = 200;
let mousePositionY = 200;

const rectangles = [
    [getRandom(20, 100), getRandom(100, 200)],
    [getRandom(20, 100), getRandom(100, 200)],
    [getRandom(20, 100), getRandom(100, 200)],
    [getRandom(100, 300), getRandom(20, 200)],

    [getRandom(20, 200), getRandom(400, 600)],
    [getRandom(20, 200), getRandom(400, 600)],

    [getRandom(400, 1000), getRandom(20, 100)],
    [getRandom(400, 1000), getRandom(20, 100)],
    [getRandom(400, 1000), getRandom(100, 200)],

    [getRandom(400, 1000), getRandom(400, 500)],
    [getRandom(400, 1000), getRandom(400, 500)],
    [getRandom(400, 1000), getRandom(500, 600)],
    [getRandom(400, 1000), getRandom(500, 600)],
]
const rectangleSideLenght = 40;
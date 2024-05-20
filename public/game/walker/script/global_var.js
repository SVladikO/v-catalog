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

const weapon = {
    bulletAmount: 30,
    maxDistance: 200,
    bulletDeadRadius: 15,
    distanceStep: 2,
    cartrigesMove: [],
    cartridgeСlip: 10,
    rechargeTime: 2,
}

const pressedKey = {
    'w': false, //up
    's': false, //down
    'a': false, //left
    'd': false, //right
}

let gansters = [
    getUnit(10, 500),
    getUnit(800, 10),
    getUnit(600, 600),
    getUnit(500, 550),
]

const user = getUnit()

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

function getUnit(
    x = 10,
    y = 10,
    health = 100,
    step = 0.5,
    dorRadius = 5,
    visibilityRadius = 300,
    radius = 5,
) {
    return {
        health,
        x,
        y,
        step,
        radius,
        visibilityRadius,
        angle: 0,
    }
}
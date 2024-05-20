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
// bulletsInFly
// user
//  ...
// weapon
// units
//   {...unit, weapon}

let flyBullets = [];

const weapon1 = {
    bulletAmount: 30,
    maxDistance: 200,
    shootSound: '',
    emptySound: '',
    bulletDeadRadius: 15,
    distanceStep: 2,
    cartrigesMove: [],
    cartridgeСlip: 10,
    rechargeTime: 2,
}

const weapon2 = {
    bulletAmount: 30,
    maxDistance: 200,
    shootSound: '',
    emptySound: '',
    bulletDeadRadius: 15,
    distanceStep: 2,
    cartrigesMove: [],
    cartridgeСlip: 10,
    rechargeTime: 2,
}

const weapon3 = {
    bulletAmount: 30,
    maxDistance: 200,
    shootSound: '',
    emptySound: '',
    bulletDeadRadius: 15,
    distanceStep: 2,
    cartrigesMove: [],
    cartridgeСlip: 10,
    rechargeTime: 2,
}

let gansters = [
    new Unit(10, 500),
    new Unit(800, 10),
    new Unit(600, 600),
    new Unit(500, 550),
]

const user = new Unit()

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

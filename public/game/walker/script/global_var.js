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



let flyBullets = [];

const weapon_gun1 = {
    bulletAmount: 8,
    reloadBulletAmount: 8,
    maxDistance: 150,
    damage: 2,
    sound: {
        reload: './public/sound/gun1_recharge.mp3',
        shoot: './public/sound/gun1_shoot.mp3',
    },
    bulletDeadRadius: 15,
    distanceStep: 2,
    rechargeTime: 2,
}

const weapon_gun2 = {
    bulletAmount: 30,
    reloadBulletAmount: 30,
    maxDistance: 250,
    damage: 2,
    sound: {
        reload: './public/sound/gun1_recharge.mp3',
        shoot: './public/sound/gun2_shoot.mp3',
    },
    bulletDeadRadius: 15,
    distanceStep: 2,
    rechargeTime: 2,
}

const weapon_gun3 = {
    bulletAmount: 2,
    reloadBulletAmount: 2,
    maxDistance: 100,
    damage: 20,
    sound: {
        reload: './public/sound/gun3_recharge.mp3',
        shoot: './public/sound/gun3_shoot.mp3',
    },
    bulletDeadRadius: 15,
    distanceStep: 2,
    rechargeTime: 2,
}

const UNIT_TYPE = {
    'USER': 'USER',
    'UNIT': 'UNIT'
}


const user = new Unit(getRandom(20, 40), getRandom(20, 40), 4, UNIT_TYPE.USER)

let units = [
    new Unit(getRandom(20, 40), getRandom(10, 550), 10, UNIT_TYPE.UNIT, weapon_gun1),
    new Unit(getRandom(20, 40), getRandom(300, 600), 10, UNIT_TYPE.UNIT, weapon_gun2),
    new Unit(getRandom(10, 300), getRandom(100, 500), 20, UNIT_TYPE.UNIT, weapon_gun1),
    new Unit(getRandom(10, 300), getRandom(100, 500), 20, UNIT_TYPE.UNIT, weapon_gun1),
    new Unit(getRandom(700, 800), getRandom(100, 500), 40, UNIT_TYPE.UNIT, weapon_gun2),
    new Unit(getRandom(700, 800), getRandom(400, 550), 30, UNIT_TYPE.UNIT, weapon_gun1),
]


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

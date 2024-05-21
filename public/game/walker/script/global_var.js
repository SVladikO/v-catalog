let style = {
    board: {
        bgColor: '#ffc34d',
    },
    box: {
        bgColor: '#000',
        borderColor: "#00",
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

const GUN_TYPE = {
    PISTOL: 'PISTOL',
    AK: 'AK',
    GUN: 'GUN',
}

const weapon_gun1 = {
    type: GUN_TYPE.PISTOL,
    bulletAmount: 8,
    reloadBulletAmount: 8,
    maxDistance: 250,
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
    type: GUN_TYPE.AK,
    bulletAmount: 30,
    reloadBulletAmount: 30,
    maxDistance: 350,
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
    type: GUN_TYPE.GUN,
    bulletAmount: 2,
    reloadBulletAmount: 2,
    maxDistance: 200,
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

function getUnit(x, y, health, weapon) {
    return new Unit(x, y, health, UNIT_TYPE.UNIT, weapon);
}

function getPistolUnit(x, y, health = 6) {
    return getUnit(x, y, health, weapon_gun1);
}

function getAkUnit(x, y, health = 4) {
    return getUnit(x, y, health, weapon_gun2);
}

function getGunUnit(x, y, health = 4) {
    return getUnit(x, y, health, weapon_gun3);
}

// new Unit(getRandom(20, 40), getRandom(10, 550), 10, UNIT_TYPE.UNIT, weapon_gun1),
// new Unit(getRandom(20, 40), getRandom(300, 600), 10, UNIT_TYPE.UNIT, weapon_gun2),
// new Unit(getRandom(10, 300), getRandom(100, 500), 20, UNIT_TYPE.UNIT, weapon_gun1),
// new Unit(getRandom(10, 300), getRandom(100, 500), 20, UNIT_TYPE.UNIT, weapon_gun1),
// new Unit(getRandom(700, 800), getRandom(100, 500), 40, UNIT_TYPE.UNIT, weapon_gun2),
// new Unit(getRandom(700, 800), getRandom(400, 550), 30, UNIT_TYPE.UNIT, weapon_gun1),


const mouse = {
    x: 200,
    y: 200,
}

let mousePositionX = 200;
let mousePositionY = 200;

const horizontalStep = canvas.width / 10;
const verticalStep = canvas.height / 10;


const levels = [
    // level 1
    {
        recs: [
            [0, 250, 800, 350],
            [150, 0, 100, 100],
            [450, 50, 100, 100],
        ],
        units: [
            getPistolUnit(220, 150),
            getPistolUnit(600, 60),
            getPistolUnit(830, 320),
        ]
    },
    // level 2
    {
        recs: [
            [0, 250, 350, 350],
            [150, 100, 150, 150],
            [600, 0, 400, 300],
            [400, 50, 80, 80],
            [450, 200, 80, 80],
            [420, 380, 80, 80],
            [580, 430, 80, 80],
        ],
        units: [
            getPistolUnit(190, 40),
            getPistolUnit(330, 190),
            getGunUnit(450, 164),
            getPistolUnit(620, 325),
        ]
    },
    // levels 3
    {
        recs: [
            [0, 90, 50, 50],
            [190, 0, 100, 80],
            [0, 200, 500, 250],
            [500, 80, 50, 50],
            [620, 0, 180, 300],
            [500, 365, 50, 180],
            [550, 365, 100, 130],
            [650, 365, 100, 180],
            [800, 150, 100, 150],
            [900, 90, 50, 210],
        ],
        units: [
            getPistolUnit(80, 168),
            getPistolUnit(310, 96),
            getGunUnit(510, 30),
            getAkUnit(590, 40),
            getAkUnit(920, 340),
            getAkUnit(920, 340),
            getAkUnit(970, 50),
            getAkUnit(910, 50),
            getGunUnit(834, 50),
            getGunUnit(690, 570),
            getPistolUnit(690, 570),
            getGunUnit(600, 510),
        ]
    },
    // level 4
    {
        recs: [
            [34, 90, 20, 50],
            [120, 0, 70, 200],
            [50, 200, 70, 100],
            [95, 300, 25, 100],
            [50, 360, 70, 50],
            [0, 490, 500, 110],
            [225, 360, 275, 145],
            [320, 240, 180, 145],
            [200, 250, 50, 50],
            [400, 90, 300, 200],
            [700, 220, 180, 50],
            [610, 290, 90, 200],
            [780, 70, 90, 70],
            [960, 150, 90, 70],
            [940, 280, 90, 70],
            [800, 400, 80, 70],
            [915, 515, 40, 40],
        ],
        units: [
            getPistolUnit(88, 165),
            getGunUnit(72, 330),
            getPistolUnit(198, 458),
            getAkUnit(216, 171),
            getPistolUnit(532, 20),
            getPistolUnit(936, 36),
            getPistolUnit(950, 102),
            getGunUnit(986, 87),
            getGunUnit(836, 340),
            getGunUnit(763, 429),
            getGunUnit(980, 536),
            getGunUnit(937, 583),
        ]
    }
]
//
// getPistolUnit
// getAkUnit
// getGunUnit

let levelId = 3
let units = levels[levelId].units;
let rectangles = levels[levelId].recs;
let user = new Unit(70, 70, 10, UNIT_TYPE.USER, weapon_gun1)


function changeLevel(id) {
    levelId = id;
    units = levels[levelId].units;
    rectangles = levels[levelId].recs;
    user = new Unit(70, 70, 10, UNIT_TYPE.USER)
}


// [horizontalStep * 2, 0],
// [horizontalStep * 3, 0],
// [horizontalStep * 4, 0],
// [horizontalStep * 5, 0],
// [horizontalStep * 6, 0],
// [horizontalStep * 7, 0],
// [horizontalStep * 8, 0],
// [horizontalStep * 9, 0],
//
// [horizontalStep, verticalStep],
// [horizontalStep * 2, verticalStep],
// [horizontalStep * 3, verticalStep],
// [horizontalStep * 4, verticalStep],
// [horizontalStep * 5, verticalStep],
// [horizontalStep * 6, verticalStep],
// [horizontalStep * 7, verticalStep],
// [horizontalStep * 8, verticalStep],
// [horizontalStep * 9, verticalStep],
//
// [horizontalStep, verticalStep * 2],
// [horizontalStep * 2, verticalStep * 2],
// [horizontalStep * 3, verticalStep * 2],
// [horizontalStep * 4, verticalStep * 2],
// [horizontalStep * 5, verticalStep * 2],
// [horizontalStep * 6, verticalStep * 2],
// [horizontalStep * 7, verticalStep * 2],
// [horizontalStep * 8, verticalStep * 2],
// [horizontalStep * 9, verticalStep * 2],
//
// [horizontalStep, verticalStep * 3],
// [horizontalStep * 2, verticalStep * 3],
// [horizontalStep * 3, verticalStep * 3],
// [horizontalStep * 4, verticalStep * 3],
// [horizontalStep * 5, verticalStep * 3],
// [horizontalStep * 6, verticalStep * 3],
// [horizontalStep * 7, verticalStep * 3],
// [horizontalStep * 8, verticalStep * 3],
// [horizontalStep * 9, verticalStep * 3],
//
// [horizontalStep, verticalStep * 4],
// [horizontalStep * 2, verticalStep * 4],
// [horizontalStep * 3, verticalStep * 4],
// [horizontalStep * 4, verticalStep * 4],
// [horizontalStep * 5, verticalStep * 4],
// [horizontalStep * 6, verticalStep * 4],
// [horizontalStep * 7, verticalStep * 4],
// [horizontalStep * 8, verticalStep * 4],
// [horizontalStep * 9, verticalStep * 4],
//
// [horizontalStep, verticalStep * 5],
// [horizontalStep * 2, verticalStep * 5],
// [horizontalStep * 3, verticalStep * 5],
// [horizontalStep * 4, verticalStep * 5],
// [horizontalStep * 5, verticalStep * 5],
// [horizontalStep * 6, verticalStep * 5],
// [horizontalStep * 7, verticalStep * 5],
// [horizontalStep * 8, verticalStep * 5],
// [horizontalStep * 9, verticalStep * 5],
//
// [horizontalStep, verticalStep * 6],
// [horizontalStep * 2, verticalStep * 6],
// [horizontalStep * 3, verticalStep * 6],
// [horizontalStep * 4, verticalStep * 6],
// [horizontalStep * 5, verticalStep * 6],
// [horizontalStep * 6, verticalStep * 6],
// [horizontalStep * 7, verticalStep * 6],
// [horizontalStep * 8, verticalStep * 6],
// [horizontalStep * 9, verticalStep * 6],
//
// [horizontalStep, verticalStep * 7],
// [horizontalStep * 2, verticalStep * 7],
// [horizontalStep * 3, verticalStep * 7],
// [horizontalStep * 4, verticalStep * 7],
// [horizontalStep * 5, verticalStep * 7],
// [horizontalStep * 6, verticalStep * 7],
// [horizontalStep * 7, verticalStep * 7],
// [horizontalStep * 8, verticalStep * 7],
// [horizontalStep * 9, verticalStep * 7],
// const rectangles = [
//     [getRandom(20, 100), getRandom(100, 200)],
//     [getRandom(20, 100), getRandom(100, 200)],
//     [getRandom(20, 100), getRandom(100, 200)],
//     [getRandom(100, 300), getRandom(20, 200)],
//
//     [getRandom(20, 200), getRandom(400, 600)],
//     [getRandom(20, 200), getRandom(400, 600)],
//
//     [getRandom(400, 1000), getRandom(20, 100)],
//     [getRandom(400, 1000), getRandom(20, 100)],
//     [getRandom(400, 1000), getRandom(100, 200)],
//
//     [getRandom(400, 1000), getRandom(400, 500)],
//     [getRandom(400, 1000), getRandom(400, 500)],
//     [getRandom(400, 1000), getRandom(500, 600)],
//     [getRandom(400, 1000), getRandom(500, 600)],
// ]


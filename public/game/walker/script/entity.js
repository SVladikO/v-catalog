const _weapon = {
    bulletAmount: 30,
    maxDistance: 200,
    //damage
    shootSound: '',
    emptySound: '',
    bulletDeadRadius: 15,
    distanceStep: 2,
    cartrigesMove: [],
    cartridgeСlip: 10,
    rechargeTime: 2,
}

class Unit {
    constructor(x = 10, y = 10, weapon = _weapon, step = 0.5, health = 100, dorRadius = 5, visibilityRadius = 300, radius = 5) {
        this.x = x;
        this.y = y;

        this.weapon = weapon;

        this.step = step;
        this.health = health;
        this.radius = radius;
        this.visibilityRadius = visibilityRadius;
        this.angle = 0;

        this.moveDirection = {
            'w': false, //up
            's': false, //down
            'a': false, //left
            'd': false, //right
        }
    }

    move() {
        if (this.moveDirection.w) {
            const modifiedY = this.y - this.step;

            if (isInCanvas(modifiedY, canvas.height) && !isOnBlock(this.x, modifiedY, style.user.dorRadius)) {
                this.y = modifiedY;
            }
        }
        if (this.moveDirection.s) {
            const modifiedY = this.y + this.step;

            if (isInCanvas(modifiedY, canvas.height) && !isOnBlock(this.x, modifiedY, style.user.dorRadius)) {
                this.y = modifiedY;
            }
        }
        if (this.moveDirection.a) {
            const modifiedX = this.x - this.step;

            if (isInCanvas(modifiedX, canvas.width) && !isOnBlock(modifiedX, this.y, style.user.dorRadius)) {
                this.x = modifiedX;
            }
        }
        if (this.moveDirection.d) {
            const modifiedX = this.x + this.step;

            if (isInCanvas(modifiedX, canvas.width) && !isOnBlock(modifiedX, this.y, style.user.dorRadius)) {
                this.x = modifiedX;
            }
        }
    }

    shoot(key) {

        // if (key != ' ') {
        //     return;
        // }

        // if (!this.weapon.bulletAmount) {
        //     alert('no bullets')
        //     return;
        // }

        this.weapon.bulletAmount -= 1;
        // new Audio('./public/gun-shot-fast.mp3').play()
        const bullet = this.getBullet()

        if (!bullet) {
            debugger
        }

        flyBullets.push(bullet)
    }

    /**
     * Enable user move.
     *
     * @param key - Pressed keyboard key.
     */
    enableMove(key) {
        console.log('e', key)
        this.moveDirection[key.toLowerCase()] = true;
    }

    /**
     * Disable user move.
     *
     * @param key - Pressed keyboard key.
     */
    disableMove(key) {
        console.log('d', key)
        this.moveDirection[key.toLowerCase()] = false;
    }

    getBullet() {
        return new Bullet(this.x, this.y, this.angle, this.weapon);
    }
}

class Bullet {
    constructor(fromX, fromY, angle, weapon) {
        this.startX = fromX; // we need to calculate max distance
        this.startY = fromY; // we need to calculate max distance
        this.lastX = fromX;
        this.lastY = fromY;
        this.angle = angle;
        this.damage = 2; //
        this.radius = 5; //
        this.flyStep = 2;
        this.currentDistance = 0; //
        this.isDead = false;
        this.isKickedBox = false;
    }

    move() {
        this.lastX = this.lastX + Math.cos(this.angle) * this.flyStep;
        this.lastY = this.lastY + Math.sin(this.angle) * this.flyStep;

        const _isOnBlock = isOnBlock(this.lastX, this.lastY, style.bullet.radius);
        const _isOutOfX = isOutOfRange(this.lastX, 0, canvas.width)
        const _isOutY = isOutOfRange(this.lastY, 0, canvas.height)

        this.isKickedBox = _isOnBlock;
        this.isDead = _isOnBlock || _isOutOfX || _isOutY;

        // gansters.forEach(unit => {
        //     const is = isInRange(this.lastX, unit.x - unit.radius, unit.x + unit.radius) || isInRange(lastY, unit.y - unit.radius, unit.y + unit.radius)
        //
        //     if (is) {
        //         bullet.isKickedBox = is;
        //         bullet.isDead = is;
        //         unit.health-=bullet.damage;
        //     }
        // })
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.lastX, this.lastY, this.isDead ? this.bulletDeadRadius : style.bullet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.isDead ? style.bullet.bgColorCrashed : style.bullet.bgColor;

        if (this.isKickedBox) {
            // new Audio('./public/missed-1.mp3').play()
        }

        ctx.fill()
    }
}
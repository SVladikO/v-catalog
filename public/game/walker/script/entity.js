class Unit {
    constructor(x = 10, y = 10, health = 100, unitType, weapon = weapon_gun3, step = 1, dorRadius = 5, visibilityRadius = 200, radius = 300) {
        this.x = x;
        this.y = y;
        this.unitType = unitType;

        this.weapon = weapon;

        this.step = step;
        this.health = health;
        this.radius = radius;
        this.visibilityRadius = weapon.maxDistance;
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

    /**
     * Unit will check is user in visible distance. Is it possible to shoot ?
     *
     * @returns {*}
     */
    isVisibleForMe(userX, userY) {
        const radius = this.visibilityRadius;

        const isInRangeX = isInRange(userX, this.x - radius, this.x + radius)
        const isInRangeY = isInRange(userY, this.y - radius, this.y + radius)

        return isInRangeX && isInRangeY;
    }

    reloadGun() {
        this.weapon.bulletAmount = this.weapon.reloadBulletAmount;
        !isMute && new Audio(this.weapon.sound.reload).play();
        window.alert_notification.textContent = '';
    }

    shoot() {
        if (!this.weapon.bulletAmount) {
            window.alert_notification.textContent = 'Press "SPACE" to reload. No bullets. ';
            !isMute && new Audio('./public/sound/gun-empty.mp3').play()
            return;
        }

        alert.textContent = 'no bullets';

        this.weapon.bulletAmount -= 1;
        !isMute && new Audio(this.weapon.sound.shoot).play()
        const bullet = this.getBullet()

        flyBullets.push(bullet)

        if (!this.weapon.bulletAmount) {
            window.alert_notification.textContent = 'Press "SPACE" to reload. No bullets. ';
        }
    }

    /**
     * Enable user move.
     *
     * @param key - Pressed keyboard key.
     */
    enableMove(key) {
        this.moveDirection[key.toLowerCase()] = true;
    }

    /**
     * Disable user move.
     *
     * @param key - Pressed keyboard key.
     */
    disableMove(key) {
        this.moveDirection[key.toLowerCase()] = false;
    }

    getBullet() {
        return new Bullet(this.x, this.y, this.angle, this.weapon, this.unitType);
    }

    render(toX, toY) {
        this.updateAngle(toX, toY);

        ctx.beginPath();
        ctx.arc(this.x, this.y, style.user.dorRadius, 0, 300);

        let bg;

        switch (this.weapon.type) {
            case GUN_TYPE.PISTOL:
                bg = 'red';
                break;
            case GUN_TYPE.AK:
                bg = 'blue';
                break;
            case GUN_TYPE.GUN:
                bg = 'green';
                break;
            default:
                bg = 'orange';
        }


        ctx.fillStyle = bg;
        ctx.fill()

        // this.renderDirection();

        ctx.font = "20px Arial";
        ctx.fillText(this.health, this.x, this.y + 30);
    }

    updateAngle(toX, toY) {
        var dx = toX - this.x;
        var dy = toY - this.y;

        this.angle = Math.atan2(dy, dx);
    }

    renderDirection() {
        const step = 1;

        const circlX = this.x + Math.cos(this.angle) * this.visibilityRadius;
        const circlY = this.y + Math.sin(this.angle) * this.visibilityRadius;

        ctx.moveTo(circlX, circlY);
        ctx.arc(this.x, this.y, this.visibilityRadius, this.angle - step, this.angle + step, false);
        ctx.lineTo(circlX, circlY);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;

        ctx.stroke();
    }

    isAlive() {
        return this.health > 0;
    }

    /**
     * Check is bullet on unit to minus unit health.
     *
     * @param x - bullet x.
     * @param y - bullet y.
     */
    isBulletOn(x, y) {
        const radius = style.user.dorRadius;
        const isInRangeX = isInRange(x, this.x - radius, this.x + radius)
        const isInRangeY = isInRange(y, this.y - radius, this.y + radius)

        return isInRangeX && isInRangeY;
    }

}

class Bullet {
    constructor(fromX, fromY, angle, weapon, ownerType) {
        this.startX = fromX; // we need to calculate max distance
        this.startY = fromY; // we need to calculate max distance
        this.lastX = fromX;
        this.lastY = fromY;
        this.angle = angle;
        this.weapon = weapon; //
        this.damage = 2; //
        this.radius = 5; //
        this.flyStep = 2;
        this.currentDistance = 0; //
        this.isDead = false;
        this.isKickedBox = false;
        this.ownerType = ownerType
    }

    isMaxDistance() {
        const distance = calcDistance(this.startX, this.startY, this.lastX, this.lastY)

        return distance > this.weapon.maxDistance;

        function calcDistance(x1, y1, x2, y2) {
            const X = x2 - x1;
            const Y = y2 - y1;
            return Math.sqrt(X * X + Y * Y);
        }
    }

    move() {
        this.lastX = this.lastX + Math.cos(this.angle) * this.flyStep;
        this.lastY = this.lastY + Math.sin(this.angle) * this.flyStep;

        if (this.isMaxDistance()) {
            this.isDead = true;
            return;
        }

        const _isOnBlock = isOnBlock(this.lastX, this.lastY, style.bullet.radius);
        const _isOutOfX = isOutOfRange(this.lastX, 0, canvas.width)
        const _isOutY = isOutOfRange(this.lastY, 0, canvas.height)

        this.isKickedBox = _isOnBlock;
        this.isDead = _isOnBlock || _isOutOfX || _isOutY;

        //For UNIT bullet check does it kick USER
        if (this.ownerType === UNIT_TYPE.UNIT && user.isBulletOn(this.lastX, this.lastY)) {
            user.health -= this.weapon.damage;
            this.isDead = true;
        }

        //For unit bullet check does it kick UNIT
        if (this.ownerType === UNIT_TYPE.USER) {
            units.forEach(unit => {
                if (unit.isBulletOn(this.lastX, this.lastY)) {
                    unit.health -= this.weapon.damage;
                    this.isDead = true;
                }
            })
        }
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.lastX, this.lastY, this.isDead ? this.bulletDeadRadius : style.bullet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.isDead ? style.bullet.bgColorCrashed : style.bullet.bgColor;

        if (this.isKickedBox) {
            !isMute && new Audio('./public/sound/missed.mp3').play()
        }

        ctx.fill()
    }
}
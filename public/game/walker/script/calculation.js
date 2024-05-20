function getRadianAngle(fromX, toX, fromY, toY) {
    var dx = toX - fromX;
    var dy = toY - fromY;

    return Math.atan2(dy, dx);
}

function isInCanvas(modifiedPosition, max) {
    return !isOutOfRange(modifiedPosition, 0 + style.user.dorRadius, max - style.user.dorRadius)
}

function isOutOfRange(num, min, max) {
    return num <= min || num >= max;
}

function isInRange(num, min, max) {
    return num >= min && num <= max;
}

/**
 * Check is new user coordinates move on block
 *iK
 * @param x
 * @param y
 * @returns {boolean}
 */
function isOnBlock(objX, objY, objRadius) {
    const rect = rectangles.find(rec => {
        const [x, y] = rec;
        const minX = x - objRadius;
        const minY = y - objRadius;
        const maxX = minX + rectangleSideLenght + objRadius * 2;
        const maxY = minY + rectangleSideLenght + objRadius * 2;

        const is = isInRange(objX, minX, maxX) && isInRange(objY, minY, maxY)
        // console.log(1234, is, `x ${minX} < ${userX} < ${maxX} ::: y ${minY} < ${userY} < ${maxY}`)

        return is;
    })

    return !!rect;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function changeUserCoordinates() {
    if (pressedKey.w) {
        const modifiedY = user.y - user.step;

        if (isInCanvas(modifiedY, canvas.height) && !isOnBlock(user.x, modifiedY, style.user.dorRadius)) {
            user.y = modifiedY;
        }
    }
    if (pressedKey.s) {
        const modifiedY = user.y + user.step;

        if (isInCanvas(modifiedY, canvas.height) && !isOnBlock(user.x, modifiedY, style.user.dorRadius)) {
            user.y = modifiedY;
        }
    }
    if (pressedKey.a) {
        const modifiedX = user.x - user.step;

        if (isInCanvas(modifiedX, canvas.width) && !isOnBlock(modifiedX, user.y, style.user.dorRadius)) {
            user.x = modifiedX;
        }
    }
    if (pressedKey.d) {
        const modifiedX = user.x + user.step;

        if (isInCanvas(modifiedX, canvas.width) && !isOnBlock(modifiedX, user.y, style.user.dorRadius)) {
            user.x = modifiedX;
        }
    }
}


/**
 * Enable user move.
 *
 * @param key - Pressed keyboard key.
 */
function enableMove(key) {
    pressedKey[key.toLowerCase()] = true;
}

/**
 * Disable user move.
 *
 * @param key - Pressed keyboard key.
 */
function disableMove(key) {
    pressedKey[key.toLowerCase()] = false;
}

function getCartridge(fromX, fromY, angle) {
    return {
        currentDistance: 0,
        startX: fromX,
        startY: fromY,
        lastX: fromX,
        lastY: fromY,
        angle: angle,
        isDead: false,
        isKickedBox: false,
    }
}

function shoot(key) {
    if (key != ' ') {
        return;
    }

    if (!weapon.bulletAmount) {
        alert('no bullets')
        return;
    }

    weapon.bulletAmount -= 1;
    // new Audio('./public/gun-shot-fast.mp3').play()
    const bullet = getCartridge(user.x, user.y, user.angle);
    weapon.cartrigesMove.push(bullet)
}

function updateBulletData(bullet) {
    const {lastX, lastY, angle} = bullet;
    bullet.lastX = lastX + Math.cos(angle) * weapon.distanceStep;
    bullet.lastY = lastY + Math.sin(angle) * weapon.distanceStep;
    bullet.isKickedBox = isOnBlock(lastX, lastY, style.bullet.radius);
    bullet.isDead = isOutOfRange(lastX, 0, canvas.width) || isOutOfRange(lastY, 0, canvas.height) || isOnBlock(lastX, lastY, style.bullet.radius)
}

function clearCanvas() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function prepareCanvas() {
    ctx.fillStyle = style.board.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
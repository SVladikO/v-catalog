

function renderLine() {
    ctx.beginPath();
    ctx.moveTo(user.x, user.y);
    ctx.lineTo(mousePositionX, mousePositionY);
    ctx.stroke();
}

function renderRectangles() {
    rectangles.forEach(renderRectangle)
}

function renderRectangle(block) {
    const [x, y, width, height] = block;

    ctx.rect(x, y, width, height);
    ctx.fillStyle = style.box.bgColor;
    ctx.fill()
    ctx.strokeStyle = style.box.borderColor;
    ctx.lineWidth = style.box.borderLineWidth;
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
}

function renderUnit(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, style.user.dorRadius, 0, 300);
    ctx.fillStyle = style.user.bgColor;
    ctx.fill()
}

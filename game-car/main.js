function startGame() {
    gameScreen.clear();
    score = 0;
    showScore();
    car.drawImage("up");
    setInterval(drawObject, 3000);
}
function creatObject() {
        let x = Math.random() * canvas.clientWidth;
        let y = Math.random() * canvas.clientHeight;
        if (Math.abs(x - car.x) > 100 && Math.abs(x - car.x) > 50 || Math.abs(y - car.y) > 100) { // để object không trùng xe
            if(Math.random()>0.5)object.push(new Obstacles(x, y, false));
            else object.push(new Obstacles(x, y, true));
    }
}
function drawObject() {
    creatObject();
    if (object.length > 8) {
        object.shift();
    } else {
        for (let i = 0; i < object.length; i++) {
            object[i].drawImage();
        }
    }
}
function drawAllObject() {
    for (let i = 0; i < object.length; i++) {
        object[i].drawImage();
    }
}
function showScore() { //function show điểm
        context.font = "20px Verdana";
        var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        context.fillStyle = gradient;
        context.fillText("SCORE: "+score, 1350, 30);
}
function moveDirection(direction) {
    gameScreen.clear();
    showScore();
    drawAllObject();
    switch (direction) {
        case "left":
            car.moveLeft();
            car.drawImage("left")
            break;
        case "right":
            car.moveRight();
            car.drawImage("right")
            break;
        case "up" :
            car.moveUp();
            car.drawImage("up")
            break;
        case "down":
            car.moveDown();
            car.drawImage("down");
            break;
    }
}

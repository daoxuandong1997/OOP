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
        if (Math.abs(x - car.x) > 100 || Math.abs(y - car.y) > 100) { // để object không trùng xe
            if(Math.random()>0.5)object.push(new Obstacles(x, y, false));
            else object.push(new Obstacles(x, y, true));
    }
}
function drawObject() {
    creatObject();
    if (object.length > 10) {
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
function checkCollision(direction) {
    for (var i = 0; i<object.length ; i++) {
        var checkX = Math.abs(car.x - object[i].getCenterX());
        var checkY = Math.abs(car.y - object[i].getCenterY());
        switch (direction) {
            case "X":
                if (checkX < 65 && checkY < 125) {
                    if (object[i].getType() === false) {
                        score++;
                        object.splice(i, 1);
                        drawAllObject();
                        showScore();
                    } else gameOver();
                }
            case "Y":
                if (checkX < 125 && checkY < 65) {
                    if (object[i].getType() === false) {
                        score++;
                        object.splice(i, 1);
                        drawAllObject();
                        showScore();
                    } else gameOver();
                }
        }
    }
}
function showScore() { 
    context.font = "20px Verdana";
    let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    context.fillStyle = gradient;
    context.fillText("SCORE: "+score, 1350, 30);
}
function gameOver() {
    context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    context.font = "60px Arial";
    context.fillText("GAME OVER",10,70);
    context.font = "30px Arial";
    context.fillText("YOUR SCORE: "+score,20,150);
    clearInterval(drawObject);
}
function moveDirection(direction) {
    gameScreen.clear();
    showScore();
    drawAllObject();
    switch (direction) {
        case "left":
            car.moveLeft();
            car.drawImage("left")
            checkCollision("Y");
            break;
        case "right":
            car.moveRight();
            car.drawImage("right");
            checkCollision("Y");
            break;
        case "up" :
            car.moveUp();
            car.drawImage("up");
            checkCollision("X");
            break;
        case "down":
            car.moveDown();
            car.drawImage("down");
            checkCollision("X");
            break;
    }
}

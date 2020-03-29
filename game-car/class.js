var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

let Car = function (x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.boostSpeed = false;

    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getDrawX = function () {
        return this.x - (this.width/2);
    }
    this.getDrawY = function () {
        return this.y - (this.height/2);
    }
    this.moveRight = function () {
        this.x += 10;
        if (this.boostSpeed)
            this.x += 30;
    }
    this.moveLeft = function () {
        this.x -= 10;
        if (this.boostSpeed)
            this.x -= 30;
    }
    this.moveUp = function () {
        this.y -= 10;
        if (this.boostSpeed)
            this.y -= 30;
    }
    this.moveDown = function () {
        this.y += 10;
        if (this.boostSpeed)
            this.y += 30;
    }
    this.drawImage = function (direction) {
        // let canvas = document.getElementById("myCanvas");
        // let context = canvas.getContext("2d");
        switch (direction) {
            case "up":
                this.height = carImgUp.height;
                this.width = carImgUp.width;
                context.drawImage(carImgUp,this.getDrawX(),this.getDrawY());
                break;
            case "down":
                this.height = carImgDown.height;
                this.width = carImgDown.width;
                context.drawImage(carImgDown,  this.getDrawX(), this.getDrawY());
                break;
            case "left":
                this.height = carImgLeft.height;
                this.width = carImgLeft.width;
                context.drawImage(carImgLeft, this.getDrawX(), this.getDrawY());
                break;
            case "right":
                this.height = carImgRight.height;
                this.width = carImgRight.width;
                context.drawImage(carImgRight,  this.getDrawX(), this.getDrawY());
                break;
        }
    }
}

let Obstacles = function(x,y, type){
    this.x = x;
    this.y = y;
    this.type = type;

    this.drawImage = function () {
        if(this.type === true) {
            context.drawImage(obsImage, this.x, this.y);
        }else context.drawImage(coinImage,this.x, this.y);
    }
}

let GameScreen = function (width,height) {
    this.width = width;
    this.height = height;

    this.clear = function () {
        // var canvas = document.getElementById("myCanvas");
        // var context = canvas.getContext("2d");
        context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    }
}
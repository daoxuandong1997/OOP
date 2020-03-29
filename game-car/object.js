var carImgUp = new Image();
carImgUp.src = "carUp.png";
var carImgDown = new Image();
carImgDown.src = "carDown.png";
var carImgLeft = new Image();
carImgLeft.src = "carLeft.png";
var carImgRight = new Image();
carImgRight.src = "carRight.png";

const InitX = canvas.clientWidth/2 - (carImgUp.width/2);
const InitY = canvas.clientHeight/2 + 200;

var car = new Car(InitX,InitY,);

var obsImage = new Image();
obsImage.src = "rock.png";

var coinImage = new Image()
coinImage.src = "coin.png";

var object =[];

var score;

var gameScreen = new GameScreen(canvas.clientWidth,canvas.clientHeight);
var player
var paper, plasticCup
var gameState= "start"
var playerImg, paperImg, plasticCupImg
var bgImg
var foodWasteImg

function preload() {
playerImg= loadAnimation("alien1.png", "alien2.png")
paperImg=loadImage("paper.png")
plasticCupImg=loadImage("plasticcup.png")
bgImg= loadImage("bgImg.png")
foodWasteImg= loadImage("foodwaste.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
   player= createSprite(windowWidth/2-250, windowHeight- 50, 50, 50)
   player.addAnimation("running",playerImg)
 paper= createSprite( windowWidth/2-650, windowHeight- 290, 30, 30)
 paper.addImage(paperImg)
 paper.scale= 0.2
 plasticCup=createSprite( windowWidth/2 +50, windowHeight- 300, 40, 40)
plasticCup.addImage(plasticCupImg)
plasticCup.scale=0.07

foodWaste= createSprite(windowWidth/ 2- 250, windowHeight- 300, 30, 30)
foodWaste.addImage(foodWasteImg)
foodWaste.scale=0.15
 
}

function draw(){
    background(bgImg);
if (gameState==="start"&& keyDown("SPACE")){
    gameState="play"}

    if(gameState==="play"){
    if( keyDown(UP_ARROW)){
        player.y=player.y- 10
        
    }

    if( keyDown(DOWN_ARROW)){
        player.y=player.y+ 10
        
    }

    if( keyDown(RIGHT_ARROW)){
        player.x=player.x+10
       
    }

    if( keyDown(LEFT_ARROW)){
        player.x=player.x- 10
       
    }
}

    if(player.isTouching(paper)){
        gameState="istouching"
        text("Choose your choice", player.x, player.y-50)
        text("1) press R to recycle", player.x, player.y-30)
        player.setVelocity(0,0)
    }
if(gameState==="istouching"&&keyDown("R"))
{
    text("+10", windowWidth-50, windowHeight-700)
}

 drawSprites()
}

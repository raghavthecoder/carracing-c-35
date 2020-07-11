var ball,database,position;

var gameState=0;
var playerCount;
var form,player,game;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    
    game=new Game()
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
   position=data.val();
   ball.x=position.x;
   ball.y=position.y;
}

function writeposition(x,y){
   database.ref('ball/position').set({
       x: position.x+x,
       y: position.y+y
   })
}



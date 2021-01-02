var canvas;
var music;
var s1, s2, s3, s4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    s1 = createSprite(100, 575, 200, 50);
    s1.shapeColor = "green";
    s2 = createSprite(300, 575, 200, 50);
    s2.shapeColor = "blue";
    s3 = createSprite(500, 575, 200, 50);
    s3.shapeColor = "yellow";
    s4 = createSprite(700, 575, 200, 50);
    s4.shapeColor = "red";

    //create box sprite and give velocity
    box = createSprite(random(20, 750), 200, 40, 40);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 3;

    //edges = createEdgeSprites;
}

function draw() {
    background(rgb(169,169,169));
    
    //bounce(box, edges);
    
    
    //add condition to check if box touching surface and make it bounce
    if (isTouching(box, s1)){
        box.shapeColor = s1.shapeColor;
        bounce(box, s1);
        music.loop();
    }else if (isTouching(box, s2)){
        box.shapeColor = s2.shapeColor;
        bounce(box, s2);
    }else if (isTouching(box, s3)){
        box.shapeColor = s3.shapeColor;
        bounce(box, s3);
    }else if (isTouching(box, s4)){
        box.shapeColor = s4.shapeColor;
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    
    bounceOffEdges(box);
    
    drawSprites();
}

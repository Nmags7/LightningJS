var startX = 0;
var startY = 150;
var endX = 0;
var endY = 150;

function setup() {
    createCanvas(300, 300);
    strokeWeight(2);
    background(155);

    strokeWeight(10);
}

function draw() {
    background(155);
    //stroke((int)(Math.random()));
    while (endX < 300) {
        endX = startX + (int)(Math.random() * 10);
        endY = startY + (int)(Math.random() * 19) - 9;
        line(startX, startY, endX, endY);
        startX = endX;
        startY = endY;
        console.log("startX " + startX);
        console.log("startY " + startY);
    }
}

function mousePressed() {
    startX = 0;
    startY = 150;
    endX = 0;
    endY = 150;
}

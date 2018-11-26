'use strict';

var v = 3;
var o;
var c = 0;
//bacteria[] b = new bacteria[10];
var b = new Array();

function setup() {
    background(0);
    //fullScreen();
    createCanvas(800, 600);
    for (var i = 0; i < 10; i++) {
        b.push(new bacteria());
    }

}

function draw() {
    background(0);
    fill(255);
    textSize(15);
    text("Click and hold to move toward, release to move away", 150, 100);
    //    for (var i = 0; i < b.length; i++) {
    //        b[i].move();
    //        b[i].show();
    //    }
    for (var i = 0; i < b.length; i++) {
        if (mouseIsPressed == true && b[i].distance() > 100) {
            b[i].move();
        } else {
            b[i].moveAway();
        }
//                if (keyPressed == true) {
//                    if (key == ' ') {
//                        c++;
//                        if (c % 2 == 1) {
//                            noLoop();
//                        }
//                    }
//                }
        b[i].show();
    }

}


function mouseClicked() {
    draw();
}
class bacteria {

    constructor() {
        this.x = (Math.random() * 1000);
        this.y = (Math.random() * 1000);
    }


    show() {
        noStroke();
        fill((Math.random() * 255), (Math.random() * 255), (Math.random() * 255));
        ellipse(this.x, this.y, 25, 25);
    }
    move() {
        if (mouseX == this.x) {
            if (mouseY > this.y) {
                o = 3 * PI / 2;
            } else {
                o = PI / 2;
            }
        } else {
            o = atan((Math.abs(mouseY - this.y)) / (Math.abs(mouseX - this.x)));
        }
        var vx = (v * cos(o));
        var vy = (v * sin(o));

        if (this.x < mouseX) {
            this.x = this.x + vx;
        } else {
            this.x -= vx;
        }
        if (this.y < mouseY) {
            this.y += vy;
        } else {
            this.y -= vy;
        }
    }
    moveAway() {
        if (mouseX == this.x) {
            if (mouseY < this.y) {
                o = 3 * PI / 2;
            } else {
                o = PI / 2;
            }
        } else {
            o = atan((Math.abs(mouseY - this.y)) / (Math.abs(mouseX - this.x)));
        }
        var vx = (v * cos(o));
        var vy = (v * sin(o));

        if (this.x > mouseX) {
            this.x = this.x + vx;
        } else {
            this.x -= vx;
        }
        if (this.y > mouseY) {
            this.y += vy;
        } else {
            this.y -= vy;
        }
    }
    distance() {
        return (Math.sqrt((Math.pow(mouseX - this.x, 2)) + (Math.pow(mouseY - this.y, 2))));
    }
}

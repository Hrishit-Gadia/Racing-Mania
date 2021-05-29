var Canvas = document.getElementById("The-Canvas");
var CTX = Canvas.getContext("2d");
var Canvas_Image = "Track Image.png";
var New_Canvas_Image;

var Car_1_Height = 25;
var Car_1_Width = 50;
var Car_1_X = 10;
var Car_1_Y = 20;
var Car_1_Image = "Car-1.png";
var New_Car_1_Image;

var Car_2_Height = 25;
var Car_2_Width = 50;
var Car_2_X = 10;
var Car_2_Y = 100;
var Car_2_Image = "Car-2.png";
var New_Car_2_Image;

var KeyPressed;

function Update() {
    New_Canvas_Image = new Image();
    New_Canvas_Image.onload = Upload_Canvas_Image;
    New_Canvas_Image.src = Canvas_Image;

    New_Car_1_Image = new Image();
    New_Car_1_Image.onload = Upload_Car_1_Image;
    New_Car_1_Image.src = Car_1_Image;

    New_Car_2_Image = new Image();
    New_Car_2_Image.onload = Upload_Car_2_Image;
    New_Car_2_Image.src = Car_2_Image;
}

function Upload_Canvas_Image() {
    CTX.drawImage(New_Canvas_Image, 0, 0, Canvas.width, Canvas.height);
}

function Upload_Car_1_Image() {
    CTX.drawImage(New_Car_1_Image, Car_1_X, Car_1_Y, Car_1_Width, Car_1_Height);
}

function Upload_Car_2_Image() {
    CTX.drawImage(New_Car_2_Image, Car_2_X, Car_2_Y, Car_2_Width, Car_2_Height);
}

window.addEventListener("keydown", KeyCheck);

function KeyCheck(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);

    if (KeyPressed == '38') {
        console.log("(Up Arrow Key)");
        Car_1_Up();
    }
    if (KeyPressed == '39') {
        console.log("(Right Arrow Key)");
        Car_1_Right();
    }
    if (KeyPressed == '37') {
        console.log("(Left Arrow Key)");
        Car_1_Left();
    }
    if (KeyPressed == '40') {
        console.log("(Down Arrow Key)");
        Car_1_Down();
    }
    if (KeyPressed == '87') {
        console.log("(W Key)");
        Car_2_Up();
    }
    if (KeyPressed == '65') {
        console.log("(A Key)");
        Car_2_Left();
    }
    if (KeyPressed == '83') {
        console.log("(S Key)");
        Car_2_Down();
    }
    if (KeyPressed == '68') {
        console.log("(D Key)");
        Car_2_Right();
    }
    if (Car_1_X > 700) {
        console.log("Car 1 won");
        document.getElementById("Status").innerHTML = "Car 1 Won";
    }
    if (Car_2_X > 700) {
        console.log("Car 2 won");
        document.getElementById("Status").innerHTML = "Car 2 Won";
    }
}

function Car_1_Up() {
    if ( Car_1_Y >= 0) {
        Car_1_Y = Car_1_Y - 5 ;
        Update();
    }
}

function Car_1_Down() {
    if ( Car_1_Y <= 450) {
        Car_1_Y = Car_1_Y + 5 ;
        Update();
    }
}

function Car_1_Left() {
    if ( Car_1_X >= 0) {
        Car_1_X = Car_1_X - 5 ;
        Update();
    }
}

function Car_1_Right() {
    if ( Car_1_X <= 900) {
        Car_1_X = Car_1_X + 5 ;
        Update();
    }
}

function Car_2_Up() {
    if ( Car_2_Y >= 0) {
        Car_2_Y = Car_2_Y - 5 ;
        Update();
    }
}

function Car_2_Down() {
    if ( Car_2_Y <= 450) {
        Car_2_Y = Car_2_Y + 5 ;
        Update();
    }
}

function Car_2_Right() {
    if ( Car_2_X <= 900) {
        Car_2_X = Car_2_X + 5 ;
        Update();
    }
}

function Car_2_Left() {
    if ( Car_2_X >= 00) {
        Car_2_X = Car_2_X - 5 ;
        Update();
    }
}

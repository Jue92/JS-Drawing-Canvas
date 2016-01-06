// Canvas global variables
var canvas = false;
var check = false;
var checkPoint = false;
var ctx = false;

var prX = 0;
var crX = 0;
var prY = 0;
var crY = 0;

var x = "black",
    y = 2;


// Loading function for initial canvas

function canvasLoader() {
    canvas = document.getElementById('canvasObject');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

// Colour picker switch case

function color(obj) {
    switch (obj.id) {
        case "white":
            x = "white";
            break;
        case "blue":
            x = "blue";
            break;
        case "black":
            x = "black";
            break;
        case "orange":
            x = "orange";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "red":
            x = "red";
            break;
        case "green":
            x = "green";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

}

// Draw function on the canvas

function draw() {
    ctx.beginPath();
    ctx.moveTo(prX, prY);
    ctx.lineTo(crX, crY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

// Canvas clear tool

function erase() {
    var conformaion = confirm("Erase all the Canvas?");
    if (conformaion) {
        ctx.clearRect(0, 0, w, h);
    }
}

// Position on the canvas

function findxy(res, e) {
    if (res == 'down') {
        prX = crX;
        prY = crY;
        crX = e.clientX - canvas.offsetLeft;
        crY = e.clientY - canvas.offsetTop;

        check = true;
        checkPoint = true;
        if (checkPoint) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            checkPoint = false;
        }
    }
    if (res == 'up' || res == "out") {
        check = false;
    }
    if (res == 'move') {
        if (check) {
            prX = crX;
            prY = crY;
            crX = e.clientX - canvas.offsetLeft;
            crY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

// Load previous Canvas Drawing

function loadCanvas() {

    var canvasImage = new Image();
    canvasImage.src = localStorage.canvasSaved;
	ctx.clearRect(0, 0, 700, 500);
	ctx.drawImage(canvasImage, 0, 0);
    
    
}

// Save Current Canvas Drawing 


function saveCanvas() {

    var savedCanvas = canvas.toDataURL();
    localStorage.canvasSaved = savedCanvas;
}




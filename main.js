nosey = "";
nosex = "";
leftwrisx = "";
rightwrisx = "";

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(900,200);
    video = createCapture(VIDEO);
    video.size(500,400)
    video.position(100,200)
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", getposes);
}

function getposes(result) {
    if (result.length > 0) {
        console.log(result);
        nosey = result[0].pose.nose.y;
        nosex = result[0].pose.nose.x;
        leftwrisx = result[0].pose.leftWrist.x;
        rightwrisx = result[0].pose.rightWrist.x;
        console.log(nosex, nosey, leftwrisx, rightwrisx);
    }
}

function modelloaded() {
    console.log("Model is successfully loaded");
}

function draw() {
    background("white");
}
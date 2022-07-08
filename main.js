function setup() {
    canvas = createCanvas(600, 400);
    background("aqua");
    video = createCapture(VIDEO);
    canvas.position(900, 200);
    video.size(500, 600);
    video.position(200, 100);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose" , gotPoses);
}

function modelLoaded() {
    console.log("MODEL IS LOADED!!!!!!!!!!");
}

function gotPoses(results) {
console.log(results);
}
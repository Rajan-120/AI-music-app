var bones = "";
var heat_waves = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("x: "+leftWristX, "y: "+leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("x: "+leftWristX, "y: "+leftWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function preload()
{
    bones = loadSound("bones.mp3");
    heat_waves = loadSound("heat waves.mp3");
}
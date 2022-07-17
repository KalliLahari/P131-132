img="";
status1="";


function setup(){
canvas=createCanvas(500,400);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded");
status1=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload(){
    img=loadImage("bed.jpg");
    }
    
    function draw(){
    image(img,0,0,500,400);
    fill("red");
    noFill();
    text("Bed",210,170);
    stroke("red");
    rect(200,150,260,240);
    }

    function back(){
        window.location="index.html";
    }

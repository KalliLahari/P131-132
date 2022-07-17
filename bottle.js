img="";
status1="";
objects=[];


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
        objects=results;
    }
}

function preload(){
    img=loadImage("bottle.jpg");
    }
    
    function draw(){
    image(img,0,0,500,400);
    if(status1 !=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    }

    function back(){
        window.location="index.html";
    }
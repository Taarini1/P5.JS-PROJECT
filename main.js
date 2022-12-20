function preload(){

}

function setup(){
    canvas=createCanvas(650,700);
    canvas.position(110,400);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){

    image(video,0,0,400,500);
    

}

function take_snapshot(){
    save("my_selfie.png");
}





var nose_x = 0;
var nose_y = 0;



function preload(){
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");

}



function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', got_poses);
    
    }


    function modelLoaded(){
        console.log("Model is Loaded");
    }

    function got_poses(results){
        if(results.length > 0){
            console.log(results);
            console.log("The y coordinates of the nose are " + results[0].pose.nose.x);
            console.log("The y coordinates of the nose are " + results[0].pose.nose.y);
            nose_x = results[0].pose.nose.x;
            nose_y = results[0].pose.nose.y;
console.log(nose_x);
        }
    }


    function draw(){
        image(video,0,0,300,300);
image(mousache,nose_x,nose_y,50,50)
    }
    
   

    
    function save(){
        save("Filtered_selfie");
    
    } 
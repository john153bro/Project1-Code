let url = 'https://io.adafruit.com/api/v2/John153/feeds/stress';
let counter = 0;
let outdata = 1;
let positionX=[];
let positionY=[];
let img;
let img1;
let imgbg;
let canvas;
let status=0;
let start;
function preload() {
  img = loadImage('item1.png');
  img1 = loadImage('item2.png');
  imgbg = loadImage('back.png');
  imgstart = loadImage('start.png');
}
function setup() {
   canvas = createCanvas(1728, 864);

  canvas.position(100, 20, 'fixed');
}
function draw() {
    if (status==0){
        if (counter % 30 == 0) {
            getData();
        }
        if (outdata=="0"){
            status=1;
        }
        counter++;
        
        canvas.background(imgstart);
        textSize(55);
        text('Press The Button To Release Your Stress', 600, 300);
        fill(255);
    }
    else{
        //    rect(0, 0, windowWidth, windowHeight);
    canvas.background(imgbg);
    if (outdata=="0"){
//        fill(255, 204, 0);  
            positionX.push(mouseX);
            positionY.push(mouseY);
            outdata = "1";
            counter2=30;
//        console.log("I am here!")
        }
        if (counter % 30 == 0) {
            getData();
        }
        counter++;
        if (positionX.length != 0){
            for (let i = 0; i < positionX.length; i++) {
                image(img1, positionX[i]-190, positionY[i]-40, 160, 220);
            }  
        }
        image(img, mouseX-110, mouseY-90, 170, 170);
    }

}
function getData() {
    let data;
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        outdata = data;
//        let resize = map(data, 1, 0, 25, 150);
        
//        let resize = map(data, 1, 0, 25, 150);
        noStroke();
//        fill(255, 0, 0);
//        ellipse(width / 2, height / 2, resize);
        console.log(data);
    });
}
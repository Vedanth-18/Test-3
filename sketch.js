const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;

var bg, bg2, bg3, bg4, bg5, bg6, bg7, bg8,bg9, bg10, bh11, bg12;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();
    //bgImg ="sunrise1.png";
}

function draw(){
    if(bg){
      background(bg);
    }
    Engine.update(engine);
    Engine.run(engine);
    // write code to display time in correct format here


}

async function getBackgroundImg(){
   var responce = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responceJSON = await responce.json();
   var datetime = responceJSON.datetime;
   console.log(datetime);
   var time = datetime.slice(11,13);
   console.log(time);
   text(time, 100, 100);
   if(time>04 || time<06){
    bgImg="sunrise1.png";
   }
   else if(time>06 || time<08){
    bgImg="sunrise2.png";
   }
   else if(time>08 || time<10){
    bgImg="sunrise3.png";
}
else if(time>10 || time<=12){
    bgImg="sunrise4.png";
}
else if(time>12 || time<=14){
    bgImg="sunrise5.png";
}
else if(time>14 || time<=16){
    bgImg="sunrise6.png";
}
else if(time>16 || time<=17){
    bgImg="sunset7.png";
}
else if(time>17 || time<=18){
    bgImg="sunset8.png";
}
else if(time>18 || time<=19){
    bgImg="sunset9.png";
}
else if(time> 19|| time<=20){
    bgImg="sunset10.png";
}
else if(time>20 || time<=21){
    bgImg="sunset11.png"
}
else if(time>21 || time<04){
    bgImg="sunset12.png"
}

   bg = loadImage(bgImg);
   console.log(bg);
   console.log(bgImg);
}

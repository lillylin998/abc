
let delta;
function preload(){
  //need to change font paths to add abc/ before final push
  inconsolata_Reg = loadFont('/fonts/Inconsolata-Regular.ttf');
  inconsolata_Light = loadFont('/fonts/Inconsolata-Light.ttf');
  libreBaskerville_italic = loadFont('/fonts/LibreBaskerville-Italic.ttf')
  nunito_Light = loadFont('/fonts/Nunito-Light.ttf');
  nunito_LightItalic = loadFont('/fonts/Nunito-LightItalic.ttf');
  page0str = loadStrings('/text/page0.txt');
  page1str = loadStrings('/text/page1.txt');
  page2str = loadStrings('/text/page2.txt');
  page3str = loadStrings('/text/page3.txt');
  page4str = loadStrings('/text/page4.txt');
  page5str = loadStrings('/text/page5.txt');
  page6str = loadStrings('/text/page6.txt');
  page7str = loadStrings('/text/page7.txt');
  pg1_popuptext = loadJSON('/text/page1_popups.json');
  pg2_popuptext = loadJSON('/text/page2_popups.json');
  pg3_popuptext = loadJSON('/text/page3_popups.json');
  pg4_popuptext = loadJSON('/text/page4_popups.json');
  pg5_popuptext = loadJSON('/text/page5_popups.json');
  pg6_popuptext = loadJSON('/text/page6_popups.json');
  pg7_popuptext = loadJSON('/text/page7_popups.json');
  chopsuey_eng = loadImage('/images/chopsuey_eng.png');
  chopsuey_chn = loadImage('/images/chopsuey_chn.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight*8);
  frameRate(30);

  rectMode(CENTER)
  //pg1y=height;
  var y = 0;
  for(let i =0; i<8; i++){
    pgy.push(y);
    y+=windowHeight;
  }

  a = new Letter('A',width/2-300,pgy[0]+600,width/4);
  b = new Letter('B', width/2-100,pgy[0]+550,width/4 );
  c = new Letter('C', width/2+100, pgy[0]+520, width/4)
  for(let i=0; i<40; i++){
  particles.push(new Particle(random(50,width-50),random(pgy[0]+windowHeight,pgy[6]),random(10,40)));
  }
  for(let i=0; i<10; i++){
    particles.push(new Particle(random(50,width-50),random(pgy[0]+windowHeight,pgy[1]),random(10,40)));
    }

  for(let i in page1str){
    page1p.push(createElement('p',page1str[i]));
   // page1p[i].hide();
    page1p[i].style('display','block')
  }
  for(let i in page2str){
    page2p.push(createElement('p',page2str[i]));
    page2p[i].hide();
    page2p[i].style('display','flex')
  }
  for(let i in page3str){
    page3p.push(createElement('p',page3str[i]));
    page3p[i].hide();
    page3p[i].style('display','flex')
  }
  for(let i in page4str){
    page4p.push(createElement('p',page4str[i]));
    page4p[i].hide();
    page4p[i].style('display','flex')
  }
  for(let i in page5str){
    page5p.push(createElement('p',page5str[i]));
    page5p[i].hide();
    page5p[i].style('display','block')
  }
  for(let i in page6str){
    page6p.push(createElement('p',page6str[i]));
    page6p[i].hide();
    page6p[i].style('display','block')
  }
  for(let i in page7str){
    page7p.push(createElement('p',page7str[i]));
    page7p[i].hide();
    page7p[i].style('display','block')
  }
  print(page5p)
  loadText();
}

function draw() {
background(220);
titlepage();
pageOne();
pageTwo();
pageThree();
pageFour();
pageFive();
pageSix();
pageSeven();
//   if(page===0){
    
//     if(scroll){
     
// //change page 1 y values;
//       pgy[0] += scrollOut(timer,0,-height,600)
//       pgy[1] += scrollOut(timer,0,-height,600)
//       timer++;
      
//     if(pgy[1] <= 0){
//       page = 1;
//       scroll = false;
//       } 
//       pageOne();
//      }
//      titlepage();
//     } 
// if(page===1){
//  // pg1Loaded = true;
//   if(scroll){
     
//     //change page 1 y values;
//           pgy[1] += scrollOut(timer,0,-height,600)
//           pgy[2] += scrollOut(timer,0,-height,600)
//           timer++;
          
//         if(pgy[2] <= 0){
//          // pgy[2]=0;
//           page = 2;
//           scroll = false;
//          // pg1Loaded = false;
//           } 
//          pageTwo();
//          }
//     pageOne();
//   }

//   if(page===2){
//     pgy[2]=0;
//    // pg2Loaded = true;
//    if(scroll){
//         pageThree();
//     //change page 1 y values;
//           pgy[2] += -delta
//           pgy[3] += -delta
//           timer++;
          
//         if(pgy[3] <= 0){
//          // pgy[2]=0;
//           page = 3;
//           scroll = false;
//           pg2Loaded = false;
//           } 
      
//          }
//     pageTwo();
//   }
//   if(page===3){
//     pgy[3]=0;
//     pageThree();
//   }

    }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
 // print(event.delta);
  delta = event.delta;
  if(delta>0){
    //scroll down to next page
    //pg0.scrollNext(0,0,-height,2000);
    // scrollOut(pg0,0,0,-height,2000);
    // scrollOut(pg1,0,0,-height,2000);

    scroll = true;
  }

}
// let t = 0; //current time or pos of tween
//   let b = 0; //beginning value of property (position y = 0)
//   let c = -height; // change between beg and destination value of property 
//   let d = 2000; //total time of tween (2 seconds);
function scrollOut(t,b,c,d){
  //pageNext = pageNo+1;
  
  
   return -c * cos(t/d*(PI/2)) + c + b;
  //return c*t/d +b;


  // easeInSine: function (x, t, b, c, d) {
	// 	return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	// },
	// easeOutSine: function (x, t, b, c, d) {
	// 	return c * Math.sin(t/d * (Math.PI/2)) + b;
	// },
  
}

class Page{
  constructor(y){
    this.x = 0;
    this.y = y;
    this.pg = createGraphics(width,height);
  }
  display(){
    image(this.pg,this.x,this.y);
  }
  scrollPrev(x,t,b,c,d){ //scroll to previous page (from 1 to 0)

  }
  scrollNext(x,t,b,c,d){ //scroll to next page (so from 0 to 1)
    this.y = -c * cos(t/d*(PI/2)) + c + b;
  }
}

class Letter{
  constructor(str,x,y,size){
    this.str = str;
    this.x = x;
    this.y = y;
    this.ymin = y-50;
    this.ymax = y+50;
    this.size = size;
    this.vy = random(.5,1);

  }
  display(){
    fill(0);
    textSize(this.size);
    text(this.str,this.x,pgy[0]+this.y-50);
  }
  vertFloat(){
    if(!scroll){ //if you are NOT scrolling
    this.y += this.vy;
    if(this.y <= this.ymin || this.y >= this.ymax ){
      this.vy = -this.vy;
    }
  }
  }
}

class Particle{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.vy = 20/size;
    this.a = size*4;
  }

  display(){
    push();
    noStroke();
    fill(0,0,0,this.a)
    ellipse(this.x,pgy[0]+this.y,this.size);
   pop();
    this.y -=this.vy;
    if(this.y <= 0-this.size){
      this.y = height+this.size;
      this.x = random(50,width-50);
    }
  }
}

//code adapted from https://gist.github.com/studioijeoma/942ced6a9c24a4739199
function textHeight(text, maxWidth) {
  var words = text.split(' ');
  var line = ' ';
  var h = textLeading();

  for (var i = 0; i < words.length; i++) {
      var testLine = line + words[i] + ' ';
      var testWidth = drawingContext.measureText(testLine).width;

      if (testWidth > maxWidth && i > 0) {
          line = words[i] + ' ';
          h += textLeading();
      } else {
          line = testLine;
      }
  }

  return h;
}

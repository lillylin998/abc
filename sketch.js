

function preload(){
  inconsolata_Reg = loadFont('abc/fonts/Inconsolata-Regular.ttf');
  inconsolata_Light = loadFont('/fonts/Inconsolata-Light.ttf');
  libreBaskerville_italic = loadFont('/fonts/LibreBaskerville-Italic.ttf')
  nunito_Light = loadFont('/fonts/Nunito-Light.ttf');
  nunito_LightItalic = loadFont('/fonts/Nunito-LightItalic.ttf');
  page0str = loadStrings('/text/page0.txt');
  page1str = loadStrings('/text/page1.txt');
  pg1_popuptext = loadJSON('/text/page1_popups.json');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  pg0 = new Page(0);
  //currently working on page 1 ONLY, change to height later
  pg1 = new Page(0);
  rectMode(CENTER)
  a = new Letter('A',width/2-300,height-200,width/4);
  b = new Letter('B', width/2-100,height-250,width/4 );
  c = new Letter('C', width/2+100, height-150, width/4)
  for(let i=0; i<10; i++){
  particles.push(new Particle(random(50,width-50),random(height,height+100),random(10,40)));
  }

  // bigDiv = createElement('span');
  // bigDiv.style('float','left');
  for(let i in page1str){
    page1p.push(createElement('p',page1str[i]));
    page1p[i].hide();
    page1p[i].style('display','flex')
   // page1p[i].parent(bigDiv);
  }
  print(page1p);
}

function draw() {
//background(0);
  if(page===0){
    titlepage();
    if(scroll){
      pageOne();

      pg0.y += scrollOut(pg0,timer,0,-height,600)
      pg1.y += scrollOut(pg1,timer,0,-height,600)
      timer++;

    if(pg1.y <= 0){
      page = 1;
      scroll = false;
      }
     }
    } 
if(page===1){
    pageOne();
  }

    }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  print(event.delta);
  let delta = event.delta;
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
function scrollOut(pageNo,t,b,c,d){
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
    pg0.pg.fill(0);
    pg0.pg.textSize(this.size);
    pg0.pg.text(this.str,this.x,this.y-50);
  }
  vertFloat(){
    this.y += this.vy;
    if(this.y <= this.ymin || this.y >= this.ymax ){
      this.vy = -this.vy;
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
    pg0.pg.noStroke();
    pg0.pg.fill(0,0,0,this.a)
    pg0.pg.ellipse(this.x,this.y,this.size);
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

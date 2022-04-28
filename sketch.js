let page = 0;
let inconsolata_Reg, inconsolata_SE_ExtraLight, inconsolata_SE_Light, inconsolata_Light, inconsolata_ExtraLight;

let pg0,pg1,pg2,pg3,pg4,pg5,pg6;

let particles = [];
let a;
let page0str =[];

let scroll = false;
let timer = 0;

function preload(){
  inconsolata_Reg = loadFont('/fonts/Inconsolata-Regular.ttf');
  page0str = loadStrings('/text/page0.txt');
  print(page0str);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //pg0 = createGraphics(width,height);
  //pg1 = createGraphics(width,height);
  pg0 = new Page(0);
  pg1 = new Page(height);
  rectMode(CENTER)
  a = new Letter('A',width/2-300,height-100,width/4);
  b = new Letter('B', width/2-100,height-150,width/4 );
  c = new Letter('C', width/2+100, height-75, width/4)
  for(let i=0; i<10; i++){
  particles.push(new Particle(random(50,width-50),random(height,height+100),random(10,40)));
  }
}

function draw() {

  if(page===0){
    titlepage();
    if(scroll){
      pg1.pg.background(0);
      pg1.display();

      pg0.y += scrollOut(pg0,timer,0,-height,600)
      pg1.y += scrollOut(pg1,timer,0,-height,600)
      timer++;

    if(pg1.y === 0){
      page = 1;
      print(scroll);
      scroll = false;
      print(scroll);
    }
    }
  }
  if(page===1){
    pageOne();
  }

}

//abc on grey background with description text
function titlepage(){
  pg0.pg.background(220);
  a.display();
  a.vertFloat();
  b.display();
  b.vertFloat();
  c.display();
  c.vertFloat();
  for(let i in particles){
    particles[i].display();
  }
  pg0.pg.push();
  //rectMode(CORNER);
  let combinedh = 0;
  let texty = pg0.y+120;
  pg0.pg.textWrap(WORD);
  pg0.pg.rectMode(CENTER);
  pg0.pg.textAlign(CENTER);
  pg0.pg.textSize(width/70);
  pg0.pg.textFont(inconsolata_Reg);
  pg0.pg.fill(0);
  pg0.pg.text(page0str[0],width/2,texty,740);
  // let paraBreak = 20;
  // let texth=textHeight(page0str[0],400);
  // texty+=texth;
  // texty+=paraBreak;
  // text(page0str[1],50,texty,300)
  // texth = textHeight(page0str[1],250);
  // texty+=texth;
  // texty+=paraBreak*2;
  // text(page0str[2],50,texty,200);

  // for(let i in page0str){

  //  let h = textHeight(page0str[i],400);
   
  //   print(h);
  //   text(page0str[i],50,100+combinedh,450); 
  //   combinedh += h;
  // }
  pg0.pg.pop();
  //image(pg0,0,0);
  pg0.display();
}

//introduction
function pageOne(){
  pg1.pg.background(220);
    pg1.display();
    
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
function scrollIn(pageNo,t,b,c,d){ //the only diff would be the pageNo and c

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
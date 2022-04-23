let page = 0;
let inconsolata_Reg, inconsolata_SE_ExtraLight, inconsolata_SE_Light, inconsolata_Light, inconsolata_ExtraLight;

let particles = [];
let a;
let page0str =[];

function preload(){
  inconsolata_Reg = loadFont('/fonts/Inconsolata-Regular.ttf');
  page0str = loadStrings('/text/page0.txt');
  print(page0str);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  a = new Letter('A',width/2-300,height/2+200,width/4);
  b = new Letter('B', width/2-100,height/2+150,width/4 );
  c = new Letter('C', width/2+100, height/2+175, width/4)
  for(let i=0; i<10; i++){
  particles.push(new Particle(random(50,width-50),random(height,height+100),random(10,40)));
  }
}

function draw() {

  if(page===0){
    titlepage();
  }
  if(page===1){

  }
}

//abc on grey background with description text
function titlepage(){
  background(220);
  a.display();
  a.vertFloat();
  b.display();
  b.vertFloat();
  c.display();
  c.vertFloat();
  for(let i in particles){
    particles[i].display();
  }
  push();
  rectMode(CORNER);
  let combinedh = 0;
  for(let i in page0str){
    textWrap(WORD);
    textSize(width/60);
    textFont(inconsolata_Reg);

    let h = textHeight(page0str[i],350);
   
    print(h);
    text(page0str[i],50,100+combinedh,400); 
    combinedh += h;
  }
pop();
}

//introduction
function pageOne(){

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
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
    textSize(this.size);
    text(this.str,this.x,this.y-50);
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
    noStroke();
    fill(0,0,0,this.a)
    ellipse(this.x,this.y,this.size);
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
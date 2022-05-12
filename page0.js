//abc on grey background with description text
function titlepage(){
   // background(220);
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
    //rectMode(CORNER);
    let combinedh = 0;
    let texty = pgy[0]+100;
    textWrap(WORD);
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(width/70);
    textFont(inconsolata_Reg);
    fill(0);
    text(page0str[0],width/2,texty,740);
    textSize(width/80);
    text(page0str[1],width/2,texty+530,width/2);
    text(page0str[2],width/2,texty+620,width/2);
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
    pop();
    //image(pg0,0,0);
    //pg0.display();
  }
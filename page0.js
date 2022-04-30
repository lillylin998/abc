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
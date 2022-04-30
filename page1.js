
//introduction
function pageOne(){
    pg1.pg.background(220);
      //first 5 lines is where are you from conversation 
      let textH = height/5;
      let textW_other = width/3;
      let textW_me = width/1.5;
      pg1.pg.textWrap(WORD);
      pg1.pg.fill(0);
      pg1.pg.textFont(inconsolata_Reg);
      pg1.pg.textSize(30);
      pg1.pg.text(page1str[0], textW_other, textH,400);
      pg1.pg.text(page1str[2],textW_other,textH+150,400);
      pg1.pg.text(page1str[4],textW_other, textH+325,400);
      pg1.pg.textAlign(RIGHT);
      pg1.pg.text(page1str[1],textW_me, textH+75);
      pg1.pg.text(page1str[3],textW_me, textH+250);
      pg1.pg.text(page1str[5],textW_me, textH+425);
  
      //next few lines are the start of the actual essay
      //pg1.pg.textFont(inconsolata_Light)
      pg1.pg.textAlign(LEFT);
      pg1.pg.textSize(16);
      let paraW_Left = width/18;
      let paraW_Right = width/1.42;
      let paraH = height/7;
      let parbreak = height/30;
  
      let hh = textHeight(page1str[6],width/8);
      hh+= paraH;
      hh+=parbreak;
      pg1.pg.text(page1str[6], paraW_Left, paraH, width/4);
      pg1.pg.text(page1str[7], paraW_Left, hh,width/4);
      hh += textHeight(page1str[7],width/8);
      hh+= parbreak;
      pg1.pg.text(page1str[8], paraW_Left, hh,width/4);
      hh += textHeight(page1str[8],width/8);
      hh+= parbreak;
      pg1.pg.text(page1str[9], paraW_Left, hh,width/4);
      hh = paraH;
      pg1.pg.text(page1str[10],paraW_Right,hh,width/4)
      hh += textHeight(page1str[10],width/8);
      hh+= parbreak;
      pg1.pg.text(page1str[11],paraW_Right,hh,width/4)
  
      pg1.display();
  
  }
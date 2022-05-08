
//introduction
function pageOne(){
    pg1.pg.background(220);
      //first 5 lines is where are you from conversation 
      let textH = height/5;
      //let textW_other = width/3;
      let textW_other = width/15;
      //let textW_me = width/1.5;
      let textW_me = width/2.5;
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
      //let paraW_Left = width/18;
      let paraW_Left = width/2;
      //let paraW_Right = width/1.42;
      let paraH = height/10;
      let parbreak = height/40;
  
    
    let hh = paraH;
    for(let i=0;i<6;i++){
        page1p[i].hide();
    }

      for(let i =6;i<page1p.length;i++){
          page1p[i].show();
          page1p[i].position(paraW_Left,hh);
          page1p[i].size(width/5);
          page1p[i].style('font-family','inconsolata-reg');
          page1p[i].style('text-align','justify')
          page1p[i].style('line-height',1.2);
          //hh+=textHeight(page1str[i],width/10);
          hh+=page1p[i].height;
          hh+=parbreak;
        if(page1p[i+1]){
          let maxhh = hh+page1p[i+1].height;
          if(maxhh>=height){
              hh=paraH;
              let w = page1p[i].width + 60;
              paraW_Left += w;
          }
        }
      }

      loadText();
      //pg1.pg.text(page1str[6], paraW_Left, paraH, width/4);
    //   pg1.pg.text(page1str[7], paraW_Left, hh,width/4);
    //   hh += textHeight(page1str[7],width/8);
    //   hh+= parbreak;
    //   pg1.pg.text(page1str[8], paraW_Left, hh,width/4);
    //   hh += textHeight(page1str[8],width/8);
    //   hh+= parbreak;
    //   pg1.pg.text(page1str[9], paraW_Left, hh,width/4);
    //   hh = paraH;
    //   pg1.pg.text(page1str[10],paraW_Right,hh,width/4)
    //   hh += textHeight(page1str[10],width/8);
    //   hh+= parbreak;
    //   pg1.pg.text(page1str[11],paraW_Right,hh,width/4)
  
      pg1.display();
      for(let i in page1popups){
        page1popups[i].el.onmouseover = function(){
        page1popups[i].switch();
    }
    page1popups[i].el.onmouseout = function(){
        page1popups[i].switch();
    }
    page1popups[i].display();

    }
   
    // strokeWeight(5);
    // point(page1popups[0].x,page1popups[0].y);
  
  }

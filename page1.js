
//introduction
function pageOne(){
     // background(220);
      push();
        for(let i=6;i<page1p.length;i++){
        page1p[i].show();
    }
      //first 5 lines is where are you from conversation 
      let textH = pgy[1];
      //print(pg1y+height/5)
      //let textW_other = width/3;
      let textW_other = width/5.5;
      //let textW_me = width/1.5;
      let textW_me = width/2.5;
      textWrap(WORD);
      textAlign(LEFT);
      fill(0);
      textFont(inconsolata_Reg);
      textSize(30);
      text(page1str[0], textW_other, textH+windowHeight/5,400);
      text(page1str[2],textW_other,textH+windowHeight/5+150,400);
      text(page1str[4],textW_other, textH+windowHeight/5+325,400);
      textAlign(RIGHT);
      text(page1str[1],textW_me, textH+windowHeight/5+75);
      text(page1str[3],textW_me, textH+windowHeight/5+250);
      text(page1str[5],textW_me, textH+windowHeight/5+425);
  
      //if(pgy[1]<=0){
      //next few lines are the start of the actual essay
 
      let paraW_Left = width/2;
      //let paraW_Right = width/1.42;
      let paraH = pgy[1]+windowHeight/10;
      //print(pgy[1]);
      let parbreak = windowHeight/40;
  
    
    let hh = paraH;
    if(pg1Loaded){
     
      for(let i =6;i<page1p.length;i++){
          page1p[i].show();
          page1p[i].position(paraW_Left,hh);
          page1p[i].size(width/5);
          page1p[i].style('font-family','inconsolata-reg');
          page1p[i].style('text-align','justify')
          page1p[i].style('line-height',1.2);
         // page1p[i].style('z-index',0);
          //hh+=textHeight(page1str[i],width/10);
          hh+=page1p[i].height;
          hh+=parbreak;
        if(page1p[i+1]){
          let maxhh = hh+page1p[i+1].height;
          if(maxhh>=pgy[1]+windowHeight){
              hh=paraH;
              let w = page1p[i].width + 60;
              paraW_Left += w;
          }
        }
      }
   //   print(page1p)

    }

   //  loadText();
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

   for(let i in page1popups){
        page1popups[i].el.onmouseover = function(){
        page1popups[i].switch();
    }
    page1popups[i].el.onmouseout = function(){
        page1popups[i].switch();
    }
    page1popups[i].display();

   }

  pop();
  
  }

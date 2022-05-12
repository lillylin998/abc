function pageFour(){
    push();
 if(pg4Loaded){
     for(let i in page4p){
         page4p[i].show();
     }
     page4p[0].position(width/4,pgy[4]);
     page4p[0].size(width/2.1);
     page4p[0].style('font-family','inconsolata-reg');
     page4p[0].style('text-align','justify')
     page4p[0].style('line-height',1.2);
     page4p[1].position(width/4,pgy[4]+150);
     page4p[1].size(width/2.1);
     page4p[1].style('font-family','inconsolata-reg');
     page4p[1].style('text-align','center')
     page4p[1].style('line-height',1.2);
     page4p[1].style('font-size','30px');
     page4p[2].position(width/4,pgy[4]+250);
     page4p[2].size(width/2.1);
     page4p[2].style('font-family','inconsolata-reg');
     page4p[2].style('text-align','center')
     page4p[2].style('line-height',1.2);
     page4p[3].position(width/4,pgy[4]+300);
     page4p[3].size(width/2.1);
     page4p[3].style('font-family','inconsolata-reg');
     page4p[3].style('text-align','center')
     page4p[3].style('line-height',1.2);
     page4p[4].position(width/4,pgy[4]+550);
     page4p[4].size(width/2.1);
     page4p[4].style('font-family','inconsolata-reg');
     page4p[4].style('text-align','center')
     page4p[4].style('line-height',1.2);
     page4p[5].position(width/4,pgy[4]+630);
     page4p[5].size(width/2.1);
     page4p[5].style('font-family','inconsolata-reg');
     page4p[5].style('text-align','center')
     page4p[5].style('line-height',1.2);

     image(chopsuey_eng,width/4,pgy[4]+300,700);
    // image(chopsuey_chn,width/4,pgy[4]+300,700).mask();
     image(chopsuey_chn,  width/4, pgy[4]+300, 100, 100, width/4, pgy[4]+300,100,100)
 }
   // loadText();
    for(let i in page4popups){
        page4popups[i].el.onmouseover = function(){
        page4popups[i].switch();
    }
    page4popups[i].el.onmouseout = function(){
        page4popups[i].switch();
    }
    page4popups[i].display();

}
pop();
}
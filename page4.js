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
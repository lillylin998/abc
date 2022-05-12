function pageSeven(){
push();
if(pg7Loaded){
    let hh = pgy[7];
    let ww = width/4;
    for(let i in page7p){
        page7p[i].show();
        if(i==0){
            page7p[i].position(width/2.7,pgy[6]+350);
            page7p[i].size(width/4);
        }
        if(i==1){
            page7p[i].position(width/2.7,pgy[6]+450);
            page7p[i].size(width/4);
            }
        if(i==6){
            page7p[i].position(width/1.5,pgy[6]+50);
            page7p[i].size(width/4);
        }
        if(i==7){
            page7p[i].position(ww,hh);
            page7p[i].size(width/2);
        }
        if(i==8){
            page7p[i].position(ww,hh+100);
            page7p[i].size(width/2);
        }
       // page7p[i].size(width/4);
        page7p[i].style('font-family','inconsolata-reg');
        page7p[i].style('text-align','justify')
        page7p[i].style('line-height',1.2);
      //  hh+=20;
    }
}
loadText();
for(let i in page7popups){
    page7popups[i].el.onmouseover = function(){
    page7popups[i].switch();
}
page7popups[i].el.onmouseout = function(){
    page7popups[i].switch();
}
page7popups[i].display();

}
pop();
}
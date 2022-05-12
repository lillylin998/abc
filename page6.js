function pageSix(){
push();
if(pg6Loaded){
    for(let i in page6p){
        page6p[0].position(width/12,pgy[6]+50);
        page6p[0].size(width/4);
        page6p[0].style('font-family','inconsolata-reg');
        page6p[0].style('text-align','justify')
        page6p[0].style('line-height',1.2);
        page6p[1].position(width/2.7,pgy[6]+50);
        page6p[1].size(width/4);
        page6p[1].style('font-family','inconsolata-reg');
        page6p[1].style('text-align','justify')
        page6p[1].style('line-height',1.2);
        page6p[2].position(width/2.7,pgy[6]+250);
        page6p[2].size(width/4);
        page6p[2].style('font-family','inconsolata-reg');
        page6p[2].style('text-align','justify')
        page6p[2].style('line-height',1.2);
    }
}
loadText();
for(let i in page6popups){
    page6popups[i].el.onmouseover = function(){
    page6popups[i].switch();
}
page6popups[i].el.onmouseout = function(){
    page6popups[i].switch();
}
page6popups[i].display();

}
pop();
}
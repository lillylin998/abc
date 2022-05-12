function pageFive(){
push();
    if(pg5Loaded){
        for(let i in page5p){
            page5p[i].show();
        }
        page5p[0].position(width/12, pgy[5]+50)
        page5p[0].size(width/5);
        page5p[0].style('font-family','inconsolata-reg');
        page5p[0].style('text-align','justify')
        page5p[0].style('line-height',1.2);
        page5p[1].position(width/3.2, pgy[5]+50)
        page5p[1].size(width/5);
        page5p[1].style('font-family','inconsolata-reg');
        page5p[1].style('text-align','justify')
        page5p[1].style('line-height',1.2);
        page5p[2].position(width/1.6, pgy[5]+100)
        page5p[2].size(width/2.1);
        page5p[2].style('font-family','inconsolata-reg');
        page5p[2].style('text-align','justify')
        page5p[2].style('line-height',1.2);
        page5p[2].style('font-size','160px');
        page5p[3].position(width/1.6, pgy[5]+250)
        page5p[3].size(width/2.1);
        page5p[3].style('font-family','inconsolata-reg');
        page5p[3].style('text-align','justify')
        page5p[3].style('line-height',1.2);
        page5p[3].style('font-size','160px');
        page5p[4].position(width/3.2, pgy[5]+470)
        page5p[4].size(width/5);
        page5p[4].style('font-family','inconsolata-reg');
        page5p[4].style('text-align','justify')
        page5p[4].style('line-height',1.2);
        page5p[5].position(width/1.8, pgy[5]+470)
        page5p[5].size(width/2.5);
        page5p[5].style('font-family','inconsolata-reg');
        page5p[5].style('text-align','justify')
        page5p[5].style('line-height',1.2);
        page5p[6].position(width/1.8, pgy[5]+600)
        page5p[6].size(width/2.5);
        page5p[6].style('font-family','inconsolata-reg');
        page5p[6].style('text-align','justify')
        page5p[6].style('line-height',1.2);


    }
    //loadText();
    for(let i in page5popups){
        page5popups[i].el.onmouseover = function(){
        page5popups[i].switch();
    }
    page5popups[i].el.onmouseout = function(){
        page5popups[i].switch();
    }
    page5popups[i].display();

}
pop();
}
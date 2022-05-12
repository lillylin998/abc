function pageThree(){
push(); 

if(pg3Loaded){
   page3p[0].show();
        page3p[0].position(width/4,pgy[3]+200);
        page3p[0].size(width/5);
        page3p[0].style('font-family','inconsolata-reg');
        page3p[0].style('text-align','justify')
        page3p[0].style('line-height',1.2);
        page3p[1].show();
        page3p[1].position(width/1.9,pgy[3]+200);
        page3p[1].size(width/5);
        page3p[1].style('font-family','inconsolata-reg');
        page3p[1].style('text-align','justify')
        page3p[1].style('line-height',1.2);
}
    //loadText();
    for(let i in page3popups){
        page3popups[i].el.onmouseover = function(){
        page3popups[i].switch();
        print('switching')
    }
    page3popups[i].el.onmouseout = function(){
        page3popups[i].switch();
    }
    page3popups[i].display();

}
pop();

}
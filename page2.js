function pageTwo(){
    push();
    if(pg2Loaded){
        //first paragraph
        page2p[0].show();
        page2p[0].position(width/8.5,pgy[2]+200);
        page2p[0].size(width/3);
        page2p[0].style('font-family','inconsolata-reg');
        page2p[0].style('text-align','justify')
        page2p[0].style('line-height',1.2);
        //"I am asian after all"
        page2p[1].show();
        page2p[1].position(width/8.5,pgy[2]+550);
        page2p[1].size(width/3);
        page2p[1].style('font-family','inconsolata-reg');
        page2p[1].style('text-align','justify')
        page2p[1].style('line-height',1.2);
        page2p[1].style('font-size','20px');
        page2p[1].style('color','white');
       // page2p[1].style('clip-path','polygon(0 0, 16% 8%, 31% 16%, 45% 27%, 55% 40%, 64% 55%, 74% 64%, 88% 70%, 100% 69%, 100% 100%, 0 100%)');
        //second "I am asian after all"
        // page2p[2].show();
        // page2p[2].position(width/8.5,pgy[2]+550);
        // page2p[2].size(width/3);
        // page2p[2].style('font-family','inconsolata-reg');
        // page2p[2].style('text-align','justify')
        // page2p[2].style('line-height',1.2);
        // page2p[2].style('font-size','20px');
        // page2p[2].style('clip-path','polygon(0 0, 16% 8%, 31% 16%, 45% 27%, 55% 40%, 64% 55%, 74% 64%, 88% 70%, 100% 69%, 100% 0, 0 0)');
        //second paragraph
         page2p[3].show();
         page2p[3].position(width/1.85,pgy[2]+200);
         page2p[3].size(width/3);
         page2p[3].style('font-family','inconsolata-reg');
         page2p[3].style('text-align','justify')
         page2p[3].style('line-height',1.2);
        //"so problem solved"
        page2p[4].show();
        page2p[4].position(width/1.85,pgy[2]+400);
        page2p[4].size(width/3);
        page2p[4].style('font-family','inconsolata-reg');
        page2p[4].style('text-align','justify')
        page2p[4].style('line-height',1.2);
        page2p[4].style('font-size','20px');

    }
    loadText();
    for(let i in page2popups){
        page2popups[i].el.onmouseover = function(){
        page2popups[i].switch();
    }
    page2popups[i].el.onmouseout = function(){
        page2popups[i].switch();
    }
    page2popups[i].display();

    }
    pop();
}
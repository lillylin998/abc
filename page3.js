function pageThree(){
push();
if(pg3Loaded){
}
    loadText();
    for(let i in page3popups){
        page3popups[i].el.onmouseover = function(){
        page3popups[i].switch();
    }
    page3popups[i].el.onmouseout = function(){
        page3popups[i].switch();
    }
    page3popups[i].display();

}
pop();

}
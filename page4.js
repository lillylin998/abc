function pageFour(){
    push();
    if(pg4Loaded){

    }
    loadText();
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
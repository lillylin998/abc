function pageSix(){
push();
if(pg6Loaded){
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
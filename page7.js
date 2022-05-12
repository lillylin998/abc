function pageSeven(){
push();
if(pg7Loaded){
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
function loadText(){
     //pull all div elements and what page they're assigned to?
     if(page==1){
       
     if(!pg1Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page1'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg1_popuptext.popupdata[i];
           page1popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page1popups[i].set();
 
        }
        //let index = tags[0].id
       // print(pg1_popuptext.popupdata[0].txt);
       // print(page1popups);
       pg1Loaded=true;
     }
  }
  if(page==2){
    if(!pg2Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page2'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg2_popuptext.popupdata[i];
           page2popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page2popups[i].set();
           print(page2popups)
        }
        pg2Loaded=true;
    }
  }
}


class PopUp{
    constructor(text,id,img,offsetx,offsety,w,h){
        this.id = id;
        this.txt = text;
        this.img = img;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.x;
        this.y;
        this.w = w;
        this.h = h;
        this.el;
        this.popup;
        this.hover = false;
    }

    set(){
        let el = document.getElementById(this.id); //grab the html element 
        let rect = el.getBoundingClientRect(); //get bounding rect - might not need this if i can pull the x and y from the div tag
        print(rect);
        this.el = el;
        this.x = rect.x;
        this.y = rect.y;
        //this.w = rect.width;
        // this.h = rect.height;
        //print(test);
        let txt_temp;
        this.popup = createDiv();
        this.popup.id('pop');
        for(let i in this.txt){
            txt_temp = createElement('p',this.txt[i]);
            txt_temp.id('mini_p')
            txt_temp.parent(this.popup);
        }
        this.popup.hide();
        this.popup.style('background','white');
        this.popup.position(this.x+this.offsetx,this.y+this.offsety); //this is where you would add offset x and y
        this.popup.size(this.w,this.h); //may need to pass in width and height
        
    }

    display(){
 
     if(this.hover){
      
       if(this.img){//only if this note has an image
            print('hello')
        }
        this.popup.show();
        push();
        stroke(0,0,255);
        line(this.x+this.offsetx,this.y+this.offsety,mouseX,mouseY);
        pop();
        print('x ' + mouseX);
        print('y ' +mouseY);
        } else {

        this.popup.hide();
        }
    }

    switch(){
        
        if(this.hover){
            this.hover = false;
        } else {
            this.hover = true;
        }
        print(this.hover)
}
}
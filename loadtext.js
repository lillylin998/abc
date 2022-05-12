function loadText(){
     //pull all div elements and what page they're assigned to?
    // if(page==1){
       
     if(!pg1Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags1 = Array.from(document.getElementsByClassName('page1'));
        print(tags1)
        //make a pop up object for all of these 
        for(let i in tags1){
            let index = pg1_popuptext.popupdata[i];
           page1popups.push(new PopUp(index.txt,tags1[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page1popups[i].set();
        //   print(page1popups)

        }
       pg1Loaded=true;
     }
//   }
//   if(page==2){
    if(!pg2Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page2'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg2_popuptext.popupdata[i];
           page2popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page2popups[i].set();
        }
        pg2Loaded=true;
    }
//   }
//   if(page==3){
    if(!pg3Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page3'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg3_popuptext.popupdata[i];
            if(index){
           page3popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page3popups[i].set();
           print(page3popups)
        }
    }
        pg3Loaded=true;
    }
//   }
//   if(page==4){
    if(!pg4Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page4'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg4_popuptext.popupdata[i];
           page4popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page4popups[i].set();
        //    print(page4popups)
        }
        pg4Loaded=true;
    }
//   }
//   if(page==5){
    if(!pg5Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page5'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg5_popuptext.popupdata[i];
           page5popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page5popups[i].set();
          // print(page5popups)
        }
        pg5Loaded=true;
    }
//   }
//   if(page==6){
    if(!pg6Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page6'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg6_popuptext.popupdata[i];
           page6popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page6popups[i].set();
          // print(page6popups)
        }
        pg6Loaded=true;
    }
//   }
//   if(page==7){
    if(!pg7Loaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByClassName('page7'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg7_popuptext.popupdata[i];
           page7popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety,index.width,index.height )); 
           //set pop up x and y 
           page7popups[i].set();
         //  print(page7popups)
        }
        pg7Loaded=true;
    }
//  }
}


class PopUp{
    constructor(text,id,img,offsetx,offsety,w,h){
        this.id = id;
        this.txt = text;
        this.imgUrl = img;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.x;
        this.y;
        this.w = w;
        this.h = h;
        this.el;
        this.popup;
        this.hover = false;
        this.img;
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
        print(this.imgUrl)
        if(this.imgUrl){
        //this.img = loadImage(this.imgUrl);
        this.img = createImg(this.imgUrl);
        this.img.parent(this.popup);
       // this.img.position(this.x+this.offsetx,this.y+this.offsety)
        }
        
    }

    display(){
 
     if(this.hover){
      
       if(this.img){//only if this note has an image
           //image(this.img,width/2,pgy[1]+300);
            print('image here')
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
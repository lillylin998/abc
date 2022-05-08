function loadText(){ //pull all div elements and what page they're assigned to?
    if(!pageLoaded){ //if the text hasnt been loaded already, pull all the b elements from the page
        let tags = Array.from(document.getElementsByTagName('span'));
        print(tags)
        //make a pop up object for all of these 
        for(let i in tags){
            let index = pg1_popuptext.popupdata[i];
           page1popups.push(new PopUp(index.txt,tags[i].id,index.img,index.offsetx,index.offsety )); 
           //set pop up x and y 
           page1popups[i].set();

        }
        //let index = tags[0].id
       // print(pg1_popuptext.popupdata[0].txt);
        print(page1popups);
        pageLoaded=true;
    }
}


class PopUp{
    constructor(text,id,img,offsetx,offsety){
        this.id = id;
        this.txt = text;
        this.img = img;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.x;
        this.y;
        this.w;
        this.h;
        this.el;
        this.hover = false;
    }

    set(){
        let el = document.getElementById(this.id); //grab the html element 
        let rect = el.getBoundingClientRect(); //get bounding rect - might not need this if i can pull the x and y from the div tag
        print(rect);
        this.el = el;
        this.x = rect.x;
        this.y = rect.y;
        this.w = rect.width;
        this.h = rect.height;

        //print(test);
        
    }

    display(){
 
     if(this.hover){
      
       if(this.img){//only if this note has an image
            print('hello')
        }
          textFont(nunito_Light);
        //   for(let i in this.txt){
        //     text(this.txt[i],this.x+this.offsetx,this.y+this.offsety,200);
        //   }
        text(this.txt[0],this.x+this.offsetx,this.y+this.offsety,200);
         
         // rect(this.x,this.y,this.w,this.h)
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
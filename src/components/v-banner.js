
    const banner = document.getElementById("banner");
    const slides = document.createElement("div");
    const nav_auto = document.createElement("div");
    const manual_nav = document.createElement("div");

    slides.setAttribute("class","slides");

    nav_auto.setAttribute("class","navigation-auto");

    manual_nav.setAttribute("class","manual-navigation");
    
    for (let i = 1; i < 5; i++) {
        const input = document.createElement("input");
        
        input.setAttribute("type","radio")
        input.setAttribute("name","radio-btn");
        input.setAttribute("id","radio"+i);  
        
        slides.appendChild(input);  
        
    }
    

    for (let i = 1; i < 5; i++) {
      const slide = document.createElement("div");
      const img = document.createElement("img");

      if( i == 1 ){
          slide.setAttribute("class","slide first");
        } else {
          slide.setAttribute("class","slide");
        }
        img.setAttribute("src","../../../assets/homeSlider/banner"+i+""+i+".jpg");

        slide.appendChild(img);

        slides.appendChild(slide);
    }

    banner.appendChild(slides);

    for (let i = 1; i < 5; i++) {
       const auto_btn = document.createElement("div");

       auto_btn.setAttribute("class","auto-btn"+i);

       nav_auto.appendChild(auto_btn);
       
    }
    
    banner.appendChild(nav_auto);

    for (let i = 1; i < 5; i++) {
        const manual_btn = document.createElement("label");
        manual_btn.setAttribute("for","radio"+i);
        manual_btn.setAttribute( "class","manual-btn");
        

        manual_nav.appendChild(manual_btn);   
    }
    
    banner.appendChild(manual_nav);
     

let count = 1;

setInterval(function(){
    
    if(count > 1){
        document.getElementsByClassName('auto-btn' + (count - 1))[0].style.backgroundColor = "transparent";
    } 
    if( count != 4 ){
        document.getElementsByClassName('auto-btn4')[0].style.backgroundColor = "transparent";
    }
   
    document.getElementById('radio' + count).checked = true;
    document.getElementsByClassName('auto-btn' + count)[0].style.backgroundColor = "#ffffff";
   
    count++;
    if(count>4){
        
        count = 1;
    }
},5000);

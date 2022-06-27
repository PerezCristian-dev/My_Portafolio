const buttons = document.querySelectorAll (".slicer");
const sliders = document.querySelectorAll (".banner_vid");
const contents = document.querySelectorAll (".banner__description");
const arrowLeft = document.querySelectorAll(".slicer_icon__left");
const arrowRight = document.querySelectorAll(".slicer_icon__right");
const links= document.querySelectorAll (".video_link");
const loading = document.querySelectorAll(".loading");

var sliderNav = function (manual){
     buttons.forEach ((button)=>{
        button.classList.remove("active");
    });

    links.forEach ((link)=>{
        link.classList.remove("link_activo");
    });

    sliders.forEach ((slider)=>{
        slider.classList.remove("active");
    });


    loading.forEach ((loading)=>{
        loading.classList.remove("loading");
        loading.classList.remove("loading_activo");
    });
  
    
    contents.forEach ((content)=>{
        content.classList.remove("activate");
    })

    buttons[manual].classList.add("active");
    sliders[manual].classList.add("active");
    contents[manual].classList.add("activate");
    links[manual].classList.add("link_activo");
    loading[manual].classList.add("loading_activo");
}



buttons.forEach ((button, i)=> {
button.addEventListener ("click", ()=> {
    sliderNav (i);
});
});

arrowLeft.forEach ((arrowLeft, i )=>{
arrowLeft.addEventListener ("click", ()=> {
    if (i==0) {
        i=7
        sliderNav (i);

    }else{
    sliderNav (i-1);
    }
});
});


arrowRight.forEach ((arrowRight, i )=>{
    arrowRight.addEventListener ("click", ()=> {
        if (i>5) {
            i=0
            sliderNav (i);
           
            
        }else{
        sliderNav (i+1);
        
        }
    });
});


var i=1
function timer (){

   if(i>6){
    i=0
   }
    sliderNav(i);
        i++;
}

function changeSlider (){
    let timerId = null
    timerId = timer();
}


setInterval (changeSlider,10000);





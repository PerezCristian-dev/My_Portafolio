window.addEventListener('scroll', release);

function release(){
    var hiddenElements = document.querySelectorAll ('.to__reveal');
    
    for (var i=0; 1< hiddenElements.length; i++){

        var windowHeight = window.innerHeight;
        var revealTop = hiddenElements [i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){

            hiddenElements[i].classList.add ("unleash");
        }
        else{
            hiddenElements[i].classList.remove ("unleash");
        }
    }
}

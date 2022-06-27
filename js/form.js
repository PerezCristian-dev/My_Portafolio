const bar__top = document.querySelector(".icon__bars__top");
const bar__middle = document.querySelector(".icon__bars__middle");
const bar__bottom = document.querySelector(".icon__bars__buttom");
const menuButtom = document.querySelector(".form__menu__buttom");
const form_menu = document.querySelector(".form__menu");
const formButton = document.querySelector(".button__contact");
const form = document.querySelector(".contactus");
const exit = document.querySelector(".menu__links__Exit");
const home = document.querySelector(".menu__links__Home");
const project = document.querySelector(".menu__links__Projects");
const skills = document.querySelector(".menu__links__Skills");
const education = document.querySelector(".menu__links__Education");




formButton.addEventListener("click", ()=>{
    form.classList.add("show");
    bar__top.classList.remove ("icon__bars__top__X");
    bar__middle.classList.remove ("hide");
    bar__bottom.classList.remove ("icon__bars__buttom__X");
    form_menu.classList.remove("show");
});

home.addEventListener("click", ()=>{
    form.classList.remove("show");

});
project.addEventListener("click", ()=>{
    form.classList.remove("show");

});
skills.addEventListener("click", ()=>{
    form.classList.remove("show");

});
education.addEventListener("click", ()=>{
    form.classList.remove("show");

});
exit.addEventListener("click", ()=>{
    form.classList.remove("show");

});

var click=1;
menuButtom.addEventListener("click",()=>{
   
   if (click==1){
    bar__top.classList.add ("icon__bars__top__X");
    bar__middle.classList.add ("hide");
    bar__bottom.classList.add ("icon__bars__buttom__X");
    form_menu.classList.add("show");
    click++;

    }else{
    bar__top.classList.remove ("icon__bars__top__X");
    bar__middle.classList.remove ("hide");
    bar__bottom.classList.remove ("icon__bars__buttom__X");
    form_menu.classList.remove("show");
    click=1;

    }
});







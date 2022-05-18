
/* ------------image carousel JS------------------------------ */

let slideindex=1;
showslide(slideindex);

function plusslide(n){
    showslide(slideindex +=n);
}

function currentslide(n){
    showslide(slideindex =n);
}

function showslide(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots =document.getElementsByClassName("dot");

    if(n>slides.length)
    {
        slideindex=1;
    }

    if(n<1){
        slideindex = slides.length;
    }

    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }

    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active"," ");
    }

    slides[slideindex-1].style.display = "block";  
    dots[slideindex-1].className += " active";


}



function showImage(i){
    let x=0;
    let mainImage = document.getElementsByClassName("main-img");
    
    for(x=0;x<mainImage.length;i++)
    {
        mainImage[i].style.display = "none";
    }

    mainImage[i].style.display="block";


}



function showslide(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots =document.getElementsByClassName("dot");

    if(n>slides.length)
    {
        slideindex=1;
    }

    if(n<1){
        slideindex = slides.length;
    }

    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }

    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active"," ");
    }

    slides[slideindex-1].style.display = "block";  
    dots[slideindex-1].className += " active";


}



class Headers{
    constructor(h1,h2,h3,h4){
        this.customer=[h1,h2,h3,h4];
        // this.company =h2;
        // this.social=h3;
        // this.archive=h4;
    }
}

const myheader = new Headers("Customer serivce","Company","Social Media","Archive");

let footer = document.getElementsByClassName("footer_header");

for(i=0;i<footer.length;i++)
{
    footer[i].innerHTML=myheader.customer[i];
}









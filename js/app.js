document.addEventListener("DOMContentLoaded", () => {


// Theme Button

const themeBtn = document.getElementById("themeBtn");


if(themeBtn){

themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("light");


if(document.body.classList.contains("light")){

themeBtn.textContent="☀️";

}else{

themeBtn.textContent="🌙";

}


});


}





// Card Animation


const cards = document.querySelectorAll(".card, .feature");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


observer.unobserve(entry.target);


}


});


},{

threshold:0.2

});




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";


observer.observe(card);


});






// Add Animation Style


const style = document.createElement("style");


style.innerHTML = `


.card.show,
.feature.show{

opacity:1 !important;

transform:translateY(0) !important;

transition:1s ease;

}



`;



document.head.appendChild(style);








// Button Click Effect


const buttons = document.querySelectorAll("button");



buttons.forEach(button=>{


button.addEventListener("mousedown",()=>{


button.style.transform="scale(.95)";


});



button.addEventListener("mouseup",()=>{


button.style.transform="scale(1)";


});



button.addEventListener("mouseleave",()=>{


button.style.transform="scale(1)";


});



});








// Smooth Scroll For Menu


const menuItems = document.querySelectorAll("nav li");


menuItems.forEach(item=>{


item.addEventListener("click",()=>{


window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});


});


});








// Welcome Message


console.log(`

━━━━━━━━━━━━━━━━━━

 NEXORA AI

 Designed & Developed by ABOLFAZL

━━━━━━━━━━━━━━━━━━

`);





});

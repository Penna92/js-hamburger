let fa_bars = document.querySelector('.fa-bars');
fa_bars.setAttribute('id', 'hamburger');
let hamburger = document.getElementById("hamburger");
// console.log(hamburger);

let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.setAttribute('id', 'hamburger-menu');
let hamburgerMenuShow = document.getElementById('hamburger-menu');
// console.log(hamburgerMenuShow);

hamburger.addEventListener("click", function() {
    hamburgerMenuShow.style["display"] = "block";
});

let close = document.querySelector('.close');
close.setAttribute('id', 'close');
// console.log(close);

close.addEventListener("click", function() {
    hamburgerMenuShow.style["display"] = "none";
});


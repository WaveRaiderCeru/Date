const bth = 50;
const btw = 150;

const maxh = window.innerHeight - bth;
const maxw = window.innerWidth - btw;

window.addEventListener("DOMContentLoaded", () => {
    const butt = document.getElementById("butt");
    const acc = document.getElementById("acc");
    acc.style.left = Math.floor((maxw + 1)/2) + "px";
    acc.style.top = Math.floor((maxh + 1)/2) + "px";
    butt.style.left = Math.floor(((maxw + 1)/2)+50) + "px";
    butt.style.top = Math.floor(((maxh + 1)/2)) + "px";

  butt.addEventListener("mouseover", () => {
    butt.style.left = Math.floor(Math.random() * (maxw + 1)) + "px";
    butt.style.top = Math.floor(Math.random() * (maxh + 1)) + "px";
  });
  acc.addEventListener("click", () => {
    alert('thank you for giving me a chance');
  });

});

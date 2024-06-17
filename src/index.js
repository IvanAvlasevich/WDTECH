import { drawCards } from "./service.js";
import { drawRef } from "./slider-references.js";

for(let i=0; i<8;i++){
  drawCards(i);
}


for(let i = 0; i<6; i++){
  drawRef(i)

}

const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
console.log(rightBtn, leftBtn)

leftBtn.addEventListener('click', ()=>{
  const carousel = document.querySelector('.carousel');
  carousel.classList.add('transition-left')
})

rightBtn.addEventListener('click', ()=>{
  const carousel = document.querySelector('.carousel');
  carousel.classList.add('transition-right')
  })
import { references } from "./info-references.js";


export function drawRef (i=0){
  const carousel = document.querySelector('.carousel');
  const divElem = document.createElement('div');
    divElem.classList.add('card-ref');
  const imgElem = document.createElement('img');
    imgElem.src = references[i].src;
    imgElem.alt = references[i].alt;
    imgElem.setAttribute('width','450px');
    if(i<2){
      let itemLeft = document.querySelector('.item-left');
      itemLeft.append(divElem);
      divElem.append(imgElem);
    }
    else if(i>1 && i<4){
      let itemActive = document.querySelector('.item-active');
      itemActive.append(divElem);
      divElem.append(imgElem);
    }
    else if(i>3){
      let itemRight = document.querySelector('.item-right');
      itemRight.append(divElem);
      divElem.append(imgElem);
    }
}



// const delLi = ()=>{
//   if(carousel.children){
//     carousel.classList.remove('transition-right');
//     carousel.classList.add('transition-to-right');
    
//   }
// }

// let i = 1;
// // drawLi(){
// //   ulElem.classList.add('transition-right');
// //   ulElem.classList.remove('transition-to-right');
// // }



// const deleteMove = (animationEvent) => {
//   console.log(animationEvent)
//   if (animationEvent.animationName === 'move-to-right'){
//     carousel.lastChild.remove()
//     drawLi(i)
//   }
//   if (animationEvent.animationName === 'move-from-left'){
//     setTimeout(()=>{
//       delLi()
//       i++;
//       if(i>7)i=0
//     }, 3000)
//   }
//   }


// carousel.addEventListener('animationend', deleteMove)





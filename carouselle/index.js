const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');

const CAROUSEL = document.querySelector('#carousel');

const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');


BTN_LEFT.addEventListener('click',moveLeft)
BTN_RIGHT.addEventListener('click',moveRight)

function moveLeft () {
  CAROUSEL.classList.add('transition-left')
  BTN_LEFT.removeEventListener('click',moveLeft)

}

function moveRight () {
  CAROUSEL.classList.add('transition-right')
  BTN_RIGHT.removeEventListener('click',moveRight)
}


CAROUSEL.addEventListener('animationend', (event)=>{
  
  if(event.animationName === 'move-to-right'){
    CAROUSEL.classList.remove('transition-right')
    BTN_RIGHT.addEventListener('click',moveRight)
    const rightItems = ITEM_RIGHT.innerHTML;// три карточки справа
    document.querySelector('#item-active').innerHTML = rightItems;

    ITEM_RIGHT.innerHTML = '';
      for(let i = 0; i < 3; i++){
      const cardRight = document.createElement('div');
      cardRight.classList.add('card');
      cardRight.classList.add('card-right');
      cardRight.innerText = Math.floor(Math.random()*8);

      
      ITEM_RIGHT.append(cardRight)
      console.log(cardRight)
    } 
  }
  else if(event.animationName === 'move-to-left'){
    CAROUSEL.classList.remove('transition-left')
    BTN_LEFT.addEventListener('click',moveLeft)
    const leftItems = document.querySelector('#item-left').innerHTML; //три карточки слева
    document.querySelector('#item-active').innerHTML = leftItems;
    ITEM_LEFT.innerHTML = '';
      for(let i = 0; i < 3; i++){
      const cardLeft = document.createElement('div');
      cardLeft.classList.add('card');
      cardLeft.classList.add('card-left');
      cardLeft.innerText = Math.floor(Math.random()*8);

      
      ITEM_LEFT.append(cardLeft)
      console.log(cardLeft)
    } 
  }
})

window.addEventListener('resize', (event)=>{
  console.log('izmenenie',event.target.window.innerWidth)
})
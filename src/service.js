import { info } from "./info-service.js";

export function drawCards (i) {
  const container = document.querySelector('.our-services');
  const divElem = document.createElement('div');
    divElem.classList.add('card');
  const divImgElem = document.createElement('div');
    divImgElem.classList.add('img-container');
  const h3Elem = document.createElement('h3');
  const title = info[i].title;
    h3Elem.textContent = title;
  const imgElem = document.createElement('img');
    imgElem.src=info[i].src;
    imgElem.alt=info[i].alt;
    imgElem.setAttribute('width','300px');
  const pElem = document.createElement('p');
  const text = info[i].text;
    pElem.textContent = text;
    divElem.append(divImgElem, h3Elem, pElem);
    divImgElem.append(imgElem);
    container.append(divElem);
}




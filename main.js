function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';

    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 100 * i);
    });
}
const title = document.querySelector('.title');
typeWriter(title);

let block1 = document.querySelector('.first')
let block2 = document.querySelector('.second')
let block3 = document.querySelector('.third')

block1.onclick = () => document.querySelector('body').style.backgroundImage = 'url("/assets/rain.jpg")'
block2.onclick = () => document.querySelector('body').style.backgroundImage = 'url("/assets/mar.jpg")'
block3.onclick = () => document.querySelector('body').style.backgroundImage = 'url("/assets/rain2.jpg")'

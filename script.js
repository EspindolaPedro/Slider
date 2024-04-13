let totaSliders = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;
/*let sliderWidth = document.querySelector('.slider').clienteWidth*/

document.querySelector('.slider-width').style.width = `calc(100vw * ${totaSliders})`;  //${sliderWidth * totalsliders}px
//Coloca os botões de forma dinâmica na tela
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;
/*document.querySelector('.slider-controls').style.width = `${sliderWidth}px`; */
function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totaSliders - 1; 
    };
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totaSliders - 1)) {
        currentSlide = 0;
    };
    updateMargin();
};
function updateMargin() {
    let sliderWitdh = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderWitdh);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
};

setInterval(goNext, 5000); 
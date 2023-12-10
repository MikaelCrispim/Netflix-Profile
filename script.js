const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let contas = cs('.square')
let count = 1;
let dataArea = c('.data')
contas.forEach(active);
let slideTotal = cs('.slide').length;
let currentSlide = 1;

function active (square) {
    square.addEventListener('click', function () {
        c('.square.active').classList.remove('active');
        square.classList.add('active');
        c('.fig.hidden').classList.remove('hidden');
        c('.square.active .fig').classList.add('hidden');
    });
}


function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slideTotal - 1
    }
    updateMargin();
}


function goNext() {
    currentSlide++
    if (currentSlide > (slideTotal - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}


function updateMargin () {
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 7000);

function showTime () {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();

    if (hour<10) {
        hour = '0' + hour;
    }
    if (minute<10) {
        minute = '0' + minute;
    }
    
    let tempo = `${hour}:${minute}`
    
    dataArea.innerHTML = tempo
}
function initTime () {
    setInterval(showTime, 900);
}




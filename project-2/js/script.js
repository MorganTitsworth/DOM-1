const body = document.getElementsByClassName('container')
const cards = document.querySelectorAll('section.card')
const meme = document.getElementById('memeContainer');
const closeButton = document.getElementById('x')



// Dark Mode Starts
let isDark = false;
cards[0].addEventListener('click', darkMode)
function darkMode() {
    if(!isDark){
        body[0].classList.toggle('darkBody')
        cards.forEach((item) => item.classList.toggle('darkCard'))
        isDark = true;
    } else {
        body[0].classList.toggle('darkBody')
        cards.forEach((item) => item.classList.toggle('darkCard'))
        isDark = false;
    }
    console.log("clicked btn1")
}

//Meme Starts
cards[1].addEventListener('click', showMeme)
closeButton.addEventListener('click', hideMeme)

function showMeme() {
    meme.classList.toggle('showMeme')
}

function hideMeme() {
    meme.classList.toggle('showMeme')
}

//Spin Starts 
cards[2].addEventListener('click', spinCard)

function spinCard() {
    cards[2].classList.toggle('spin')
}

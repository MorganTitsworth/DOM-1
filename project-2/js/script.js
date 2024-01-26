const body = document.getElementsByClassName('container')
const cards = document.querySelectorAll('section.card')
const meme = document.getElementById('memeContainer');
const closeButton = document.getElementById('x');
const activity = document.getElementById('activity');
const activityContainer = document.getElementById("activityContainer")
const closeTxt = document.getElementById("closeTxt");
const newBtn = document.getElementById("newBtn");


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

//Bored API
cards[3].addEventListener('click', getActivity)
newBtn.addEventListener("click", newActivity)
closeTxt.addEventListener('click', closeActivity)

const apiUrl = 'http://www.boredapi.com/api/activity/'
let visible=false;

function getActivity() {
    fetch(apiUrl)
        .then(res => {
            if(!res.ok) {
                throw new Error('Error: ' + res.status)
            }

            return res.json();
        })
        .then(data => {
            activity.textContent = " " + data.activity;
        })
    
    if(!visible) {
        activityContainer.classList.toggle('showActivity')
        visible = true;
        cards[3].removeEventListener("click", getActivity)
        console.log("card")
    }

};

function newActivity() {
    getActivity()
}

function closeActivity() {
    activityContainer.classList.remove('showActivity')
    visible = false;
}
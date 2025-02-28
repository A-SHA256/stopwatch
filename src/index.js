//watch
const watch = {
    mseconds: 0,
    minutes: 0,
    seconds: 0,
}

//dom
const  dom = {
    displayMsec: document.getElementById('mseconds'),
    displaySec: document.getElementById('seconds'),
    displayMin: document.getElementById('minutes'),
    startPauseBtn: document.getElementById('pause'),
    clearBtn: document.getElementById('clear')
}

//timer function (increaser)
const myTimer = () => {
    watch.mseconds += 1;
    if (watch.mseconds === 100) {
        watch.mseconds = 0;
        watch.seconds += 1;
    }
    if (watch.seconds === 60) {
        watch.seconds = 0;
        watch.minutes += 1;
    }
    dom.displayMsec.innerText = watch.mseconds < 10 ? `0${watch.mseconds}` : watch.mseconds;
    dom.displaySec.innerText = watch.seconds < 10 ? `0${watch.seconds}` : watch.seconds;
    dom.displayMin.innerText = watch.minutes < 10 ? `0${watch.minutes}` : watch.minutes;
}


let forFunc;

//events for starting and stopping the timer
dom.startPauseBtn.addEventListener('click', () => {
    if (dom.startPauseBtn.innerText === 'Start') {
        dom.startPauseBtn.innerText = 'Pause';
        forFunc = setInterval(myTimer, 10);
        return forFunc;
    }
    dom.startPauseBtn.innerText = 'Start';
    clearInterval(forFunc);
})

//reset all values function
const resetFunc = () => {
    watch.mseconds = 0;
    watch.seconds = 0;
    watch.minutes = 0;
    dom.displayMsec.innerText = `0${watch.mseconds}`;
    dom.displaySec.innerText = `0${watch.seconds}`;
    dom.displayMin.innerText = `0${watch.minutes}`;
}

//event for set up default values/reset
dom.clearBtn.addEventListener('click', resetFunc);
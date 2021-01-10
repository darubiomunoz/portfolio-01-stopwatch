const start = document.querySelector( '.main-interaction-buttonStart' );
const stop = document.querySelector( '.main-interaction-buttonStop' );
const reset = document.querySelector( '.main-interaction-buttonReset' );

const hr = document.querySelector( '.count-hr' );
const min = document.querySelector( '.count-min' );
const sec = document.querySelector( '.count-sec' );

let interval;
let counterSEC = 0;
let counterMIN = 0;
let counterHR = 0;

function stopCount() {
    clearInterval(interval);
    start.innerHTML = 'Resume';
}

function resetCount() {
    sec.innerHTML = `00`;
    min.innerHTML = `00`;
    hr.innerHTML = `00`;
    if(start.innerHTML === 'Resume') {
        start.innerHTML = 'Start';
    }
}

function startCount() {
    interval = setInterval(myChronometer, 1000);
    if(start.innerHTML === 'Resume') {
        start.innerHTML = 'Start';
    }
}

function myChronometer() {
    counterSEC++;
    if(counterSEC === 60) {
        counterSEC = 0;
        counterMIN++;
    }
    if(counterMIN === 60) {
        counterMIN = 0;
        counterHR++;
    }
    if(counterHR === 24) {
        counterHR = 0;
    }
    printChronometer();
}

function printChronometer() {
    counterSEC < 10 ? sec.innerHTML = `0${counterSEC}` : sec.innerHTML = counterSEC;
    counterMIN < 10 ? min.innerHTML = `0${counterMIN}` : min.innerHTML = counterMIN;
    counterHR < 10 ? hr.innerHTML = `0${counterHR}` : hr.innerHTML = counterHR;
}

start.onclick = startCount;
stop.onclick = stopCount;
reset.onclick = resetCount;
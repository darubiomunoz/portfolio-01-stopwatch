const start = document.querySelector( '.main-interaction-buttonStart' );
const stop = document.querySelector( '.main-interaction-buttonStop' );
const reset = document.querySelector( '.main-interaction-buttonReset' );

const hr = document.querySelector( '.count-hr' );
const min = document.querySelector( '.count-min' );
const sec = document.querySelector( '.count-sec' );
const milisec = document.querySelector( '.count-milisec' );

let interval;
let counterMLSEC = 0;
let counterSEC = 0;
let counterMIN = 0;
let counterHR = 0;

function stopCount() {
    clearInterval(interval);
    if(counterMLSEC > 0 && start.innerHTML === 'Start') {
        start.innerHTML = 'Resume'
    }
}

function resetCount() {
    counterMLSEC = 0;
    counterSEC = 0;
    counterMIN = 0;
    counterHR = 0;

    milisec.innerHTML = `00`;
    sec.innerHTML = `00`;
    min.innerHTML = `00`;
    hr.innerHTML = `00`;
    
    stopCount();

    if(start.innerHTML === 'Resume') {
        start.innerHTML = 'Start';
    }
}

function startCount() {
    if(counterMLSEC === 0 || start.innerHTML === 'Resume') {
        interval = setInterval(myChronometer, 10);
    }
    if(start.innerHTML === 'Resume') {
        start.innerHTML = 'Start';
    }
}

function myChronometer() {
    counterMLSEC++;
    if(counterMLSEC === 100) {
        counterMLSEC = 0;
        counterSEC++;    
    }
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
    counterMLSEC < 10 ? milisec.innerHTML = `0${counterMLSEC}` : milisec.innerHTML = counterMLSEC;
    counterSEC < 10 ? sec.innerHTML = `0${counterSEC}` : sec.innerHTML = counterSEC;
    counterMIN < 10 ? min.innerHTML = `0${counterMIN}` : min.innerHTML = counterMIN;
    counterHR < 10 ? hr.innerHTML = `0${counterHR}` : hr.innerHTML = counterHR;
}

start.onclick = startCount;
stop.onclick = stopCount;
reset.onclick = resetCount;
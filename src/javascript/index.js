function startCount() {
    
    for (let i = 0; i < 60; i++) {
        sec.innerHTML = `${i}`;
    }

}

function stopCount() {
    
}

function resetCount() {
    sec.innerHTML = `00`;
    min.innerHTML = `00`;
    hr.innerHTML = `00`;
}

const start = document.querySelector( '.main-interaction-buttonStart' );
const stop = document.querySelector( '.main-interaction-buttonStop' );
const reset = document.querySelector( '.main-interaction-buttonReset' );
const hr = document.querySelector( '.count-hr' );
const min = document.querySelector( '.count-min' );
const sec = document.querySelector( '.count-sec' );

start.addEventListener( 'click', startCount );
stop.addEventListener( 'click', stopCount );
reset.addEventListener( 'click', resetCount );
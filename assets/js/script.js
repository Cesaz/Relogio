// get the clock elements
let digitalClockEl = document.querySelector('.digital');
let secondsEl = document.querySelector('.p_s');
let minutesEl = document.querySelector('.p_m');
let hoursEl = document.querySelector('.p_h');

// function to update the clock
function clockUpdate() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalClockEl.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // rotate the hands
    let secondsDeg = ((360 / 60) * second) - 90;
    let minutesDeg = ((360 / 60) * minute) - 90;
    let hoursDeg = ((360 / 12) * hour) - 90;
    
    secondsEl.style.transform = `rotate(${secondsDeg}deg)`;
    minutesEl.style.transform = `rotate(${minutesDeg}deg)`;
    hoursEl.style.transform = `rotate(${hoursDeg}deg)`;
}

// add zero in front of numbers less than 10
function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    } else {
        return time;
    }
}

// update the clock every second
setInterval(clockUpdate, 1000);
clockUpdate();
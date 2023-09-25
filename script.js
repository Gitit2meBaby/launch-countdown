const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

let daysCount = 10
let hoursCount = 12
let minutesCount = 59
let secondsCount = 59

setInterval(countdown, 1000);

function countdown() {
    seconds.textContent = secondsCount;

    if (secondsCount == 0) {
        secondsCount = 59;
        minutesCount--;
    } else {
        secondsCount--;
    }

    minutes.textContent = minutesCount;

    if (minutesCount == 0 && secondsCount == 59) {
        minutesCount = 59;
        hoursCount--;
    }

    hours.textContent = hoursCount;

    if (hoursCount == 0 && minutesCount == 59 && secondsCount == 59) {
        hoursCount = 23;
        daysCount--;
    }

    days.textContent = daysCount;

    if (daysCount == 0 && hoursCount == 0 && minutesCount == 59 && secondsCount == 59) {
        clearInterval(interval);
        alert("Lift off!!");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const secondsContainer = document.querySelector('#secondsContainer');
    const minutesContainer = document.querySelector('#minutesContainer');
    const hoursContainer = document.querySelector('#hoursContainer');

    let daysCount = 10;
    let hoursCount = 12;
    let minutesCount = 59;
    let secondsCount = 59;

    let interval = setInterval(countdown, 1000);

    function countdown() {
        seconds.textContent = secondsCount;
        setTimeout(() => {
            console.log(secondsContainer);
            secondsContainer.classList.add('flipped');
        }, 100);

        if (secondsCount === 0) {
            secondsCount = 59;
            minutesCount--;

            if (minutesCount === 0) {
                minutesCount = 59;
                hoursCount--;

                if (hoursCount === 0) {
                    hoursCount = 23;
                    daysCount--;

                    if (daysCount === 0) {
                        clearInterval(interval);
                        alert("Lift off!!");
                    }
                }

                flipCard('hoursContainer');
            }

            flipCard('minutesContainer');
        } else {
            secondsCount--;
        }

        days.textContent = daysCount;
        hours.textContent = hoursCount;
        minutes.textContent = minutesCount;
    }
});

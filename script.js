document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const secondsContainer = document.querySelector('#secondsContainer');
    const minutesContainer = document.querySelector('#minutesContainer');
    const hoursContainer = document.querySelector('#hoursContainer');
    const daysContainer = document.querySelector('#daysContainer');

    let daysCount = 10;
    let hoursCount = 12;
    let minutesCount = 59;
    let secondsCount = 59;

    let interval = setInterval(countdown, 1000);

    let isUserInput = false;

    function countdown() {
        if (isUserInput) {
            const currentDate = new Date();
            const selectedDate = new Date(document.querySelector('#dateInput').value);

            const timeDifference = selectedDate - currentDate;

            if (timeDifference <= 0) {
                const countdownDisplay = document.querySelector('.countdown')
                countdownDisplay.classList.add('hidden')
                title.classList.add('hidden')
                inputContainer.classList.add('hidden')
                icon.classList.add('moving-up')
                return;
            }

            secondsCount = Math.floor((timeDifference / 1000) % 60);
            minutesCount = Math.floor((timeDifference / 1000 / 60) % 60);
            hoursCount = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            daysCount = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        }

        seconds.textContent = secondsCount;
        secondsContainer.classList.add('flipped');
        setTimeout(() => {
            secondsContainer.classList.remove('flipped');
        }, 200);

        if (secondsCount === 0) {
            secondsCount = 59;
            minutesCount--;

            minutesContainer.classList.add('flipped');
            setTimeout(() => {
                minutesContainer.classList.remove('flipped');
            }, 200);

            if (minutesCount === 0) {
                minutesCount = 59;
                hoursCount--;

                hoursContainer.classList.add('flipped');
                setTimeout(() => {
                    hoursContainer.classList.remove('flipped');
                }, 200);

                if (hoursCount === 0) {
                    hoursCount = 23;
                    daysCount--;

                    daysContainer.classList.add('flipped');
                    setTimeout(() => {
                        daysContainer.classList.remove('flipped');
                    }, 200);

                    if (daysCount === 0) {
                        clearInterval(interval);
                        const countdownDisplay = document.querySelector('.countdown')
                        countdownDisplay.classList.add('hidden')
                        title.classList.add('hidden')
                        inputContainer.classList.add('hidden')
                        icon.classList.add('moving-up')
                    }
                }
            }
        } else {
            secondsCount--;
        }

        days.textContent = daysCount;
        hours.textContent = hoursCount;
        minutes.textContent = minutesCount;
    }

    // ENTER YOUR OWN DATE FOR COUNTDOWN
    const icon = document.querySelector('.input-icon');
    const inputContainer = document.querySelector('.input-container');
    icon.addEventListener('click', () => {
        inputContainer.classList.remove('hidden')
        icon.classList.add('hidden')
    })
    const dateInput = document.querySelector('#dateInput');
    const dateText = document.querySelector('#dateText');
    const clickText = document.querySelector('#clickText')
    const title = document.querySelector('#title')
    dateInput.addEventListener('change', () => {
        isUserInput = true;
        dateInput.classList.add('new-date')
        dateText.style.display = "none"
        icon.classList.remove('hidden')
        clickText.classList.add('hidden')
        title.textContent = "Your launching soon!"
    });

});

const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    let interval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.timeRemaining > 0) {
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;



        } else {
            getTime.hours = 0;
            getTime.minutes = 0;
            getTime.seconds = 0;
            return clearInterval(interval);

        }
        if (getTime.hours < 10) {
            timerHours.textContent = '0' + getTime.hours;
        }
        if (getTime.minutes < 10) {
            timerMinutes.textContent = '0' + getTime.minutes;
        }
        if (getTime.seconds < 10) {
            timerSeconds.textContent = '0' + getTime.seconds;
        }
        //     setTimeout(updateClock, 1000);
        //     // setInterval(updateClock, 1000);
        console.log('updateClock');

    };

    interval = setInterval(updateClock, 1000);
};

export default timer;
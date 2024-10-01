let working = true; //indicates whether the timer is in work mode or break mode
const workTime = 25;
const breakTime = 5;
let time = workTime * 60; //time in seconds
let interval; //interval to update the timer
let restart = false; //indicates whether the start button will be used to start the timer or to restart it
let chronometer = document.getElementById("chronometer");
let startButton = document.getElementById("start");
let workArea = document.getElementById("work");
let breakArea = document.getElementById("break");

chronometer.innerText = workTime < 10 ? "0" + `${workTime}:00` : `${workTime}:00`; //display the initial time on the timer


function handleCyclesDisplay() { //change work and break areas display depending on the timer status
    if (working) {
        workArea.classList.add("activestyle"); //switch the "work" area to the active style 
        breakArea.classList.remove("activestyle"); //and remove the active style from the "break" area
    } else {
        breakArea.classList.add("activestyle"); //switch the "break" area to the active style
        workArea.classList.remove("activestyle"); //and remove the active style from the "work" area
    }
}

startButton.addEventListener("click", function () { //the listener on the start button allows to start the timer if clicked once and to restart it if clicked again
    if (!restart) {
        startTimer();
    } else {
        clearInterval(interval); //clear the interval before starting the timer to prevent multiple intervals running at the same time
        startTimer();
    }
});

function startTimer() {
    if (!restart) {
        time = workTime ? workTime * 60 - 1 : breakTime * 60 - 1; //set the time in seconds as the sum of minutes and seconds given by the user
        interval = setInterval(timeEvolution, 1000);
        restart = true;
        startButton.querySelector('em').classList.remove('fa-play');
        startButton.querySelector('em').classList.add('fa-rotate-left'); //change the start button icon to a restart icon
        handleCyclesDisplay(); //change the display of the work and break areas
    } else {
        clearInterval(interval);
        chronometer.innerText = workTime < 10 ? "0" + `${workTime}:00` : `${workTime}:00`; //reset timer display to initial value
        restart = false;
        startButton.querySelector('em').classList.remove('fa-rotate-left');
        startButton.querySelector('em').classList.add('fa-play'); //switch back the restart button icon to the original play icon
        working = true;
        handleCyclesDisplay(); //reset the work and break areas display
    }
}

function timeEvolution() {
    handleCyclesDisplay();
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    if (minutes < 10) {
        minutes = "0" + minutes; //display the minutes with a leading zero if they are less than 10
    }
    if (seconds < 10) {
        seconds = "0" + seconds; //display the seconds with a leading zero if they are less than 10
    }
    chronometer.innerText = `${minutes}:${seconds}`;
    if (time <= 0) {
        working = !working;
        time = working ? workTime * 60 : breakTime * 60;
    } else {
        time--;
    }
}

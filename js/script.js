
let working = true; //indicates whether the timer is in work mode or break mode
const workTime = 0.1; 
const breakTime = 0.2;
let time = workTime * 60; //time in seconds
let interval; //interval to update the timer

let restart = false; //indicates whether the start button will be used to start the timer or to restart it

let chronometer = document.getElementById("chronometer");
let startButton = document.getElementById("start");
let workArea = document.getElementById("work");
let breakArea = document.getElementById("break");



function handleCyclesDisplay(){ //change work and break areas display depending on the timer status
    if(working){
        workArea.classList.add("activestyle");
        breakArea.classList.remove("activestyle");

    } else{
        breakArea.classList.add("activestyle");
        workArea.classList.remove("activestyle");
    }
}

startButton.addEventListener("click", function(){ //the listener on the start button allows to start the timer if clicked once and to restart it if clicked again
    if(!restart){
        startTimer();
    } else{
        clearInterval(interval);
        startTimer();
    }
});

function startTimer(){

    time = workTime ? workTime * 60 - 1 : breakTime * 60 - 1;
    interval = setInterval( timeEvolution, 1000);
    restart = true;
    handleCyclesDisplay(); //change the display of the work and break areas
    /*switch(working){
        case true:
            chronometer.textContent = workTime;
            break;  
        case false:
            chronometer.textContent = breakTime;
            break;
    }*/
    //interval = setInterval( timeEvolution, 1000);
} 

function timeEvolution(){
    handleCyclesDisplay();
    let minutes = parseInt(time / 60, 10); 
    let seconds = parseInt(time % 60, 10);

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    chronometer.innerText = `${minutes}:${seconds}`;

    if(time <=0){

        working = !working;
        time = working ? workTime * 60 : breakTime * 60 ;
        /*working = false;
        time = breakTime * 60;*/
    }else{
        time--;
    }
}

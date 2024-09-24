
let running = false;
const workTime = 25;
const breakTime = 5;

let chronometer = document.getElementById("chronometer");
let workArea = document.getElementById("work");
let breakArea = document.getElementById("break");



chronometer.addEventListener("click", function(){ //the listener on the start button allows to start the timer if clicked
    if(!running){
        startTimer();
    } else{
        running = false;
        clearInterval(timer);
    }
});

function startTimer(){
    running = true;
    chronometer.textContent = workTime;
    let timer = setInterval(function(){
        let minutes = parseInt(chronometer.textContent.split(":")[0]); //split the chronometer text content to get the minutes and seconds
        let seconds = parseInt(chronometer.textContent.split(":")[1]);


        if(seconds > 0){
            seconds--;
        }else if(minutes > 0){ 
            minutes--;
            seconds = 59;
        }else{
            clearInterval(timer);
            chronoStatus = "stopped";
            chronometer.textContent = breakTime;
        }

        chronometer.textContent = minutes + ":" + seconds;
    }, 1000);
}
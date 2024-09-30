
let working = true;
const workTime = 0.1;
const breakTime = 2;
let time = workTime * 60;

let chronometer = document.getElementById("chronometer");
let startButton = document.getElementById("start");
let workArea = document.getElementById("work");
let breakArea = document.getElementById("break");

let interval;

function handleCyclesDisplay(){ //change work and break areas display depending on the timer status
    if(working){
        workArea.classList.add("activestyle");
        breakArea.classList.remove("activestyle");

    } else{
        breakArea.classList.add("activestyle");
        workArea.classList.remove("activestyle");
    }
}

startButton.addEventListener("click", function(){ //the listener on the start button allows to start the timer if clicked
    // faire un booleen pour savoir si c'est le bouton demarrer ou le bouton restart
    if(working){
        startTimer();
    } else{
        working = false;
        interval = clearInterval(timer);
    }
});

function startTimer(){
    handleCyclesDisplay(); //change the display of the work and break areas
    /*switch(working){
        case true:
            chronometer.textContent = workTime;
            break;  
        case false:
            chronometer.textContent = breakTime;
            break;
    }*/
    interval = setInterval( timeEvolution, 1000);
} 

function timeEvolution(){
    let minutes = parseInt(time / 60, 10); //split the chronometer text content to get the minutes and seconds
    let seconds = parseInt(time % 60, 10);

    if(minutes < 10){
        minutes = "0" + minutes;
    }if(seconds < 10){
        seconds = "0" + seconds;
    }
    chronometer.innerText = `${minutes}:${seconds}`;

    if(time <=0){
        working = false;
        time = breakTime * 60;
    }else{
        time--;
    }


    /*if(seconds > 0){
        seconds--;
    }else if(minutes > 0){ 
        minutes--;
        seconds = 59;
    }else{
        clearInterval(timer);
        working = !working;
        try{handleCyclesDisplay();} catch(e){console.log(e);}
        chronometer.textContent = breakTime;
        console.log("break");
        minutes = parseInt(chronometer.textContent.split(":")[0]);
        seconds = parseInt(chronometer.textContent.split(":")[1]);
        if (isNaN(seconds)){
            seconds = 0;
        }
        
    }*/
    //chronometer.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`; //display the time in the chronometer 
}

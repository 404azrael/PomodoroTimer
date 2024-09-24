
let working = false;
const workTime = 1;
const breakTime = 5;

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

startButton.addEventListener("click", function(){ //the listener on the start button allows to start the timer if clicked
    if(!working){
        startTimer();
    } else{
        working = false;
        clearInterval(timer);
    }
});

function startTimer(){
    working = true;
    handleCyclesDisplay(); //change the display of the work and break areas
    switch(working){
        case true:
            chronometer.textContent = workTime;
            break;  
        case false:
            chronometer.textContent = breakTime;
            break;
    }
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
            working = !working;
            try{handleCyclesDisplay();} catch(e){console.log(e);}
            chronometer.textContent = breakTime;
            console.log("break");
            minutes = parseInt(chronometer.textContent.split(":")[0]);
            seconds = parseInt(chronometer.textContent.split(":")[1]);
            if (isNaN(seconds)){
                seconds = 0;
            }
            
        }

        chronometer.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`; //display the time in the chronometer 
    }, 1000);
} 
function timeToString(time) {
    // Calculate hours
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    
    // Calculate minutes
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    
    // Calculate seconds
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
};

let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
    document.getElementById("display").innerHTML = txt;
};

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
    document.getElementById("play-button").style.display = "none";
    document.getElementById("pause-button").style.display = "block";
};

function pause() {
    clearInterval(timerInterval);
    document.getElementById("play-button").style.display = "block";
    document.getElementById("pause-button").style.display = "none";
};

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    document.getElementById("play-button").style.display = "block";
    document.getElementById("pause-button").style.display = "none";
};

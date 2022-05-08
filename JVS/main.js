let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

let showCurrentTime = function(setHour) {
    let clock = document.getElementById('clock');
    let alertMessage = document.getElementById('timeEvent');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

    if (checkEqualTimeSetting(hours, setHour)) {
        alertMessage.style.display = "block";
    } else {
        alertMessage.style.display = "none";
    }

};

const checkEqualTimeSetting = function(hour, setHour) {
    let dingding = false;

    if (parseInt(hour) === parseInt(setHour)) {
        dingding = true;
    }

    return dingding;
}


const showHours = function() {
    const limitHour = 24;
    let html = "";

    for (let i = 0; i < limitHour; i++) {
        let checkNumber = i < 10 ? `0${i}` : i;
        let checkAM_PM = checkNumber < 12 ? 'AM' : "PM";

        html += `<option value="${checkNumber}">${checkNumber} ${checkAM_PM}</option>`;
    }

    document.getElementById('hours').innerHTML = html;
}

showHours();

setInterval(function() {
    let currentTime = new Date();

    let hours = document.getElementById("hours").value;

    showCurrentTime(hours);

}, 1000);
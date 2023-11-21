const targetdate = "1 Jan 2024";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secsEl = document.getElementById("secs");


function countDown(){
    const targetDate = new Date(targetdate);
    const currentDate = new Date();

    const totalseconds = (targetDate-currentDate)/1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor((totalseconds / 3600) % 24);
    const minutes = Math.floor((totalseconds / 60) % 60); 
    const seconds = Math.floor(totalseconds % 60);
    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? '0' + time : time;
}

//countDown();

setInterval(countDown, 1000);
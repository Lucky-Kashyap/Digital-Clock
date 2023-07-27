// select elements or target elements

let time = document.getElementById('time');
let timeFormat = document.getElementById('timeformat');


document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime,1000);
});


const showTime = ()=>{
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = hour<10 ? `0${hour}`:hour;
    min = min<10?`0${min}` : min;
    sec = sec<10?`0${sec}`:sec;

    time.innerHTML = `${hour} : ${min} : ${sec}`

    timeFormat.innerHTML = hour>12?"PM":"AM";

}
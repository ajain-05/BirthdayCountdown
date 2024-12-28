function BirthdayTimer(){
    const Days = document.getElementById("day");
    const Hours = document.getElementById("hour");
    const Minutes = document.getElementById("minute")
    const Seconds = document.getElementById("second")
    const date1 = new Date()
    const date2 = new Date("2025-08-16T00:00:00")
    const date = date2-date1;
    const day = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60)
    const second = Math.floor((date/1000)%60)
    Days.innerHTML = day;
    Hours.innerHTML = hour
    Minutes.innerHTML = minute
    Seconds.innerHTML = second
}



setInterval(BirthdayTimer,1000);



(function () {
    var wrap = document.getElementsByClassName('classroom-cont')[0];
    var hourBox = wrap.getElementsByClassName('hour')[0];
    var minuteBox = wrap.getElementsByClassName('minute')[0];
    var secondBox = wrap.getElementsByClassName('second')[0];
    init();
    function init () {
        countTime();
    }
    function countTime () {
        var hour, minute ,second;
        var date = new Date();
        var str = '';
        if(date.getHours() < 11 && date.getMinutes() < 60 && date.getSeconds() < 60) {
            hour = 11 - date.getHours();
        }else if(date.getHours() < 13 && date.getMinutes() < 60 && date.getSeconds() < 60) {
            hour = 13 - date.getHours();
        }else if(date.getHours() < 15 && date.getMinutes() < 60 && date.getSeconds() < 60) {
            hour = 15 - date.getHours();
        }else{
            hour = 35 - date.getHours();
        }
        minute = 59 - date.getMinutes();
        second = 59 - date.getSeconds();
        time(hour,minute,second);
    }
    function time (hour,minute,second) {
        hourBox.innerText = hour;
        minuteBox.innerText = minute;
        secondBox.innerText = second;
    }
    setInterval(init,1000)
} ())
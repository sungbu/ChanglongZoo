(function () {
    var oUl = document.getElementsByClassName('titleList')[0];
    var oLis = oUl.getElementsByTagName('li');
    var len = oLis.length;
    var oIndex = 0;
    var timer = null;
    init();
    function init () {
        play();
        bindeEvent();
    }
    function play () {
        timer = setInterval(function () {
            if(oIndex == 4){
                oIndex = 1
            }
            for(var i = 0; i <len; i++ ){
                
            oLis[i].className = '';
            }
            oLis[oIndex].className = 'active';
            oIndex ++;
        },2000)
    }
    function bindeEvent () {
        oUl.onmouseover = function () {
            clearInterval(timer);
        }
        oUl.onmouseout = function () {
            play();
        }
    }
} ())
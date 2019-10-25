(function () {
    var classroomBar = document.getElementsByClassName('nav')[0];
    var oLis = classroomBar.getElementsByTagName('li');
    var wraps = [document.getElementsByClassName('minWrap')[0],document.getElementsByClassName('zooWrap')[0],document.getElementsByClassName('classroomWrap')[0],document.getElementsByClassName('shoppingWrap')[0],document.getElementsByClassName('shoppingWrap')[0],document.getElementsByClassName('serviceWrap')[0],document.getElementsByClassName('serviceWrap')[0]];
    // var classroomTop = classroom.offsetTop;
    // console.log(classroomTop);  
    init();
    function init () {
        bindEvent();
    }
    function bindEvent () {
        for(var i = 0; i < oLis.length ; i ++) {
            (function (i) {
                var ioffset = wraps[i].offsetTop;
                oLis[i].onclick = function (e) {
                e.preventDefault();
                var speed = document.documentElement.scrollTop + document.body.scrollTop || window.pageYOffset;
                timer  = setInterval(function () {
                    if(speed >= ioffset) {
                        window.scrollTo(0,ioffset);
                        clearInterval(timer)
                    }else{
                        window.scrollTo(0,speed);
                    }
                    speed+=200;
                },10)
            }
            } (i))
        }
    }
} ())
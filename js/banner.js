(function (move) {
    var wrap = document.getElementsByClassName('banner')[0];
    var pevBtn = wrap.getElementsByClassName('prev')[0];
    var nextBtn = wrap.getElementsByClassName('next')[0];
    var oUl = wrap.getElementsByClassName('imgBox')[0];
    var oLi = oUl.getElementsByTagName('li')[0];
    var oIndex = 0;
    var imgWidth = oLi.offsetWidth;
    var imgLen = oUl.getElementsByTagName('li').length - 1;
    var list = wrap.getElementsByClassName('list')[0].children;
    var oIndex = 0;
    var timer = null;
    var lock = true;
    var flog = true;
    init();
    function init() {
        bindEvent();
        automatic();
        listStyle();
    }
    function bindEvent() {
        nextBtn.onclick = function () {
            play('next');
        }
        pevBtn.onclick = function () {
            play('pev');
        }
        wrap.onmouseover = function () {
            clearTimeout(timer);
            lock = false;
        }
        wrap.onmouseout = function () {
            timer = setTimeout(function () {
                play('next');
            }, 3000)
            lock = true;
        }
    }
    function play(acType) {
        if(flog) {
            flog = false;
            if (acType == 'pev') {
            if (oIndex == 0) {
                oUl.style.marginLeft = - imgWidth * imgLen + 'px';
                oIndex = 3;
            }
            oIndex--;
            for (var i = 0; i < imgLen; i++) {
                list[i].className = '';
            }
            if (oIndex == 3) {
                list[0].className = 'active'
            } else {
                list[oIndex].className = 'active'
            }
            move(oUl, { marginLeft: -(oIndex * imgWidth) },function () {
                flog = true;
            });
        } else if (acType == 'next') {
            if (oIndex == 3) {
                oUl.style.marginLeft = '0px';
                oIndex = 0;
            }
            oIndex++;
            for (var i = 0; i < imgLen; i++) {
                list[i].className = '';
            }
            if (oIndex == 3) {
                list[0].className = 'active'
            } else {
                list[oIndex].className = 'active'
            }
            move(oUl, { marginLeft: -(oIndex * imgWidth) }, function () {
                flog = true;
                if (lock) {
                    timer = setTimeout(function () {
                        play('next');
                    }, 3000)
                }
            });
        }
        }
    }
    function automatic() {
        timer = setTimeout(function () {
            play('next');
        }, 3000)
    }
    function listStyle() {
        for (var i = 0; i < imgLen; i++) {
            (function (i) {
                list[i].onclick = function () {
                    oIndex = i; 
                    move(oUl, { marginLeft: -(oIndex * imgWidth) })
                    for(var j = 0; j < imgLen; j ++) {
                        list[j].className = '';
                    }
                    this.className = 'active';
                }
            }(i))
        }
    }
}(move))

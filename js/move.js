function getStyle (dom,attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(dom,null)[attr]
    }else{
        return dom.currentStyle[attr]
    }
}
function move(dom, attrObj, callBack) {
    var iCur = undefined, iSpeed = undefined;
    clearInterval(dom.timer);
    dom.timer = setInterval(function () {
        var flog = true;
        for (var attr in attrObj) {
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(dom, attr)) * 100;
            } else {
                iCur = parseInt(getStyle(dom, attr))
            }
            iSpeed = (attrObj[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == 'opacity') {
                dom.style.opacity = (iCur + iSpeed) / 100
            } else {
                dom.style[attr] = (iCur + iSpeed) + 'px'
            }
            if (iCur != attrObj[attr]) {
                flog = false;
            }
        }
        if (flog) {
            clearInterval(dom.timer);
            typeof callBack == 'function' && callBack();
        }
    }, 30)
}
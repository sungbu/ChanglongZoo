window.assistant = function (dom,arr) {
    var that = dom;
    var oLis = that.getElementsByTagName('li');
    var len = oLis.length;
    var wrap = document.getElementsByClassName('assistant')[0];
    var content = wrap.getElementsByClassName('content')[0];
    var close = wrap.getElementsByClassName('close')[0];
    var str = '';
    var opacity = 0;
    var timer = null;
    var timer2 = null;
    function init () {
        creatDom();
        bindEvent();
    }
    function creatDom () {
        for(var i = 0; i < len; i ++){
            (function (i) {
                oLis[i].onclick = function () {
                    str = '<div class="imgBox"><img src="'+arr[i].imgSrc+'"></div>\
                        <div class="fonts"><h1>'+arr[i].title+'</h1><p>'+arr[i].des+'</p></div>';
                    content.innerHTML = str;
                    wrap.style.display = 'block';
                    console.log(i);
                    
                }
            } (i))
        }
    }
    function bindEvent () {
        close.onclick = function () {
                wrap.style.display = 'none'
        }
    }
    return init();
}
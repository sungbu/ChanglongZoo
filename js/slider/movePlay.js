window.movePlay = function (dom) {
    var that = dom;
    var wrapWidth = that.offsetWidth;
    var oLis = that.getElementsByTagName('li');
    var oLisLen = oLis.length;
    var oUl = that.getElementsByClassName('picBox')[0];
    var oLi1 = oLis[0];
    var oLi1Width = oLi1.offsetWidth + parseInt(window.getComputedStyle(oLi1,null).marginLeft);
    var btn = that.getElementsByClassName("btn")[0];
    var prev = btn.getElementsByClassName('prev')[0];
    var next = btn.getElementsByClassName('next')[0];
    var assistant = document.getElementsByClassName('assistant')[0];
    var chack = -(oLi1Width * oLisLen - wrapWidth);
    function init (dom) {
        domRedom();
        bindEvent();
    }
    function domRedom (){
        if(wrapWidth >= oLi1Width * oLisLen){
            btn.style.display = 'none';
        }
    }
    function bindEvent () {
        prev.onclick = function () {
            if(parseInt(window.getComputedStyle(oUl,null).marginLeft) >= 0){
                this.className = ' ';
                next.className = 'active';
                oUl.style.marginLeft = 0;
            }else{
                oUl.style.marginLeft = parseInt(window.getComputedStyle(oUl,null).marginLeft) + oLi1Width + 'px'
                this.className = 'active'; 
                next.className = 'active'
            } 
        }
        next.onclick = function () {
            if(parseInt(window.getComputedStyle(oUl,null).marginLeft) <= chack) {
                this.className = ' ';
                prev.className = 'active';
                oUl.style.marginLeft = chack - 70 + 'px';
            }else{
                oUl.style.marginLeft = parseInt(window.getComputedStyle(oUl,null).marginLeft) - oLi1Width  + 'px'
                this.className = 'active';
                prev.className = 'active';
            }
            // console.log(parseInt(window.getComputedStyle(oUl,null).marginLeft))
           
        }
    }
    return init
}
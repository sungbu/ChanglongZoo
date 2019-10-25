(function () {
    var wrap = document.getElementsByClassName('shopping-cont')[0];
    var oLis = wrap.getElementsByTagName('li');
    var inp = wrap.getElementsByClassName('inp');
    var add = wrap.getElementsByClassName('add');
    var rem = wrap.getElementsByClassName('rem');
    var len = oLis.length;
    for(var i = 0; i < len; i ++){
        (function (i) {
            add[i].onclick = function () {
            if (inp[i].value >= 6){
                inp[i].value = 6
            }else{
                inp[i].value ++
            }
            }
            rem[i].onclick = function () {
                if (inp[i].value <= 0){
                    inp[i].value = 0
                }else{
                    inp[i].value --
                }
            }
        } (i))
    }
} ())
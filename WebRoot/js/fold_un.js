// 查看舱位展开折叠效果
function ShowFLT(n) {
    var subn = n;
    var num_n = subn.substr(9);
    var lb = document.getElementById(n);
    var classElements = [], allElements = document.getElementsByTagName('*');
    if (lb.className == 'a_but2') {
        lb.className = 'a_but1';
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == subn) {
                allElements[i].style.display = '';
            }
        }
    }//展开时效果
    else {
        lb.className = 'a_but2';
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == subn) {
                allElements[i].style.display = 'none';
            }
        }
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == 'disp' + num_n) {
                allElements[i].style.display = '';
            } //最低价总是显示
        }
    }//折叠效果
}
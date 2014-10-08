// 退票改签效果
//鼠标经过时效果
function showcont(event, aid) {
    var x, y;
    x = event.clientX; //获得x对应的坐标
    y = event.clientY;
    var aa = aid;
    var aa_sum = aa.substr(2);
    var scrollTop = $(document).scrollTop(); //当出现滚动条时距上面的高度
    var scrollLeft = $(document).scrollLeft();//当出现滚动条时距左面的高度

    var st_num = parseInt(scrollTop);
    var tid = 'ticket_add' + aa_sum;
//确定位置
    document.getElementById(tid).style.left = x + scrollLeft - 600 + 'px';
    document.getElementById(tid).style.top = y + scrollTop + 15 + 'px';
    document.getElementById(tid).style.display = "";
}
//鼠标移开时隐藏
function hiddencont(aid) {
    var aa = aid;
    var aa_sum = aa.substr(2);
    var tid = 'ticket_add' + aa_sum;
    document.getElementById(tid).style.display = "none";
} 
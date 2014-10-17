//显示联系人
function show_Cntmsg() {
    var x = $("#show_Ctmsg").offset().top;
    var y = $("#show_Ctmsg").offset().left; //得到位置
    document.getElementById("show_Cmsg").style.left = y + 'px';
    document.getElementById("show_Cmsg").style.top = x + 25 + 'px';
    document.getElementById("show_Cmsg").style.display = "block";
}
//关闭联系人
function cls_Cmsg() {
    document.getElementById("show_Cmsg").style.display = "none";
}
//添加联系人
function add_lgmsgC(cnt_id) {
    var Cnt_num = cnt_id.substr(9);
    var Cnt1_num = parseInt(Cnt_num, 10);

    $(lxml).find('Travller').each(function (i) {
        var C_name = $(this).children('name').text();//姓名
        var C_tel = $(this).children('tel').text();//电话
        var C_mail = $(this).children('mail').text();//邮箱
        if (i == Cnt1_num) {
            if (document.getElementById(cnt_id).checked) {
                document.getElementById("ck_name").value = C_name;
                document.getElementById("check_tel").value = C_tel;
                document.getElementById("p_email").value = C_mail;
            }
        }
    });
}
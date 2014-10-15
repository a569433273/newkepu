//单个表单验证
//用户名onfocus
function ck_Unm(id_nm) {
    var id1_nm = document.getElementById(id_nm).value;
    if (id1_nm == "") {
        document.getElementById("ck_Nm").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>&nbsp;";
    }
}
//用户名onkeyup
function ck_Unm1(id_nm) {
    var id1_nm = document.getElementById(id_nm).value;
    var id1_len = id1_nm.length;
    var patrn = /^[a-zA-Z0-9][a-zA-Z0-9]*$/;
    if (id1_nm == "") {
        document.getElementById("ck_Nm").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>&nbsp;";
    }
    else {

        if (id1_len >= 6 && patrn.exec(id1_nm)) {
            document.getElementById("ck_Nm").innerHTML = "<img src='../images/right_ck.jpg' style='margin-top:10px;'/>&nbsp;";
        }
        else {
            document.getElementById("ck_Nm").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>&nbsp;";
        }
    }
}
//手机号onfocus
function ck_Tel(id_nm) {
    var id1_nm = document.getElementById("u_tel").value;
    if (id1_nm == "") {
        document.getElementById("ck_Tel").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>";
    }
}
function ck_Tel1(id_nm) {
    var id1_nm = document.getElementById("u_tel").value;
    var patrn = /^0?(13[0-9]|15[012356789]|18[0236789]|17[0123456789]|14[57])[0-9]{8}$/;
    if (id1_nm == "") {
        document.getElementById("ck_Tel").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>";
    }
    else {
        if (patrn.exec(id1_nm)) {
            document.getElementById("ck_Tel").innerHTML = "<img src='../images/right_ck.jpg' style='margin-top:10px;'/>";
        }
        else {
            document.getElementById("ck_Tel").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>";
        }
    }
}
//密码
function ck_Pwd(id_nm) {
    var id1_nm = document.getElementById("u_pwd").value;
    if (id1_nm == "") {
        document.getElementById("ck_pwd").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>";
    }
    else {
        document.getElementById("ck_pwd").innerHTML = "";
    }
}
function ck_Pwd1(id_nm) {
    var id1_nm = document.getElementById("u_pwd1").value;
    if (id1_nm == "") {
        document.getElementById("ck_pwd1").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>";
    }
    else {
        document.getElementById("ck_pwd1").innerHTML = "";
    }
}
function ck_Pwd3(id_nm) {
    var id1_nm = document.getElementById("u_pwd").value;
    var id2_nm = document.getElementById("u_pwd1").value;
    if (id2_nm != "") {
        document.getElementById("ck_pwd1").innerHTML = "";
    }
    if (id1_nm == id2_nm && id1_nm != "" && id2_nm != "") {
        document.getElementById("ck_pwd1").innerHTML = "<img src='../images/right_ck.jpg' style='margin-top:10px;'/>";
    }
}
//确认密码
function ck_pwd2(id_nm) {
    var id1_nm = document.getElementById("u_pwd").value;
    var id2_nm = document.getElementById("u_pwd1").value;
    if (id1_nm == id2_nm && id1_nm != "" && id2_nm != "") {
        document.getElementById("ck_pwd1").innerHTML = "<img src='../images/right_ck.jpg' style='margin-top:10px;'/>";
    }
    else {
        if (id1_nm != "" && id2_nm != "") {
            document.getElementById("ck_pwd1").innerHTML = "<span style='font-size:12px; color:#f7931b; line-height:40px;'>两次密码不一致</span>";
        }
    }
}
//短信验证码
function ck_Msg(id_nm) {
    var id1_nm = document.getElementById("u_msg").value;
    if (id1_nm == "") {
        document.getElementById("ck_msg").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>&nbsp;";
    }
    else {
        document.getElementById("ck_msg").innerHTML = "";
    }
}
//邀请码
function ck_Weck(id_nm) {
    var id1_nm = document.getElementById("u_weck").value;
    var id1_clen = id1_nm.length;
    if (id1_nm == "" || id1_clen != 6) {
        document.getElementById("ck_weck").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>&nbsp;";
    }
    else {
        document.getElementById("ck_weck").innerHTML = "";
    }
}
//验证码
function ck_Code(id_nm) {
    var id1_nm = document.getElementById("u_code").value;
    if (id1_nm == "") {
        document.getElementById("ck_code").innerHTML = "<img src='../images/wrong_ck.jpg' style='margin-top:10px;'/>&nbsp;";
    }
    else {
        document.getElementById("ck_code").innerHTML = "";
    }
}
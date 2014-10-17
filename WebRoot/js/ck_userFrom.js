// 验证我的资料表单
//姓名判断
function ck_Nm() {
    var Nm1 = document.getElementById("pu_name").value;
    var Nm1_len = Nm1.length;
    var patrn = /^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5]*$/;//中文
    var patrn1 = /^([A-Za-z]+\s?)*[A-Za-z]$/;//英文
    var patrn2 = /^[\u4e00-\u9fa5]{1,}[A-Za-z]*$/;
    if (!patrn.exec(Nm1)) {
        if (patrn1.exec(Nm1) || patrn2.exec(Nm1)) {
            if (Nm1_len < 26) {
                document.getElementById("ck_wnm").innerHTML = "";
            }
            else {
                document.getElementById("ck_wnm").innerHTML = "<img src='../images/wrong_ck.jpg' />";
            }
        }
        else {
            document.getElementById("ck_wnm").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        }
    }
    else {
        document.getElementById("ck_wnm").innerHTML = "";
    }

}
//出生日期
function ck_Birth() {

    var Bir1 = document.getElementById("pu_date").value; //出生日期输入框
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (partn.exec(Bir1)) {
        var d_val_date = new Date(Date.parse(Bir1.replace(/-/g, "/")));
        var curDate = new Date();
        if (d_val_date > curDate) {
            alert("请输入小于当前日期的格式");
            document.getElementById("pu_date").value = "";
            document.getElementById("ck_wbir").innerHTML = "<img src='../images/wrong_ck.jpg' />";

        }
        else {
            document.getElementById("ck_wbir").innerHTML = "";
        }
    }
    else {
        document.getElementById("ck_wbir").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }
}
//证件号码
function ck_wcrd() { //onkeyup
    var Crd1 = document.getElementById("pu_card").value; //证件输入框
    var Crd3_tp = document.getElementById("pu_crdtp").selectedIndex;//证件类型
    var Crd3_tp1 = document.getElementById("pu_crdtp").options[Crd3_tp].text;
    if (Crd3_tp1 == '身份证') {
        if (cidInfo(Crd1) != '1') {
            document.getElementById("ck_wcrd").innerHTML = "";
        }
        else {
            document.getElementById("ck_wcrd").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        }
    }//身份证
    else {
        if (Crd1 == '') {
            document.getElementById("ck_wcrd").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        } else {
            document.getElementById("ck_wcrd").innerHTML = "";
        }
    }
}
function ck_wbcrd() { //onblur
    var flag = 0;
    var flag1 = 0;
    var Crd1 = document.getElementById("pu_card").value; //证件输入框
    var Crd3_tp = document.getElementById("pu_crdtp").selectedIndex;//证件类型
    var Crd3_tp1 = document.getElementById("pu_crdtp").options[Crd3_tp].text;
    var Bir1 = document.getElementById("pu_date").value; //出生日期输入框
    //是否为正确的出生日期
    var partn = /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
    if (partn.exec(Bir1)) {
        document.getElementById("ck_wbir").innerHTML = "";
    }
    else {
        flag1 = 1;
        document.getElementById("ck_wbir").innerHTML = "<img src='../images/wrong_ck.jpg' />";
    }

    //是否为正确的出生日期over
    //是否为正确的身份证
    if (Crd3_tp1 == '身份证') {
        if (cidInfo(Crd1) != '1') {
            document.getElementById("ck_wcrd").innerHTML = "";
            var Bir_Year = Crd1.substr(6, 4);
            var Bir_Mon = Crd1.substr(10, 2);
            var Bir_Day = Crd1.substr(12, 2);
            var Bir_dy = Bir_Year + '-' + Bir_Mon + '-' + Bir_Day;
            document.getElementById("pu_date").value = Bir_dy;
        }
        else {
            flag = 1;
            document.getElementById("ck_wcrd").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        }
    }//身份证
    else {
        flag = 1;
        if (Crd1 == '') {
            document.getElementById("ck_wcrd").innerHTML = "<img src='../images/wrong_ck.jpg' />";
        } else {
            document.getElementById("ck_wcrd").innerHTML = "";
        }
    }
    //是否为正确的身份证 over
    //Bir1!='';

}
	
//乘机人关闭
function close_msg() {
    document.getElementById("show_log_msg").style.display = "none"
}
//乘机人显示
function show_logmsg(lg_id) {
    var x = $("#" + lg_id).offset().top;
    var y = $("#" + lg_id).offset().left; //得到位置
    document.getElementById("show_log_msg").style.left = y + 'px';
    document.getElementById("show_log_msg").style.top = x + 25 + 'px';
    document.getElementById("show_log_msg").style.display = "block";
}
//姓名选中添加onclick
function add_lgmsg(nne_id) {
    var nne_num = nne_id.substr(8);
    var nne_num1 = parseInt(nne_num, 10);
    var seat = document.getElementById("seat_hide");
    var seat_val = seat.innerHTML;
    var seat_int = parseInt(seat_val);
    var travllerurl = "orderajax.action"

    var nne_name = "";//姓名
    var nne_pid = ""; //是否本人账号 0注册帐号本人 1 不是注册帐号本人
    var nne_ptype = "";//成人或儿童  0 成人 1 儿童
    var nne_zjtype = "";//证件类型  0 身份证 1 护照 4 其他
    var nne_pcard = "";//证件号
    var nne_psex = "";//性别
    var nne_pbirth = ""; //生日
    var int_add = 0;//选中姓名的个数
    var int_add1 = 0;//添加的个数
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "add_lgmg") {
            if (allElements[i].checked) {
                int_add = int_add + 1;
            }
        }
    }
    //将数据读取出来ajax
    $(txml).find('Travller').each(function (i) {
        var P_name = $(this).children('name').text();//姓名
        var P_benren = $(this).children('benren').text();//是否本人账号 0注册帐号本人 1 不是注册帐号
        var P_ptype = $(this).children('type').text();//成人或儿童  0 成人 1 儿
        var P_zjtype = $(this).children('zjtype').text();//证件类型  0 身份证 1 护照 4 其他
        var P_zjnum = $(this).children('zjnum').text();//证件号
        var P_sex = $(this).children('sex').text();//性别
        var P_birth = $(this).children('birth').text();//生日
        if (i == nne_num1) {
            if (document.getElementById(nne_id).checked) {
                nne_name = P_name;
                nne_pid = P_benren;
                nne_ptype = P_ptype;
                nne_zjtype = P_zjtype;
                nne_zjtyp = P_zjnum;
                nne_psex = P_sex;
                nne_pbirth = P_birth;
                if (int_add == 1) {
                    var classElements = [], allElements = document.getElementsByTagName('*');
                    for (var K = 0; K < allElements.length; K++) {
                        if (allElements[K].className == "t_1") {
                            var psglgin_id = $(allElements[K]).attr("id");
                        }
                    }
                    var psglgin_nm = psglgin_id.substr(6);
                    document.getElementById("len_pAR" + i).value = psglgin_nm;
                    var len_psgNm = document.getElementById("len_pAR" + i).value;
                    document.getElementById("Pbenren" + len_psgNm).value = nne_pid;//是否本人
                    document.getElementById("psg_name" + len_psgNm).value = nne_name;//姓名
                    //证件类型
                    if (nne_zjtype == "0") {
                        document.getElementById("p_card" + len_psgNm).options[0].selected = true;
                        document.getElementById("idCard_" + len_psgNm).value = nne_zjtyp;
                    }
                    else if (nne_zjtype == "1") {
                        document.getElementById("p_card" + len_psgNm).options[1].selected = true;
                        set_sex("p_card" + len_psgNm);
                        document.getElementById("input_cardnock" + len_psgNm).value = nne_zjtyp;
                        //性别
                        if (nne_psex == '男') {
                            document.getElementById("dt_inputsex" + len_psgNm).options[0].selected = true;
                        }
                        else {
                            document.getElementById("dt_inputsex" + len_psgNm).options[1].selected = true;
                        }
                        //性别over
                        //出生日期
                        document.getElementById("dt_input" + len_psgNm).value = nne_pbirth;
                        //出生日期over
                    }
                    else if (nne_zjtype == "4") {
                        document.getElementById("p_card" + len_psgNm).options[2].selected = true;
                        set_sex("p_card" + len_psgNm);
                        document.getElementById("input_cardnock" + len_psgNm).value = nne_zjtyp;
                        //性别
                        if (nne_psex == '男') {
                            document.getElementById("dt_inputsex" + len_psgNm).options[0].selected = true;
                        }
                        else {
                            document.getElementById("dt_inputsex" + len_psgNm).options[1].selected = true;
                        }
                        //性别over
                        //出生日期
                        document.getElementById("dt_input" + len_psgNm).value = nne_pbirth;
                        //出生日期over
                    }
                    //证件类型 over
                    document.getElementById("lgin_Pmsg" + len_psgNm).disabled = true;//复选框失效
                    if (nne_ptype == "0") {
                        document.getElementById("add_age" + len_psgNm).options[0].selected = true;
                        yong_litter("add_age" + len_p);
                    }
                    else {
                        document.getElementById("add_age" + len_psgNm).options[1].selected = true;
                        yong_litter("add_age" + len_psgNm);
                    }//儿童或成人

                }//添加到第一条记录中去int_add==1
                else if (int_add > 1 && int_add <= 9 && int_add <= seat_int) {
                    add_pinfo();
                    document.getElementById("len_pAR" + i).value = len_p;
                    document.getElementById("psg_name" + len_p).value = nne_name;//姓名
                    document.getElementById("Pbenren" + len_p).value = nne_pid;//是否本人
                    //证件类型
                    if (nne_zjtype == "0") {
                        document.getElementById("p_card" + len_p).options[0].selected = true;
                        document.getElementById("idCard_" + len_p).value = nne_zjtyp;
                    }
                    else if (nne_zjtype == "1") {
                        document.getElementById("p_card" + len_p).options[1].selected = true;
                        set_sex("p_card" + len_p);
                        document.getElementById("input_cardnock" + len_p).value = nne_zjtyp;
                        //性别
                        if (nne_psex == '男') {
                            document.getElementById("dt_inputsex" + len_p).options[0].selected = true;
                        }
                        else {
                            document.getElementById("dt_inputsex" + len_p).options[1].selected = true;
                        }
                        //性别over
                        //出生日期
                        document.getElementById("dt_input" + len_p).value = nne_pbirth;
                        //出生日期over
                    }
                    else if (nne_zjtype == "4") {
                        document.getElementById("p_card" + len_p).options[2].selected = true;
                        set_sex("p_card" + len_p);
                        document.getElementById("input_cardnock" + len_p).value = nne_zjtyp;
                        //性别
                        if (nne_psex == '男') {
                            document.getElementById("dt_inputsex" + len_p).options[0].selected = true;
                        }
                        else {
                            document.getElementById("dt_inputsex" + len_p).options[1].selected = true;
                        }
                        //性别over
                        //出生日期
                        document.getElementById("dt_input" + len_p).value = nne_pbirth;
                        //出生日期over
                    }
                    //证件类型 over
                    document.getElementById("lgin_Pmsg" + len_p).disabled = true;//复选框失效
                    if (nne_ptype == "0") {
                        document.getElementById("add_age" + len_p).options[0].selected = true;
                        yong_litter("add_age" + len_p);
                    }
                    else {
                        document.getElementById("add_age" + len_p).options[1].selected = true;
                        yong_litter("add_age" + len_p);
                    }//儿童或成人

                }//动态添加int_add>1 && int_add<=9
                else if (int_add > 9 || int_add > seat_int) {
                    document.getElementById(nne_id).checked = false;
                    document.getElementById('no_add').innerHTML = "<span>同一订单仅支持" + seat_int + "位乘客</span>";
                    ;
                }
            }//选中时
            else {
                var len_pR = document.getElementById("len_pAR" + i).value;//得到要删除的idnum
                document.getElementById("psg_name" + len_pR).value = "";//姓名
                document.getElementById("Pbenren" + len_pR).value = "";//本人
                document.getElementById("add_age" + len_pR).options[0].selected = true;//将成人选中
                yong_litter("add_age" + len_pR);
                document.getElementById("p_card" + len_pR).options[0].selected = true;//证件类型为身份证
                set_sex("p_card" + len_pR);
                document.getElementById("idCard_" + len_pR).value = "";
                document.getElementById("lgin_Pmsg" + len_pR).disabled = false;//复选框失效
                remov_pinfo("add_pf" + len_pR);
            }//不选中时删除
        }//将数据值传进去
    })
};

//将数据读取出来ajax over

// JavaScript Document
//设置出生日期中的内容yyyy-mm-dd
function set_val(id_name) {
    var id_name2 = id_name.substr(8);
    var id_name3 = document.getElementById('ck_tm' + id_name2);
    var id_name1 = document.getElementById(id_name);
    var id_val = id_name1.value;
    if (id_val == 'yyyy-mm-dd') {
        id_name1.value = "";
        id_name1.style.color = '#000';
    }
    ;

}

function set_val1(id_name) {
    var id_name2 = id_name.substr(8);
    var id_name3 = document.getElementById('ck_tm' + id_name2);
    var id_name1 = document.getElementById(id_name);
    var id_val = id_name1.value;
    if (id_val == '') {
        id_name1.value = 'yyyy-mm-dd';
        id_name1.style.color = '#999';
    }
    ;

}
	
// 点出收起展开折叠
function cont_disp(con_nm) {
    var cont1_num = con_nm.substr(5);//id后面的数字
    var con1_nm = document.getElementById(con_nm);//收起id
    var con2_nm = document.getElementById("pack" + cont1_num);
    var con3_nm = document.getElementById("pack1_" + cont1_num);
    if (con2_nm.style.display == 'none') {
        con2_nm.style.display = "block";
        con3_nm.innerHTML = "<img src='../images/per_hid.jpg' style='margin-top:3px;' id='pack_" + cont1_num + "' onclick='cont_disp(this.id);'/>&nbsp;";
    }
    else {
        con2_nm.style.display = "none";
        con3_nm.innerHTML = "<img src='../images/per_disp.jpg' style='margin-top:3px;' id='pack_" + cont1_num + "' onclick='cont_disp(this.id);'/>&nbsp;";
    }
}

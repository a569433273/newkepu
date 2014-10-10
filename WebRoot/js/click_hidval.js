//点击文本框将年-月-日清空
//onfocus
function click_hidval(id_val) {
    var id1_val = document.getElementById(id_val).value;
    document.getElementById(id_val).value = "";
    if (id1_val == get7dt()) {
        document.getElementById(id_val).style.color = "#000"

    }

}
//onblur
function click1_hidval(id_val) {
    var id1_val = document.getElementById(id_val).value;
    document.getElementById(id_val).value = get7dt();
    if (id1_val == '') {
        document.getElementById(id_val).style.color = "#545454"
    }

}
//onfocus
function clk_hidval(id_val) {
    var id1_val = document.getElementById(id_val).value;
    document.getElementById(id_val).value = "";
    if (id1_val == getdt()) {
        document.getElementById(id_val).style.color = "#000"
    }

}
//onblur
function clk1_hidval(id_val) {
    var id1_val = document.getElementById(id_val).value;
    if (id1_val == '') {
        document.getElementById(id_val).style.color = "#545454"
        document.getElementById(id_val).value = getdt();
    }

}
//搜索框onfocus
function mComm_ipthid() {
    if (document.getElementById("mComm_ipt").value == "请输入要搜索的内容或日期") {
        document.getElementById("mComm_ipt").value = "";
        document.getElementById("mComm_ipt").style.color = "#545454";
    }
}
//搜索框onblur
function mComm_iptshow() {
    if (document.getElementById("mComm_ipt").value == "") {
        document.getElementById("mComm_ipt").value = "请输入要搜索的内容或日期";
        document.getElementById("mComm_ipt").style.color = "#d3cfcf";
    }
}
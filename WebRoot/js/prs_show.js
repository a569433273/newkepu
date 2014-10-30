//点击左部右部出现内容
function prs_show(prs_id) {
    var clk_prs = prs_id;
    var prs_nm = document.getElementById(prs_id);
    if (prs_nm.className == "prs_1") {
        var classElements = [], allElements = document.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "prs_clk") {
                allElements[i].className = "prs_1";
            }
        }
        prs_nm.className = "prs_clk";

    }
    else {
        prs_nm.className = "prs_1";
    }
    prs_nm.className = "prs_clk";
}
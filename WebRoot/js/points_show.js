//<!--积分菜单切换-->
function points_hid() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("li_points_" + i).style.display = 'none';
    }
}

function points_show(id_pnt) {
    var num1 = id_pnt.substr(9, 1);
    var classElements = [], allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className == "prs_pntsli_hover") {

            allElements[i].className = "prs_pntsli_bg";
        }
    }
    var prs_id = document.getElementById(id_pnt);
    prs_id.className = "prs_pntsli_hover";
    //改变菜单样式over
    //显示对应内容
    points_hid();
    document.getElementById("li_points_" + num1).style.display = 'block';
    //对应分页
    if (num1 == "1") {
        document.getElementById("prs_pnts_page1").innerHTML = "";
        document.getElementById("prs_pnts_page2").innerHTML = "";
        var str = "<div class='prs_pnts22_6' id='pg3_all'></div>";
        $("#prs_pnts_page1").append(str);
        gotoPage3(1, 6, 1, "pnts_tb1");
    }
    if (num1 == "2") {
        document.getElementById("prs_pnts_page1").innerHTML = "";
        document.getElementById("prs_pnts_page2").innerHTML = "";
        var str = "<div class='prs_pnts22_6' id='pg3_all'></div>";
        $("#prs_pnts_page2").append(str);
        gotoPage3(1, 6, 1, "pnts_tb2");
    }
}

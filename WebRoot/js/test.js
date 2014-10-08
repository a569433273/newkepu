//机场数据及效果
function test(id_val, event) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 8) {
        $.ajax({
            dataType: 'jsonp',
            data: {q: $("#" + id_val).val()},
            jsonp: 'callback',
            url: 'http://www.qunar.com/suggest/livesearch2.jsp',
            error: function () {
                alert('Error loading XML document');
            },
            success: function (result) {
                var X = $("#" + id_val).offset().top;
                var Y = $("#" + id_val).offset().left;
                var W = $("#" + id_val).width();
                var H = $("#" + id_val).height();
                $("#test").css({"position": "absolute", "left": Y + 'px', "top": X + H + 5 + 'px', "width": W + 25 + 'px', "text-align": 'left', "z-index": "99999999"});
                $("#test").removeClass("s_3");//#test
                $("#test").html("");
                $("#test").append("<table class='tb aa' ><tbody class='tt'></tbody></table>");
                $('.tb').css({"width": W + 25 + 'px'})
                $.each(result.result, function (id, item) {
                    var item_v = item.display;
                    var item_v1 = item.type;
                    var id1 = 0;
                    if (item_v1 == '1') {
                        id1 = id;
                        var item_v3 = item_v + '-该城市没有机场';
                        $("#test").find(".tt").append("<tr class='noar ll' style='font-size:12px; cursor:pointer;'><td align='left' class='ll' >" + item_v3 + "</td></tr>");
                        $.each(result.result, function (id2, item) {
                            if (id2 == id1 + 1) {
                                var item_v2 = item.display;
                                var item_len = item.length;
                                var item_v2 = ".临近机场:" + item_v2 + "-" + item_len + "公里";
                                $("#test").find(".tt").append("<tr  class='nxar' style='font-size:12px; cursor:pointer;'><td align='left' class='ll' >" + item_v2 + "</td></tr>");
                            }
                        })
                    }//无机场
                    else {
                        $("#test").find(".tt").append("<tr  style='font-size:12px; cursor:pointer;'><td align='left' class='ll' >" + item_v + "</td></tr>");
                    }
                });//读数据
                if ($("#test").find("tr").hasClass("nxar")) {
                    $("#test").find("tr.nxar").next().remove();
                }//将临近机场删除
                $("#test").find("tr:eq(0)").addClass("even");
                if ($("#test").find("tr:eq(0)").hasClass("noar")) {
                    $("#test").find("tr:eq(0)").removeClass("even");
                }//将无机场的城市不高亮显示
                //鼠标移到机场上高亮显示
                $("#test").find("tr").hover(function () {
                        $("#test").find("tr.even").removeClass("even");
                        $(this).addClass("even");
                        if ($(this).hasClass("noar")) {
                            $(this).removeClass("even");
                        }//将无机场的城市不高亮显示
                    }
                    , function () {
                        $(this).removeClass("even")
                    }
                );
                //点击时获取内容并真到文本框中
                $("#test").find("tr").click(function () {
                    if ($(this).hasClass("even")) {
                        if ($(this).hasClass("nxar")) {
                            var aa = $(this).text();
                            var next_n1 = aa.indexOf(":");
                            var next_n2 = aa.indexOf("-");
                            var next_t = aa.substring(next_n1 + 1, next_n2); //获得临近机场
                            $("#" + id_val).val(next_t);
                            $("#test").html("");
                        } //临近机场对应值
                        else {
                            var aa = $(this).text();
                            $("#" + id_val).val(aa);
                            $("#test").html("");
                        }
                    }
                })
            }
        });
    }
    //键盘向上箭头对就代码
    else if (event.keyCode == 38) {
        var tr_num = $("#test").find(".tt").find("tr").length;
        var tr_num1 = tr_num - 1;
        var tt = $("#test").find("tr.even").index();
        var tt1 = tt - 1;
        if (tt == 0) {
            $("#test").find(".tt").find("tr").removeClass("even");
            $("#test").find("tr:eq(" + tr_num1 + ")").addClass("even");
            $("#" + id_val).val($("#test").find("tr.even").text());
        }
        else {

            $("#test").find(".tt").find("tr").removeClass("even");
            if ($("#test").find("tr:eq(" + tt1 + ")").hasClass("noar")) {
                tt1 = tt1 - 1;
            }//无机场城市不高亮显示
            $("#test").find("tr:eq(" + tt1 + ")").addClass("even");
            if ($("#test").find("tr:eq(" + tt1 + ")").hasClass("nxar")) {
                var aa = $("#test").find("tr:eq(" + tt1 + ")").text();
                var next_n1 = aa.indexOf(":");
                var next_n2 = aa.indexOf("-");
                var next_t = aa.substring(next_n1 + 1, next_n2); //获得临近机场
                $("#" + id_val).val(next_t);
            }
            else {
                $("#" + id_val).val($("#test").find("tr.even").text());
            }
        }
    }
    //键盘向下箭头对就代码
    else if (event.keyCode == 40) {
        var tr_num = $("#test").find(".tt").find("tr").length;

        var tt = $("#test").find("tr.even").index();
        var tt1 = tt + 1;
        if (tt == tr_num - 1) {
            $("#test").find(".tt").find("tr").removeClass("even");
            $("#test").find("tr:eq(0)").addClass("even");
            $("#" + id_val).val($("#test").find("tr.even").text());
        }
        else {
            $("#test").find(".tt").find("tr").removeClass("even");
            if ($("#test").find("tr:eq(" + tt1 + ")").hasClass("noar")) {
                tt1 = tt1 + 1;
            }//无机场城市不高亮显示
            $("#test").find("tr:eq(" + tt1 + ")").addClass("even");
            if ($("#test").find("tr:eq(" + tt1 + ")").hasClass("nxar")) {
                var aa = $("#test").find("tr:eq(" + tt1 + ")").text();
                var next_n1 = aa.indexOf(":");
                var next_n2 = aa.indexOf("-");
                var next_t = aa.substring(next_n1 + 1, next_n2); //获得临近机场
                $("#" + id_val).val(next_t);
            }
            else {
                $("#" + id_val).val($("#test").find("tr.even").text());
            }
        }
    }
    //回车时在文本框中显示值
    else if (event.keyCode == 13) {
        if ($("#test").find("tr.even").hasClass("nxar")) {
            var aa = $("#test").find("tr.even").text();
            var next_n1 = aa.indexOf(":");
            var next_n2 = aa.indexOf("-");
            var next_t = aa.substring(next_n1 + 1, next_n2); //获得临近机场
            $("#" + id_val).val(next_t);
        } //临近机场对应值
        else {
            $("#" + id_val).val($("#test").find("tr.even").text());
        }
        $("#test").html("");
    }
    //点击空白消失
    $(document).click(function (e) {
        var itarget = $(e.target);
        if (itarget[0].className != 'll') {
            $("#test").html("");
        }
    });
}

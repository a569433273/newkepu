<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>无标题文档</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/search.css" rel="stylesheet" type="text/css"/>
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <script src="../js/jquery-1.6.4.js"></script>
    <script src="../js/doubleDate2.0.js"></script>
    <!--日历-->
    <script src="../js/test.js"></script>
    <!--机场-->
    <script>
        $(function () {
            $('.doubledate').kuiDate({
                className: 'doubledate',
                isDisabled: "0"  // isDisabled为可选参数，"0"表示今日之前不可选，"1"标志今日之前可选
            });
        });//加载日历
    </script>
</head>
</head>

<body>
<%--<div class="total">--%>
    <%--<!--header部分 start-->--%>
    <%--<div class="header">--%>
        <%--<div class="logo"><a href="../index.jsp"><img src="../images/logo.jpg"/></a></div>--%>
        <%--<div class="hd_tel"><img src="../images/tel.jpg"/></div>--%>
        <%--<div class="hd_mark"><a href=""><img src="../images/mark1.jpg"></a>&nbsp;&nbsp;<a href=""><img--%>
                <%--src="../images/mark2.jpg"></a></div>--%>
        <%--<div style="clear:both;"></div>--%>
    <%--</div>--%>
    <%--<!--header部分 over-->--%>
<%--</div>--%>
<div class="header">
    <iframe src="../header.jsp" width="985px" height="78px" frameborder="0" scrolling="no"></iframe>
</div>

<!--左部-->

<div class="se_ar_left" id="a_hh">
    <div class="left1">
        <form action="searchresult.jsp" name="chaxunform" id="chaxunform" method="post"
              onkeydown="if(event.keyCode==13)return false;">
            <div class="le_2">
                <div class="s_left4">
                    <h1 style="text-align:left; font-size:12px; font-weight:normal;"><input name="one_way" type="radio"
                                                                                            value="01"
                                                                                            onclick="document.getElementById('db_way').style.display='none'"
                                                                                            checked="checked"/>单程 <input
                            name="one_way" type="radio" value="01"
                            onclick="document.getElementById('db_way').style.display='block'"/>往返</h1>

                </div>
                <div class="s_left">
                    起飞城市：<input type="text" name="from" id="from" value=""
                                style="border:1px solid #ccc; padding:1px; width:160px; height:16px;"
                                onKeyup="test(this.id,event)" autocomplete="off"/>&nbsp;
                </div>
                <div class="s_left1">
                    到达城市：<input type="text" name="arrival" id="arrival" value=""
                                style="border:1px solid #ccc; padding:1px; width:160px;  height:16px;"
                                onKeyup="test(this.id,event)" autocomplete="off"/>&nbsp;
                </div>
                <div class="s_left2">
                    出发日期：<input type="text" readonly="readonly" class="doubledate ipticon" name="fromdata" id="fromdata"
                                value="" style="border:1px solid #ccc; padding:1px; width:160px;  height:16px;"/>&nbsp;
                </div>
                <div class="s_left2" style="display:none;" id="db_way">
                    往返日期：<input type="text" readonly="readonly" class="doubledate ipticon" name="fromdata1"
                                id="fromdata1" value=""
                                style="border:1px solid #ccc; padding:1px; width:160px;  height:16px;"/>&nbsp;

                </div>
                <div class="s_left3">
                    <input name="sub" type="image" id="sub" value="sub1" src="../images/sea_res.jpg"
                           style="margin-left:100px;"/>
                </div>
                <div id="test" class="s_3"></div>
                <!--机场数据-->
            </div>
        </form>
    </div>
    <div style="clear:both;"></div>
</div>
<!--左部 over-->
<p>&nbsp;</p>
<!--footer-->
<div style="width:100%; height:40px; overflow:hidden;"></div>
<div class="footer">
    <iframe src="../footer.jsp" width="100%" height="125px" frameborder="0" scrolling="no"></iframe>
</div>
<!--footer over-->
</body>
</html>

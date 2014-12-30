<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>加入窠浦</title>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css" />
    <link href="../css/Copyright.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script src="../js/CopyR_usdetil.js" type="text/javascript"></script><!--点出详情页面-->
    <script src="../js/page3.js" type="text/javascript"></script><!---分页效果-->
</head>
<body>
<div class="CopyRight_about" id="CopyRight_about">

    <div class="prs_rt" id="prsC_6">
        <div class="prs_rt1">
            <div class="prs_rt1_1"><span>&nbsp;加入窠浦</span></div>
        </div>
        <div class="prs_fna">
            <div class="CopyR_about1" >
                <table class="CopyR_partIn1" id="prs_voy2_tab">
                    <tr></tr>
                    <tr class="CopyR_partIn1_tr">
                        <td class="CopyR_partIn1_td"><a href="joinyaoke.jsp" onclick="return CopyR_usdetil()">&nbsp;&nbsp;&nbsp;窠浦要客</a></td>
                        <td class="CopyR_partIn1_td1">2012-03-08</td>
                    </tr>
                    <%--<tr class="CopyR_partIn1_tr">--%>
                        <%--<td class="CopyR_partIn1_td"><a href="" onclick="return CopyR_usdetil()">&nbsp;&nbsp;&nbsp;窠浦会员</a></td>--%>
                        <%--<td class="CopyR_partIn1_td1">2012-03-08</td>--%>
                    <%--</tr>--%>
                    <%--<tr class="CopyR_partIn1_tr">--%>
                        <%--<td class="CopyR_partIn1_td"><a href="" onclick="return CopyR_usdetil()">&nbsp;&nbsp;&nbsp;网络代理人</a></td>--%>
                        <%--<td class="CopyR_partIn1_td1">2012-03-08</td>--%>
                    <%--</tr>--%>
                    <%--<tr class="CopyR_partIn1_tr">--%>
                        <%--<td class="CopyR_partIn1_td"><a href="" onclick="return CopyR_usdetil()">&nbsp;&nbsp;&nbsp;机构客户（大型企事业组织、行政机关等）</a></td>--%>
                        <%--<td class="CopyR_partIn1_td1">2012-03-08</td>--%>
                    <%--</tr>--%>
                    <%--<tr class="CopyR_partIn1_tr">--%>
                        <%--<td class="CopyR_partIn1_td"><a href="" onclick="return CopyR_usdetil()">&nbsp;&nbsp;&nbsp;供应商（机票、旅游、会务会展、商务礼品等）</a></td>--%>
                        <%--<td class="CopyR_partIn1_td1">2012-03-08</td>--%>
                    <%--</tr>--%>
                    <%--<tr class="CopyR_partIn1_tr">--%>
                        <%--<td class="CopyR_partIn1_td"><a href="" onclick="return CopyR_usdetil()">&nbsp;&nbsp;&nbsp;区域公司投资及管理伙伴区域公司投资及管理伙伴</a></td>--%>
                        <%--<td class="CopyR_partIn1_td1">2012-03-08</td>--%>
                    <%--</tr>--%>
                </table>
            </div>
            <!--分页效果-->
            <div class="CopyR_page1" id="pg3_all"></div>
            <!--分页效果over-->
        </div>
    </div>
    <!--我的会议 over-->
</div>
<script type="text/javascript">
    gotoPage3(1,10,1); //分页
    window.parent.document.getElementById('frameMsg').style.height=document.getElementById("CopyRight_about").offsetHeight+'px'; //高度给父级页面
</script>
</body>
</html>

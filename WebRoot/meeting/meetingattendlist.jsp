<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>参会人员数据</title>
    <style type="text/css">
        * {
            margin: 0 auto;
            padding: 0;
        }

        body {
            text-align: center;
        }

        .Pmeetfr_tp {
            width: 730px;
            height: 30px;
            float: left;
            border-bottom: 1px solid #ccc;
        }

        .p_Mfr_1 {
            float: left;
            overflow: hidden;
            margin-top: 5px;
            display: inline;
        }

        .p_Mfr_2 {
            float: left;
            overflow: hidden;
        }

        .p_Mfr_2 p {
            font-size: 14px;
            color: #545454;
            text-align: left;
            line-height: 30px;
            font-weight: bold;
        }

        .partMfr1_2 {
            width: 730px;
            height: auto;
            float: left;
            overflow: hidden;
            margin-top: 10px;
            margin-bottom: 10px;
            display: inline;
        }

        .partMfr1_2 table {
            width: 700px;
            height: auto;
            border: 0;
            border-collapse: collapse;
            font-size: 12px;
        }

        .partMfr1_2 table tr {
            width: 700px;
            height: 30px;
            color: #545454;
        }

        .partMfr1_2 table .tble_tr {
            background: #edfafb;
        }

        /*参会人员分页*/
        .mPart_4 {
            width: 700px;
            height: 31px;
            float: left;
            border-top: 1px dashed #ccc;
            margin-left: 16px;
            display: inline;
        }

        .mPartPg_1 {
            line-height: 30px;
            margin-left: 15px;
            text-align: left;
        }

        .mPartPg_1 span {
            font-size: 12px;
        }
    </style>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/Mpart_page.js"></script>
    <!--分页效果-->
</head>
<body onload="goPage(1,3,1)">
<form action="" name="" method="post">
    <div style="width:730px; height:auto; overflow:hidden;">
        <!--参会人员头部-->
        <div class="Pmeetfr_tp">
            <div class="p_Mfr_1">
                <img src="../images/partM_icon4.jpg" alt=""/>
            </div>
            <div class="p_Mfr_2"><p>参会人员</p></div>
        </div>
        <!--参会人员头部over-->
        <!--参会人员内容-->
        <div class="partMfr1_2" id="tab_page_1">
            <table id="tb_tab">
                <tr class="tble_tr">
                    <td width="10%">姓名</td>
                    <td width="15%">电话</td>
                    <td width="20%">工作单位</td>
                    <td width="10%">职称</td>
                    <td width="30%"></td>
                </tr>
                <s:iterator value="memberscanjia">
                    <tr>
                        <td width="10%"><s:property value="member_realname"></s:property></td>
                        <td width="15%"><s:property value="member_zuoji"></s:property></td>
                        <td width="20%"><s:property value="member_workaddress"></s:property></td>
                        <td width="10%"><s:property value="member_workname"></s:property></td>
                        <td width="30%"></td>
                    </tr>
                </s:iterator>
            </table>
        </div>
        <!--分页-->
        <!--分页效果-->
        <div class="mPart_4" id="page_total">
            <p class="mPartPg_1" id="Pg_1">
            </p>
        </div>
        <!--分页效果over-->
    </div>
</form>
</body>
</html>

<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<!--中部-->
<div class="prs_mid">
    <!--左部-->
    <div class="prs_left">
        <div class="prs_le1">
            <div class="prs_le_1">
                <img alt="" src="../images/cat.jpg"/>
            </div>
            <div class="prs_le_2">
                <div class="prs_le_21"><input name="" type="file" class="ipt_file"/></div>
            </div>
            <!--上传头像-->
            <!--菜单部分-->
            <div class="prs_le_3">
                <ul>
                    <li class="prs_clk" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk" href="personmessage.action">我的资料</a>
                    </li>
                    <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="persontravller.action">常用乘机人</a>
                    </li>
                    <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="personcaiwu.action">财务中心</a>
                    </li>
                    <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="personorder.action">订单管理</a>
                    </li>
                    <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="personmyflight.action">我的航程</a>
                    </li>
                    <li class="prs_1" id="prs_6" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="#">我的会议</a>
                    </li>
                </ul>
            </div>
            <!--菜单部分 is over-->
        </div>
    </div>
</body>
</html>

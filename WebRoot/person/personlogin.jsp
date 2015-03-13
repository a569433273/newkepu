<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>窠浦个人用户--登录</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css" />
    <link href="../css/groupUser.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script src="../js/groupUser_Cklgin.js" type="text/javascript"></script><!--登录时的验证-->
    <script src="../js/chage_arrive.js" type="text/javascript"></script><!--切换往返效果 点击出日历-->
</head>
<body>
<!--头-->
<div class="header">
    <iframe src="../header.jsp" width="985" height="78px" frameborder="0" scrolling="no"></iframe>
</div>
<!--头over-->
<div class="idx_bar">&nbsp;</div>
<!--登录头-->
<div class="lginTp_pgUser">
    <p>&nbsp;用户登录</p>
</div>
<!--登录头over-->
<form action="denglu.action" method="post" name="loginfrom" id="loginfrom">
    <!--登录部分-->
    <div class="lgin_pgUser">
        <div class="lgin_pgUser1">
            <div class="lgin_pgUser1_1"></div>
            <!--内容-->
            <div class="lgin_pgUser1_2">
                <div class="lgin_pgUser12_1">
                    <!--头-->
                    <div class="lgin_pgU1">
                        <div class="lgin_pgU1_lft">
                            <p>用户登录</p>
                        </div>
                        <div class="lgin_pgU1_rgt" id="ck_lgintxt" style="display:none;">
                            <div class="lgin_pgU1_rgt1">
                                <div class="lgin_pgU1_rgt1_1"><img src="../images/lgin_pgUfalse.jpg"/></div>
                                <div class="lgin_pgU1_rgt1_2"><p>用户名或密码错误</p></div>
                            </div>
                        </div>
                    </div>
                    <!--头over-->
                    <!--用户名-->
                    <div class="lgin_pgUNme">
                        <div class="lgin_pgUNme1">
                            <p>用户名：</p>
                        </div>
                        <div class="lgin_pgUNme2">
                            <p><input type="text" name="username" class="login_pgUnmipt"  id="login_nm"/></p>
                        </div>
                    </div>
                    <!--用户名 over-->
                    <!--密码-->
                    <div class="lgin_pgUNme">
                        <div class="lgin_pgUNme1">
                            <p>密码：</p>
                        </div>
                        <div class="lgin_pgUNme2">
                            <p><input type="password" name="password" class="login_pgUnmipt" id="login_pwd"/></p>
                        </div>
                    </div>
                    <!--密码 over-->
                    <!--记住密码或忘记-->
                    <%--<div class="lgin_pgUpwd">--%>
                        <%--<div class="lgin_pgUpwd1">--%>
                            <%--<div class="lgin_pgUpwd1_1">--%>
                                <%--<p><input name="" type="checkbox" value="" /></p>--%>
                            <%--</div>--%>
                            <%--<div class="lgin_pgUpwd1_2">--%>
                                <%--<p>记住密码</p>--%>
                            <%--</div>--%>
                        <%--</div>--%>
                        <%--<div class="lgin_pgUpwd2">--%>
                            <%--<p><a href=""><span>忘记密码?</span></a></p>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <!--记住密码或忘记 over-->
                    <!--登录-->
                    <div class="lgin_pgUbtn">
                        <p style="text-align:center;"><input type="image" src="../images/lgin_pgUrsbtn.jpg" name=""  onclick="return ck_lgin()"/></p>
                    </div>
                    <!--登录over-->
                    <!--注册-->
                    <div class="lgin_pgUreg">
                        <p>还不是"窠浦"用户？  <span style="text-indent:1em;"><a href="personzhuce.jsp">免费注册</a></span></p>
                    </div>
                    <!--注册over-->
                </div>
            </div>
            <!--内容over-->
        </div>
    </div>
    <!--登录部分 over-->
</form>
<!--footer-->
<div style="widdth:985px; height:45px; overflow:hidden;"></div>
<div class="footer">
    <iframe src="../footer.jsp" width="100%" height="125px" frameborder="0" scrolling="no"></iframe>
</div>
<!--footer over-->
</body>
</html>

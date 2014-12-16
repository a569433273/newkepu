<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>窠浦--注册</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <!--头尾-->
    <link href="../css/register.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/ck_regUser.js"></script>
    <!--验证表单-->
    <script type="text/javascript" src="../js/pwd_stre.js"></script>
    <!--密码强度验证-->
    <script type="text/javascript" src="../js/SendCode.js"></script>
    <!--发送验证时出现计时-->
    <script type="text/javascript" src="../js/ck_RegFm.js"></script>
    <!--发送验证时出现计时-->
</head>
<body>
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.jsp"><img src="../images/logo.jpg" alt=""/></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg" alt=""/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg" alt=""></a>&nbsp;&nbsp;<a href=""><img
                src="../images/mark2.jpg" alt=""></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<s:set value="zhuce"></s:set>
<!--header部分 over-->
<p>&nbsp;</p>
<!--中部-->
<s:if test="#zhuce == 1">
    <script type="text/javascript">alert("该手机号已经注册");</script>
</s:if>
<form action="zhuce.action" method="post" name="zhuceform" id="zhuceform" onsubmit="return ck_regFm();">
    <div class="reg_Mid">
        <!--注册头部-->
        <div class="reg_M1"><span>&nbsp;会员注册</span></div>
        <!--注册头部 over-->
        <!--注册整体-->
        <div class="reg_M2">
            <!--注册左部-->
            <div class="reg_ML1">
                <div class="reg_ML2">
                    <!--用户名-->
                    <div class="reg_ML2_1">
                        <div class="u_1">用户名：</div>
                        <div class="u_2"><input type="text" name="u_name" class="u_2_1" id="u_name"
                                                onfocus="ck_Unm(this.id)" onkeyup="ck_Unm1(this.id)"
                                                onblur="ck_Unm1(this.id)"/></div>
                        <div class="u_3">
                            <div class="u3_1" id="ck_Nm"></div>
                            <div class="u3_2">用户名不少于六位不能为中文</div>
                        </div>
                    </div>
                    <!--用户名 over-->
                    <!--密码-->
                    <div class="reg_ML2_1">
                        <div class="u_1">密码：</div>
                        <div class="u_2"><input type="password" name="u_pwd" class="u_2_1" id="u_pwd"
                                                onKeyUp="pwStrength(this.value)" onBlur="pwStrength(this.value)"/></div>
                        <div class="u_7">
                            <ul>
                                <li id="strength_L">弱</li>
                                <li id="strength_M">中</li>
                                <li id="strength_H">强</li>
                            </ul>
                        </div>
                    </div>
                    <!--密码 over-->
                    <!--确认密码-->
                    <div class="reg_ML2_1">
                        <div class="u_1">确认密码：</div>
                        <div class="u_2"><input type="password" name="u_pwd1" class="u_2_1" id="u_pwd1"
                                                onfocus="ck_Pwd1(this.id)" onkeyup="ck_Pwd3(this.id)"
                                                onblur="ck_pwd2(this.id)"/></div>
                        <div class="u_6" id="ck_pwd1"></div>
                    </div>
                    <!--确认密码 over-->
                    <!--手机号-->
                    <div class="reg_ML2_1">
                        <div class="u_1">手机号：</div>
                        <div class="u_2"><input type="text" name="u_tel" class="u_2_1" id="u_tel"
                                                onfocus="ck_Tel(this.id)" onkeyup="ck_Tel1(this.id)"
                                                onblur="ck_Tel1(this.id)"/></div>
                        <div class="u_3">
                            <div class="u3_1" id="ck_Tel"></div>
                        </div>
                    </div>
                    <!--手机号 over-->
                    <!--短信验证-->
                    <div class="reg_ML2_1">
                        <div class="u_1">短信验证码：</div>
                        <div class="u_2"><input type="text" name="u_msg" class="u_2_1" id="u_msg"
                                                onfocus="ck_Msg(this.id)" onkeyup="ck_Msg(this.id)"/></div>
                        <div class="u_6" id="ck_msg"></div>
                        <div class="u_8"><p style="text-align:left;"><input id="btnSendCode" type="button" value="发送验证码"
                                                                            onclick="sendMessage()" class="ipt_but"/>
                        </p></div>
                    </div>
                    <!--短信验证 over-->
                    <!--邀请码-->
                    <div class="reg_ML2_1">
                        <div class="u_1">邀请码：</div>
                        <div class="u_2"><input type="text" name="u_weck" class="u_2_1" id="u_weck"
                                                onfocus="ck_Weck(this.id)" onkeyup="ck_Weck(this.id)"/></div>
                        <div class="u_3"></div>
                        <div class="u_6" id="ck_weck"></div>
                    </div>
                    <!--邀请码 over-->
                    <!--验证码-->
                    <div class="reg_ML2_1">
                        <div class="u_1">验证码：</div>
                        <div class="u_2"><input type="text" name="u_code" class="u_2_1" id="u_code"
                                                onkeyup="ck_Code(this.id)" onfocus="ck_Code(this.id)"/></div>
                        <div class="u_6" id="ck_code"></div>
                        <div class="u_4"><img src="../images/res_code.jpg" style="margin-top:4px; cursor:pointer;"
                                              alt=""/>
                        </div>
                    </div>
                    <!--验证码 over-->
                    <!--提交-->
                    <div class="reg_ML2_2">
                        <p style="text-align:left; margin-top:10px; margin-left:110px;"><input type="image" name=""
                                                                                               src="../images/res_submit.jpg"/>
                        </p>
                    </div>
                    <!--提交 over-->
                </div>
            </div>
            <!--注册左部 over-->
            <!--注册右部-->
            <div class="reg_MR1">
                <div class="reg_MR2">
                    <div class="reg_MR2_1">
                        <p>注册成为"窠浦"的用户后，您可以：</p>

                        <p>轻松管理订单</p>

                        <p>查询、计划、管理您的预订信息</p>

                        <p>享受优质超低价格团购服务</p>
                    </div>
                    <div class="reg_MR2_1">
                        <div style="float:left; width:289px; height:116px; margin-top:10px; display:inline;"><img
                                src="../images/res_imgair.jpg" alt=""/></div>
                    </div>
                </div>
            </div>
            <!--注册右部 over-->
        </div>
        <!--注册整体over-->
        <div style="clear:both;"></div>
    </div>
</form>
<!--中部 over-->
<p>&nbsp;</p>
<!--foodter-->
<div class="total1">
    <div class="sear_footer">
        <div class="sear_footer1" style="margin-left:50px;">
            <p><a href="">关于窠浦</a></p>

            <p><a href="">法律声明</a></p>

            <p><a href="">意见反馈</a></p>
        </div>
        <div class="sear_footer1" style="margin-left:60px;">
            <p><a href="">联系我们</a></p>

            <p><a href="">隐私条款</a></p>

            <p><a href="">企业QQ:4006205588</a></p>
        </div>
        <div class="sear_footer1" style="margin-left:15px;">
            <p><a href="">加入窠浦</a></p>

            <p><a href="">广告服务</a></p>
        </div>
        <div class="sear_footer1" style="margin-left:150px;">
            <p>窠浦（北京）商务服务有限公司 Nestpu(Beijing) Business Service Co.Ltd.版权所有</p>

            <p>地址:北京市东城区朝阳门银河SOHO中心A座10511室 邮政编码：100010</p>

            <p>京ICP备11016456号 京ICP证110540号</p>
        </div>
    </div>
</div>
<!--footer-->
</body>
</html>

<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>预订</title>
    <link href="../css/index1.css" rel="stylesheet" type="text/css"/>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <!--首页头尾CSS-->
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script src="../js/base64decode.js" type="text/javascript"></script>
    <!--解密净价票面价-->
    <script src="../js/capture_air.js" type="text/javascript"></script>
    <!--接收预定信息-->
    <script src="../js/secure.js" type="text/javascript"></script>
    <!--选中航意险select中option 时选中复选框航意险 并统计钱数-->
    <script src="../js/add_sex.js" type="text/javascript"></script>
    <!--单击护照 其他时 添加的信息 单击成人儿童时是否出现儿童价格-->
    <script src="../js/add_pinfo.js" type="text/javascript"></script>
    <!--添加乘客-->
    <script src="../js/remove_pinfo.js" type="text/javascript"></script>
    <!--删除乘客-->
    <script src="../js/pop_up.js" type="text/javascript"></script>
    <!--弹出登录框-->
    <script src="../js/show_user.js" type="text/javascript"></script>
    <!--登录中的切换效果-->
    <script src="../js/mouse_disp.js" type="text/javascript"></script>
    <!--鼠标移上显文字-->
    <script src="../js/check_form.js" type="text/javascript"></script>
    <!--表单验证-->
    <script src="../js/checkbox_ture.js" type="text/javascript"></script>
    <!--选中表单时 选中航意险-->
    <script src="../js/desc_sec.js" type="text/javascript"></script>
    <!--延误险被选中时底部应该出现的内容-->
    <script src="../js/set_inputVal.js" type="text/javascript"></script>
    <!--设置日期格式-->
    <script src="../js/covert_table.js" type="text/javascript"></script>
    <!--切换退改签费用标准 -->
    <script src="../js/check_submit.js" type="text/javascript"></script>
    <!--提交时整体表单验证-->
    <script src="../js/update_delay.js" type="text/javascript"></script>
    <!--选中延误险option时 改变价格 选中延误险checkbox-->
    <script src="../js/cidInfo.js" type="text/javascript"></script>
    <!---身份证验证-->
    <script src="../js/show_logmsg.js" type="text/javascript"></script>
    <!--点击窠浦帮您填出现姓名信息-->
    <script src="../js/show_Cntmsg.js" type="text/javascript"></script>
    <!--点击窠浦帮您填出现姓名信息-->
</head>

<body onload="capture_air();">
<!--header部分 start-->

<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.jsp"><img src="../images/logo.jpg"/></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg"/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg"></a>&nbsp;&nbsp;<a href=""><img
                src="../images/mark2.jpg"></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<p>&nbsp;</p>
<!--header部分 over-->
<div class="res_top">
    <div class="left">填写订单</div>
    <div class="right"><img src="../images/1_03.jpg"/></div>
    <div style="clear:both;"></div>
</div>
<!--预定信息-->
<div class="res_top1">
    <table class="table1">
        <tr bgcolor="#dcf7fb" align="center" height="30">
            <td width="13%">航空公司</td>
            <td width="13%">起飞时间/地点</td>
            <td width="13%">降落时间/地点</td>
            <td width="5%">经停</td>
            <td width="13%">折扣</td>
            <td width="10%">票面价</td>
            <td width="10%">返点</td>
            <td width="10%">净价</td>
            <td width="13%">机建/燃油</td>
        </tr>
        <tr height="30" align="center" bgcolor="#fefefe">
            <td width="13%" id="air_name"></td>
            <td width="13%"><span id="tk_off1">1</span><br/><span id="tk_off2">2</span></td>
            <td width="13%"><span id="land_1">3</span><br/><span id="land_2">4</span></td>
            <td width="5%" id="viaport"></td>
            <td width="13%" id="sale"></td>
            <td width="10%" id="price"></td>
            <td width="10%" id="sale1"></td>
            <td width="10%" id="j_money"></td>
            <td width="13%" id="fir_oil">¥50/¥110</td>
        </tr>
    </table>
    <table class="table2" style="margin-top:15px;" id="covert2">
        <tr bgcolor="#f4fbfc" align="center" height="30">
            <td width="13%"
                style="border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; border-left:1px solid #dcf7fb; color:#0069ca; cursor:pointer;"
                id="covert3" onclick="covert_table(this.id);"><span>退改签费用标准&nbsp;<img src="../images/up.jpg"
                                                                                      style="margin-bottom:-5px;"/></span>
            </td>
            <td width="13%" style="border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;">类型</td>
            <td width="13%" style="border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;">退改签时间点</td>
            <td width="13%" style="border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;">退票扣费</td>
            <td width="13%" style="border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb;">改期加收手续费</td>
            <td width="13%"
                style="border-top:1px solid #dcf7fb; border-right:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; ">
                签转
            </td>
        </tr>
        <tbody id="covert1"><!--js传值--></tbody>
    </table>
    <table class="table2" style="margin-top:15px; margin-bottom:15px;">
        <tr bgcolor="#f4fbfc" align="center" height="60">
            <td width="18%"
                style="border-top:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; border-left:1px solid #dcf7fb">
                特殊票务说明：
            </td>
            <td colspan="5"
                style="border-top:1px solid #dcf7fb; border-right:1px solid #dcf7fb; border-bottom:1px solid #dcf7fb; "
                align="left">1、机场无法打印行程单，如需报销请选择快递行程单。<br/>2、姓名不能超过6个字。
            </td>
        </tr>
    </table>
</div>
<form action="planeorder.action" name="booking" id="booking" method="post" onsubmit="return ck_submit();">
    <!--乘机人信息-->
    <div class="peo_info" id="peo_info">
        <div class="top1"></div>
        <div class="top">
            <div style="float:left; line-height:30px; font-size:12px;">&nbsp;乘机人信息</div>
            <div style="float:left;margin-top:5px; overflow:hidden;">&nbsp;<img src="../images/auto_write.gif"
                                                                                style="cursor:pointer;" class="showdiv"
                                                                                id="shw_div"
                                                                                onclick="show_logmsg(this.id);"/></div>
            <div style="float:left; line-height:30px; font-size:12px;"><span style="color:#999;">（请准确填写乘机人信息，以免在办理登机时发生问题）</span>
            </div>
        </div>
        <!--信息部分-->
        <div class="top2" id="top2_info">
            <div class="t_1" id='add_p10'>
                <!--t_1_top-->
                <div class="t_1_top">
                    <div style="float:left; width:710px;">
                        <div style="float:left; width:250px;">
                            <div style="float:left; width:50px; font-size:12px; line-height:20px;">姓名<span
                                    style="color:#f00;">*</span>
                                <input type="hidden" name="" id="Pbenren0" class="Pbenren"/></div>
                            <div style="float:left;"><input type="text" class="input_val" style="width:60px;"
                                                            name="p_name" id="psg_name0" onkeyup="ck_unm(this.id)"
                                                            onfocus="ck_name1(this.id)"/></div>
                            <div style="float:left;"><span id="name_0"></span>&nbsp;<select class="younger" name="ag"
                                                                                            onchange="yong_litter(this.id)"
                                                                                            id="add_age0">
                                <option checked="checked">成人(>12岁)</option>
                                <option>儿童(< 12岁)</option>
                            </select></div>
                        </div>
                        <div style="width:450px; float:left;">
                            <div style="float:left; width:60px; font-size:12px; line-height:20px; text-align:right;">
                                证件号码<span style="color:#f00;">*</span>&nbsp;</div>
                            <div style="float:left; overflow:hidden; ">&nbsp;<select name="p_card" id="p_card0"
                                                                                     class="which_1"
                                                                                     onchange="set_sex(this.id)">
                                <option>身份证</option>
                                <option>护照</option>
                                <option>其他</option>
                            </select></div>
                            <div style="float:left;" id="card_disp0">&nbsp;<input type="text" name="p_name"
                                                                                  class="hz_val1" style="width:130px;"
                                                                                  id="idCard_0"
                                                                                  onkeyup="ck_idCard(this.id)"
                                                                                  onfocus="ck_idCard1(this.id)"
                                                                                  onblur="ck_ageCard(this.id)"/><span
                                    id="psg_card0"></span></div>
                            <div style="float:left; margin-top:2px; overflow:hidden; display:inline;">&nbsp;<input
                                    name=""
                                    type="checkbox"
                                    value=""
                                    class="usual_psg"
                                    checked="checked"
                                    id="lgin_Pmsg0"/>
                            </div>
                            <div style="float:left; overflow:hidden; font-size:12px; line-height:23px;">
                                是否保存为常用登机人
                            </div>
                        </div>
                    </div>
                    <div style="float:left; oveflow:hidden;">&nbsp;<input name="" type="checkbox" value="" id="secur0"
                                                                          class="secur0" onclick="box_ch(this.id)"
                                                                          checked="checked"/><span
                            style="font-size:12px; color:#0068c9;" id="accid_s0" onmousemove="mouse_disp(this.id);"
                            onmouseout="mouse_hid()">&nbsp;航意险</span><span style="font-size:12px;"><span
                            style="color:#F00">30</span>/份</span></div>
                    <div style="float:left; oveflow:hidden;"><select name="secure" id="secure0" class="f_sec0"
                                                                     onchange="secur(this.id)">
                        <option value="1" checked="checked">1份</option>
                        <option value="0">0份</option>
                        <option value="2">2份</option>
                    </select>&nbsp;</div>
                    <div style="float:left; overflow:hidden; font-size:12px; line-height:20px;">保额最高100万/份</div>
                    <div style="float:left; line-height:20px; margin-left:5px; overflow:hidden; cursor:pointer;"
                         id="add_pf0"
                         onclick="remov_pinfo(this.id)"><img src="../images/wrong.jpg" style="margin-top:5px;"></div>
                </div>
                <!--t_1_top1-->
                <div class="t_1_top1">
                    <div style="float:left; width:710px;">
                        <!--点南儿童应该显示的信息-->
                        <div style="float:left; width:250px; text-align:right; font-size:12px;  overflow:hidden;"
                             id="disp_age0">&nbsp;</div>
                        <!--点南儿童应该显示的信息 is over-->
                        <!--点击护照时要添加的信息-->
                        <div style="float:left; width:450px; display:none;" id="disp_sex0">&nbsp;</div>
                        <!--点击护照时要添加的信息 over-->

                    </div>

                    <div style="float:left;">&nbsp;<input name="" type="checkbox" value="" id="delay_cl0"
                                                          class="delay_cl" onclick="desc_sec(this.id)"/></div>
                    <div style="float:left; overflow:hidden; line-height:20px; "><span
                            style="font-size:12px; font-weight:bold; color:#0068c9;" id="delay_s0"
                            onmousemove="mouse_disp(this.id);" onmouseout="mouse_hid()">&nbsp;延误险</span><span
                            style="color:#F00; font-size:12px;">20</span><span style="font-size:12px;">/份</span></div>
                    <div style="float:left; oveflow:hidden;"><select name="del_sec" id="del_sec0" class="f_del0"
                                                                     onchange="del_upd(this.id)">
                        <option value="0" checked="checked">0份</option>
                        <option value='1'>1份</option>
                    </select>&nbsp;</div>
                    <div style="float:left; overflow:hidden; font-size:12px; line-height:20px;">保额最高100万 / 份</div>
                </div>
            </div>
        </div>
        <!--信息部分 over-->
    </div>
    <!--添加按钮-->
    <div class="add_info">
        <div style="float:left; width:93px; height:21px; margin-top:10px; cursor:pointer;" onclick="add_pinfo();"><img
                src="../images/1_11.jpg"/></div>
        <div style="float:left; color:#f00; font-size:12px; margin-top:15px;" id="no_add"></div>
        <div style="float:left; display:none;" id="seat_hide"></div>
    </div>
    <!--联系人信息部分-->
    <div class="peo1_info">
        <div class="peo1_info">
            <div class="top1"></div>
            <div class="top">
                <div style="float:left; line-height:30px; font-size:12px;">&nbsp;联系人信息</div>
                <div style="float:left;margin-top:5px; overflow:hidden;">&nbsp;<img src="../images/auto_write.gif"
                                                                                    style="cursor:pointer;"
                                                                                    class="showdiv" id="show_Ctmsg"
                                                                                    onclick="show_Cntmsg()"/></div>
                <div style="float:left; line-height:30px; font-size:12px;"><span style="color:#999;">（请准确填写乘机人信息，以免在办理登机时发生问题）</span>
                </div>
            </div>
        </div>
        <div class="top2">
            <div style="float:left; font-size:12px; width:50px;  line-height:20px;">姓名<span
                    style="color:#f00;">*</span></div>
            <div style="float:left;">
                <input type="text" style="width:120px;" name="ck_name" onfocus="check_name1()"
                       onkeyup="check_name();" id="ck_name"/>
                &nbsp;<span id="ck_nm"></span></div>
            <div style="float:left;  font-size:12px;  font-size:12px; width:50px;  line-height:20px;">手机<span
                    style="color:#f00;">*</span></div>
            <div style="float:left;">
                <input name="check_tel" type="text" id="check_tel" onfocus="check_tel1()" onkeyup="ck_tel()"/>
                &nbsp;<span id="ck_tl"></span></div>
            <div style="float:left;  font-size:12px;  font-size:12px; width:80px;  line-height:20px;">电子邮箱</div>
            <div style="float:left;">
                <input type="text" name="p_email" id="p_email" onkeyup="ck_email(this.id)"/>
                &nbsp;<span id="p_email1"></span></div>
            <div style="float:left; margin-top:2px; overflow:hidden; display:inline;">&nbsp;
                <input name="input" type="checkbox" value="" checked="checked" onclick="checkbaocunlianxi()"/>
            </div>
            <div style="float:left; overflow:hidden; font-size:12px; line-height:23px;"> 是否保存为常用联系人</div>
        </div>
    </div>
    </div>
    <!--订单总额-->
    <div class="res_price">
        <p style="font-size:12px; line-height:30px;">订单总额： <span style="color:#f00; font-size:14px;" id="all_money_0">¥170240</span>
            共1人(含航意险：<span id="air_secure0">30</span>，延误险：<span id="delay_money0">0</span> )</p>
    </div>
    <!--条款-->
    <div class="read_me">
        <div style="float:left;"><input name="read_me" type="checkbox" style="margin-top:6px;" checked="checked"/>&nbsp;
        </div>
        <div style="float:left;">我已阅读并同意 <a href="">《网络电子客票协议》</a><span id="safe_0">及<a href="">《航意险说明1》</a>&<a href="">《航意险说明2》</a></span><span
                id="desc_sec"></span></div>
    </div>

    <!--提交订单-->

    <!--航空隐藏部分-->
    <div style="width:985px; height:0px;">
        <input name="air_Name_1" type="hidden" id="air_Name_1" value=""/> <!--航空名称-->
        <input name="tkoff_Name" type="hidden" id="tkoff_Name" value=""/> <!--起飞机场-->
        <input name="tkoff_Time" type="hidden" id="tkoff_Time" value=""/> <!--起飞时间-->
        <input name="land_Name" type="hidden" id="land_Name" value=""/> <!--降落机场-->
        <input name="land_Time" type="hidden" id="land_Time" value=""/> <!--降落时间-->
        <input name="Viaport_1" type="hidden" id="Viaport_1" value=""/> <!--经停-->
        <input name="Saled_1" type="hidden" id="Saled_1" value=""/> <!--折扣-->
        <input name="Price_1" type="hidden" id="Price_1" value=""/> <!--票面价-->
        <input name="Return_1" type="hidden" id="Return_1" value=""/> <!--返点-->
        <input name="net_Price_1" type="hidden" id="net_Price_1" value=""/> <!--净价-->
        <input name="mach_oil" type="hidden" id="mach_oil" value=""/> <!--机建燃油-->
        <input name="Tmp_nm" type="hidden" id="Tmp_nm" value=""/> <!--里程-->
        <input name="type_aircft" type="hidden" id="type_aircft" value=""/><!--机型-->
        <input name="tkoff_Id" type="hidden" id="tkoff_Id" value=""/> <!--起飞编号-->
        <input name="land_Id" type="hidden" id="land_Id" value=""/><!--降落编号-->
        <input name="Kid_price" type="hidden" id="Kid_price" value=""/><!--儿童价格-->
        <input name="pasge_info" type="hidden" id="pasge_info" value=""/><!--乘机人信息-->
        <input name="lianxi" type="hidden" id="lianxi" value="1"/><!--联系人信息是否保存-->
    </div>
    <!--航空隐藏部分 over-->
    <p>&nbsp;</p>

    <div class="sub_info"><input name="" type="image" src="../images/sub_img.jpg"/></div>
</form>
<p></p>
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
<!--鼠标移过显示代码-->
<div class="m_mouse" id="m_disp">
</div>
<!--鼠标移过显示代码 over-->
<!--登录信息显示部分-->
<!--乘机人姓名-->
<div class="show_log_msg" id="show_log_msg">
    <div class="sh_l_m1" id="sh_l_m1">
    </div>
</div>
<!--乘机人姓名over-->
<!--常用联系人-->
<div class="show_log_msg" id="show_Cmsg">
    <div class="sh_l_m1" id="sh_l_mC">
    </div>
</div>
<!--常用联系人over-->
<!--登录信息显示部分 over-->
</body>
</html>
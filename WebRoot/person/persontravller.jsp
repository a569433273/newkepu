<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>个人中心-常用乘机人</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script src="../js/prs_show.js" type="text/javascript"></script>
    <!--点击左部右部出现内容-->
    <script src="../js/cont_disp.js" type="text/javascript"></script>
    <!--点出收起展开折叠-->
    <script src="../js/cidInfo.js" type="text/javascript"></script>
    <!--身份证号判断-->
    <script src="../js/psg_Lookmsg.js" type="text/javascript"></script>
    <!--查看常用乘客信息以及返回效果-->
    <script src="../js/prs_Udpmsg.js" type="text/javascript"></script>
    <!--修改常用乘客信息-->
    <script src="../js/check_PsgMsg.js" type="text/javascript"></script>
    <!--保存时验证乘客信息-->
    <script src="../js/ck_PsgMsg.js" type="text/javascript"></script>
    <!--验证表单常乘客信息-->
    <script src="../js/prs_dele.js" type="text/javascript"></script>
    <!--删除乘机人-->
    <script src="../js/select_all.js" type="text/javascript"></script>
    <!--全选-->
    <script src="../js/prs_addpsg.js" type="text/javascript"></script>
    <!--添加常用乘机人-->
    <script src="../js/confirm_del.js" type="text/javascript"></script>
    <!--确认删除框不选中时-->
    <script src="../js/rmv_psg.js" type="text/javascript"></script>
    <!--删除选中的常用乘机人-->
    <script src="../js/page.js" type="text/javascript"></script>
    <!--分页效果-->
</head>
<body onload="goPage(1,5,1)">
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
<!--header部分 over-->
<p>&nbsp;</p>
<!--中部-->
<form action="travllerchuli.action" name="travllersavefrom" id="travllersavefrom" method="post">
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <div class="prs_le_1">
                    <img src="../images/cat.jpg"/>
                </div>
                <div class="prs_le_2">
                    <div class="prs_le_21"><input name="" type="file" class="ipt_file"/></div>
                </div>
                <!--上传头像-->
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="personmessage.action">我的资料</a>
                        </li>
                        <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">常用乘机人</a>
                        </li>
                        <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_finc.html">财务中心</a></li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_order.html">订单管理</a></li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_voyage.html">我的航程</a></li>
                        <li class="prs_1" id="prs_6" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                    href="prs_meeting.html">我的会议</a>
                        </li>
                    </ul>
                </div>
                <!--菜单部分 is over-->
            </div>
        </div>
        <!--左部 over-->
        <div class="prs_right">
            <!--常用乘机人-->
            <div class="prs_rt" id="prsC_2">
                <!--常用乘机人头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;常用乘机人</span></div>
                    <div class="prs_rt1_2" id="pack1_2"><img src="../images/per_hid.jpg" style="margin-top:3px;"
                                                             id="pack_2" onclick="cont_disp(this.id);"/>&nbsp;</div>
                </div>
                <!--常用乘机人头部 over-->
                <!--常用乘机人内部-->
                <div class="prs_rt2" id="pack2">
                    <!--常用乘机人内部-->
                    <div class="prs_psg1" id="prs_psg1">
                        <table class="prs_psg_tab">
                            <tbody id="tb_tab">
                            <tr bgcolor="#eef8fa" align="center" height="30">
                                <td width="8%" style="border-top:1px solid #97d3d9; line-height:30px; color:#0066cc;">
                                    <input name="" type="checkbox" value="" id="slt1_all" onclick="selct_all(this.id)"/>&nbsp;全选
                                </td>
                                <td width="10%" style="border-top:1px solid #97d3d9;">姓名</td>
                                <td width="10%" style="border-top:1px solid #97d3d9;">手机号</td>
                                <td width="8%" style="border-top:1px solid #97d3d9;">证件类型</td>
                                <td width="13%" style="border-top:1px solid #97d3d9;">证件号</td>
                                <td width="10%" style="border-top:1px solid #97d3d9;">出生日期</td>
                                <td width="10%" style="border-top:1px solid #97d3d9;">旅客类型</td>
                                <td width="10%" style="border-top:1px solid #97d3d9;">性别</td>
                                <td width="13%" style="border-top:1px solid #97d3d9;">操作</td>
                            </tr>
                            <!--乘客信息-->
                            <s:iterator value="travellers" status="status">
                            <tr height="50" align="center" id="prsge<s:property value="#status.count"/>">
                                <td width="8%"><input name="" type="checkbox" value="" class="only_slt"
                                                      id='psg<s:property value="#status.count"/>_ckbox'
                                                      onclick="oly_selt(this.id)"/></td>
                                <td width="10%" id="psg<s:property value="#status.count"/>_Nm"><s:property
                                        value="traveller_name"></s:property></td>
                                <td width="10%" id="psg<s:property value="#status.count"/>_Tel"><s:property
                                        value="traveller_phone"></s:property></td>
                                <s:if test="traveller_papers_type==0">
                                    <td width="8%" id="psg<s:property value="#status.count"/>_Ctp">身份证</td>
                                    <td width="13%" id="psg<s:property value="#status.count"/>_Crd"><s:property
                                            value="traveller_sf_num"></s:property></td>
                                </s:if>
                                <s:elseif test="traveller_papers_type==1">
                                    <td width="8%" id="psg<s:property value="#status.count"/>_Ctp">护照</td>
                                    <td width="13%" id="psg<s:property value="#status.count"/>_Crd"><s:property
                                            value="traveller_hz_num"></s:property></td>
                                </s:elseif>
                                <s:elseif test="traveller_papers_type==4">
                                    <td width="8%" id="psg<s:property value="#status.count"/>_Ctp">其他</td>
                                    <td width="13%" id="psg<s:property value="#status.count"/>_Crd"><s:property
                                            value="traveller_qt_num"></s:property></td>
                                </s:elseif>
                                <td width="10%" id="psg<s:property value="#status.count"/>_Bir"><s:property
                                        value="traveller_birth"></s:property></td>
                                <s:if test="traveller_type == 0">
                                    <td width="10%" id="psg<s:property value="#status.count"/>_Adt">成人</td>
                                </s:if>
                                <s:else>
                                    <td width="10%" id="psg<s:property value="#status.count"/>_Adt">儿童</td>
                                </s:else>
                                <td width="10%" id="psg<s:property value="#status.count"/>_Sex"><s:property
                                        value="traveller_sex"></s:property></td>
                                <td style="display: none" id="psg<s:property value="#status.count"/>_Id"><s:property
                                        value="traveller_id"></s:property></td>
                                <td width="13%" style="color:#0066cc;"><span style="cursor:pointer;"
                                                                             id="prs<s:property value="#status.count"/>_Look"
                                                                             onclick="prs_Look(this.id)">查看</span>&nbsp;<span
                                        style="cursor:pointer;" id="prs<s:property value="#status.count"/>_Udp"
                                        onclick="prs_Upt(this.id)">编辑</span>&nbsp;<span style="cursor:pointer;"
                                                                                        id="prs<s:property value="#status.count"/>_Del"
                                                                                        onclick="prs_Dele(this.id)">删除</span>
                                </td>
                            </tr>
                            </s:iterator>
                            <!--乘客信息 over-->
                            <tr bgcolor="#eef8fa" align="center" height="30">
                                <td width="8%"
                                    style="border-bottom:1px solid #97d3d9; line-height:30px; color:#0066cc;"><input
                                        name="" type="checkbox" value="" id="slt_all" onclick="selct_all(this.id)"/>&nbsp;<span>全选</span>
                                </td>
                                <td style="border-bottom:1px solid #97d3d9; line-height:30px; text-align:left; color:#0066cc;"
                                    colspan="9">&nbsp;<span style="cursor:pointer;" id='sl_ondel' onclick="rmv_psg();">删除</span>&nbsp;&nbsp;<span
                                        style="cursor:pointer;" onclick="prs_addpsg()">添加</span></td>
                            </tr>
                        </table>
                        <p>&nbsp;</p>
                    </div>
                    <!--分页效果-->
                    <div style="float:left; width:810px; height:auto; overflow:hidden; display:inline;" id="page_total">
                        <div class="Pg_1" id="Pg_1">
                        </div>
                    </div>
                    <!--分页效果 over-->
                    <div style="float:left; width:810px; height:auto; overflow:hidden;  display:inline;" id="prs_ins1">
                        <!--js加载-->
                    </div>
                    <!--乘机人查看编辑内容 over-->
                </div>
                <!--常用乘机人内容 over-->
            </div>
            <!--常用乘机人 over-->
        </div>
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
<!--确认删除-->
<div class="s_div1" id='s_div'>
    <h2>窠浦提醒您</h2>

    <div class="s_t">
        <div class="s_1">网页出现错误,请重新查询</div>
        <div class="s_2"><img src="../images/show_sure.jpg" onclick="lc_href()"/></div>
    </div>
</div>
<div id="z_h"></div>

<!--确认删除over-->
</body>
</html>
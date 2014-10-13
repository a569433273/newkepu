<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>个人中心-财务中心</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css" />
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css" />
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css" /><!--日历样式-->
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/page1.js"></script><!--财物中心分页效果-->
    <script type="text/javascript" src="../js/doubleDate2.0.js"></script><!--双日期日历-->
    <script type="text/javascript" src="../js/prs_show.js"></script><!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/cont_disp.js"></script><!--点出收起展开折叠-->
    <script type="text/javascript" src="../js/click_hidval.js"></script><!--点击文本框将年-月-日清空--->
    <script type="text/javascript" src="../js/getdate.js"></script><!---获得当前日期以及当前日期+7-->
</head>
<body onload="gotoPage(1,5,1)">
<!--header部分 start-->
<div class="total">
    <div class="header">
        <div class="logo"><a href="../index.jsp"><img src="../images/logo.jpg" /></a></div>
        <div class="hd_tel"><img src="../images/tel.jpg"/></div>
        <div class="hd_mark"><a href=""><img src="../images/mark1.jpg"></a>&nbsp;&nbsp;<a href=""><img src="../images/mark2.jpg"></a></div>
        <div style="clear:both;"></div>
    </div>
</div>
<!--header部分 over-->
<p>&nbsp;</p>
<!--中部-->
<form action="#" method="post" name="">
    <div class="prs_mid">
        <!--左部-->
        <div class="prs_left">
            <div class="prs_le1">
                <div class="prs_le_1">
                    <img src="../images/cat.jpg"/>
                </div>
                <div class="prs_le_2"><div class="prs_le_21"><input name="" type="file" class="ipt_file"/></div></div><!--上传头像-->
                <!--菜单部分-->
                <div class="prs_le_3">
                    <ul>
                        <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk" href="personmessage.action">我的资料</a></li>
                        <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk" href="persontravller.action">常用乘机人</a></li>
                        <li class="prs_clk" id="prs_3" onclick="prs_show(this.id)"><a class="li_aClk" href="#">财务中心</a></li>
                        <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk" href="prs_order.html">订单管理</a></li>
                        <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk" href="persontmyflight.action">我的航程</a></li>
                        <li class="prs_1" id="prs_6" onclick="prs_show(this.id)"><a class="li_anlk" href="prs_meeting.html">我的会议</a></li>
                    </ul>
                </div>
                <!--菜单部分 is over-->
            </div>
        </div>
        <!--左部 over-->
        <div class="prs_right">
            <!--财务中心-->
            <div class="prs_rt" id="prsC_3" >
                <!--财务头部-->
                <div class="prs_rt1">
                    <div class="prs_rt1_1"><span>&nbsp;财务中心</span></div>
                    <div class="prs_rt1_2" id="pack1_3"><img src="../images/per_hid.jpg" style="margin-top:3px;" id="pack_3" onclick="cont_disp(this.id);"/>&nbsp;</div>
                </div>
                <!--财务头部头部 over-->
                <!--财务内容-->
                <div class="prs_fna" id="pack3">
                    <!--总的金额-->
                    <div class="prs_fna1">
                        <p><span>账户余额:</span><span class="p_spn">¥1000</span><span style="margin-left:80px;">消费金额:</span><span  class="p_spn"> ¥1000</span><span style="margin-left:80px;">受信额度:</span><span  class="p_spn"> ¥1000</span></p>
                    </div>
                    <!--总的金额over-->
                    <!--账单明细-->
                    <div class="prs_fna2">
                        <!--账单明细头部-->
                        <div class="prs_fna_1">
                            <div class="p_f_1">&nbsp;账单明细</div>
                            <div class="p_f_2">
                                <div class="pf_21">订单号:</div><div class="pf_22"><input type="text" name="" style="width:120px; height:15px;"/>&nbsp;</div>
                                <div class="pf_21">订单日期:</div><div class="pf_22"><input type="text" name="ord_date" id="ord_date" style="width:70px; height:15px; color:#545454;" class="doubledate" onfocus="click_hidval(this.id)" onblur="click1_hidval(this.id)"/>&nbsp;</div>
                                <div class="pf_21">到:</div><div class="pf_22"><input type="text" name="ord_date1" id="ord_date1" style="width:70px; height:15px; color:#545454;" class="doubledate" onfocus="clk_hidval(this.id)" onblur="clk1_hidval(this.id)"/>&nbsp;</div>
                                <div class="pf_22">&nbsp;<input name="" type="image"  src="../images/fina_search.jpg"/></div>
                            </div>
                        </div>
                        <!--账单明细头部-->
                        <!--账单明细内容-->
                        <div class="prs_fna_2">
                            <table class="prs_fna_tab" id="prs_fna_tab" >
                                <tr bgcolor="#eef8fa" style="border:1px solid #dcf7fb;" align="center"  height="30">
                                    <td width="15%" >订单号</td>
                                    <td width="8%">支付金额</td>
                                    <td width="10%">交易时间</td>
                                    <td width="8%">交付状态</td>
                                    <td width="8%" >账户余额</td>
                                    <td width="15%">备注</td>
                                </tr>
                                <s:iterator value="caiwus">
                                <tr align="center"  height="30">
                                    <td width="15%" ><s:property value="vmrecord_orderid"></s:property></td>
                                    <td width="8%"><s:property value="vmrecord_number"></s:property></td>
                                    <td width="10%"><s:property value="vmrecord_time"></s:property></td>
                                    <td width="8%"><s:property value="vmrecord_type"></s:property></td>
                                    <td width="8%" ><s:property value="vmrecord_money"></s:property></td>
                                    <td width="15%"><s:property value="vmrecord_beizhu"></s:property></td>
                                </tr>
                                </s:iterator>
                            </table>
                        </div>
                        <!--账单明细内容-->
                        <!--分页-->
                        <div class="pg1_all" id="pg1_all"></div>
                        <!--分页 over-->
                    </div>
                </div>
                <!--账单明细 over-->
                <!--财务内容 over-->
            </div>
            <!--财务中心 over-->
        </div>
        <div style="clear:both;"></div>
    </div>
</form>
<!--中部 over-->
<p>&nbsp;</p>
<!--foodter-->
<div class="total1">
    <div class="sear_footer" >
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
            <p>京ICP备11016456号    京ICP证110540号</p>
        </div>
    </div>
</div>
<!--footer-->
</body>
</html>

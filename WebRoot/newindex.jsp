<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>窠浦（北京）商务服务有限公司</title>
    <meta name="description" content="窠浦"/>
    <meta name="keywords" content="窠浦航空，窠浦官网，窠浦退票，航空，退票，关于窠浦，wF8PRUDGBcLZ0fWloGaGwDUpUXU"/>
    <link href="css/index.css" rel="stylesheet" type="text/css"/>
    <link href="css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <!--日历样式-->
    <script src="js/jquery-1.4.3.min.js" type="text/javascript"></script>
    <script src="js/chage_arrive.js" type="text/javascript"></script>
    <!--切换往返效果 点击出日历-->
    <script src="js/doubleDate2.0.js" type="text/javascript"></script>
    <!--双日期日历-->
    <script src="js/test.js" type="text/javascript"></script>
    <!--机场-->
    <script src="js/login_position.js" type="text/javascript"></script>
    <!--登录下拉菜单--->
    <title>nestpu首页</title>
</head>
<body onload="patch_cntlen()">
<form action="" name="" method="post" id="air_smit" onkeydown="if(event.keyCode==13)return false;">
    <!--头-->
    <div class="header">
        <iframe src="header.jsp" width="985px" height="78px" frameborder="0" scrolling="no"></iframe>
    </div>
    <!--头over-->
    <div class="idx_bar">&nbsp;</div>
    <!--nav-->
    <div class="idx_nav">
        <%--<div class="idx_nav1">--%>
            <%--<ul>--%>
                <%--<li><a href="" class="idx_1" id="nav_cnt1">首页</a><span class="idx_span2" id="nav_bar_bg1"></span></li>--%>
                <%--<li><a href="" class="idx_2" id="nav_cnt2" onmousemove="move_bar(this.id)"--%>
                       <%--onmouseout="hide_bar(this.id)">机票预定</a> <span class="idx_span2" id="nav_bar_bg2"--%>
                                                                     <%--style="display:none;"></span></li>--%>
                <%--<li><a href="" class="idx_2" id="nav_cnt3" onmousemove="move_bar(this.id)"--%>
                       <%--onmouseout="hide_bar(this.id)">会议管理</a> <span class="idx_span2" id="nav_bar_bg3"--%>
                                                                     <%--style="display:none;"></span></li>--%>
                <%--<li><a href="" class="idx_2" id="nav_cnt4" onmousemove="move_bar(this.id)"--%>
                       <%--onmouseout="hide_bar(this.id)">环球旅行</a> <span class="idx_span2" id="nav_bar_bg4"--%>
                                                                     <%--style="display:none;"></span></li>--%>
                <%--<li><a href="" class="idx_2" id="nav_cnt6" onmousemove="move_bar(this.id)"--%>
                       <%--onmouseout="hide_bar(this.id)">积分商城</a> <span class="idx_span2" id="nav_bar_bg6"--%>
                                                                     <%--style="display:none;"></span></li>--%>
            <%--</ul>--%>
        <%--</div>--%>
        <div class="idx_nav2">
            <s:if test="#session.member_id == null">
            <ul style="">
                <li id="lgin1" onmouseover="lgn_pos()" onmouseout="lgn_dispos()"><span>登录</span></li>
                <li class="nav_li">|</li>
                <li><a href="">注册</a></li>
            </ul>
            </s:if>
            <s:else>
            <h1 class="idx_prsH1"><a href="personmessage.action">个人中心&nbsp;</a></h1>
            <h1 class="idx_prsH1"><a href="denglu.action?tuichu=1">退出</a></h1>
            </s:else>
        </div>
        <div class="clear"></div>
    </div>
    <!--navover-->
    <!--banner-->
    <div class="idx_banner">
        <div class="idx_ban1">
            <!--左-->
            <div class="idx_ban1_1">
                <ul>
                    <li class="ban_li1" id="ban_cnt1" style="cursor:pointer;" onclick="ban_ChgBg(this.id)"><span
                            class="ban_img1"><img src="images/air_icon.png"></span>机票预订
                    </li>
                    <li class="ban_li" id="ban_cnt2" style="cursor:pointer;" onclick="ban_ChgBg(this.id)"><span
                            class="ban_img1"><img src="images/air_busi.png"></span>公务机票
                    </li>
                    <li class="ban_li ban_liMet" style="color:#ccc;"><span class="ban_img1"><img
                            src="images/meet_icon.jpg"></span>会议管理
                    </li>
                    <li class="ban_li2 ban_liMet" style="color:#ccc;"><span class="ban_img2"><img
                            src="images/where_icon.jpg"></span>环球旅行
                    </li>
                </ul>
            </div>
            <!--机票-->
            <div class="idx_ban1_2" id="idx_banImg1">
                <div class="idx_ban1_tp">&nbsp;</div>
                <div class="idx_ban1_2_1">
                    <div class="idx_ban1_2_11">
                        <div class="idx_b_1 idx_onlyR">
                            <div class="idx_b_1_img" id="radio_cnt"><img src="images/radio_checked.jpg"
                                                                         style="cursor:pointer;" id="idx_radio1"
                                                                         onclick="chge_radio(this.id)"/></div>
                            <div class="idx_b_1_txt"><h1 class="idx_ban_h1">单程</h1></div>
                        </div>
                        <div class="idx_b_1 idx_onlyR1">
                            <div class="idx_b_1_img" id="radio_cnt1"><img src="images/radio.png" id="idx_radio2"/></div>
                            <div class="idx_b_1_txt"><h1 class="idx_ban_h1">双程</h1></div>
                        </div>
                    </div>
                    <div class="idx_ban1_city">
                        <div class="idx_ban1_city1">
                            <div class="idx_ban1_city1_1 idx_dist_city">
                                <div class="idx_city11_1"><h1 class="city_h1">起飞城市：</h1></div>
                                <div class="idx_city11_2"><p><input type="text" name="from" class="city_ipt1" id="from"
                                                                    onKeyup="test(this.id,event)"/></p></div>
                            </div>
                            <div class="idx_ban1_city1_1 idx_dist_city">
                                <div class="idx_city11_1"><h1 class="city_h1">到达城市：</h1></div>
                                <div class="idx_city11_2"><p><input type="text" name="arrival" class="city_ipt1"
                                                                    id="arrival" onKeyup="test(this.id,event)"/></p>
                                </div>
                            </div>
                        </div>
                        <div class="idx_ban1_city1 ">
                            <div class="idx_ban1_city1_1 idx_dist_city">
                                <div class="idx_city11_1"><h1 class="city_h1">出发日期：</h1></div>
                                <div class="idx_city11_2"><p><input type="text" name="fromdata"
                                                                    class="city_ipt1 city_ipt2" id="go_Sdate"
                                                                    readonly="readonly" onclick="disp_keyboard()"/></p>
                                </div>
                            </div>
                            <div class="idx_ban1_city1_1 idx_dist_city" style="display:none;" id="go_arrive">
                                <div class="idx_city11_1"><h1 class="city_h1">返回日期：</h1></div>
                                <div class="idx_city11_2"><p><input type="text" name="" class="city_ipt1 city_ipt2"
                                                                    readonly="readonly" id="Ret_Date"
                                                                    onclick="disp_keyboard()"/></p></div>
                            </div>
                        </div>
                        <div style="width:560px; height:50px; overflow:hidden; float:left; margin-top:15px;  display:inline; background:url(images/border_dashed.png) no-repeat 20px 0px;">
                            <p style="text-align:center; margin-top:17px;" id="none_bus"><input type="image"
                                                                                                src="images/idx_search.png"
                                                                                                onclick="return noneBus_sumit()"/>
                            </p>

                            <div class="bus_div" id="business" style="display:none;"><p style="text-align:right;"><input
                                    type="image" src="images/idx_search_bus.png" onclick="return bus_sumit()"/></p>
                            </div>
                            <div class="bus_div1" id="business1" style="display:none;"><span
                                    style="font-size:12px; color:#f3300a"><a href="offical_card/index.html">公务卡购票说明</a></span>
                            </div>
                        </div>
                        <div style="width:560px; height:8px; overflow:hidden; float:left;">&nbsp;</div>
                        <!--3 over-->
                    </div>
                    <!---城市over-->
                </div>
                <div class="idx_ban1_btm">&nbsp;</div>
            </div>
            <!--机票 over-->
            <!--会议-->
            <div class="idx_ban1_2" style="display:none;" id="idx_banImg2">
                <div class="idx_ban1_tp">&nbsp;</div>
                <!--会议管理-->
                <div style="width:560px; height:227px; overflow:hidden; float:left; background:#fdfdfd;">
                    <h1 style="font-size:16px; line-height:200px; font-weight:normal;">敬请期待</h1>

                    <div style="width:790px; height:69px; float:left;">&nbsp;</div>
                </div>
                <div class="idx_ban1_btm">&nbsp;</div>
            </div>
            <!--会议 over-->
            <!--目地的-->
            <div class="idx_ban1_2" style="display:none;" id="idx_banImg3">
                <div class="idx_ban1_tp">&nbsp;</div>
                <!--目地的服务-->
                <div style="width:560px; height:227px; overflow:hidden; float:left; background:#fdfdfd;">
                    <h1 style="font-size:16px; line-height:200px; font-weight:normal;">敬请期待</h1>
                </div>
                <div class="idx_ban1_btm">&nbsp;</div>
            </div>
            <!--目地的 over-->
        </div>
    </div>
    <!--banner over-->
    <div class="idx_nestMsg">
        <!--商业信息-->
        <div class="idx_nestComm">
            <div class="idx_nestComm_1">
                <h1 class="comm_h1">商业信息</h1>
            </div>

            <div class="idx_nestComm_2">
                <div class="Comm2_2"><h1 class="comm_h1_1">窠浦——环球是一家</h1></div>
                <div class="Comm2_1"><img src="images/nestpu_comm.jpg"/></div>
            </div>

            <div class="idx_nestComm_2">
                <ul>
                    <s:iterator value="shangyenewses">
                        <li>
                            <div class="litter_m"><a href=""><s:property value="new_biaoti"></s:property></a></div>
                            <div class="new_mark">&nbsp;</div>
                            <div class="li_right"><s:property value="new_date"></s:property></div>
                            <div style="clear:both;"></div>
                        </li>
                    </s:iterator>
                </ul>
            </div>
        </div>
        <!--商业信息 over-->
        <!--旅游信息-->
        <div class="idx_nestComm" style="margin-left:71px; display:inline;">
            <div class="idx_nestComm_1">
                <h1 class="comm_h1">Nestpu信息</h1>
            </div>

            <div class="idx_nestComm_2">
                <div class="Comm2_2"><h1 class="comm_h1_1">窠浦会员年终福利劲爆来袭</h1></div>
                <div class="Comm2_1"><img src="images/nestpu_msg.jpg"/></div>
            </div>

            <div class="idx_nestComm_2">
                <ul>
                    <s:iterator value="kepunewses">
                    <li>
                        <div class="litter_m"><a href=""><s:property value="new_biaoti"></s:property></a></div>
                        <div class="new_mark">&nbsp;</div>
                        <div class="li_right"><s:property value="new_date"></s:property></div>
                        <div style="clear:both;"></div>
                    </li>
                    </s:iterator>
                </ul>
            </div>
        </div>
        <!--旅游信息 over-->
        <!--旅游信息-->
        <div class="idx_nestComm" style="margin-left:71px; display:inline;">
            <div class="idx_nestComm_1">
                <h1 class="comm_h1">旅游信息</h1>
            </div>
            <div class="idx_nestComm_2">
                <div class="Comm2_2"><h1 class="comm_h1_1">热情西班牙之舞7日自助游</h1></div>
                <div class="Comm2_1"><img src="images/nestpu_tour.jpg"/></div>
            </div>

            <div class="idx_nestComm_2">
                <ul>
                    <li>
                        <div class="litter_m"><a href="">总公司召开学习十八大精神专</a></div>
                        <div class="new_mark">&nbsp;</div>
                        <div class="li_right">2014.07.25</div>
                        <div style="clear:both;"></div>
                    </li>
                    <li>
                        <div class="litter_m"><a href="">总公司召开学习十八大精神专</a></div>
                        <div class="li_right">2014.07.25</div>
                        <div style="clear:both;"></div>
                    </li>
                    <li>
                        <div class="litter_m"><a href="">总公司召开学习十八大精神专</a></div>
                        <div class="li_right">2014.07.25</div>
                        <div style="clear:both;"></div>
                    </li>
                    <li>
                        <div class="litter_m"><a href="">总公司召开学习十八大精神专</a></div>
                        <div class="li_right">2014.07.25</div>
                        <div style="clear:both;"></div>
                    </li>
                </ul>
            </div>
        </div>
        <!--旅游信息 over-->
        <div class="clear"></div>
    </div>
    <!--footer-->
    <div style="width:100%; height:40px; overflow:hidden;"></div>
    <div class="footer">
        <iframe src="footer.jsp" width="100%" height="125px" frameborder="0" scrolling="no"></iframe>
    </div>
    <!--footer over-->
</form>
<div id="test" class="s_3"></div>
<!--机场数据-->
<div id="pos_lgn1" style="display:none; width:100px; height:62px; position:absolute;">
    <ul class="lgin_pos">
        <li class="bord" onmouseover="lgn_pos(this.id)" onmouseout="lgn_dispos(this.id)"><a href="person/personlogin.jsp">个人登录</a></li>
        <li onmouseover="lgn_pos(this.id)" onmouseout="lgn_dispos(this.id)"><a href="company/gpUser_login.jsp">集团用户登录</a></li>
    </ul>
</div>
</body>
</html>
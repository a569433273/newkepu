<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>无标题文档</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/search.css" rel="stylesheet" type="text/css"/>
    <link href="../css/aire_t.css" rel="stylesheet" type="text/css"/>
    <link href="../css/doubleDate.css" rel="stylesheet" type="text/css"/>
    <!--日历样式-->
    <link href="../css/show_message.css" rel="stylesheet" type="text/css"/>
    <!--提示框样式--->
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/doubleDate2.0.js"></script>
    <!--日历-->
    <script type="text/javascript" src="../js/test.js"></script>
    <!--航空机场数据及效果-->
    <script type="text/javascript" src="../js/air_xml.js"></script>
    <!--xml解析及效果-->
    <script type="text/javascript" src="../js/res_tick.js"></script>
    <!--预定时传值效果-->
    <script type="text/javascript" src="../js/return_t.js"></script>
    <!-- 退票改签效果-->
    <script type="text/javascript" src="../js/fold_un.js"></script>
    <!--查看舱位展开折叠-->
    <script type="text/javascript" src="../js/sort_table.js"></script>
    <!--时间升降序-->
    <script type="text/javascript" src="../js/sort_table1.js"></script>
    <!--价格升降序-->
    <script type="text/javascript" src="../js/sort_air.js"></script>
    <!--所有航班价格降序-->
    <script type="text/javascript" src="../js/air_name.js"></script>
    <!--对应返回航班-->
    <script type="text/javascript" src="../js/air_type.js"></script>
    <!--单程往返切换效果-->
    <script type="text/javascript" src="../js/base64encode.js"></script>
    <!--加密码净价票面价-->
    <script type="text/javascript" src="../js/show_msg.js"></script>
    <!--错误提示框-->
    <script>
        $(function () {
            $('.doubledate').kuiDate({
                className: 'doubledate',
                isDisabled: "0"  // isDisabled为可选参数，"0"表示今日之前不可选，"1"标志今日之前可选
            });
        });//加载日历
    </script>
</head>

<body>
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

<div class="sear_all" id="a_hh">
    <!--左部-->
    <div class="left">
        <div class="left1">
            <div class="le_1">
            </div>
            <form action="searchresult.jsp" name="chaxunform" id="chaxunform" method="post"
                  onkeydown="if(event.keyCode==13)return false;">
                <div class="le_2">
                    <div class="s_left4">
                        航程类型：<select id="air_type" style="width:130px;" onchange="one_way()">
                        <option value="01">单程</option>
                        <option value="22">往返</option>
                    </select>&nbsp;
                    </div>
                    <div class="s_left">
                        出发城市：<input type="text" name="from" id="from" value="<%=request.getParameter("from")%>"
                                    style="border:1px solid #ccc; padding:1px; width:130px; height:16px;"
                                    onKeyup="test(this.id,event)" autocomplete="off"/>&nbsp;
                    </div>
                    <div class="s_left1">
                        目地城市：<input type="text" name="arrival" id="arrival" value="<%=request.getParameter("arrival")%>"
                                    style="border:1px solid #ccc; padding:1px; width:130px;  height:16px;"
                                    onKeyup="test(this.id,event)" autocomplete="off"/>&nbsp;
                    </div>
                    <div class="s_left2">
                        出发日期：<input type="text" readonly="readonly" class="doubledate ipticon" name="fromdata"
                                    id="fromdata" value="<%=request.getParameter("fromdata")%>"
                                    style="border:1px solid #ccc; padding:1px; width:130px;  height:16px;"/>&nbsp;
                    </div>
                    <div class="s_left2" style="display:none;" id="db_way">
                        往返日期：<input type="text" readonly="readonly" class="doubledate ipticon" name="fromdata1"
                                    id="fromdata1" value=""
                                    style="border:1px solid #ccc; padding:1px; width:130px;  height:16px;"/>&nbsp;
                    </div>
                    <div class="s_left5">
                        航空公司：<select name="searchtext.airName" id="searchtext.airName" class="text w153"
                                     style="width:135px;">
                        <option value="0" selected="selected">请选择航空公司</option>
                        <option value="CA">CA--中国国际航空</option>
                        <option value="CZ">CZ--中国南方航空</option>
                        <option value="MU">MU--中国东方航空</option>
                        <option value="HU">HU--海南航空</option>
                        <option value="3U">3U--四川航空</option>
                        <option value="SC">SC--山东航空</option>
                        <option value="CN">CN--大新华航空</option>
                        <option value="JD">JD--金鹿航空</option>
                        <option value="GS">GS--天津航空</option>
                        <option value="KN">KN--中国联合航空</option>
                        <option value="ZH">ZH--深圳航空</option>
                        <option value="MF">MF--厦门航空</option>
                        <option value="8C">8C--东星航空</option>
                        <option value="8L">8L--祥鹏航空</option>
                        <option value="9C">9C--春秋航空</option>
                        <option value="AK">AK--亚洲航空</option>
                        <option value="BK">BK--奥凯航空</option>
                        <option value="BR">BR--长荣航空</option>
                        <option value="CI">CI--中华航空</option>
                        <option value="EU">EU--成都航空</option>
                        <option value="FM">FM--上海航空</option>
                        <option value="HO">HO--吉祥航空</option>
                        <option value="KA">KA--港龙航空</option>
                        <option value="KY">KY--昆明航空</option>
                        <option value="NX">NX--澳门航空</option>
                        <option value="NS">NS--东北航空</option>
                        <option value="PN">PN--西部航空</option>
                        <option value="SZ">SZ--中国西南航空</option>
                        <option value="VD">VD--河南航空公司</option>
                        <option value="WH">WH--中国西北航空</option>
                        <option value="WU">WU--武汉航空</option>
                        <option value="XO">XO--新疆航空</option>
                        <option value="Z2">Z2--中原航空</option>
                    </select>&nbsp;&nbsp;
                    </div>
                    <div class="s_left3">
                        <input name="sub" type="image" id="sub" value="sub1" src="../images/left_gimg1.jpg"/>
                    </div>
                </div>
                <div id="test" class="s_3"></div>
                <!--机场数据-->
            </form>
            <div class="le_3">
            </div>
        </div>
    </div>
    <!--左部 over-->
    <!--右部 航班-->
    <div class="sear_rigth">
        <!--头部图片-->
        <div class="a_top_img">
        </div>
        <!--is over-->

        <!--头部-->
        <div class="a_top">
            <div class="a_top11"><span
                    style="font-size:12px; color:#333; font-weight:bold; line-height:25px;">航空公司：</span></div>
            <div class="a_top12">
                <!--js加载航班-->
            </div>
        </div>
        <div class="a_top1">
            <p style="font-size:12px; color:#333; font-weight:bold; text-align:left; margin-top:5px;">按起飞时间排序：<span
                    id="ssort1" class="air_sy" style="font-weight:normal; cursor:pointer;"
                    onclick="sortTable('a_table1',3,0,'asc')">时间从低到高</span>&nbsp;&nbsp;<span id="ssort2" class="air_sy"
                                                                                             style="font-weight:normal; cursor:pointer;"
                                                                                             onclick="sortTable('a_table1',3,0,'des')">时间从高到低</span>
            </p>

            <p style="font-size:12px; color:#333; font-weight:bold; text-align:left; margin-top:5px;">按价格排序：<span
                    class="air_sy" style="font-weight:normal; cursor:pointer;" onclick="sortTable1('a_table1',4,'asc')">价格从低到高</span>&nbsp;&nbsp;<span
                    class="air_sy" style="font-weight:normal; cursor:pointer;" onclick="sortTable1('a_table1',4,'des')">价格从高到低</span>
            </p>
            <br/>
        </div>
        <!--头部-->
        <div class="a_con">
            <div class="a_c_1">
                <table align="center">
                    <!--1-->
                    <tr align="center">
                        <td align="center" class="a_tab_1">
                            <table width="1000" bgcolor="#effafc">
                                <tr align="center" height="30">
                                    <td aling="center" width="15%">航空公司</td>
                                    <td width="13%">航班号</td>
                                    <td width="15%">机型</td>
                                    <td width="13%">起飞地点/时间</td>
                                    <td width="13%">到达地点/时间</td>
                                    <td width="5%">经停</td>
                                    <td width="8%"></td>
                                    <td>操作</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!--2-->
                    <!--3-->
                    <tr align="center">
                        <td align="center">
                            <table width="1000" id="a_table1">
                                <!--air_xml.js加载-->
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!--右部 航班 over-->
    <!--加载代码-->
    <div id="loading">
        <h1 style="color:#f00; font-size:16px; text-align:center; margin-top:300px;">加载中请耐心请待......</h1>

        <h2><a href=""><img src="../images/loading.gif"></a></h2>
    </div>
</div>
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

<!--提示框-->
<div class="s_div">
    <h2>窠浦提醒您</h2>

    <div class="s_t">
        <div class="s_1">网页出现错误,请重新查询</div>
        <div class="s_2"><img src="../images/show_sure.jpg" onclick="lc_href()"/></div>
    </div>
</div>
<div id="z_h"></div>
<!--提示框 over-->
<!--提示框1-->
<div class="s_div1">
    <h2>窠浦提醒您</h2>

    <div class="s_t">
        <div class="s_1">您搜索的航班不存在！</div>
        <div class="s_2"><img src="../images/show_sure.jpg" onclick="lc_href()"/></div>
    </div>
</div>
<!--提示框1 over-->
</body>
</html>

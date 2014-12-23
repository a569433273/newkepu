<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>会议管理--会议照片</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css"/>
    <link href="../css/meeting.css" rel="stylesheet" type="text/css"/>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="../js/jquery-1.6.4.js"></script>
    <script type="text/javascript" src="../js/prs_show.js"></script>
    <!--点击左部右部出现内容-->
    <script type="text/javascript" src="../js/Mphoto_page.js"></script>
    <!--分页效果-->
    <script type="text/javascript" src="../js/mPhoto_mouse.js"></script>
    <!--鼠标移上移下效果-->
    <script src="../js/FancyZoom.js" type="text/javascript"></script>
    <!--图片放大效果-->
    <script src="../js/FancyZoomHTML.js" type="text/javascript"></script>
    <!--图片放大效果html-->
</head>
<body onload="goPage(1,3,1)">
<!--header部分 start-->
<jsp:include page="../head.jsp"></jsp:include>
<!--header部分 over-->
<p>&nbsp;</p>
<!--nav-->
<jsp:include page="../daohang.jsp"></jsp:include>
<!--nav over-->
<!--中间内容-->
<%--<form action="#" method="post" name="">--%>
<div class="prs_mid">
    <!--左部-->
    <div class="prs_left">
        <div class="prs_le1">
            <!--菜单部分-->
            <div class="prs_le_3">
                <ul>
                    <li class="prs_1" id="prs_1" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="searchmeeting.action">基本信息</a>
                    </li>
                    <li class="prs_1" id="prs_3" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="searchmeetingbus.action">商务资讯</a>
                    </li>
                    <li class="prs_1" id="prs_4" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="meetingattend.action">参会人员</a>
                    </li>
                    <li class="prs_1" id="prs_5" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="meetingricheng.action">议题日程</a>
                    </li>
                    <li class="prs_clk" id="prs_2" onclick="prs_show(this.id)"><a class="li_aClk" href="#">会议照片</a>
                    </li>
                    <li class="prs_1" id="prs_2" onclick="prs_show(this.id)"><a class="li_anlk"
                                                                                href="meetingtongzhi.action">通知</a>
                    </li>
                </ul>
            </div>
            <!--菜单部分 is over-->
        </div>
    </div>
    <!--左部 over-->
    <!--右部-->
    <div class="mComm_right">
        <!--会议照片-->
        <div class="prs_rt" id="prsC_6">
            <!--会议照片头部-->
            <div class="prs_rt1">
                <div class="prs_rt1_1"><span>&nbsp;会议照片</span></div>
                <s:form action="uploadimages.action" enctype="multipart/form-data" method="post" namespace="/"
                        theme="simple">
                    <s:file name="upload" label="仅支持jpg,png格式图片"></s:file>
                    <s:submit value="上传"></s:submit>
                </s:form>
                <div class="mphoto_up1">

                    <div class="mph_up1_2"><p>(仅支持jpg,png格式图片)</p></div>
                </div>
            </div>
            <!--会议照片头部 over-->
            <!--会议照片内容-->
            <div class="prs_fna" id="pack6">
                <div class="mphoto_1">
                    <table id="tb_tab">
                        <tr>
                            <s:iterator value="huiyitupians">
                                <td>
                                    <div class="mphoto1_1" id="mphotom_1" onmouseover="mPhoto_mover(this.id)"
                                         onmouseout="mPhoto_mout(this.id)">
                                        <div class="m_pho1_1">
                                            <!--图片部分-->
                                            <div class="m_pho11_1">
                                                <a href="<s:property value='hytp_url'></s:property>"
                                                   class="Meetingph_num"><img
                                                        src="<s:property value='hytp_weburl'></s:property>"
                                                        border="0" style="width:135px; height:100px;"
                                                        title="点击可放大参览" alt=""/></a>
                                            </div>
                                            <!--图片部分over-->
                                            <!--仍字部分-->
                                            <div class="m_pho11_2">
                                                    <%--<div class="m_pho11_ft">--%>
                                                    <%--<span>李一一</span>--%>
                                                    <%--</div>--%>
                                                <div class="m_pho11_ftR">
                                                    <span><s:property value="hytp_time"></s:property></span>
                                                </div>
                                            </div>
                                            <!--仍字部分-->
                                        </div>
                                    </div>
                                </td>
                            </s:iterator>
                        </tr>
                        <!--第四组图片 over-->
                    </table>
                </div>
                <!--分页效果-->
                <div class="mPhotopge_4" id="page_total">
                    <div class="mPhotopge_1" id="Pg_1">
                    </div>
                </div>
                <!--分页效果over-->

            </div>
            <!--会议照片内容-->
        </div>
        <!--会议照片 over-->
    </div>
    <!--右部 over-->
    <div style="clear:both;"></div>
</div>
<%--</form>--%>
<!--中间内容 over-->
<jsp:include page="../yemiandi.jsp"></jsp:include>
</body>
</html>
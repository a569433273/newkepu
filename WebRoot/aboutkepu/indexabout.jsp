<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>窠浦商务服务有限公司</title>
    <link href="../css/index.css" rel="stylesheet" type="text/css" />
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css" />
    <link href="../css/meeting.css" rel="stylesheet" type="text/css" />
    <link href="../css/Copyright.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script src="../js/copyRihgt_msgshow.js" type="text/javascript"></script><!--点击左部右部出现内容-->

</head>
<body>
<jsp:include page="../head.jsp"></jsp:include>
<p>&nbsp;</p>
<jsp:include page="../daohang.jsp"></jsp:include>
<!--位置信息-->
<div class="CopyRight_pos">
    <p>位置信息：首页>关于窠浦</p>
</div>
<!--位置信息 over-->
<!--中部-->
<div class="prs_mid">
    <!--左部-->
    <div class="prs_left">
        <div class="prs_le1">
            <!--菜单部分-->
            <div class="CopyRight_1">
                <ul>
                    <li class="prs_clk"  id="aboutus" onclick="prs_show(this.id)">关于窠浦</li>
                    <li class="prs_1" id="joinus" onclick="prs_show(this.id)">加入窠浦</li>
                    <li class="prs_1" id="contactus" onclick="prs_show(this.id)">联系我们</li>
                    <li class="prs_1" id="falvshengming" onclick="prs_show(this.id)">法律声明</li>
                    <li class="prs_1" id="yinsitiaokuan" onclick="prs_show(this.id)">隐私条款</li>
                    <li class="prs_1" id="guanggaozhaoshang" onclick="prs_show(this.id)">广告服务</li>
                    <%--<li class="prs_1" id="feedback" onclick="prs_show(this.id)">意见反馈</li>--%>
                </ul>
            </div>
            <!--菜单部分 is over-->
        </div>
    </div>
    <!--左部 over-->
    <div class="CopyRight_2" id="frame_copyR"><iframe style="width:810px; height:auto;" src="about_us.html" frameborder="0"  scrolling="no" id="frameMsg"></iframe></div>
    <div style="clear:both;"></div>
</div>
<!--中部 over-->
<p>&nbsp;</p>
<jsp:include page="../yemiandi.jsp"></jsp:include>
<script type="text/javascript">
    var getParam = function(name){
        var search = document.location.search;
        var pattern = new RegExp("[?&]"+name+"\\=([^&]+)", "g");
        var matcher = pattern.exec(search);
        var items = null;
        if(null != matcher){
            try{
                items = decodeURIComponent(decodeURIComponent(matcher[1]));
            }catch(e){
                try{
                    items = decodeURIComponent(matcher[1]);
                }catch(e){
                    items = matcher[1];
                }
            }
        }
        return items;
    };
    prs_show(getParam('thepage'));
</script>
</body>
</html>

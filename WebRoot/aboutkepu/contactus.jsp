<%--suppress ALL --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>联系我们</title>
    <link href="../css/person_ctr.css" rel="stylesheet" type="text/css" />
    <link href="../css/Copyright.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-1.6.4.js" type="text/javascript"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=1.2"></script>
</head>
<body>
<div class="CopyRight_about" id="CopyRight_about">

    <div class="prs_rt" id="prsC_6">
        <div class="prs_rt1">
            <div class="prs_rt1_1"><span>&nbsp;联系我们</span></div>
        </div>
        <div class="prs_fna">
            <div class="CopyR_about1">
                <div class="CopyR_CntUs_2"><img src="../images/copyR_contus.jpg"  alt=""/></div>
                <div class="CopyR_CntUs_1">
                    <p style="color:#0083cb; font-weight:bold;">窠浦（北京）商务服务有限公司</p>
                    <p style="font-size:14px; text-indent:2em;">地址：朝阳门银河SOHO中心A座10511室</p>
                    <p style="font-size:14px; text-indent:2em;">邮编：100010</p>
                    <p style="font-size:14px; text-indent:2em;">总机：010-64175566</p>
                </div>
            </div>
            <div class="cpyR_map">
                <div id="container"></div>
            </div>
        </div>
    </div>
    <!--我的会议 over-->
</div>
<script type="text/javascript">
    //地图
    var map = new BMap.Map("container");          // 创建地图实例


    //通过经纬度坐标来初始化地图
    var point = new BMap.Point(116.439788,39.927552);  // 创建点坐标

    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别

    //通过城市名称来初始化地图
    //map.centerAndZoom("长春");

    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);

    map.enableScrollWheelZoom();  // 开启鼠标滚轮缩放
    map.enableKeyboard();         // 开启键盘控制
    map.enableContinuousZoom();   // 开启连续缩放效果
    map.enableInertialDragging(); // 开启惯性拖拽效果

    map.addControl(new BMap.NavigationControl()); //添加标准地图控件(左上角的放大缩小左右拖拽控件)
    map.addControl(new BMap.ScaleControl());      //添加比例尺控件(左下角显示的比例尺控件)
    map.addControl(new BMap.OverviewMapControl()); // 缩略图控件
    map.addControl(new BMap.MapTypeControl());     //// 仅当设置城市信息时，MapTypeControl的切换功能才能可用map.setCurrentCity("北京");
    map.setCurrentCity("北京市");

    //添加自定义控件

    // 定义一个控件类，即function
    function ZoomControl(){
        // 设置默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(50, 10);
    }

    // 通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMap.Control();

    // 自定义控件必须实现initialize方法，并且将控件的DOM元素返回
    // 在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
    ZoomControl.prototype.initialize = function(map){
        // 创建一个DOM元素
        var div = document.createElement("div");
        // 设置样式
        div.style.cursor = "pointer";
        div.style.border = "1px solid gray";
        div.style.backgroundColor = "white";

        // 添加DOM元素到地图中
        map.getContainer().appendChild(div);
        // 将DOM元素返回
        return div;
    }

    // 创建控件实例
    var myZoomCtrl = new ZoomControl();
    // 添加到地图当中
    map.addControl(myZoomCtrl);



    //添加信息窗口
    var opts = {
        width : 0,     // 信息窗口宽度
        height: 0,     // 信息窗口高度
        title : "<p style='line-height:30px; text-align:center; font-size:14px; color:#008ddc;'>窠浦(北京)商务服务有限公司</p>"  // 信息窗口标题
    }
    var infoWindow = new BMap.InfoWindow("<p style='line-height:30px; text-align:center; font-size:12px; '>地址：朝阳门银河SOHO中心A座10511</p>", opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
    //地图over
    window.parent.document.getElementById('frameMsg').style.height=document.getElementById("CopyRight_about").offsetHeight+'px'; //高度给父级页面
</script>
</body>
</html>

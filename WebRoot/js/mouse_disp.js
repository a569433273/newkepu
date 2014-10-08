// <!--鼠标移上显文字--
function mouse_disp(ev) {
    var l_st = ev.substr(7);
    var l_str = ev.substr(0, 7);
    if (l_str == "delay_s") {
        var x = $("#delay_s" + l_st).offset().top;
        var y = $("#delay_s" + l_st).offset().left; //得到位置
        var ns = document.getElementById("m_disp");
        ns.innerHTML = "";
        var str1 = "<div class='m_m_1'></div>";
        $("#m_disp").append(str1);
        var str2 = "<div class='m_m_2' id='ins_data'></div>";
        $("#m_disp").append(str2);
        var str3 = "<p><span class='sp_c'>保险信息：</span></p>";
        str3 += "<p><span class='sp_c'>1、产品名称：</span>《永安延误险》</p>";
        str3 += "<p><span class='sp_c'>2、份数限制</span>：每人每航段最多1份</p>";
        str3 += "<p><span class='sp_c'>3、销售限制</span>：航班起飞前截止销售<p>";
        str3 += "<p><span class='sp_c'>4、有效期：</span>购买成功后即时生效<p>";
        str3 += "<p><span class='sp_c'>5、保险费：</span>20元/份</p>";
        str3 += "<p><span class='sp_c'>6、保险金额及保险责任：</span>投保人必须乘坐投保航班且航班抵达目的地时延误2.5小时及以上，赔偿¥300元，若航班被取消或者投保人乘坐航班起飞后返航、备降，赔偿¥100元。</p>";
        str3 += "<p><span class='sp_c'>7、退保：</span>保险购买即生效，不可单独退保。预订航班计划起飞时间前退票/改签，可退保</p>";
        str3 += "<p><span class='sp_c'>8、发票：</span>提供保险定额发票以作报销。保险定额发票仅作报销凭证，不是保单凭证</p>";
        str3 += "<p><span class='sp_c'>9、咨询：</span>如您有疑问，请咨询</p>";
        $("#ins_data").append(str3);//插入内容
    }//延误险内容

    else if (l_str == "accid_s") {
        var x = $("#accid_s" + l_st).offset().top;
        var y = $("#accid_s" + l_st).offset().left;
        var ns = document.getElementById("m_disp");
        ns.innerHTML = "";
        var str1 = "<div class='m_m_1'></div>";
        $("#m_disp").append(str1);
        var str2 = "<div class='m_m_2' id='ins_data'></div>";
        $("#m_disp").append(str2);
        var str3 = "<p>保险信息：</p>";
        str3 += "<p>1、请您根据需求选择保险，如不需要保险，请选择0份；如需指定保险受益人，请联系承保保险公司处理。</p>";
        str3 += "<p>2、如您选择投保，表示确认投保人、乘机人（即被保险人）同意购买且认可保险金额，并已阅读《太平航空意外伤害保险单J款（新残标）条款》的全部内容，了解并接受条款中责任免除、退保等在内的重要事项。保险金额：80万元/份，保险费：20元/份</p>";
        str3 += "<p>3、在您提交订单并成功付款后，会由太平养老保险股份有限公司发送投保成功的短信至您的手机，请注意查收。<p>";
        str3 += "<p>4、选择联动优势支付，保险将变更为太平航空意外伤害保险单J款（新残标） 太平航意险<p>";
        $("#ins_data").append(str3);


    }//意外险内容
    document.getElementById("m_disp").style.left = y + 'px';
    document.getElementById("m_disp").style.top = x + 15 + 'px';
    document.getElementById("m_disp").style.display = "block"; 	//设置位置并将其显示

}
function mouse_hid() {//鼠标移开将内容清空
    var ns = document.getElementById("m_disp");
    ns.innerHTML = "";
}
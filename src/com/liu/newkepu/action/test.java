package com.liu.newkepu.action;

import com.liu.newkepu.util.ZhengzeUtil;

import java.util.List;

public class test {
    public static void main(String[] args) {
        String aa = "<p style=\"TEXT-ALIGN: left; TEXT-INDENT: 0em\"><span style=\"FONT-FAMILY: 宋体; COLOR: #444444; FONT-SIZE: 18px\"></span>&nbsp;国内首款公商务差旅应用手机客户端\"要客差旅\"正式上线，支持机票、酒店政府公务采购；大型会议在线管理；专属客户经理一对一服务，更有多重积分好礼、集团单位用户高额度授信功能。在窠浦，与6000万政企精英同行</p><p style=\"TEXT-INDENT: 2em\"><span style=\"FONT-FAMILY: 宋体; FONT-SIZE: 19px\">为更好的围绕石家庄正定国际机场开拓包机业务，同时更好的服务于河北地区商旅人士。</span><span style=\"FONT-FAMILY: 宋体; COLOR: black; FONT-SIZE: 19px\">Nestpu</span><span style=\"FONT-FAMILY: 宋体; COLOR: black; FONT-SIZE: 19px\">计划加大2014年河北</span></p><p style=\"TEXT-ALIGN: left; TEXT-INDENT: 0em\"><span style=\"FONT-FAMILY: 宋体; COLOR: #444444; FONT-SIZE: 18px\"></span>&nbsp;</p><p>&nbsp;</p>";
        int as = aa.indexOf("</p>");
        ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
        List<String> thestt = zhengzeUtil.zhengze(aa.substring(0,as),"[\\u4e00-\\u9fa5]");
        for (String aThestt : thestt) {
            System.out.print(aThestt);
        }
        System.out.println();
        if (thestt.size() > 70) {
            System.out.println(aa.substring(0, aa.lastIndexOf(thestt.get(70))) + "</p>");
        } else {
            System.out.println(aa.substring(0, aa.lastIndexOf(thestt.get(thestt.size()))) + "</p>");
        }
    }
}

package com.liu.newkepu.util;

import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLEncoder;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

public class Faduanxin {
    public String faduanxin(String shoujihao, String message) throws Exception {
        String duanxin = "";
        String qurl = "http://211.147.244.114:9801/CASServer/SmsAPI/SendMessage.jsp?userid=83160&password=a123456"
                + "&destnumbers="
                + shoujihao
                + "&msg="
                + URLEncoder.encode(message, "UTF-8")
                + "&sendtime=";
        SAXReader reader = new SAXReader();
        Document document = reader.read(new URL(qurl));
        Element rootElement = document.getRootElement();
        if ("0".endsWith(rootElement.attributeValue("return"))) {
            duanxin = "成功";
        } else {
            duanxin = "失败";
        }
        return duanxin;
    }
}

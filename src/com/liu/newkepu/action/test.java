package com.liu.newkepu.action;

import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.liu.newkepu.util.ZhengzeUtil;

public class test {
public static void main(String[] args) {
	ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
	List<String> fromandarrivalList = zhengzeUtil.zhengze("黄岩(台州)(HYN)",
			"[A-Z]{3}");
	System.out.println(fromandarrivalList.size());
	}
}

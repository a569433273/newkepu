package com.liu.newkepu.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ZhengzeUtil {

	/**
	 * 调用正则表达式对文本进行处理
	 * 
	 * @param message
	 *            需要处理的文本
	 * @param zhengzebiaodashi
	 *            正则表达式
	 * 
	 * @return 匹配正则表达式的文本list
	 * @author 刘健
	 */
	public List<String> zhengze(String message, String zhengzebiaodashi) {
		List<String> list = new ArrayList<>();
		Pattern pattern = Pattern.compile(zhengzebiaodashi);
		Matcher matcher = pattern.matcher(message);
		while (matcher.find()) {
			list.add(matcher.group().trim());
		}
		return list;
	}
}

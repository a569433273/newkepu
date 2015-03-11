package com.liu.newkepu.action;

import com.liu.newkepu.util.Md5Tools;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class test {
    public static void main(String[] args) throws Exception {
        String version = "1";
        String agent_id = "1951704";
        String agent_bill_id = "kp13132132122331";
        String agent_bill_time = "20091112102000";
        String remark = "nestpu123";
        String return_mode = "1";
        String key = "EF27117A2C7B4ABFA7E49226";
        Md5Tools md5Tools = new Md5Tools();
        String sign = md5Tools.MD5("(version=" + version + "&agent_id=" + agent_id + "&agent_bill_id=" + agent_bill_id + "4&agent_bill_time=" + agent_bill_time + "&return_mode=" + return_mode + "&key=" + key).toLowerCase();
        System.out.println(sign);
        BufferedReader in = null;
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpPost httpPost = new HttpPost("http://pay.heepay.com/Payment/Query.aspx");
        List<NameValuePair> nvps = new ArrayList<NameValuePair>();
        nvps.add(new BasicNameValuePair("version", version));
        nvps.add(new BasicNameValuePair("agent_id", agent_id));
        nvps.add(new BasicNameValuePair("agent_bill_id", agent_bill_id));
        nvps.add(new BasicNameValuePair("agent_bill_time", agent_bill_time));
        nvps.add(new BasicNameValuePair("remark", remark));
        nvps.add(new BasicNameValuePair("return_mode", return_mode));
        nvps.add(new BasicNameValuePair("sign", sign));
        httpPost.setEntity(new UrlEncodedFormEntity(nvps));
        CloseableHttpResponse response = httpclient.execute(httpPost);
        try {
            System.out.println(response);
          HttpEntity entity2 = response.getEntity();
            System.out.println(entity2);
            System.out.println(EntityUtils.toString(entity2));
            // do something useful with the response body
            // and ensure it is fully consumed
            EntityUtils.consume(entity2);
        } finally {
            response.close();
        }
    }}

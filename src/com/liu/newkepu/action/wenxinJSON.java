package com.liu.newkepu.action;


import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.tempuri.Service;

import javax.ws.rs.HttpMethod;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class wenxinJSON {
    public String theress = null;
    public wenxinJSON() {

    }
    public testresult wJSON(String daoda,String qifei,String riqi) {
        testresult testresult = new testresult();
        BufferedReader in = null;
        try {
            // 定义HttpClient
            HttpClient client = new DefaultHttpClient();
            System.out.println("开始之行微信查询");
            // 实例化HTTP方法
            HttpPost request1 = new HttpPost("https://mair.travelsky.com/dragonli-api-rest/v1/account/login.json");

            // 创建名/值组列表
            List<BasicNameValuePair> parameters1 = new ArrayList<>();
            parameters1.add(new BasicNameValuePair("loginName", "o75282e1"));
            parameters1.add(new BasicNameValuePair("password", "nestpuoioi1"));
            parameters1.add(new BasicNameValuePair("passwordMd5", "d9440f56efcb4f27dd2fccd51f6c8fb6"));
            parameters1.add(new BasicNameValuePair("upperPasswordMd5", "e8229dfd729d361fb478b6d3a93b52d4"));
            parameters1.add(new BasicNameValuePair("upperLoginNamePasswordMd5Upper", "9B238E9D6EB7C7937976AAF032486761"));
            parameters1.add(new BasicNameValuePair("accountWX", "o8sSYuO0RVGZzxJLiqYk6sgdvBt0"));
            parameters1.add(new BasicNameValuePair("bindWX", "false"));
            parameters1.add(new BasicNameValuePair("loginByWX", "false"));

            HttpPost request2 = new HttpPost("http://mair.travelsky.com/dragonli-api-rest/v1/shopping/shoppingQuery.json");

            List<BasicNameValuePair> parameters2 = new ArrayList<>();
            parameters2.add(new BasicNameValuePair("arrivalAirportCode", daoda));
            parameters2.add(new BasicNameValuePair("customerName", ""));
            parameters2.add(new BasicNameValuePair("departureAirportCode", qifei));
            parameters2.add(new BasicNameValuePair("departureDate", riqi));
            parameters2.add(new BasicNameValuePair("isDirectFlightOnly", "true"));
            parameters2.add(new BasicNameValuePair("isQueryReturn", "false"));
            parameters2.add(new BasicNameValuePair("numOfPerson", "1"));
            parameters2.add(new BasicNameValuePair("queryType", "0"));
            parameters2.add(new BasicNameValuePair("returnDate", "2015-03-20"));

            // 创建UrlEncodedFormEntity对象
            UrlEncodedFormEntity formEntiry1 = new UrlEncodedFormEntity(
                    parameters1);
            request1.setEntity(formEntiry1);

            UrlEncodedFormEntity formEntity2 = new UrlEncodedFormEntity(parameters2);
            request2.setEntity(formEntity2);
            // 执行请求
            HttpResponse response = client.execute(request1);

            in = new BufferedReader(new InputStreamReader(response.getEntity()
                    .getContent()));
            StringBuffer sb = new StringBuffer("");
            String line = "";
            String NL = System.getProperty("line.separator");
            while ((line = in.readLine()) != null) {
                sb.append(line + NL);
            }
            in.close();
            String result = sb.toString();
            System.out.println(result);
            new Thread() {
                public void run() {
                    BufferedReader in = null;
                    //在匿名内部类中使用count、future、c。
                    testresult.setRealData(in,client,request2);
                    testresult.setContent();
                }
            }.start();
//            thejson = requ1(in,client,request2);
//                TestThread testThread = new TestThread(in,client,request2);
//                Thread thread1 = new Thread(testThread);
//                thread1.start();

            System.out.println("结束微信查询");
            return testresult;
        } catch (Exception e) {}
        finally {
            if (in != null) {
                try {
                    in.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        return testresult;
    }

    public String getTheress() {
        return theress;
    }

    public void setTheress(String theress) {
        this.theress = theress;
    }
}


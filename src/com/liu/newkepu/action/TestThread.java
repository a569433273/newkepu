package com.liu.newkepu.action;

import com.liu.newkepu.vo.searchInfo;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TestThread  implements Runnable {
    private BufferedReader in = null;
    private HttpClient client;
    private HttpPost request2;

    public TestThread(BufferedReader bufferedReader,HttpClient client,HttpPost post) {
        this.in = bufferedReader;
        this.client = client;
        this.request2 = post;
    }
    @Override
    public void run() {
//        while (true) {
            try {
//                Thread.sleep(1000);
                System.out.println("我开始查询了");
                in = requ1(in, client, request2);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
//    }

    private static BufferedReader requ1(BufferedReader in, HttpClient client, HttpPost request1) throws IOException {
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
        return in;
    }
}


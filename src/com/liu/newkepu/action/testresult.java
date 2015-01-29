package com.liu.newkepu.action;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class testresult {
    private String content = "ss";
    public boolean ready = false;

    public synchronized void setRealData(BufferedReader in,HttpClient client,HttpPost post) {
        if (ready) {return;}
                    //在匿名内部类中使用count、future、c。
                    try {
                        System.out.println("开始查航线");
                        HttpResponse response = client.execute(post);

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
//                        System.out.println(result);
                        content = result;
                        System.out.println("航线查结束");
                    } catch (Exception e) {

                    }
                }
    public synchronized String getContent() {
        while (!ready) {
            try {
                System.out.println("1");
                wait();
            } catch (InterruptedException e) {
            }
        }
        return content;
    }
    public synchronized String setContent() {
        this.ready = true;
        notifyAll();
        return content;
    }
}

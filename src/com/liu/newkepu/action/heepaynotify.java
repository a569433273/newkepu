package com.liu.newkepu.action;

import com.liu.newkepu.dao.CaiwuDao;
import com.liu.newkepu.dao.OrderDao;
import com.liu.newkepu.model.Caiwu;
import com.liu.newkepu.model.Order;
import com.liu.newkepu.util.Md5Tools;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@Component("heepaynotify")
public class heepaynotify extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private OrderDao orderDao;

    @Resource
    private CaiwuDao caiwuDao;

    @Override
    public String execute() throws Exception {
        String key = "EF27117A2C7B4ABFA7E49226";
        String sresult = searchInfo.getResult();
        String spay_message = searchInfo.getPay_message();
        String sagent_id = searchInfo.getAgent_id();
        String sjnet_bill_no = searchInfo.getJnet_bill_no();
        String sagent_bill_id = searchInfo.getAgent_bill_id();
        String spay_type = searchInfo.getPay_type();
        String spay_amt = searchInfo.getPay_amt();
        String sremark = searchInfo.getRemark();
        String ssign = searchInfo.getSign();
        String str = "result=" + sresult + "&agent_id=" + sagent_id + "&jnet_bill_no=" + sjnet_bill_no + "&agent_bill_id=" + sagent_bill_id + "&pay_type=" + spay_type + "&pay_amt=" + spay_amt + "&remark=" + sremark + "&key=" + key;
        HttpServletRequest request = ServletActionContext.getRequest();
        String notijieguo = "";
        if (sresult.equals("1")) {
            Md5Tools md5Tools = new Md5Tools();
            if (md5Tools.MD5(str).toLowerCase().equals(ssign)) {
                notijieguo = "ok";
                returnxml("ok");
                return null;
            }
            notijieguo = "error";
            returnxml("error");
        } else {
            notijieguo = "error";
            returnxml("error");
        }
        if (notijieguo.equals("error")) {
            String version = "1";
            String agent_id = "1951704";
            String agent_bill_id = request.getSession().getAttribute("agent_bill_id").toString().substring(0, sagent_bill_id.length() - 4);
            String agent_bill_time = request.getSession().getAttribute("agent_bill_time").toString();
            String remark = "nestpu123";
            String return_mode = "1";
            Md5Tools md5Tools = new Md5Tools();
            String sign = md5Tools.MD5("(version=" + version + "&agent_id=" + agent_id + "&agent_bill_id=" + agent_bill_id + "4&agent_bill_time=" + agent_bill_time + "&return_mode=" + return_mode + "&key=" + key);
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
            CloseableHttpResponse response2 = httpclient.execute(httpPost);

            try {
                HttpEntity entity2 = response2.getEntity();
                String jieguo = EntityUtils.toString(entity2);
                if (!jieguo.equals("无效的签名数据")) {
                    String[] jieguos = jieguo.split("|");
                    if (jieguos[4].equals("1")) {
                        return null;
                    } else {
                        return null;
                    }
                }
                EntityUtils.consume(entity2);
            } finally {
                response2.close();
            }
        }
        return null;
    }

    private void deletepayshuju(String sagent_bill_id) {
        HttpServletRequest request = ServletActionContext.getRequest();
        List<Order> orders = new ArrayList<Order>();
        orders = orderDao.findByorder_id(request.getSession().getAttribute("agent_bill_id").toString().substring(0, sagent_bill_id.length() - 4));
        if (orders.get(0).getOrder_state() == 1) {
            orders.get(0).setOrder_state(0);
            orders.get(0).setOrder_pomp_id("");
            orders.get(0).setPayOrderType(4);
            orderDao.update(orders.get(0));
            List<Caiwu> caiwus = new ArrayList<Caiwu>();
            caiwus = caiwuDao.findByorderid(request.getSession().getAttribute("agent_bill_id").toString().substring(0, sagent_bill_id.length() - 4));
            if (caiwus.size() > 0) {
                caiwuDao.delete(caiwus.get(0));
            }
        }
    }

    private void returnxml(String jieguo) throws IOException {
        HttpServletResponse response = ServletActionContext.getResponse();
        PrintWriter out = response.getWriter(); // （3）一定要在（1）（2）的后面
        out.print(jieguo);
        out.flush();
        out.close();
    }
    @Override
    public Object getModel() {
        return searchInfo;
    }
}

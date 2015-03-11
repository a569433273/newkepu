package com.liu.newkepu.action;

import com.liu.newkepu.dao.CaiwuDao;
import com.liu.newkepu.dao.OrderDao;
import com.liu.newkepu.model.Caiwu;
import com.liu.newkepu.model.Order;
import com.liu.newkepu.util.Md5Tools;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

@Component("heepayreturn")
public class heepayreturn  extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private OrderDao orderDao;

    @Resource
    private CaiwuDao caiwuDao;

    private List<Order> orders;

    private String paymess;

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
        String str = "result=" + sresult + "&agent_id=" + sagent_id + "&jnet_bill_no=" +sjnet_bill_no + "&agent_bill_id=" + sagent_bill_id + "&pay_type=" + spay_type + "&pay_amt=" + spay_amt + "&remark=" + sremark+ "&key=" + key;
        HttpServletRequest request = ServletActionContext.getRequest();
        if (sresult.equals("1")) {
            Md5Tools md5Tools = new Md5Tools();
            if (md5Tools.MD5(str).toLowerCase().equals(ssign)) {
                orders = orderDao.findByorder_id(sagent_bill_id.substring(0,sagent_bill_id.length() - 4));
                orders.get(0).setOrder_state(1);
                orders.get(0).setOrder_pomp_id(sjnet_bill_no);
                orders.get(0).setPayOrderType(5);
                orderDao.update(orders.get(0));
                Caiwu caiwu = new Caiwu();
                caiwu.setVmrecord_id(UUID.randomUUID().toString());
                caiwu.setVmrecord_type("1");
                DateFormat timeFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
                caiwu.setVmrecord_time(timeFormat.format(Calendar.getInstance().getTime()));
                caiwu.setVmrecord_money(Integer.valueOf(spay_amt.substring(0,spay_amt.length() -3)));
                caiwu.setVmrecord_number(0);
                caiwu.setVmrecord_orderid(sagent_bill_id.substring(0,sagent_bill_id.length() - 4));
                caiwu.setVmrecord_remark("支付");
                caiwu.setVmrecord_member_id(sremark);
                caiwu.setVmrecord_beizhu("通过汇付宝支付，支付订单号：" + sjnet_bill_no);
                caiwu.setVmrecord_order_type("0");
                caiwu.setVmrecord_pay_type("3");
                caiwuDao.save(caiwu);
                paymess = "支付成功";
                return "success";
            }
            paymess = "支付失败";
            return "faild";
        } else {
            paymess = "支付失败";
            return "faild";
        }
    }

    public String getPaymess() {
        return paymess;
    }

    public void setPaymess(String paymess) {
        this.paymess = paymess;
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}

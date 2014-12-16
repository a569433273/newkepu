package com.liu.newkepu.action;

import com.liu.newkepu.dao.FlightnameDao;
import com.liu.newkepu.dao.HangkonggsDao;
import com.liu.newkepu.dao.OrderDao;
import com.liu.newkepu.model.Hangkonggs;
import com.liu.newkepu.model.Order;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("personorder")
public class personorder extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private OrderDao orderDao;

    @Resource
    private FlightnameDao flightnameDao;

    private List<Order> orders;

    @Resource
    private SessionFactory sessionFactory;

    @Resource
    private HangkonggsDao hangkonggsDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        orders = orderDao.findBymember_id(request.getSession().getAttribute("member_id").toString());
        for (Order order : orders) {
            sessionFactory.getCurrentSession().evict(order);
            List<Hangkonggs> hangkonggses = hangkonggsDao.findBycode(order.getFlight_company());
            order.setFlight_tpm(hangkonggses.get(0).getGongsiname());
            order.setFlight_from(flightnameDao.findBysanzima(order.getFlight_from()).getChengshi());
            order.setFlight_arrival(flightnameDao.findBysanzima(order.getFlight_arrival()).getChengshi());
            switch (order.getOrder_state()) {
                case 0:
                    order.setBack_tpm("未确认");
                    break;
                case 1:
                    order.setBack_tpm("待出票");
                    break;
                case 2:
                    order.setBack_tpm("出票完成");
                    break;
                case 3:
                    order.setBack_tpm("申请退票");
                    break;
                case 4:
                    order.setBack_tpm("已退款");
                    break;
                case 5:
                    order.setBack_tpm("申请改签");
                    break;
                case 6:
                    order.setBack_tpm("改签完成");
                    break;
                case 7:
                    order.setBack_tpm("已取消");
                    break;
                case 8:
                    order.setBack_tpm("退票审核");
                    break;
                case 9:
                    order.setBack_tpm("等待审核");
                    break;
                case 10:
                    order.setBack_tpm("审核成功");
                    break;
                case 11:
                    order.setBack_tpm("审核失败");
                    break;
                default:
                    order.setBack_tpm("未知");
                    break;
            }
        }
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}

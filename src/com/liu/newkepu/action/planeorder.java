package com.liu.newkepu.action;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import com.liu.newkepu.dao.*;
import com.liu.newkepu.model.*;
import com.liu.newkepu.util.CreatPNR;
import com.liu.newkepu.util.ZhengzeUtil;
import org.apache.struts2.ServletActionContext;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Component;

import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

@Component("planeorder")
public class planeorder extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    private List<Passenger> passengers;
    private List<Order> orders;

    @Resource
    private OrderDao orderDao;

    @Resource
    private PassengerDao passengerDao;

    @Resource
    private TravellerDao travellerDao;

    @Resource
    private LianxirenDao lianxirenDao;

    @Resource
    private MyflightDao myflightDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        ZhengzeUtil zhengzeUtil = new ZhengzeUtil();

        Calendar calendar = Calendar.getInstance();
        DateFormat idFormat = new SimpleDateFormat("yyyyMMddhhmmssSSS");
        DateFormat timeFormat = new SimpleDateFormat("yyyy-MM-dd HH:ss");

        String order_id = "KP" + idFormat.format(calendar.getTime());
        request.setAttribute("order_id", order_id);

        int order_state = 0;

        String order_cztime = timeFormat.format(calendar.getTime());

        String order_time = timeFormat.format(calendar.getTime());

        String order_member_id = request.getSession().getAttribute("member_id").toString();

        List<String> list = zhengzeUtil.zhengze(searchInfo.getAir_Name_1(), "[\\u4e00-\\u9fa5]{4,6}");
        int chinanamelength = list.get(0).length();

        String flight_company = searchInfo.getAir_Name_1().substring(chinanamelength, chinanamelength + 2);

        String flight_id = searchInfo.getAir_Name_1().substring(chinanamelength + 2, searchInfo.getAir_Name_1().length());
        request.setAttribute("flight_company_cn", list.get(0) + flight_company + flight_id);

        String flight_position = searchInfo.getSaled_1();

        List<String> from = zhengzeUtil.zhengze(searchInfo.getTkoff_Name(), "[A-Z]{3}");
        String flight_from = from.get(0);
        List<String> from_cn = zhengzeUtil.zhengze(searchInfo.getTkoff_Name(), "[\\u4e00-\\u9fa5]{4,7}");
        request.setAttribute("flight_from", from_cn.get(0) + searchInfo.getTkoff_Id());

        List<String> arrival = zhengzeUtil.zhengze(searchInfo.getLand_Name(), "[A-Z]{3}");
        String flight_arrival = arrival.get(0);
        List<String> arrival_cn = zhengzeUtil.zhengze(searchInfo.getLand_Name(), "[\\u4e00-\\u9fa5]{4,7}");
        request.setAttribute("flight_arrival", arrival_cn.get(0) + searchInfo.getLand_Id());

        String[] tkoff = searchInfo.getTkoff_Time().split(" ");
        String flight_from_date = tkoff[0];
        String flight_from_time = tkoff[1];
        request.setAttribute("Tkoff_Time", searchInfo.getTkoff_Time());

        String[] land = searchInfo.getLand_Time().split(" ");
        String flight_arrival_date = land[0];
        String flight_arrival_time = land[1];
        request.setAttribute("Land_Time", searchInfo.getLand_Time());

        String viaport = searchInfo.getViaport_1();
        request.setAttribute("viaport", viaport);

        String flight_type = searchInfo.getType_aircft();

        String flight_from_site = searchInfo.getTkoff_Id();

        String flight_arrival_site = searchInfo.getLand_Id();

        //需改为原始票面价
        String flight_price = searchInfo.getNet_Price_1();

        String[] shui = searchInfo.getMach_oil().split("/");
        String flight_ranyou = shui[1];
        String flight_jijian = shui[0];

        String flight_tpm = searchInfo.getTmp_nm();

        String order_tpm = searchInfo.getTmp_nm();

        String flight_lxr = searchInfo.getCk_name();

        String flight_lxrdh = searchInfo.getCheck_tel();

        String flight_lxryx = searchInfo.getP_email();
        savapassenger(zhengzeUtil, order_id, list, flight_price, flight_ranyou, flight_jijian, flight_position, searchInfo.getKid_price(), order_member_id);
        passengers = passengerDao.findByorder_id(order_id);
        int order_price = 0;
        for (int i = 0; i < passengers.size(); i++) {
            order_price = order_price + passengers.get(i).getPassenger_goxiaofei();
        }
        request.setAttribute("order_price", order_price);

        if (searchInfo.getLianxi() == 1) {
            List<Lianxiren> lianxirens = lianxirenDao.fingThechongfu(order_member_id, flight_lxr, flight_lxrdh);
            if (lianxirens.size() > 0) {
            } else {
                Lianxiren lianxiren = new Lianxiren();
                lianxiren.setLianxiren_id(UUID.randomUUID().toString());
                lianxiren.setLianxiren_name(flight_lxr);
                lianxiren.setLianxiren_phone(flight_lxrdh);
                lianxiren.setLianxiren_email(flight_lxryx);
                lianxiren.setLianxiren_member_id(order_member_id);
                lianxirenDao.save(lianxiren);
            }
        }
        if (searchInfo.getBenren() == 1) {
            saveMyflight(order_id, order_time, order_member_id, flight_company, flight_id, from_cn, arrival_cn, flight_from_date, flight_from_time, flight_arrival_date, flight_arrival_time, flight_type, flight_tpm);
        }
        saveorder(order_id, order_state, order_cztime, order_time, order_member_id, flight_company, flight_id, flight_position,
                flight_from, flight_arrival, flight_from_date, flight_from_time, flight_arrival_date,
                flight_arrival_time, flight_type, flight_from_site, flight_arrival_site, flight_price, flight_ranyou,
                flight_jijian, flight_tpm, order_tpm, String.valueOf(order_price), flight_lxr, flight_lxrdh, flight_lxryx);

        Order order = orderDao.loadByorder_id(order_id);
        List<Passenger> passengerPeople = passengerDao.findByorder_idandpassenger_type(order_id, 0);
        List<Passenger> passengerChild = passengerDao.findByorder_idandpassenger_type(order_id, 1);
        if (passengerPeople.size() > 0) {
            order.setPeoplePNR(getpnr(order, passengerPeople));
        }
        if (passengerChild.size() > 0) {
            order.setChirdPNR(getpnr(order, passengerChild));
        }
        orderDao.update(order);
        orders = orderDao.findByorder_id(order_id);

        return "success";
    }

    private void saveMyflight(String order_id, String order_time, String order_member_id, String flight_company, String flight_id, List<String> from_cn, List<String> arrival_cn, String flight_from_date, String flight_from_time, String flight_arrival_date, String flight_arrival_time, String flight_type, String flight_tpm) {
        Myflight myflight = new Myflight();
        myflight.setMyflight_id(UUID.randomUUID().toString());
        myflight.setMyflight_member_id(order_member_id);
        myflight.setMyflight_order_id(order_id);
        myflight.setMyflight_no(flight_id);
        myflight.setMyflight_from_time(flight_from_time);
        myflight.setMyflight_from_date(flight_from_date);
        myflight.setMyflight_from(from_cn.get(0));
        myflight.setMyflight_arrivate_date(flight_arrival_date);
        myflight.setMyflight_arrivate_time(flight_arrival_time);
        myflight.setMyflight_arrivate(arrival_cn.get(0));
        myflight.setMyflight_company(flight_company);
        myflight.setMyflight_shichang(searchInfo.getFeixingtime());
        myflight.setMyflight_tpm(flight_tpm);
        myflight.setMyflight_type(flight_type);
        myflight.setMyflight_time(order_time);
        myflightDao.save(myflight);
    }

    private String getpnr(Order order, List<Passenger> passengerPeople) throws DocumentException {
        CreatPNR creatPNR = new CreatPNR();
        Document document = DocumentHelper.parseText(creatPNR.CreatPnr(order, passengerPeople));
        Element rootElement = document.getRootElement();
        return rootElement.element("PNR").getText();
    }

    /**
     * 保存乘客基本信息
     *
     * @author 刘健
     */
    private void savapassenger(ZhengzeUtil zhengzeUtil, String order_id, List<String> list, String flight_price, String flight_ranyou, String flight_jijian, String gocw, String childprice, String order_member_id) {
        String[] message = searchInfo.getPasge_info().split(",");
        for (String aMessage : message) {
            Passenger passenger = new Passenger();
            passenger.setPassenger_id(UUID.randomUUID().toString());
            int jijian = Integer.valueOf(flight_jijian);
            int ranyou = Integer.valueOf(flight_ranyou);
            int price = Integer.valueOf(flight_price);

            int messagelen = aMessage.length();
            int a = aMessage.indexOf("0");
            int b = aMessage.indexOf("1");
            int c;
            if (a > b) {
                c = b;
            } else {
                c = a;
            }
            //姓名
            passenger.setPassenger_name(aMessage.substring(0, c));

            //成人儿童
            if (aMessage.substring(c, c + 1).equals("0")) {
                passenger.setPassenger_type(0);
                passenger.setPassenger_gocw(gocw);
                passenger.setPassenger_jijian(jijian);
                passenger.setPassenger_ranyou(ranyou);
            } else {
                passenger.setPassenger_type(1);
                if (gocw.equals("F")) {
                    passenger.setPassenger_gocw("F");
                } else {
                    passenger.setPassenger_gocw("Y");
                }
                passenger.setPassenger_jijian(0);
                jijian = 0;
                if (flight_ranyou.equals("110")) {
                    passenger.setPassenger_ranyou(50);
                    ranyou = 50;
                } else {
                    passenger.setPassenger_ranyou(30);
                    ranyou = 30;
                }
                price = Integer.valueOf(childprice);
            }

            //证件类型
            if (aMessage.substring(c + 1, c + 2).equals("0")) {
                passenger.setPassenger_paperstype(0);
            } else if (aMessage.substring(c + 1, c + 2).equals("1")) {
                passenger.setPassenger_paperstype(1);
            } else {
                passenger.setPassenger_paperstype(4);
            }

            //证件号
            List<String> zhengjianhao = zhengzeUtil.zhengze(aMessage, "[?].*[?]");
            passenger.setPassenger_papernum(zhengjianhao.get(0).substring(1, zhengjianhao.get(0).length() - 1));

            //如果是护照或其他，输出性别和生日
            String xingbieshengri = aMessage.replaceAll(".*[0]*[?]", "");
            if (xingbieshengri.length() > 5) {
                if (xingbieshengri.substring(0, 1).equals("0")) {
                    passenger.setPassenger_sex("男");
                } else {
                    passenger.setPassenger_sex("女");
                }
                passenger.setPassenger_birth(xingbieshengri.substring(1, xingbieshengri.length() - 5));
            }
            int hangyixian = 0;
            //是否选择航意险，选择几份
            if (aMessage.substring(messagelen - 4, messagelen - 3).equals("1")) {
                passenger.setPassenger_ishangyixian(1);
                hangyixian = Integer.valueOf(aMessage.substring(messagelen - 3, messagelen - 2));
                passenger.setPassenger_hangyixian(hangyixian);
            } else {
                passenger.setPassenger_ishangyixian(0);
                hangyixian = 0;
                passenger.setPassenger_hangyixian(hangyixian);
            }
            int yanwuxian = 0;
            //是否选择延误险，选择几份
            if (aMessage.substring(messagelen - 2, messagelen - 1).equals("1")) {
                passenger.setPassenger_isyanwuxian(1);
                yanwuxian = Integer.valueOf(aMessage.substring(messagelen - 1, messagelen));
                passenger.setPassenger_yanwuxian(yanwuxian);
            } else {
                passenger.setPassenger_isyanwuxian(0);
                yanwuxian = 0;
                passenger.setPassenger_yanwuxian(yanwuxian);
            }
            //是否保存为常用乘机人
            if (aMessage.substring(messagelen - 5, messagelen - 4).equals("1")) {
                Traveller traveller = new Traveller();
                traveller.setTraveller_name(passenger.getPassenger_name());
                traveller.setTraveller_type(passenger.getPassenger_type());
                traveller.setTraveller_papers_type(passenger.getPassenger_paperstype());
                if (passenger.getPassenger_paperstype() == 0) {
                    String shenfenzheng = passenger.getPassenger_papernum();
                    traveller.setTraveller_sf_num(shenfenzheng);
                    traveller.setTraveller_birth(shenfenzheng.substring(6, 10) + "-" + shenfenzheng.substring(10, 12) + "-" + shenfenzheng.substring(12, 14));
                    if (Integer.valueOf(shenfenzheng.substring(16, 17)) % 2 == 1) {
                        traveller.setTraveller_sex("男");
                    } else {
                        traveller.setTraveller_sex("女");
                    }
                } else if (passenger.getPassenger_paperstype() == 1) {
                    traveller.setTraveller_hz_num(passenger.getPassenger_papernum());
                    traveller.setTraveller_sex(passenger.getPassenger_sex());
                    traveller.setTraveller_birth(passenger.getPassenger_birth());
                } else if (passenger.getPassenger_paperstype() == 4) {
                    traveller.setTraveller_qt_num(passenger.getPassenger_papernum());
                    traveller.setTraveller_sex(passenger.getPassenger_sex());
                    traveller.setTraveller_birth(passenger.getPassenger_birth());
                }
                traveller.setTraveller_member_id(order_member_id);
                traveller.setTraveller_id(UUID.randomUUID().toString());
                travellerDao.save(traveller);
            }

            passenger.setPassenger_order_id(order_id);
            passenger.setPassenger_price(price);
            passenger.setPassenger_goxiaofei(price + jijian + ranyou + (hangyixian * 30) + (yanwuxian * 20));
            passengerDao.save(passenger);
        }
    }

    /**
     * 保存订单基本信息
     *
     * @author 刘健
     */
    private void saveorder(String order_id, int order_state, String order_cztime, String order_time, String order_member_id,
                           String flight_company, String flight_id, String flight_position, String flight_from,
                           String flight_arrival, String flight_from_date, String flight_from_time,
                           String flight_arrival_date, String flight_arrival_time, String flight_type,
                           String flight_from_site, String flight_arrival_site, String flight_price,
                           String flight_ranyou, String flight_jijian, String flight_tpm, String order_tpm,
                           String order_price, String flight_lxr, String flight_lxrdh, String flight_lxryx) {
        Order order = new Order();
        order.setOrder_id(order_id);
        order.setOrder_member_id(order_member_id);
        order.setOrder_state(order_state);
        order.setOrder_cztime(order_cztime);
        order.setOrder_time(order_time);
        order.setFlight_company(flight_company);
        order.setFlight_id(flight_id);
        order.setFlight_position(flight_position);
        order.setFlight_from(flight_from);
        order.setFlight_arrival(flight_arrival);
        order.setFlight_from_date(flight_from_date);
        order.setFlight_from_time(flight_from_time);
        order.setFlight_arrival_date(flight_arrival_date);
        order.setFlight_arrival_time(flight_arrival_time);
        order.setFlight_type(flight_type);
        order.setFlight_from_site(flight_from_site);
        order.setFlight_arrival_site(flight_arrival_site);
        order.setFlight_price(flight_price);
        order.setFlight_ranyou(flight_ranyou);
        order.setFlight_jijian(flight_jijian);
        order.setFlight_tpm(flight_tpm);
        order.setOrder_tpm(order_tpm);
        order.setOrder_price(order_price);
        order.setFlight_lxr(flight_lxr);
        order.setFlight_lxrdh(flight_lxrdh);
        order.setFlight_lxryx(flight_lxryx);
        order.setChirdPNR("");
        order.setPeoplePNR("");
        orderDao.save(order);
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

}

package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_order")
public class Order {

    private String order_id;
    private int order_state;
    private String order_cztime;
    private String order_time;
    private String order_member_id;
    private String flight_id;
    private String flight_company;
    private String flight_position;
    private String flight_from;
    private String flight_arrival;
    private String flight_from_date;
    private String flight_from_time;
    private String flight_arrival_date;
    private String flight_arrival_time;
    private String flight_type;
    private String flight_from_site;
    private String flight_arrival_site;
    private String flight_pirce;
    private String flight_ranyou;
    private String flight_jijian;
    private String flight_tpm;
    private String back_id;
    private String back_company;
    private String back_position;
    private String back_arrival;
    private String back_from;
    private String back_from_date;
    private String back_from_time;
    private String back_arrival_date;
    private String back_arrival_time;
    private String back_type;
    private String back_from_site;
    private String back_arrival_site;
    private String back_pirce;
    private String back_ranyou;
    private String back_jijian;
    private String back_tpm;
    private int order_tpm;
    private String order_pirce;
    private String flight_lxr;
    private String flight_lxrdh;
//    private String flight_lxryx;
    private String chirdPNR;
    private String peoplePNR;
    private String tuipiaomessage;
    private String tuipiao_pirce;
    private String order_caozuoren;
    private String order_pomp_id;
    private int order_pomp_jifenNum;
    private String order_xdrid;
    private int order_shgrant;
    private String order_isgw;
    private int payOrderType;
    private String payWork;
    private int order_issuoding;
    private String order_suodingrenId;
    private int order_jifenNum;

    @Id
    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public int getOrder_state() {
        return order_state;
    }

    public void setOrder_state(int order_state) {
        this.order_state = order_state;
    }

    public String getOrder_cztime() {
        return order_cztime;
    }

    public void setOrder_cztime(String order_cztime) {
        this.order_cztime = order_cztime;
    }

    public String getOrder_time() {
        return order_time;
    }

    public void setOrder_time(String order_time) {
        this.order_time = order_time;
    }

    public String getOrder_member_id() {
        return order_member_id;
    }

    public void setOrder_member_id(String order_member_id) {
        this.order_member_id = order_member_id;
    }

    public String getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(String flight_id) {
        this.flight_id = flight_id;
    }

    public String getFlight_company() {
        return flight_company;
    }

    public void setFlight_company(String flight_company) {
        this.flight_company = flight_company;
    }

    public String getFlight_position() {
        return flight_position;
    }

    public void setFlight_position(String flight_position) {
        this.flight_position = flight_position;
    }

    public String getFlight_from() {
        return flight_from;
    }

    public void setFlight_from(String flight_from) {
        this.flight_from = flight_from;
    }

    public String getFlight_arrival() {
        return flight_arrival;
    }

    public void setFlight_arrival(String flight_arrival) {
        this.flight_arrival = flight_arrival;
    }

    public String getFlight_from_date() {
        return flight_from_date;
    }

    public void setFlight_from_date(String flight_from_date) {
        this.flight_from_date = flight_from_date;
    }

    public String getFlight_from_time() {
        return flight_from_time;
    }

    public void setFlight_from_time(String flight_from_time) {
        this.flight_from_time = flight_from_time;
    }

    public String getFlight_arrival_date() {
        return flight_arrival_date;
    }

    public void setFlight_arrival_date(String flight_arrival_date) {
        this.flight_arrival_date = flight_arrival_date;
    }

    public String getFlight_arrival_time() {
        return flight_arrival_time;
    }

    public void setFlight_arrival_time(String flight_arrival_time) {
        this.flight_arrival_time = flight_arrival_time;
    }

    public String getFlight_type() {
        return flight_type;
    }

    public void setFlight_type(String flight_type) {
        this.flight_type = flight_type;
    }

    public String getFlight_from_site() {
        return flight_from_site;
    }

    public void setFlight_from_site(String flight_from_site) {
        this.flight_from_site = flight_from_site;
    }

    public String getFlight_arrival_site() {
        return flight_arrival_site;
    }

    public void setFlight_arrival_site(String flight_arrival_site) {
        this.flight_arrival_site = flight_arrival_site;
    }

    public String getFlight_pirce() {
        return flight_pirce;
    }

    public void setFlight_pirce(String flight_pirce) {
        this.flight_pirce = flight_pirce;
    }

    public String getFlight_ranyou() {
        return flight_ranyou;
    }

    public void setFlight_ranyou(String flight_ranyou) {
        this.flight_ranyou = flight_ranyou;
    }

    public String getFlight_jijian() {
        return flight_jijian;
    }

    public void setFlight_jijian(String flight_jijian) {
        this.flight_jijian = flight_jijian;
    }

    public String getFlight_tpm() {
        return flight_tpm;
    }

    public void setFlight_tpm(String flight_tpm) {
        this.flight_tpm = flight_tpm;
    }

    public String getBack_id() {
        return back_id;
    }

    public void setBack_id(String back_id) {
        this.back_id = back_id;
    }

    public String getBack_company() {
        return back_company;
    }

    public void setBack_company(String back_company) {
        this.back_company = back_company;
    }

    public String getBack_position() {
        return back_position;
    }

    public void setBack_position(String back_position) {
        this.back_position = back_position;
    }

    public String getBack_arrival() {
        return back_arrival;
    }

    public void setBack_arrival(String back_arrival) {
        this.back_arrival = back_arrival;
    }

    public String getBack_from() {
        return back_from;
    }

    public void setBack_from(String back_from) {
        this.back_from = back_from;
    }

    public String getBack_from_date() {
        return back_from_date;
    }

    public void setBack_from_date(String back_from_date) {
        this.back_from_date = back_from_date;
    }

    public String getBack_from_time() {
        return back_from_time;
    }

    public void setBack_from_time(String back_from_time) {
        this.back_from_time = back_from_time;
    }

    public String getBack_arrival_date() {
        return back_arrival_date;
    }

    public void setBack_arrival_date(String back_arrival_date) {
        this.back_arrival_date = back_arrival_date;
    }

    public String getBack_arrival_time() {
        return back_arrival_time;
    }

    public void setBack_arrival_time(String back_arrival_time) {
        this.back_arrival_time = back_arrival_time;
    }

    public String getBack_type() {
        return back_type;
    }

    public void setBack_type(String back_type) {
        this.back_type = back_type;
    }

    public String getBack_from_site() {
        return back_from_site;
    }

    public void setBack_from_site(String back_from_site) {
        this.back_from_site = back_from_site;
    }

    public String getBack_arrival_site() {
        return back_arrival_site;
    }

    public void setBack_arrival_site(String back_arrival_site) {
        this.back_arrival_site = back_arrival_site;
    }

    public String getBack_pirce() {
        return back_pirce;
    }

    public void setBack_pirce(String back_pirce) {
        this.back_pirce = back_pirce;
    }

    public String getBack_ranyou() {
        return back_ranyou;
    }

    public void setBack_ranyou(String back_ranyou) {
        this.back_ranyou = back_ranyou;
    }

    public String getBack_jijian() {
        return back_jijian;
    }

    public void setBack_jijian(String back_jijian) {
        this.back_jijian = back_jijian;
    }

    public String getBack_tpm() {
        return back_tpm;
    }

    public void setBack_tpm(String back_tpm) {
        this.back_tpm = back_tpm;
    }

    public int getOrder_tpm() {
        return order_tpm;
    }

    public void setOrder_tpm(int order_tpm) {
        this.order_tpm = order_tpm;
    }

    public String getOrder_pirce() {
        return order_pirce;
    }

    public void setOrder_pirce(String order_pirce) {
        this.order_pirce = order_pirce;
    }

    public String getFlight_lxr() {
        return flight_lxr;
    }

    public void setFlight_lxr(String flight_lxr) {
        this.flight_lxr = flight_lxr;
    }

    public String getFlight_lxrdh() {
        return flight_lxrdh;
    }

    public void setFlight_lxrdh(String flight_lxrdh) {
        this.flight_lxrdh = flight_lxrdh;
    }

    public String getChirdPNR() {
        return chirdPNR;
    }

    public void setChirdPNR(String chirdPNR) {
        this.chirdPNR = chirdPNR;
    }

    public String getPeoplePNR() {
        return peoplePNR;
    }

    public void setPeoplePNR(String peoplePNR) {
        this.peoplePNR = peoplePNR;
    }

    public String getTuipiaomessage() {
        return tuipiaomessage;
    }

    public void setTuipiaomessage(String tuipiaomessage) {
        this.tuipiaomessage = tuipiaomessage;
    }

    public String getTuipiao_pirce() {
        return tuipiao_pirce;
    }

    public void setTuipiao_pirce(String tuipiao_pirce) {
        this.tuipiao_pirce = tuipiao_pirce;
    }

    public String getOrder_caozuoren() {
        return order_caozuoren;
    }

    public void setOrder_caozuoren(String order_caozuoren) {
        this.order_caozuoren = order_caozuoren;
    }

    public String getOrder_pomp_id() {
        return order_pomp_id;
    }

    public void setOrder_pomp_id(String order_pomp_id) {
        this.order_pomp_id = order_pomp_id;
    }

    public int getOrder_pomp_jifenNum() {
        return order_pomp_jifenNum;
    }

    public void setOrder_pomp_jifenNum(int order_pomp_jifenNum) {
        this.order_pomp_jifenNum = order_pomp_jifenNum;
    }

    public String getOrder_xdrid() {
        return order_xdrid;
    }

    public void setOrder_xdrid(String order_xdrid) {
        this.order_xdrid = order_xdrid;
    }

    public int getOrder_shgrant() {
        return order_shgrant;
    }

    public void setOrder_shgrant(int order_shgrant) {
        this.order_shgrant = order_shgrant;
    }

    public String getOrder_isgw() {
        return order_isgw;
    }

    public void setOrder_isgw(String order_isgw) {
        this.order_isgw = order_isgw;
    }

    public int getPayOrderType() {
        return payOrderType;
    }

    public void setPayOrderType(int payOrderType) {
        this.payOrderType = payOrderType;
    }

    public String getPayWork() {
        return payWork;
    }

    public void setPayWork(String payWork) {
        this.payWork = payWork;
    }

    public int getOrder_issuoding() {
        return order_issuoding;
    }

    public void setOrder_issuoding(int order_issuoding) {
        this.order_issuoding = order_issuoding;
    }

    public String getOrder_suodingrenId() {
        return order_suodingrenId;
    }

    public void setOrder_suodingrenId(String order_suodingrenId) {
        this.order_suodingrenId = order_suodingrenId;
    }

    public int getOrder_jifenNum() {
        return order_jifenNum;
    }

    public void setOrder_jifenNum(int order_jifenNum) {
        this.order_jifenNum = order_jifenNum;
    }
}

package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_cxzc")
public class Cuxiaozhengce {
    private String cxzc_id;
    private String cxzc_startime;
    private String cxzc_endtime;
    private String cxzc_chupiaostartime;
    private String cxzc_chupiaoendtime;
    private String cxzc_from;
    private String cxzc_arrival;
    private String cxzc_company;
    private String cxzc_flight_id;
    private String cxzc_noflight_id;
    private String cxzc_cangwei;
    private int cxzc_fandian;
    private int cxzc_zliuqian;
    private int cxzc_fliuqian;
    private String cxzc_isstar;
    private String cxzc_beizhu;
    private String cxzc_time;
    private String cxzc_tianjiaren;
    private int cxzc_hybs;
    private String cxzc_meeting_id;
    private String cxzc_tuipiao;
    private String cxzc_gaiqian;
    private String cxzc_qianzhuan;

    @Id
    public String getCxzc_id() {
        return cxzc_id;
    }

    public void setCxzc_id(String cxzc_id) {
        this.cxzc_id = cxzc_id;
    }

    public String getCxzc_startime() {
        return cxzc_startime;
    }

    public void setCxzc_startime(String cxzc_startime) {
        this.cxzc_startime = cxzc_startime;
    }

    public String getCxzc_endtime() {
        return cxzc_endtime;
    }

    public void setCxzc_endtime(String cxzc_endtime) {
        this.cxzc_endtime = cxzc_endtime;
    }

    public String getCxzc_chupiaostartime() {
        return cxzc_chupiaostartime;
    }

    public void setCxzc_chupiaostartime(String cxzc_chupiaostartime) {
        this.cxzc_chupiaostartime = cxzc_chupiaostartime;
    }

    public String getCxzc_chupiaoendtime() {
        return cxzc_chupiaoendtime;
    }

    public void setCxzc_chupiaoendtime(String cxzc_chupiaoendtime) {
        this.cxzc_chupiaoendtime = cxzc_chupiaoendtime;
    }

    public String getCxzc_from() {
        return cxzc_from;
    }

    public void setCxzc_from(String cxzc_from) {
        this.cxzc_from = cxzc_from;
    }

    public String getCxzc_arrival() {
        return cxzc_arrival;
    }

    public void setCxzc_arrival(String cxzc_arrival) {
        this.cxzc_arrival = cxzc_arrival;
    }

    public String getCxzc_company() {
        return cxzc_company;
    }

    public void setCxzc_company(String cxzc_company) {
        this.cxzc_company = cxzc_company;
    }

    public String getCxzc_flight_id() {
        return cxzc_flight_id;
    }

    public void setCxzc_flight_id(String cxzc_flight_id) {
        this.cxzc_flight_id = cxzc_flight_id;
    }

    public String getCxzc_noflight_id() {
        return cxzc_noflight_id;
    }

    public void setCxzc_noflight_id(String cxzc_noflight_id) {
        this.cxzc_noflight_id = cxzc_noflight_id;
    }

    public String getCxzc_cangwei() {
        return cxzc_cangwei;
    }

    public void setCxzc_cangwei(String cxzc_cangwei) {
        this.cxzc_cangwei = cxzc_cangwei;
    }

    public int getCxzc_fandian() {
        return cxzc_fandian;
    }

    public void setCxzc_fandian(int cxzc_fandian) {
        this.cxzc_fandian = cxzc_fandian;
    }

    public int getCxzc_zliuqian() {
        return cxzc_zliuqian;
    }

    public void setCxzc_zliuqian(int cxzc_zliuqian) {
        this.cxzc_zliuqian = cxzc_zliuqian;
    }

    public int getCxzc_fliuqian() {
        return cxzc_fliuqian;
    }

    public void setCxzc_fliuqian(int cxzc_fliuqian) {
        this.cxzc_fliuqian = cxzc_fliuqian;
    }

    public String getCxzc_isstar() {
        return cxzc_isstar;
    }

    public void setCxzc_isstar(String cxzc_isstar) {
        this.cxzc_isstar = cxzc_isstar;
    }

    public String getCxzc_beizhu() {
        return cxzc_beizhu;
    }

    public void setCxzc_beizhu(String cxzc_beizhu) {
        this.cxzc_beizhu = cxzc_beizhu;
    }

    public String getCxzc_time() {
        return cxzc_time;
    }

    public void setCxzc_time(String cxzc_time) {
        this.cxzc_time = cxzc_time;
    }

    public String getCxzc_tianjiaren() {
        return cxzc_tianjiaren;
    }

    public void setCxzc_tianjiaren(String cxzc_tianjiaren) {
        this.cxzc_tianjiaren = cxzc_tianjiaren;
    }

    public int getCxzc_hybs() {
        return cxzc_hybs;
    }

    public void setCxzc_hybs(int cxzc_hybs) {
        this.cxzc_hybs = cxzc_hybs;
    }

    public String getCxzc_meeting_id() {
        return cxzc_meeting_id;
    }

    public void setCxzc_meeting_id(String cxzc_meeting_id) {
        this.cxzc_meeting_id = cxzc_meeting_id;
    }

    public String getCxzc_tuipiao() {
        return cxzc_tuipiao;
    }

    public void setCxzc_tuipiao(String cxzc_tuipiao) {
        this.cxzc_tuipiao = cxzc_tuipiao;
    }

    public String getCxzc_gaiqian() {
        return cxzc_gaiqian;
    }

    public void setCxzc_gaiqian(String cxzc_gaiqian) {
        this.cxzc_gaiqian = cxzc_gaiqian;
    }

    public String getCxzc_qianzhuan() {
        return cxzc_qianzhuan;
    }

    public void setCxzc_qianzhuan(String cxzc_qianzhuan) {
        this.cxzc_qianzhuan = cxzc_qianzhuan;
    }
}

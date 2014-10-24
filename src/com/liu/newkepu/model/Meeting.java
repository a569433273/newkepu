package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_meeting")
public class Meeting {
    private String meeting_id;
    private String meeting_zzdw;
    private String meeting_name;
    private String meeting_city;
    private String meeting_hotel;
    private String meeting_hotelphone;
    private String meeting_hoteladdress;
    private int meeting_count;
    private String meeting_bddate;
    private String meeting_cjdate;
    private int meeting_daycount;
    private String meeting_gonggao;
    private String meeting_member_id;
    private String meeting_kaihuidate;
    private String meeting_jieshudate;
    private int meeting_ishytz;
    private int meeting_price;
    private int meeting_isdel;

    @Id
    public String getMeeting_id() {
        return meeting_id;
    }

    public void setMeeting_id(String meeting_id) {
        this.meeting_id = meeting_id;
    }

    public String getMeeting_zzdw() {
        return meeting_zzdw;
    }

    public void setMeeting_zzdw(String meeting_zzdw) {
        this.meeting_zzdw = meeting_zzdw;
    }

    public String getMeeting_name() {
        return meeting_name;
    }

    public void setMeeting_name(String meeting_name) {
        this.meeting_name = meeting_name;
    }

    public String getMeeting_city() {
        return meeting_city;
    }

    public void setMeeting_city(String meeting_city) {
        this.meeting_city = meeting_city;
    }

    public String getMeeting_hotel() {
        return meeting_hotel;
    }

    public void setMeeting_hotel(String meeting_hotel) {
        this.meeting_hotel = meeting_hotel;
    }

    public String getMeeting_hotelphone() {
        return meeting_hotelphone;
    }

    public void setMeeting_hotelphone(String meeting_hotelphone) {
        this.meeting_hotelphone = meeting_hotelphone;
    }

    public String getMeeting_hoteladdress() {
        return meeting_hoteladdress;
    }

    public void setMeeting_hoteladdress(String meeting_hoteladdress) {
        this.meeting_hoteladdress = meeting_hoteladdress;
    }

    public int getMeeting_count() {
        return meeting_count;
    }

    public void setMeeting_count(int meeting_count) {
        this.meeting_count = meeting_count;
    }

    public String getMeeting_bddate() {
        return meeting_bddate;
    }

    public void setMeeting_bddate(String meeting_bddate) {
        this.meeting_bddate = meeting_bddate;
    }

    public String getMeeting_cjdate() {
        return meeting_cjdate;
    }

    public void setMeeting_cjdate(String meeting_cjdate) {
        this.meeting_cjdate = meeting_cjdate;
    }

    public int getMeeting_daycount() {
        return meeting_daycount;
    }

    public void setMeeting_daycount(int meeting_daycount) {
        this.meeting_daycount = meeting_daycount;
    }

    public String getMeeting_gonggao() {
        return meeting_gonggao;
    }

    public void setMeeting_gonggao(String meeting_gonggao) {
        this.meeting_gonggao = meeting_gonggao;
    }

    public String getMeeting_member_id() {
        return meeting_member_id;
    }

    public void setMeeting_member_id(String meeting_member_id) {
        this.meeting_member_id = meeting_member_id;
    }

    public String getMeeting_kaihuidate() {
        return meeting_kaihuidate;
    }

    public void setMeeting_kaihuidate(String meeting_kaihuidate) {
        this.meeting_kaihuidate = meeting_kaihuidate;
    }

    public String getMeeting_jieshudate() {
        return meeting_jieshudate;
    }

    public void setMeeting_jieshudate(String meeting_jieshudate) {
        this.meeting_jieshudate = meeting_jieshudate;
    }

    public int getMeeting_ishytz() {
        return meeting_ishytz;
    }

    public void setMeeting_ishytz(int meeting_ishytz) {
        this.meeting_ishytz = meeting_ishytz;
    }

    public int getMeeting_price() {
        return meeting_price;
    }

    public void setMeeting_price(int meeting_price) {
        this.meeting_price = meeting_price;
    }

    public int getMeeting_isdel() {
        return meeting_isdel;
    }

    public void setMeeting_isdel(int meeting_isdel) {
        this.meeting_isdel = meeting_isdel;
    }
}

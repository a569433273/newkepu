package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_myflight")
public class Myflight {
    private String myflight_id;
    private String myflight_member_id;
    private String myflight_order_id;
    private String myflight_no;
    private String myflight_from_time;
    private String myflight_from_date;
    private String myflight_from;
    private String myflight_arrivate_date;
    private String myflight_arrivate_time;
    private String myflight_arrivate;
    private String myflight_company;
    private String myflight_shichang;
    private String myflight_tpm;
    private String myflight_type;
    private String myflight_time;
    private int myflight_ispay;

    @Id
    public String getMyflight_id() {
        return myflight_id;
    }

    public void setMyflight_id(String myflight_id) {
        this.myflight_id = myflight_id;
    }

    public String getMyflight_member_id() {
        return myflight_member_id;
    }

    public void setMyflight_member_id(String myflight_member_id) {
        this.myflight_member_id = myflight_member_id;
    }

    public String getMyflight_order_id() {
        return myflight_order_id;
    }

    public void setMyflight_order_id(String myflight_order_id) {
        this.myflight_order_id = myflight_order_id;
    }

    public String getMyflight_no() {
        return myflight_no;
    }

    public void setMyflight_no(String myflight_no) {
        this.myflight_no = myflight_no;
    }

    public String getMyflight_from_time() {
        return myflight_from_time;
    }

    public void setMyflight_from_time(String myflight_from_time) {
        this.myflight_from_time = myflight_from_time;
    }

    public String getMyflight_from_date() {
        return myflight_from_date;
    }

    public void setMyflight_from_date(String myflight_from_date) {
        this.myflight_from_date = myflight_from_date;
    }

    public String getMyflight_from() {
        return myflight_from;
    }

    public void setMyflight_from(String myflight_from) {
        this.myflight_from = myflight_from;
    }

    public String getMyflight_arrivate_date() {
        return myflight_arrivate_date;
    }

    public void setMyflight_arrivate_date(String myflight_arrivate_date) {
        this.myflight_arrivate_date = myflight_arrivate_date;
    }

    public String getMyflight_arrivate_time() {
        return myflight_arrivate_time;
    }

    public void setMyflight_arrivate_time(String myflight_arrivate_time) {
        this.myflight_arrivate_time = myflight_arrivate_time;
    }

    public String getMyflight_arrivate() {
        return myflight_arrivate;
    }

    public void setMyflight_arrivate(String myflight_arrivate) {
        this.myflight_arrivate = myflight_arrivate;
    }

    public String getMyflight_company() {
        return myflight_company;
    }

    public void setMyflight_company(String myflight_company) {
        this.myflight_company = myflight_company;
    }

    public String getMyflight_shichang() {
        return myflight_shichang;
    }

    public void setMyflight_shichang(String myflight_shichang) {
        this.myflight_shichang = myflight_shichang;
    }

    public String getMyflight_tpm() {
        return myflight_tpm;
    }

    public void setMyflight_tpm(String myflight_tpm) {
        this.myflight_tpm = myflight_tpm;
    }

    public String getMyflight_type() {
        return myflight_type;
    }

    public void setMyflight_type(String myflight_type) {
        this.myflight_type = myflight_type;
    }

    public String getMyflight_time() {
        return myflight_time;
    }

    public void setMyflight_time(String myflight_time) {
        this.myflight_time = myflight_time;
    }

    public int getMyflight_ispay() {
        return myflight_ispay;
    }

    public void setMyflight_ispay(int myflight_ispay) {
        this.myflight_ispay = myflight_ispay;
    }
}

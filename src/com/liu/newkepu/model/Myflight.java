package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_myflight")
public class Myflight {
    private String Myflight_id;
    private String Myflight_member_id;
    private String Myflight_order_id;
    private String Myflight_no;
    private String Myflight_from_time;
    private String Myflight_from_date;
    private String Myflight_from;
    private String Myflight_arrivate_date;
    private String Myflight_arrivate_time;
    private String Myflight_arrivate;
    private String Myflight_company;
    private String Myflight_shichang;
    private String Myflight_tpm;
    private String Myflight_type;
    private String Myflight_time;
    private String Myflight_ispay;

    @Id
    public String getMyflight_id() {
        return Myflight_id;
    }

    public void setMyflight_id(String myflight_id) {
        Myflight_id = myflight_id;
    }

    public String getMyflight_member_id() {
        return Myflight_member_id;
    }

    public void setMyflight_member_id(String myflight_member_id) {
        Myflight_member_id = myflight_member_id;
    }

    public String getMyflight_order_id() {
        return Myflight_order_id;
    }

    public void setMyflight_order_id(String myflight_order_id) {
        Myflight_order_id = myflight_order_id;
    }

    public String getMyflight_no() {
        return Myflight_no;
    }

    public void setMyflight_no(String myflight_no) {
        Myflight_no = myflight_no;
    }

    public String getMyflight_from_time() {
        return Myflight_from_time;
    }

    public void setMyflight_from_time(String myflight_from_time) {
        Myflight_from_time = myflight_from_time;
    }

    public String getMyflight_from_date() {
        return Myflight_from_date;
    }

    public void setMyflight_from_date(String myflight_from_date) {
        Myflight_from_date = myflight_from_date;
    }

    public String getMyflight_from() {
        return Myflight_from;
    }

    public void setMyflight_from(String myflight_from) {
        Myflight_from = myflight_from;
    }

    public String getMyflight_arrivate_date() {
        return Myflight_arrivate_date;
    }

    public void setMyflight_arrivate_date(String myflight_arrivate_date) {
        Myflight_arrivate_date = myflight_arrivate_date;
    }

    public String getMyflight_arrivate_time() {
        return Myflight_arrivate_time;
    }

    public void setMyflight_arrivate_time(String myflight_arrivate_time) {
        Myflight_arrivate_time = myflight_arrivate_time;
    }

    public String getMyflight_arrivate() {
        return Myflight_arrivate;
    }

    public void setMyflight_arrivate(String myflight_arrivate) {
        Myflight_arrivate = myflight_arrivate;
    }

    public String getMyflight_company() {
        return Myflight_company;
    }

    public void setMyflight_company(String myflight_company) {
        Myflight_company = myflight_company;
    }

    public String getMyflight_shichang() {
        return Myflight_shichang;
    }

    public void setMyflight_shichang(String myflight_shichang) {
        Myflight_shichang = myflight_shichang;
    }

    public String getMyflight_tpm() {
        return Myflight_tpm;
    }

    public void setMyflight_tpm(String myflight_tpm) {
        Myflight_tpm = myflight_tpm;
    }

    public String getMyflight_type() {
        return Myflight_type;
    }

    public void setMyflight_type(String myflight_type) {
        Myflight_type = myflight_type;
    }

    public String getMyflight_time() {
        return Myflight_time;
    }

    public void setMyflight_time(String myflight_time) {
        Myflight_time = myflight_time;
    }

    public String getMyflight_ispay() {
        return Myflight_ispay;
    }

    public void setMyflight_ispay(String myflight_ispay) {
        Myflight_ispay = myflight_ispay;
    }
}

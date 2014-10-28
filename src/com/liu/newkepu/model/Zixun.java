package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_zixun")
public class Zixun {
    private String zixun_id;
    private String zixun_biaoti;
    private String zixun_neirong;
    private String zixun_date;
    private int zixun_type;
    private String zixun_meeting_id;
    private int zixun_isdel;

    @Id
    public String getZixun_id() {
        return zixun_id;
    }

    public void setZixun_id(String zixun_id) {
        this.zixun_id = zixun_id;
    }

    public String getZixun_biaoti() {
        return zixun_biaoti;
    }

    public void setZixun_biaoti(String zixun_biaoti) {
        this.zixun_biaoti = zixun_biaoti;
    }

    public String getZixun_neirong() {
        return zixun_neirong;
    }

    public void setZixun_neirong(String zixun_neirong) {
        this.zixun_neirong = zixun_neirong;
    }

    public String getZixun_date() {
        return zixun_date;
    }

    public void setZixun_date(String zixun_date) {
        this.zixun_date = zixun_date;
    }

    public int getZixun_type() {
        return zixun_type;
    }

    public void setZixun_type(int zixun_type) {
        this.zixun_type = zixun_type;
    }

    public String getZixun_meeting_id() {
        return zixun_meeting_id;
    }

    public void setZixun_meeting_id(String zixun_meeting_id) {
        this.zixun_meeting_id = zixun_meeting_id;
    }

    public int getZixun_isdel() {
        return zixun_isdel;
    }

    public void setZixun_isdel(int zixun_isdel) {
        this.zixun_isdel = zixun_isdel;
    }
}

package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_hytp")
public class Huiyitupian {
    private String hytp_id;
    private String hytp_meeting_id;
    private String hytp_url;
    private String hytp_iosurl;
    private String hytp_andurl;
    private String hytp_weburl;
    private String hytp_time;
    private String hytp_tpname;
    private int hytp_isdel;

    @Id
    public String getHytp_id() {
        return hytp_id;
    }

    public void setHytp_id(String hytp_id) {
        this.hytp_id = hytp_id;
    }

    public String getHytp_meeting_id() {
        return hytp_meeting_id;
    }

    public void setHytp_meeting_id(String hytp_meeting_id) {
        this.hytp_meeting_id = hytp_meeting_id;
    }

    public String getHytp_url() {
        return hytp_url;
    }

    public void setHytp_url(String hytp_url) {
        this.hytp_url = hytp_url;
    }

    public String getHytp_iosurl() {
        return hytp_iosurl;
    }

    public void setHytp_iosurl(String hytp_iosurl) {
        this.hytp_iosurl = hytp_iosurl;
    }

    public String getHytp_andurl() {
        return hytp_andurl;
    }

    public void setHytp_andurl(String hytp_andurl) {
        this.hytp_andurl = hytp_andurl;
    }

    public String getHytp_weburl() {
        return hytp_weburl;
    }

    public void setHytp_weburl(String hytp_weburl) {
        this.hytp_weburl = hytp_weburl;
    }

    public String getHytp_time() {
        return hytp_time;
    }

    public void setHytp_time(String hytp_time) {
        this.hytp_time = hytp_time;
    }

    public String getHytp_tpname() {
        return hytp_tpname;
    }

    public void setHytp_tpname(String hytp_tpname) {
        this.hytp_tpname = hytp_tpname;
    }

    public int getHytp_isdel() {
        return hytp_isdel;
    }

    public void setHytp_isdel(int hytp_isdel) {
        this.hytp_isdel = hytp_isdel;
    }
}

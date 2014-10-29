package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_hyjjtz")
public class Huiyijinjitongzhi {
    private String hyjjtz_id;
    private String hyjjtz_nr;
    private String hyjjtz_time;
    private String hyjjtz_meeting_id;
    private int hyjjtz_isdel;

    @Id
    public String getHyjjtz_id() {
        return hyjjtz_id;
    }

    public void setHyjjtz_id(String hyjjtz_id) {
        this.hyjjtz_id = hyjjtz_id;
    }

    public String getHyjjtz_nr() {
        return hyjjtz_nr;
    }

    public void setHyjjtz_nr(String hyjjtz_nr) {
        this.hyjjtz_nr = hyjjtz_nr;
    }

    public String getHyjjtz_time() {
        return hyjjtz_time;
    }

    public void setHyjjtz_time(String hyjjtz_time) {
        this.hyjjtz_time = hyjjtz_time;
    }

    public String getHyjjtz_meeting_id() {
        return hyjjtz_meeting_id;
    }

    public void setHyjjtz_meeting_id(String hyjjtz_meeting_id) {
        this.hyjjtz_meeting_id = hyjjtz_meeting_id;
    }

    public int getHyjjtz_isdel() {
        return hyjjtz_isdel;
    }

    public void setHyjjtz_isdel(int hyjjtz_isdel) {
        this.hyjjtz_isdel = hyjjtz_isdel;
    }
}
